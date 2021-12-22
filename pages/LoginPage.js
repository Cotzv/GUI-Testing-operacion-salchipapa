const { Selector } = require('testcafe');

function select(selector) {
  return Selector(selector).with({ boundTestRun: testController })
}

exports.LoginPage = {
  EmailInput: () => {
    return select('#user');
  },

  AtlassianLoginButton: () => {
    return select('#login');
  },

  PasswordInput: () => {
    return select('#form-login input#password');
  },

  LoginButton: () => {
    return select("#login-submit");
  }
}
