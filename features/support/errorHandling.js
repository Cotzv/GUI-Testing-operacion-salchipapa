const testcafe = require('testcafe');
const hooks = require('../support/hooks');

exports.addErrorToController = function () {
    testController.executionChain
        .catch(function (result) {
            const errAdapter = new testcafe.embeddingUtils.TestRunErrorFormattableAdapter(result, {
                testRunPhase: testController.testRun.phase,
                userAgent: testController.testRun.browserConnection.browserInfo.userAgent,
            });
            return testController.testRun.errs.push(errAdapter);
        });
};
