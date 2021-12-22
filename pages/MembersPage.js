const { Selector } = require('testcafe');

function select(selector) {
  return Selector(selector).with({ boundTestRun: testController })
}

exports.MembersPage = {
  DropDownWorkspace: () => {
    return select('#home-team-tab-section-6196ab77b8389276d2c3705e');
  },

  MembersTab: () => {
    return select('[data-test-id="home-team-members-tab"]');
  },

  InviteButton: () => {
    return select('[class=org-members-actions-add]');
  },

  TextBoxUser: () => {
    return select("[class='search-member js-autofocus']");
  },

  UserSelected: () => {
    return select("div.member-wrapper");
  },

  AddButton: () => {
    return select("[class='nch-button nch-button--primary full']")
  }
}
