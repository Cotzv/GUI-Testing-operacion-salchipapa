module.exports = {
    default: [
        "tests/features/**/*.feature",
        "--require tests/support/**/*.ts",
        "--format json:reports/cucumber_report.json",
        "--format @cucumber/pretty-formatter",
        "--publish-quiet"
    ].join(" ")
};
