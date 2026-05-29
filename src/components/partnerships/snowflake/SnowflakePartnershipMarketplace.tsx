import { Fragment } from "react";
import { PartnershipMarketplace } from "../PartnershipMarketplace";

const bulletGroups = [
    {
        title: "Core Capabilities",
        items: [
            <Fragment key="row-count"><strong>Row Count Check:</strong> Validates if row counts between source and target tables are within a +/-5% tolerance.</Fragment>,
            <Fragment key="grain"><strong>Grain Check:</strong> Ensures the uniqueness of primary keys across both source and destination tables.</Fragment>,
            <Fragment key="kpi"><strong>KPI Check:</strong> Compares the results of custom KPI SQL logic or aggregated column values between the source and destination. Passes if the difference is within +/-5%.</Fragment>,
        ],
    },
    {
        title: "Scheduling Support",
        items: [
            "Test cases are scheduled using Snowflake tasks for automatic execution.",
            "Offers full CRON-style configuration with time zone support.",
            'Automatically log results, including comparison values, pass/fail status, and metadata for analysis in dashboards or the "Show Test Cases" view.',
        ],
    },
    {
        title: "User Interface Capabilities",
        items: [
            <Fragment key="add"><strong>Add Test Case:</strong> Intuitive interface to define test parameters (e.g., databases, tables, columns, SQL queries).</Fragment>,
            <Fragment key="show"><strong>Show Test Cases:</strong> Displays existing test cases based on selected filters like table type and test type.</Fragment>,
            <Fragment key="execute"><strong>Execute Test Case:</strong> On-demand Execution of test cases.</Fragment>,
            <Fragment key="view"><strong>View Test Results:</strong> Offers detailed visibility into execution status, timestamps, result IDs, and pass/fail outcomes, enabling historical trend analysis.</Fragment>,
            <Fragment key="schedule"><strong>Schedule Test Cases:</strong> Allows to setup a customized schedule to run the checks automatically.</Fragment>,
        ],
    },
];

export function SnowflakePartnershipMarketplace() {
    return (
        <PartnershipMarketplace
            eyebrow="Marketplace"
            title="Snowflake Data Validator"
            sectionId="snowflake-marketplace"
            intro="Begin your RTI journey today"
            bulletGroups={bulletGroups}
            ctaLabel="Learn more"
            ctaHref="https://app.snowflake.com/marketplace/listing/GZ1MBZD8CA9/maq-software-data-validator?originPage=app"
        />
    );
}