import {
  useEffect,
  useRef,
  useState,
  type ImgHTMLAttributes,
} from "react";
import { makeStyles, mergeClasses } from "@fluentui/react-components";

type Priority = "high" | "low" | "auto";

export interface LazyImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "loading" | "src"> {
  src: string;
  alt: string;
  priority?: Priority;
  /**
   * When true, the image is loaded immediately (above-the-fold).
   * When false (default), the image is loaded only when it scrolls
   * into the viewport (or close to it).
   */
  eager?: boolean;
  /**
   * Pixel margin around the viewport used to start preloading
   * before the image is actually visible. Defaults to 300px.
   */
  rootMargin?: string;
  /**
   * Fallback URL used if `src` (and srcSet) fails to load. Useful
   * when `src` is a CDN-proxied URL whose origin can be served
   * directly as a fallback.
   */
  fallbackSrc?: string;
  /**
   * Optional tiny blurred placeholder URL shown as the wrapper's
   * background while the full image is still loading. Renders
   * almost instantly so cards never look empty.
   */
  placeholderSrc?: string;
  className?: string;
  /** Optional skeleton class applied to the wrapping span. */
  wrapperClassName?: string;
}

const useStyles = makeStyles({
  wrapper: {
    position: "relative",
    display: "block",
    width: "100%",
    overflow: "hidden",
    backgroundColor: "var(--maq-surface-cream)",
    backgroundImage:
      "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.04) 50%, rgba(0,0,0,0) 100%)",
    backgroundSize: "200% 100%",
    backgroundRepeat: "no-repeat",
    animationName: {
      "0%": { backgroundPosition: "200% 0" },
      "100%": { backgroundPosition: "-200% 0" },
    },
    animationDuration: "1.4s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  },
  loaded: {
    animationName: "none",
    backgroundImage: "none",
  },
  img: {
    display: "block",
    width: "100%",
    height: "100%",
    opacity: 0,
    transition: "opacity 240ms ease-in",
  },
  imgVisible: {
    opacity: 1,
  },
});

/**
 * Image with IntersectionObserver-based lazy loading, async decoding,
 * a skeleton shimmer, and graceful fade-in. Used to keep card grids
 * (e.g. Insights case studies) responsive even when many large remote
 * images are present off-screen.
 */
export function LazyImage({
  src,
  alt,
  priority = "auto",
  eager = false,
  rootMargin = "600px",
  fallbackSrc,
  placeholderSrc,
  className,
  wrapperClassName,
  width,
  height,
  ...rest
}: LazyImageProps) {
  const s = useStyles();
  const wrapRef = useRef<HTMLSpanElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(eager);
  const [loaded, setLoaded] = useState(false);
  const [didFallback, setDidFallback] = useState(false);

  useEffect(() => {
    if (eager || shouldLoad) return;
    const node = wrapRef.current;
    if (!node) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
            break;
          }
        }
      },
      { rootMargin, threshold: 0.01 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [eager, rootMargin, shouldLoad]);

  // Reset state when src changes (e.g., after filtering).
  useEffect(() => {
    setLoaded(false);
    setDidFallback(false);
    if (!eager) setShouldLoad(false);
  }, [src, eager]);

  const effectiveSrc = didFallback && fallbackSrc ? fallbackSrc : src;
  const effectiveSrcSet = didFallback ? undefined : rest.srcSet;
  const effectiveSizes = didFallback ? undefined : rest.sizes;

  return (
    <span
      ref={wrapRef}
      className={mergeClasses(s.wrapper, loaded && s.loaded, wrapperClassName)}
      style={
        placeholderSrc
          ? {
              backgroundImage: `url("${placeholderSrc}")`,
              backgroundSize: "cover",
              backgroundPosition: "left center",
              backgroundRepeat: "no-repeat",
              filter: loaded ? "none" : undefined,
            }
          : undefined
      }
      aria-hidden={false}
    >
      {shouldLoad && (
        <img
          {...rest}
          src={effectiveSrc}
          srcSet={effectiveSrcSet}
          sizes={effectiveSizes}
          alt={alt}
          width={width}
          height={height}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          // React 18.3+ supports fetchPriority; cast for older typings.
          {...({ fetchpriority: priority } as Record<string, string>)}
          onLoad={(e) => {
            setLoaded(true);
            rest.onLoad?.(e);
          }}
          onError={(e) => {
            // If the proxied URL fails, fall back to the original URL
            // (without srcSet) once before giving up.
            if (!didFallback && fallbackSrc && fallbackSrc !== src) {
              setDidFallback(true);
              return;
            }
            setLoaded(true);
            rest.onError?.(e);
          }}
          className={mergeClasses(s.img, loaded && s.imgVisible, className)}
        />
      )}
    </span>
  );
}
