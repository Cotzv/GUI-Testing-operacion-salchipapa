const fs = require('fs');
const createTestCafe = require('testcafe');
const testControllerHolder = require('../support/testControllerHolder');
const { AfterAll, setDefaultTimeout, Before, After, Status } = require('cucumber');
const errorHandling = require('../support/errorHandling');
const TIMEOUT = 20000;

let isTestCafeError = false;
let attachScreenshotToReport = null;
let cafeRunner = null;
let n = 0;

function createTestFile() {
    fs.writeFileSync('test.js',
        'import errorHandling from "./features/support/errorHandling.js";\n' +
        'import testControllerHolder from "./features/support/testControllerHolder.js";\n\n' +

        'fixture("fixture")\n' +

        'test\n' +
        '("test", testControllerHolder.capture)')
}

function runTest(iteration, browser) {
    createTestCafe('localhost', 1338 + iteration, 1339 + iteration)
        .then(function (tc) {
            cafeRunner = tc;
            const runner = tc.createRunner();
            return runner
                .src('./test.js')
                .browsers(browser)
                .run({ skipJsErrors: true })
                .catch(function (error) {
                    console.error(error);
                });
        })
        .then(function (report) {
        });
}


setDefaultTimeout(TIMEOUT);

Before(function () {
    runTest(n, this.setBrowser());
    createTestFile();
    n += 2;
    return this.waitForTestController.then(function (testController) {
        return testController.maximizeWindow();
    });
});

After(function () {
    fs.unlinkSync('test.js');
    testControllerHolder.free();
});

After(async function (testCase) {
    if (testCase.result.status === Status.FAILED) {
        isTestCafeError = true;
        errorHandling.addErrorToController();
        await errorHandling.ifErrorTakeScreenshot(testController)
    }
});

AfterAll(function () {
    let intervalId = null;

    function waitForTestCafe() {
        intervalId = setInterval(checkLastResponse, 500);
    }

    function checkLastResponse() {
        if (testController.testRun.lastDriverStatusResponse === 'test-done-confirmation') {
            cafeRunner.close();
            process.exit();
        }
    }

    waitForTestCafe();
});

const getIsTestCafeError = function () {
    return isTestCafeError;
};

exports.getIsTestCafeError = getIsTestCafeError;
