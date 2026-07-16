// Long-form content sourced from the existing maqsoftware.com Marketplace pages
// for each Power BI custom visual. Keyed by the same slug used by the visual
// detail route (slug from `visualGuideSlug(name)` in `data/insights.ts`).

export interface VisualGuideContent {
  slug: string;
  productName: string;
  tagline: string;
  description: string;
  benefitsLabel: string;
  benefits: string[];
  useCasesLabel: string;
  useCases: string[];
  whatsNew?: { version: string; items: string[] };
  appSourceProductId: string;
  /**
   * Power BI publish-to-web URL hosting the multi-page feature walkthrough
   * (mirrors the embedded slideshow on maqsoftware.com Marketplace pages).
   */
  pbiReportUrl?: string;
}

export const visualGuideContent: VisualGuideContent[] = [
  {
    slug: "histogram-with-points",
    productName: "Histogram With Points by MAQ Software",
    tagline:
      "Displays density of distribution using bars along with actual values represented by points",
    description:
      "Traditional histogram charts illustrate the density of distributed data, but normally do not showcase specific values. Histogram with Points by MAQ Software addresses this issue by combining a histogram chart with points that show the actual data for each range. Easily track where data clusters (points) are across your data distribution (bars) to identify patterns, trends, and areas of opportunity.",
    benefitsLabel: "Key benefits",
    benefits: [
      "Configurable points and histogram bars",
      "Configurable X-axis, Y-axis-right, or Y-axis-left",
      "Configurable gridlines",
      "Able to show/hide all the elements listed above",
    ],
    useCasesLabel: "Use cases",
    useCases: [
      "Research: Find homogenized populations of customers",
      "Marketing: Identify vital demographic clusters for promotional campaigns",
      "Admin: Display employee salary distribution and salary variation for individual employees",
    ],
    appSourceProductId: "WA104381032",
    pbiReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiZDZiYTBhZTItYTRhMy00NzFiLTgwMDQtODYwOGY0ZWM1Y2FlIiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
  {
    slug: "gantt-chart",
    productName: "Gantt Chart by MAQ Software",
    tagline: "Easily manage projects with an enhanced Gantt chart | Power BI certified",
    description:
      "Gantt charts enable you to schedule and manage tasks, but traditional Gantt charts only display basic details such as task IDs, task names, and schedules. Gantt Chart by MAQ Software includes a grid where users can include additional task information such as budget, project status, and location. With Gantt Chart, you can access a complete overview of your project or view individual tasks and their progress. You can also group tasks by category or sort for specific data points. For even more capabilities, try Gantt Chart by MAQ Software (Premium). In addition to the capabilities above, you will also have access to the following features: Progress bar – Accepts % values and measure values between 0 and 1; Task status – Accepts categorical values for mapping status flags for each task; Milestones – Accepts up to 5 date fields for showing milestone shapes as per user settings; Configurable bar height – User setting to change height of task rows.",
    benefitsLabel: "Key benefits",
    benefits: [
      "Hierarchical view of grouped tasks with an expand/collapse option for each category",
      "Colored bars based on task category",
      "Grid with expanded task details",
      "Task status in relation to the current date",
      "Sort data by any grid detail",
      "Tooltips for column headers, category labels, KPI indicators, data labels, and bars",
      "Support for date formatting",
      "Support for context menu",
      "(PREMIUM) Progress bar",
      "(PREMIUM) Task status",
      "(PREMIUM) Milestones",
      "(PREMIUM) Category limit increased to 10 (in the Basic version, a maximum of 4 categories can be used)",
      "(PREMIUM) Configurable bar height",
    ],
    useCasesLabel: "Use cases",
    useCases: [
      "Project managers: Monitor project IDs, start times, end times, status, duration, project owners, task priorities, and other relevant KPIs",
      "Sales and marketing: Schedule a campaign while tracking for budget, team input, and sales metrics",
      "Admin: Break down company-wide tasks into manageable sprints that measure for success criteria such as completion date and risk status",
    ],
    whatsNew: {
      version: "4.0.3.1",
      items: ["Added toggle for changing sort behavior – Independent sort"],
    },
    appSourceProductId: "WA104381364",
    pbiReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiN2FmN2U2ZmQtNjdmMi00NGNiLTg3ZmEtZjRkMDdjZDUxMWY2IiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
  {
    slug: "bowtie-chart",
    productName: "Bowtie Chart by MAQ Software",
    tagline: "Show the flow of data from one category/process to another",
    description:
      "Use Bowtie Chart by MAQ Software to quickly compare values in one or more categories. Bowtie Chart by MAQ Software is ideal for displaying sales metrics, such as the flow of a sale from channel to category. The thickness of the bowtie's branches indicates the relative weight of each category. Create a full bowtie to showcase how a cumulative value splits into two distinct sub-categories. Alternatively, you can create a half bowtie, showcasing the distribution of data within a source.",
    benefitsLabel: "Key features",
    benefits: [
      "Configurable branch color",
      "Configurable font size, color, and decimal precision for data labels and summary labels",
      "Configurable format (half bowtie or full bowtie)",
      "Interactive with other visuals",
    ],
    useCasesLabel: "Business uses",
    useCases: [
      "Risk management: Compare mitigating factors against the consequences of a risk",
      "Sales: Break down sales by region and sub-region",
      "Customer service: Categorize problems by customer type",
      "Human resources: Classify new hires over a period by hiring source and department",
    ],
    whatsNew: {
      version: "4.0.1",
      items: ["Fixed the summary label position"],
    },
    appSourceProductId: "WA104380838",
    pbiReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiZjNhNTc1YmEtNzE0MC00ZTA4LWFiMjgtZjY5MTMwZjM2ZTA0IiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
  {
    slug: "kpi-ticker",
    productName: "KPI Ticker by MAQ Software",
    tagline:
      "Display multiple key performance indicators (KPIs) in an automatically rotating visual.",
    description:
      "Save space on your reports by displaying multiple KPIs in a series of rotating tiles. KPI Ticker by MAQ Software shows the percentage increase or decrease of multiple values. You can view whether values undergo positive, negative, or neutral changes at a glance with an optional color-coded trend indicator. KPI Ticker by MAQ Software works particularly well for applications with frequently changing metrics.",
    benefitsLabel: "Key benefits",
    benefits: [
      "Customizable tiles (quantity in each row and background color)",
      "Customizable font size and color",
      "Positive, negative, and neutral trend indicators (with customizable colors)",
      "Customizable tile animation",
      "Formatting options for tile layout (vertical and horizontal)",
    ],
    useCasesLabel: "Use cases",
    useCases: [
      "Travel – Represent flight delay information for multiple airline carriers",
      "Stock Exchange – Represent the changing values of multiple stock options",
      "Sales – Compare KPIs across all your locations in real time",
    ],
    whatsNew: {
      version: "4.0.3",
      items: ["Handle percentage values"],
    },
    appSourceProductId: "WA104380946",
    pbiReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiNGNlMWFmZjMtZmFhNC00NzI0LTkwMjYtZjhkMzkwNDEwMjBiIiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
  {
    slug: "sunburst",
    productName: "Sunburst by MAQ Software",
    tagline: "Break down hierarchical data using color coded concentric rings",
    description:
      "Identify patterns in data that might otherwise go unnoticed. Sunburst by MAQ Software allows users to display hierarchical data as a set of nested rings. Customizable colors make it easy to distinguish between categories. The chart is displayed as a radial tree map or multilevel pie chart, presenting the data as parts of a whole.",
    benefitsLabel: "Key benefits",
    benefits: [
      "Hierarchical view of grouped categories with an expand/collapse option for each level",
      "Color-coded concentric rings based on category",
      "Tooltips for category labels and data values",
      "Support for date formatting",
      "Support for context menu",
      "Interactive with other visuals",
    ],
    useCasesLabel: "Use cases",
    useCases: [
      "Sales – Highlight your sales distribution across multiple demographics and geographies",
      "International Sales – Identify your most valuable exports broken down by location",
      "Finance – Break down and understand the revenue sources across your entire business",
    ],
    whatsNew: {
      version: "4.0.3.1",
      items: ["Added toggle for changing sort behavior – Independent sort"],
    },
    appSourceProductId: "WA200000097",
    pbiReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiYjE2ZjgyODktYjJmNC00ODI5LWE4YzUtMzdkMDI2NGUyN2Y0IiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
  {
    slug: "advanced-linear-gauge",
    productName: "Advanced Linear Gauge by MAQ Software",
    tagline: "Track and visualize progress for individual targets with precision | Power BI Certified",
    description:
      "Setting and tracking targets is crucial, regardless of what industry you're in. Advanced Linear Gauge by MAQ Software offers a dynamic and intuitive way to visualize progress towards these targets. Whether you're monitoring sales per commodity type or other KPIs, this tool provides clear insights into your performance against set goals.",
    benefitsLabel: "Key benefits",
    benefits: [
      "Dynamic and intuitive visualization of progress against targets",
      "Multiple colored target bars to highlight underperforming areas",
      "Power BI certified for enterprise-grade reporting",
    ],
    useCasesLabel: "Business uses",
    useCases: [
      "Financial services: See how spending stacks up against allocated budgets for the year or quarter with colored bars, highlighting potential overspending.",
      "Sales teams: Stay on top of performance with multiple target lines, instantly identifying underperforming regions or products.",
      "Marketing departments: Compare impressions, views, and clickthrough rates against campaign targets, revealing which strategies are driving results.",
      "Operations management: Ensure production efficiency by monitoring daily output against targets, visually identifying areas for improvement.",
    ],
    appSourceProductId: "maqsoftware1587623472284.advancedlineargaugebymaqsoftware",
    pbiReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiMWE3NmUyZjItM2Y3ZS00MzFmLTkyZTktZDAzNDlkMDMwNzVmIiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
  {
    slug: "box-and-whisker-chart",
    productName: "Box and Whisker Chart by MAQ Software",
    tagline: "Understand the mean, median, and quartile distribution of your data",
    description:
      "Compare large data sets in a compact space. Box and Whisker Chart by MAQ Software enables you to compare the distribution of values across several sets of data. In addition to showing the median, first and third quartiles, and the maximum and minimum values, this custom visual also displays the mean, standard deviation, and quartile deviation.",
    benefitsLabel: "Key benefits",
    benefits: [
      "Clear display of broad categories (i.e. financial quarter or geographic region) and the specific data sets within those categories (i.e. individual storefronts or products)",
      "Horizontal and vertical view based on reporting requirements",
      "Different shapes (circle, square, rectangle) for the mean icon and other data points",
      "Supports report tooltip",
    ],
    useCasesLabel: "Use cases",
    useCases: [
      "Sales: Compare quarter-over-quarter sales across geographic regions or market demographics",
      "Project managers: Analyze work output after major process changes",
      "Product developers: Compare different processes to develop the same product at an improved speed, accuracy, or overall functionality",
    ],
    whatsNew: { version: "4.0.0", items: ["Added support for the context menu"] },
    appSourceProductId: "WA104381351",
    pbiReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiNTBiOWI3MjgtYzgzNi00MzE4LThjNzYtNzY5YjJjMGNlOTA1IiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
  {
    slug: "brick-chart",
    productName: "Brick Chart by MAQ Software",
    tagline: "Show the percentage breakdown of a data set with multi-color shaded bricks",
    description:
      "Compare portions of a category to the whole. Brick Chart by MAQ Software provides an alternative format to a donut or pie chart. The visual showcases the percentage breakdown of a data set.",
    benefitsLabel: "Key Feature",
    benefits: [
      "Tooltip to indicate category colors and percentages",
      "Option to include a legend with a customizable title, size, and color",
      "Customizable width and height",
    ],
    useCasesLabel: "Business uses",
    useCases: [
      "Sales: Classify your target audience by demographic",
      "Marketing: Break down your budget by marketing avenue",
      "Government: Highlight seats occupied versus unoccupied in a legislature",
    ],
    appSourceProductId: "WA104380836",
    pbiReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiMGY0ZWJmYzAtNTNhMS00ZjEwLTg5ODktNjhlNjdlNmRlMzkxIiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
  {
    slug: "cylindrical-gauge",
    productName: "Cylindrical Gauge by MAQ Software",
    tagline: "Compare metrics against a target value or capacity with an intuitive 3D visual | Power BI certified",
    description:
      "Compare actual values against a target capacity with Cylindrical Gauge by MAQ Software. Easily visualize progress towards a goal. Each gauge in this visual represents a single metric.",
    benefitsLabel: "Key benefits",
    benefits: [
      "Customizable minimum and maximum values of the tick marks",
      "Customizable fill and border color",
      "Vertical scrollbar for when height restrictions limit visibility",
      "Optional fill line for added clarity",
    ],
    useCasesLabel: "Use cases",
    useCases: [
      "Inventory: Evaluate inventory to forecast future needs",
      "Marketing: Analyze average customer satisfaction scores",
      "Travel: Evaluate fuel levels across different journey routes",
    ],
    appSourceProductId: "WA104380874",
    pbiReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiNDRiYmIyYmItMGJiMS00MmFmLTgxYTUtZjlmODUwMjg3YjkzIiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
  {
    slug: "data-insights",
    productName: "Data Insights by MAQ Software",
    tagline: "Explore, understand, and interact with data by enabling insights in various forms",
    description:
      "Data Insights by MAQ Software allows users to view data in multiple formats and quickly narrow data results. Users can switch between a horizontal bar, vertical bar, brick, or tabular formats. With Data Insights by MAQ Software, users can easily select, view, and explore data in the format that best fits their individual business needs.",
    benefitsLabel: "Key Feature",
    benefits: [
      "Display data in bar, brick, and tabular formats",
      "Custom text and background colors",
      "Tooltips with additional insights",
      "Data by color and legends",
    ],
    useCasesLabel: "Business uses",
    useCases: [
      "Display multiple sales KPIs simultaneously",
      "Shift between multiple KPIs or reporting periods by changing the axis base",
    ],
    appSourceProductId: "WA104381454",
    pbiReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiNDZhZDY0NTYtNTg3ZC00OWIzLWFkMGMtMzc5NWJmOTRkOTYzIiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
  {
    slug: "dot-plot",
    productName: "Dot Plot by MAQ Software",
    tagline: "Highlight gaps, clusters, and outliers in your data | Power BI certified",
    description:
      "View data through multiple categories and subcategories. Dot Plot by MAQ Software displays data points (bubbles) plotted on an X/Y axis and distributed over a specified set of values. The size of the bubble represents the magnitude, and its color represents the category. Users can also break data down across several parent and child categories, a significant improvement over the basic dot plot diagram.",
    benefitsLabel: "Key Feature",
    benefits: [
      "Support for selection and multi-selection with partial highlighting",
      "Different bubble colors for different categories",
      "Customizable bubble size",
      "Bubble animation on click",
      "Support for context menu",
    ],
    useCasesLabel: "Business uses",
    useCases: [
      "Sales: Display multidimensional sales data such as sales volume per year over various regions",
      "Marketing: Display a campaign's effectiveness across various regions and demographics",
      "Hospitality: Break down the popularity of different hotels in the same chain based on location, revenue, and seasonality",
    ],
    appSourceProductId: "WA104381101",
    pbiReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiYTdiN2E2MWYtY2FhMC00MzdkLWI3ZWMtN2IyMGViNDIzYjMyIiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
  {
    slug: "dynamic-tooltip",
    productName: "Dynamic Tooltip by MAQ Software",
    tagline: "Enhance readability of reports by providing additional data points as tooltips | PBI certified",
    description:
      "Add visual aids and indication images with Dynamic Tooltip by MAQ Software, such as a glowing bulb icon in the corner of a chart to indicate the tooltip contains 'tips'. While most available tooltips only display static information, Dynamic Tooltip by MAQ Software displays both static text and dynamic text. Dynamic text responds to changes in your data sources. When the data in your data source changes, Dynamic Tooltip automatically updates.",
    benefitsLabel: "Key Feature",
    benefits: [
      "Static and dynamic options for report charts",
      "Customized icon image configuration",
      "Formatting options for decimals and display unit data.",
    ],
    useCasesLabel: "Business uses",
    useCases: [
      "Development Team – Adapt the readability of reports for a wide user base",
      "Sales & Marketing - Highlight the conversion rate and online engagement, bounce rate and page views, click-through rate and bounce rate, or upselling success rate and cross selling success rate",
      "Operations - Visualize the relationship between cash-to-cash time cycle and days of inventory, or days of receivables and days of payables.",
    ],
    whatsNew: {
      version: "4.3.0",
      items: ["Added separate data fields for header and body values of the tooltip"],
    },
    appSourceProductId: "WA104380983",
    pbiReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiNDIzMGQxN2ItODI2NS00MGQzLWFkYmUtZDdhMjkzOGI0ZWRkIiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
  {
    slug: "funnel-with-source",
    productName: "Funnel with Source by MAQ Software",
    tagline: "Track data pipeline from end-to-end by grouping data into stages and sources | Power BI certified",
    description:
      "Follow the path of a metric over various stages while tracking the metric's entry channel. Funnel with Source by MAQ Software shows a funnel journey for any metric or data point. Break your data down into stages by revenue, month, and more. Analyze what separate sources are generating value across the stages and how all streams connect.",
    benefitsLabel: "Key Feature",
    benefits: [
      "Filtering options based on channel and journey stage",
      "Support for cross-visual filtering",
      "Configurable colors, font, and labels",
    ],
    useCasesLabel: "Business uses",
    useCases: [
      "Sales: Visualize the sales path of leads, showcasing the leads' entry channel and journey through the various stages of the sales cycle",
      "Global marketing: Highlight which regions generate revenue across the entire sales and marketing journey",
      "Management: Track team contribution across quarters",
    ],
    appSourceProductId: "WA104381334",
    pbiReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiZmI0OTg3YmEtMzFkNC00ODExLWIxMDktZDZmMDhjODE4OTM0IiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
  {
    slug: "grid",
    productName: "Grid by MAQ Software",
    tagline: "Navigate large data sets with ease by showcasing data in a paginated grid format that can be sorted",
    description:
      "Navigate large data sets to focus on the most important items. Grid by MAQ Software allows users to present specific data from a complex data set. The visual's capabilities include pagination, which facilitates easy navigation. The visual also has a sort function, which allows users to sort data based on any column.",
    benefitsLabel: "Key Feature",
    benefits: [
      "Support for image URLs",
      "Support for multiple data formats including CSV",
      "Support for special characters",
    ],
    useCasesLabel: "Business uses",
    useCases: [
      "Upper Management: Navigate Power BI reports for key data while retaining the necessary context",
      "Sales: Sort through global data across multiple geographies and demographics",
      "Customer support: Easily track specific products, features, customers, and support tickets",
    ],
    whatsNew: { version: "4.0.0", items: ["Added support for the context menu"] },
    appSourceProductId: "WA104380825",
    pbiReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiZmM0YmUzODMtMGM0YS00ZTkxLWEyZTQtOWE3MDU4ZWNkNDljIiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
  {
    slug: "hierarchy-chart",
    productName: "Hierarchy Chart by MAQ Software",
    tagline: "Streamline your organizational insights | Power BI Certified",
    description:
      "Discover the power of visual hierarchy to depict relationships within any organizational, departmental, or functional area. Hierarchy Chart by MAQ Software transforms complex structures into intuitive, top-down structured tree diagrams. Incorporate images to bring your data to life, offering a clear, visual representation of various entities and their connections.",
    benefitsLabel: "Key Feature",
    benefits: [
      "Customizable appearance: Modify connector links, card dimensions, borders, and corner radius for a personalized look.",
      "Color coding: Assign colors based on the Legend column to signify different statuses or categories.",
      "Interactive cards: Expand/collapse levels and cross-filter other visuals to explore your data.",
      "Navigational freedom: Zoom and drag features allow for adaptable visualization positioning.",
    ],
    useCasesLabel: "Business uses",
    useCases: [
      "Sales: Analyze sales performance by territory or target achievement, using color-coding for clarity.",
      "Human Resources: Organize your workforce by department and rank, improving clarity and planning efficiency.",
      "IT management: Catalogue IT assets by category and quantity, providing a comprehensive overview of resources.",
      "Operations: Visualize manufacturing processes or product components in detailed hierarchical formats.",
      "Finance: Illustrate budget distributions across divisions or projects, using color coding to identify areas on or off track.",
    ],
    appSourceProductId: "maqsoftware1587623472284.hierarchychartbymaqsoftware",
    pbiReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiNTZkZTgyNjgtZjI3OS00MzllLWIwNmUtYTVhNDI2NDQyYWViIiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
  {
    slug: "horizontal-funnel",
    productName: "Horizontal Funnel by MAQ Software",
    tagline: "Represent the various stages and relevant metrics of a process | PBI certified",
    description:
      "Horizontal Funnel by MAQ Software breaks down complex processes into clear, understandable phases. While other Power BI funnels are limited to displaying one key metric for each funnel stage, Horizontal Funnel enables users to display a second, customizable metric beneath the primary measure. The primary measure defines the size of the colored funnel segments, showcasing what percentage each segment makes up of the whole.",
    benefitsLabel: "Key Feature",
    benefits: [
      "Secondary measure that can be displayed below the colored bars",
      "Tooltip that displays a brief explanation of the data",
      "Configurable funnel stage colors, font size, display units, and label decimal place",
      "Added support for bookmarks",
    ],
    useCasesLabel: "Business uses",
    useCases: [
      "Sales – Analyze the sales pipeline by viewing both the sales progress and conversion rate at each stage of a sale",
      "Marketing – View the entire buyer process, tracking for details like web traffic sources and order fulfilment",
      "Human Resources – Break down the recruitment, tracking the quantity of applicants in each stage of job applications (online applications, telephone screenings, in-person interviews, etc.)",
    ],
    whatsNew: { version: "4.0.0", items: ["Support for the context menu"] },
    appSourceProductId: "WA104380846",
    pbiReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiMGQ0YzFhYjEtYTM4MS00MmU4LTlhYWQtZTY5Y2FmMDc2OTc2IiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
  {
    slug: "hourglass-chart",
    productName: "Hourglass Chart by MAQ Software",
    tagline: "Compare category values across two scenarios to showcase conversions | Power BI certified",
    description:
      "Hourglass Chart by MAQ Software enables you to compare category values between two scenarios. To understand changes in your data categories, Hourglass Chart offers a customizable conversion rate bar and is useful for any scenario where you need to compare data before and after an event takes place, especially across multiple categories.",
    benefitsLabel: "Key Feature",
    benefits: [
      "Categories can be highlighted upon clicking",
      "Configurable horizontal/vertical orientation",
      "Animated individual categories on hover",
      "Configurable conversion box (add or remove)",
    ],
    useCasesLabel: "Business uses",
    useCases: [
      "Social media marketing: Track the ROI of A/B testing across social media platforms",
      "Marketing: Analyze revenue for products before and after a major promotion",
      "Travel: Compare the number of scheduled flights versus delayed flights between major airports",
    ],
    appSourceProductId: "WA104381843",
    pbiReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiMDMwNzBjOTQtYTA3OC00NmYzLWFlZGItYWMzOGZiN2UwM2Y1IiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
  {
    slug: "image-carousel",
    productName: "Image Carousel by MAQ Software",
    tagline: "Showcase a collection of images with a sliding carousel",
    description:
      "Power BI offers basic out-of-the-box image options that enable you to display images in a table, matrix, slicer, or multi-row card. However, when working with compact spaces or large image collections, these options may not be the right fit. To expand your capabilities, we created Image Carousel, which enables you to cycle through up to ten images. With the visual's auto-play option, you can effortlessly view new products, project progress, and more. Additionally, you can zoom into images by hovering over them.",
    benefitsLabel: "Key benefits",
    benefits: [
      "Auto-play with customizable intervals",
      "Play/pause and scroll arrows",
      "Supports up to 10 images",
      "Zoom into images on hover",
      "Customizable layouts and themes",
    ],
    useCasesLabel: "Use cases",
    useCases: [
      "Sales and marketing: Tell stories, share details, and showcase products",
      "Websites: Show company details, customer quotes, products, and more",
    ],
    appSourceProductId: "maqsoftware1587623472284.imagecarouselbymaqsoftware",
    pbiReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiODYwNjYwNWEtZTgzMi00YzJlLWJkMDktNzgzNjAyOGNlMmYxIiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
  {
    slug: "journey-chart",
    productName: "Journey Chart by MAQ Software",
    tagline: "Transform dense statistical data into a network of categories and relationships",
    description:
      "Journey Chart by MAQ Software enables users to clearly display complex, multi-stage lead paths. In this visual, nodes represent categories and vertices represent relationships between categories. The bigger the node or vertex, the larger the value. Customizable node colors make distinguishing between categories easy. Explain process flow, uncover underlying patterns, highlight subcategories stemming from a single source, identify connections between categories, and more with this clear, uncluttered visual.",
    benefitsLabel: "Key Feature",
    benefits: [
      "Text labels and tooltips with information such as title or value",
      "Customizable colors and sizes for text labels",
      "Option to add a legend to clarify complex graphs",
    ],
    useCasesLabel: "Business uses",
    useCases: [
      "Market research: Uncover the underlying patterns of subject responses to products",
      "Leadership: Break down complex, multi-team process flows to identify performance optimization opportunities and key relationships",
      "Recruitment: Highlight candidates' strengths, weaknesses, and other relevant traits",
    ],
    appSourceProductId: "WA104380989",
    pbiReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiM2IwNzRhYWUtZTJlNC00MTNlLTlhNzAtZDNmYmU4YjRiYzNiIiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
  {
    slug: "kpi-column",
    productName: "KPI Column by MAQ Software",
    tagline: "Measure your progress toward key performance indicators (KPIs) with an integrated line and column chart",
    description:
      "Clearly represent where your performance lies in relation to your targets. KPI Column by MAQ Software combines line and column charts. The columns represent performance, while the lines mark KPI targets. Each specific column changes color depending on how it compares to a target line value.",
    benefitsLabel: "Key Feature",
    benefits: [
      "An optional target value for all columns",
      "Current and forecasted data (forecasted data made translucent to differentiate it from actual values)",
    ],
    useCasesLabel: "Business uses",
    useCases: [
      "Sales: Measure upselling success ratio, quotation conversion, and other sales performance metrics",
      "Marketing: Measure bounce rate, click-through rate, and other marketing performance metrics",
      "Human resources: Measure staff advocacy scores, diversity index, and other operational metrics",
      "IT: Measure cost variance, schedule variance, and project tracking",
    ],
    whatsNew: {
      version: "4.0.0",
      items: ["Context menu support", "Increased support to handle 5000 records"],
    },
    appSourceProductId: "WA104380996",
    pbiReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiZjlhZjliYmItNzMyZC00N2Y3LTk1YTAtMTYyZDAzYzQ5MmM4IiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
  {
    slug: "kpi-grid",
    productName: "KPI Grid by MAQ Software",
    tagline: "Separate hierarchical data into categories to illustrate trends | Power BI certified",
    description:
      "KPI Grid by MAQ Software allows users to track productivity and performance data by displaying key data in hierarchical order. Specify the time periods to show data and easily gauge performance according to internal deadlines and benchmarks.",
    benefitsLabel: "Key Feature",
    benefits: [
      "Customizable row background colors, text size, and text color",
      "Ability to include custom images such as rising or falling arrows",
      "Ability to include separators between columns, highlighting certain categories for quick comparison",
    ],
    useCasesLabel: "Business uses",
    useCases: [
      "Sales: Measure upselling success, quotation conversion, year-over-year sales, and other sales performance metrics",
      "Marketing: Measure bounce rate, click-through rate, and other marketing performance metrics",
      "Human resources: Create and staff advocacy scores, diversity indexes, and other operational metrics",
      "IT: Track cost variance, schedule variance, and project status",
      "Finance: Track profit margin and operating profit margin",
    ],
    whatsNew: { version: "4.0.0", items: ["Context menu support"] },
    appSourceProductId: "WA104380947",
    pbiReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiZTY2YWIzN2UtMjM4Zi00MzRjLWE1NmQtOWMxZjZjNzI2MzAzIiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
  {
    slug: "linear-gauge",
    productName: "Linear Gauge by MAQ Software",
    tagline: "Compare progress against identified goals and warning zones | Power BI certified",
    description:
      "Setting targets up front and working towards them over a period is common across all industries. Linear Gauge by MAQ Software shows the progress toward a target value, such as achieved sales versus targeted monthly sales. Users can include multiple data points which illustrate trends such as monthly or year-to-date (YTD) completion rates. The visual displays the present value, percentage toward completion, and two optional trend values.",
    benefitsLabel: "Key benefits",
    benefits: [
      "Customizable minimum and maximum metric value",
      "Customizable gauge and data label colors",
      "Six-unit options for the metric",
      "Gradient background color highlighting the percentage progress",
      "Hierarchy feature (using drill-down to display different levels of data)",
      "Animation effect that displays current progress on visual load",
      "Target value marker",
      "Zoom in and hover feature for target line and marker",
      "Separate tooltip for each category",
      "Option to change the target label position",
      "Bookmarks supported",
      "Ability to change color when the target value is equal to the actual value",
      "Support to display values in the given locale",
      "Limit on font sizes",
    ],
    useCasesLabel: "Use cases",
    useCases: [
      "Financial services: Track budget consumption against allocated budgets for the year or quarter",
      "Sales: Track daily or weekly progress against sales goals for the quarter",
      "Marketing: Track progress on impressions, views, and clickthrough against the marketing campaign targets",
      "Operations: Track daily output against daily or weekly goals",
    ],
    whatsNew: { version: "4.0.0", items: ["Added support for the context menu", "Bug fixes"] },
    appSourceProductId: "WA104380821",
    pbiReportUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiYTUwYjY5ODEtNDY3Zi00NzdmLWEyODMtZjI4OWIyZGYwMzVjIiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
  {
    slug: "organization-chart",
    productName: "Organization Chart by MAQ Software",
    tagline: "Use this chart to demonstrate hierarchy within an organization or functional area",
    description:
      "Organization Chart by MAQ Software displays relationships between different entities. Users can visually display hierarchical information in a top-down structured tree format along with images.",
    benefitsLabel: "Key benefits",
    benefits: [
      "Includes an optional image column to show images",
      "Modify the look of the connector links",
      "Color the cards based on a Legend column",
      "Ability to customize the card dimension, border, and corner radius",
      "Interactivity with the cards to expand/collapse levels and cross-filter other visuals",
      "Font formatting for labels and sub labels",
      "Ability to zoom and drag the position of the visual",
      "Configurable legend position and formatting",
      "Support for context menu",
    ],
    useCasesLabel: "Use cases",
    useCases: [
      "Sales: Display sales structure along with territory responsibilities, actual sales, and progress with targets",
      "Marketing: Display various marketing campaigns along with KPIs information to measure the impact of campaigns, tactics, and activities",
      "Organization: Structure human resources according to respective departments and hierarchy",
      "IT: Display organizational IT assets, showing various asset categories, and their availability volumes, broken down into specific assets",
      "Operations: Display a manufacturing process, with a breakdown of the components or ingredients to produce the product, along with their respective quantities in a hierarchical format",
      "Finance: Display budget allocation by divisions or projects, breaking them down into subdivisions or sub-projects",
    ],
    appSourceProductId: "WA200001120",
    pbiReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiNDJjNzk4ZjctZDUwMS00ZTM3LWJhZTgtYzY4OWU1MzM2Y2Q0IiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
  {
    slug: "quadrant-chart",
    productName: "Quadrant Chart by MAQ Software",
    tagline: "Represent data in separate quadrants to show distribution and items that share common traits.",
    description:
      "Represent large quantities of information in a compact space. Quadrant Chart by MAQ Software is a bubble chart with a background divided into four equal sections. This visual is useful for plotting data that contains three measures using an X-axis, a Y-axis, and varying bubble sizes that represent the value of the third measure. Quadrant Chart by MAQ Software is useful for showing relationships. Divide the four sections of the chart to rate performance as bad, good, better, or best.",
    benefitsLabel: "Key Feature",
    benefits: [
      "Customizable bubble colors",
      "Formatting options for quadrants and quadrant lines including naming for each quadrant, X-axis division line, Y-axis division line, and a choice of dotted or solid lines",
      "Custom title, labels, display units, and decimal points for each axis",
      "Supports context menu",
    ],
    useCasesLabel: "Business uses",
    useCases: [
      "Sales – Showcase the relationship between production costs and gross profit, using the bubble size to represent units sold",
      "Marketing – Highlight the effect of advertising expenditure on product sales, using the bubble to represent conversions",
      "Finance – Represent the regions where your product sells best, breaking down success by sales and quantity of store fronts",
    ],
    appSourceProductId: "WA104381011",
    pbiReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiOGEzMTQ5MzEtMDY1Mi00YmUxLTkwZTQtMGEwZTAwYzM4NWYzIiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
  {
    slug: "radar-chart",
    productName: "Radar Chart by MAQ Software",
    tagline: "Compare data across three or more variables in a single two-dimensional chart",
    description:
      "Compare multivariate data for several different data sources with Radar Chart by MAQ Software. A radar chart breaks variables down into equiangular spokes. A line connects data values for each spoke, giving the plot a star-like appearance. Each object you want to compare is ranked against these values, differentiated by color.",
    benefitsLabel: "Key benefits",
    benefits: [
      "Ability to plot multivariate data",
      "Configurable curve interpolation method (sharp, rounded, or exact)",
      "Ability to change stroke width and transparency of plot color",
      "Configurable color and data point radius",
      "Configurable plot color",
      "Configurable legend positioning and formatting",
      "Ability to show/hide axes",
      "Customizable axes color, stroke width, and position",
      "Ability to cross-filter other visuals",
      "Legend interactivity",
      "Support for context menu",
      "Option to display data values and set text color",
    ],
    useCasesLabel: "Use cases",
    useCases: [
      "Finance: Compare the performance of multiple companies along multiple business parameters, such as sales, profit, volume, and more.",
      "Product management: Compare products across multiple features or specifications.",
      "Operations: Outline employee competencies across key performance indicators.",
    ],
    appSourceProductId: "WA200001561",
    pbiReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiOTBiZTk0ZWEtMjZlOC00MGIyLWIyYjQtMTM3NWI4OTU5ZWUwIiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
  {
    slug: "ratings",
    productName: "Ratings by MAQ Software",
    tagline: "Indicate performance or approval scores within your Power BI reports",
    description:
      "Add ratings or scores to Power BI reports to track the performance of key metrics. Ratings by MAQ Software enables users to divide ratings by average score or by specific groups such as individual departments.",
    benefitsLabel: "Key Feature",
    benefits: [
      "Drill down opportunities (average rating, individual metrics, etc.)",
      "Configurable indicator shapes (four options)",
      "Configurable fill color (solid or gradient)",
    ],
    useCasesLabel: "Business uses",
    useCases: [
      "Market research: Highlight the performance of specific products, movies, or features based on user feedback",
      "Hospitality: Compare the ratings of hotels across locations",
      "Customer support: Analyze business performance by tracking customer support ratings for different products",
    ],
    appSourceProductId: "WA104381838",
    pbiReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiZjc1YTNlNTQtYjA5Zi00NmMyLWJhNzItNmI5Yjc1M2E0ODJmIiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
  {
    slug: "ring-chart",
    productName: "Ring Chart by MAQ Software",
    tagline: "Display relationships between values with a dynamic key performance indicator in the center.",
    description:
      "Ring Chart by MAQ Software breaks large sums into smaller data slices. The size of each slice is relative to the data itself. The center of the ring displays a dynamic KPI and summary. Threshold values define the color and direction of the indicator. For example, to display the contribution of various channels to the total sales, data for channels such as e-mail, store, and online can be represented as slices of the ring. In this scenario, the entire ring represents total sales.",
    benefitsLabel: "Key Feature",
    benefits: [
      "3D visual feedback when highlighting specific slices.",
      "Display raw data in legend, along with toggleable KPI indicators.",
      "Showcase multiple data fields in the tooltip.",
      "Supports bookmarks.",
      "Support for Report tooltips",
    ],
    useCasesLabel: "Business uses",
    useCases: [
      "Sales: Showcase the contribution of channels (e-mail, store, online) to total sales",
      "Finance: Visualize the breakdown of revenue, expenses, or budget across categories",
      "Operations: Track part-to-whole metrics with a centered KPI summary",
    ],
    whatsNew: { version: "4.5.3", items: ["Resolved a minor bug with the tooltip"] },
    appSourceProductId: "WA104380824",
    pbiReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiNzcyYmNmNzQtYjQ4Mi00NmNjLTgxZTQtMGFiOTQwM2MyZDA2IiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
  {
    slug: "rotating-chart",
    productName: "Rotating Chart by MAQ Software",
    tagline: "Showcase multiple key performance indicators with a rotating bar chart | Power BI certified",
    description:
      "Business reports often require many KPIs in a single report, especially when showcasing historical data. Rotating Chart by MAQ Software is a horizontal bar chart that rotates on its horizontal axis to showcase multiple KPIs. Each flip offers a new value, enabling you to show multiple KPIs in a limited space.",
    benefitsLabel: "Key Feature",
    benefits: [
      "Customizable rotation axis (horizontal or vertical)",
      "Configurable flip delay time",
      "3D effect option",
      "Standard formatting options such as font type, size, and color for the label and title, background, and tile borders",
    ],
    useCasesLabel: "Business uses",
    useCases: [
      "Sales: Analyze units sold over several financial quarters",
      "Sales strategy: Compare sales data across financial quarters and departments",
      "Management: Analyze the performance of multiple departments over time",
    ],
    appSourceProductId: "WA104381007",
    pbiReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiZDBjNjY4MmUtMjM5Yy00NmRjLTgyMDctM2Y2YmE5ZjlmZGU3IiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
  {
    slug: "rotating-tile",
    productName: "Rotating Tile by MAQ Software",
    tagline: "Display multiple KPIs with an automatically flipping, customizable tile | PBI certified",
    description:
      "Make the most of limited report space by showcasing multiple KPIs or metrics in a compact rotating tile. Rotating Tile by MAQ Software displays one KPI value at a time, flipping between as many metrics as you want. Rotating Tile is ideal for displaying multiple KPIs on reports with limited space, such as year-end reports or quarterly presentations.",
    benefitsLabel: "Key Feature",
    benefits: [
      "Customizable rotation axis (horizontal or vertical)",
      "Configurable flip delay time",
      "3D effect option",
      "Standard formatting options such as font type, size, and color for the label and title, background, and tile borders",
    ],
    useCasesLabel: "Business uses",
    useCases: [
      "Finance - Showcase all relevant KPIs in the limited space of a year-end financial report",
      "Marketing - Compare performance metrics across geographies",
      "Supply Chain - Highlight units sold over time in a compact space",
    ],
    appSourceProductId: "WA104380877",
    pbiReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiNTY4OTZhODctZmQyMC00YjcxLWFkOTktMDVjNmE3MDRlNGQ5IiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
  {
    slug: "text-enhancer",
    productName: "Text Enhancer by MAQ Software",
    tagline: "Customize the text in your Power BI reports",
    description:
      "Power BI offers minimal text editing options out of the box. Create more visually engaging reports with the new text styling options offered in Text Enhancer by MAQ Software. Text Enhancer allows you to adjust text shadow, rotation, angle, skewness, alignment, and more. It also includes text-wrapping capabilities.",
    benefitsLabel: "Key Feature",
    benefits: [
      "Editing capabilities for static and dynamic text",
      "Text wrapping capability",
      "Text styles including bold, italic, underline, overline, and strike-through",
      "Configurable shadow, shadow blur, shadow color, text alignment, text skew, and text perspective",
    ],
    useCasesLabel: "Business uses",
    useCases: [
      "Text Enhancer by MAQ Software makes reports stand out in any business application.",
    ],
    whatsNew: { version: "4.0.0", items: ["Support for the context menu"] },
    appSourceProductId: "WA104381762",
    pbiReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiZDc1NzAwMTUtOWZiNy00MTI3LTg0NTMtOWM5MDkxMzI4M2M1IiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
  {
    slug: "text-wrapper",
    productName: "Text Wrapper by MAQ Software",
    tagline: "Represent complete data by enabling text wrapping on Power BI reports.",
    description:
      "Include long strings of text in your Power BI reports at no cost to user experience. Text Wrapper by MAQ Software retrieves text from any data source and wraps it within the target field, presenting the text in a readable format. This visual also wraps static text strings (statements) with dynamic text field values.",
    benefitsLabel: "Key Feature",
    benefits: [
      "Dynamic text field value (updates according to the selected filter or slicer, keeping the static text intact)",
    ],
    useCasesLabel: "Business uses",
    useCases: [
      "Text Wrapper by MAQ Software enables more dynamic reports for any business application",
    ],
    appSourceProductId: "WA104380826",
    pbiReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiYTkwYjk3ZTQtMmQ0NS00N2RjLTlmMmQtM2Y0MTU2MTUzNTAxIiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
  {
    slug: "thermometer",
    productName: "Thermometer by MAQ Software",
    tagline: "Represent progress toward goals | PBI certified",
    description:
      "Visualize your progress towards a target goal with Thermometer by MAQ Software. This visual offers you at-a-glance insights into your KPIs.",
    benefitsLabel: "Key Feature",
    benefits: [
      "Customizable fill and border color",
      "Editable minimum and maximum values (of the scale)",
      "The tick bar can be turned off for a minimalist look",
    ],
    useCasesLabel: "Business uses",
    useCases: [
      "Manufacturing - Track inventory levels, throughput, rate of return, maintenance costs, uptime, average delivery time, and average number of shipments",
      "Human Resources - Track average attendance, employee turnover, and employee satisfaction",
    ],
    whatsNew: {
      version: "4.0.0",
      items: ["Added Context menu", "Fixed target and fill issue"],
    },
    appSourceProductId: "WA104380847",
    pbiReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiZTVhMjY5Y2QtNTRlNS00YTYzLThmZTktZWM0Y2JjNjEyZGMyIiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
  {
    slug: "trading-chart",
    productName: "Trading Chart by MAQ Software",
    tagline: "Break down historical trading records into a simple, color-coded chart",
    description:
      "Trading Chart by MAQ Software translates historical trading records into an easy-to-read chart. Gray bars signify low and high price values. Red or green bars superimposed over the low and high values indicate the direction the stock moved.",
    benefitsLabel: "Key Feature",
    benefits: [
      "Color-coded bars (red bar indicates a stock's price has dropped; a green bar indicates the price rose)",
      "Customizable price ranges and time increments",
    ],
    useCasesLabel: "Business uses",
    useCases: [
      "Finance: Analyze the state of the stock market to make informed decisions",
      "Management: Highlight your organization's stock value over time",
      "Leadership: Analyze the state of competitor stock to inform valuable mergers and business opportunities",
    ],
    whatsNew: { version: "4.0.0", items: ["Support for the context menu"] },
    appSourceProductId: "WA104380823",
    pbiReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiYWY2YjU4MjEtZTNmYi00MTMzLTkzZTQtNDIwNzQ0YjMwOWNlIiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
  {
    slug: "treemap-bar-chart",
    productName: "Treemap Bar Chart by MAQ Software",
    tagline: "Categorize hierarchical data with color-coded, proportional rectangles",
    description:
      "Tree Map Bar Chart by MAQ Software categorizes hierarchical data with sets of colored rectangles of proportionate sizes. The visual offers multiple views to ensure you gain the insights you need. Visualize performance with the gradient effect and size of bricks while making an efficient use of space by showing the distribution of values across categories.",
    benefitsLabel: "Key Feature",
    benefits: [
      "Customizable brick colors",
      "Customizable orientation between bar chart and column chart",
      "Total values and data labels for all categories",
      "Custom text and background colors",
      "Tooltips with additional insights",
      "Data legend",
      "Animation to examine the visual at the granular level",
      "Cross-filtering support for legend values, axis values, and bricks",
      "Bookmark support",
      "Report tooltips configuration support",
      "Drill through support",
    ],
    useCasesLabel: "Business uses",
    useCases: [
      "Sales: Analyze profit breakdown needs by country, region, and city",
      "Marketing: Highlight the performance of campaigns across location",
      "Social Media Marketing: Break down ROI on social media campaigns by platform",
    ],
    whatsNew: { version: "4.0.0", items: ["Context menu support"] },
    appSourceProductId: "WA200000043",
    pbiReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiNjI0ZmI2MTctMGNkNS00ZjA4LWIwOWItZjVhZTgzOTFmYTMyIiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
  {
    slug: "venn-diagram",
    productName: "Venn Diagram by MAQ Software",
    tagline: "Display the relationship between two or more datasets | Power BI certified",
    description:
      "Compare and contrast your data. Venn diagrams are a classic data visualization tool—a simple yet creative way to organize data and understand relationships within it. Venn Diagram by MAQ Software displays the logical relationships between a collection of data sets, each represented as a circle. Circle intersections highlight qualities shared by the overlapping data sets.",
    benefitsLabel: "Key Feature",
    benefits: [
      "Labels for individual values and intersection values",
      "Legend order derived from the order of columns in the category field",
      "Customizable names and colors for each dataset",
    ],
    useCasesLabel: "Business uses",
    useCases: [
      "Marketing: Analyze what social media your target audience uses and where there is overlap",
      "Project management: Showcase employee involvement across various products and projects to understand how teams overlap",
      "Sales: Understand the most important product attributes for customers based on survey feedback",
    ],
    whatsNew: { version: "3.1.1", items: ["Updated with the latest certification ruleset"] },
    appSourceProductId: "WA104381231",
    pbiReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiMDhhYTQwM2UtYTQyZC00YTIyLWI2YjItMmI1ZDE2YjRjODVlIiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
  {
    slug: "violin-plot",
    productName: "Violin Plot by MAQ Software",
    tagline: "Visualize data distribution across categories",
    description:
      "Violin Plot by MAQ Software enables you to easily view the distribution of data, including mean, standard deviation, quartile deviation, and probability density. With the plot's interactive slider and animated play/pause button, you can view and project trends across products, services, locations, and more.",
    benefitsLabel: "Key Feature",
    benefits: [
      "Interactive slider to view change over time or across categories",
      "Play/pause animation to view change over time or across categories",
      "Customizable data colors",
      "Cross-filtering with other visuals",
    ],
    useCasesLabel: "Business uses",
    useCases: [
      "Project managers: Compare team productivity across streams by using burndown data",
      "Sales and marketing: Project sales across products and analyze historical data for earlier campaigns",
      "Human resources: Predict, analyze, and plan team expenditure",
    ],
    appSourceProductId: "maqsoftware1587623472284.violinplotbymaqsoftware",
    pbiReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiZmU0MDZjMGYtNDUyNC00OTQ0LTk3NDMtYTIwNGIyOGM5YjM0IiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
  {
    slug: "calendar",
    productName: "Calendar by MAQ Software",
    tagline: "View key events on your Power BI report in a calendar view | Power BI certified",
    description:
      "Calendar by MAQ Software is the most effective way to track events in Power BI. Schedule events for specific days, then use them as a reference while reviewing your report.",
    benefitsLabel: "Key benefits",
    benefits: [
      "Ability to group events based on category",
      "Multiple views available—Month, Week, Day, and List",
      "Ability to navigate to event details with a click",
      "Ability to set workdays and hours",
    ],
    useCasesLabel: "Use cases",
    useCases: [
      "Project managers: Monitor project schedules and key deadlines",
      "Sales and marketing: Keep track of key dates in your sales and marketing campaigns",
      "Human resources: Manage your organization's events, vacation schedule, and year-end reviews",
    ],
    whatsNew: {
      version: "4.0.4.1",
      items: [
        "Resolve the event color issue",
        "Resolve the localization error",
        "Resolve the drill through event",
        "Resolve the initial message issue during visual rendering",
        "Resolve the duplicate data color issue",
        "Resolve the Today persistence issue",
        "Add dynamic cell color configuration option",
        "Add weekend toggle configuration to show/hide weekends",
      ],
    },
    appSourceProductId: "WA104381844",
    pbiReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiYzc2NjI4M2QtYmRhMC00YTc1LWIwOTktNDA2YjBiYTNmNjkzIiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
  {
    slug: "circular-gauge",
    productName: "Circular Gauge by MAQ Software",
    tagline: "Illustrate your progress toward goals in a pie or donut chart | Power BI certified",
    description:
      "Showcase task progression with Circular Gauge by MAQ Software. This visual enables you to display progress as an actual value or as a percentage of the target value. You can also pick between displaying the information in a pie or donut chart format and setting a threshold value.",
    benefitsLabel: "Key benefits",
    benefits: [
      "One color illustrates actual progress while another displays a set target",
      "Ability to display percentage of progress against a set target",
      "Customizable text size and ring size",
    ],
    useCasesLabel: "Use cases",
    useCases: [
      "Sales: Compare your actual yearly sales to a pre-set target",
      "Marketing: Display key performance metrics such as target conversions and impressions in relation to the actual values",
      "Human resources: Track the success of internal campaigns by comparing the total number of employees to the amount that have been onboarded",
    ],
    whatsNew: { version: "4.0.0", items: ["Enabled the context menu"] },
    appSourceProductId: "WA104380837",
    pbiReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiMjQ2YzhkNTktYTgzNS00Yzc3LTgwNTgtNjJiNzc2N2E2MDczIiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9",
  },
];

export function findVisualGuideContent(slug: string): VisualGuideContent | undefined {
  return visualGuideContent.find((c) => c.slug === slug);
}

export function appSourceUrl(productId: string): string {
  return `https://appsource.microsoft.com/en-us/product/power-bi-visuals/${productId}?tab=Overview`;
}

/**
 * Resolve the Power BI publish-to-web report URL for a visual slug. Looks up
 * the authored content first; future visuals without long-form copy can be
 * added to the optional fallback map below.
 */
const visualGuidePbiReportUrlFallback: Record<string, string> = {};

export function findVisualPbiReportUrl(slug: string): string | undefined {
  return findVisualGuideContent(slug)?.pbiReportUrl ?? visualGuidePbiReportUrlFallback[slug];
}
