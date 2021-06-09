const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "naveenpost",
        mongodb_pswd: "9312802500",
        mongodb_database: "my-site-dev",
      },
    };
  }
  return {
    env: {
      mongodb_username: "naveenpost",
      mongodb_pswd: "9312802500",
      mongodb_database: "my-site-prod",
    },
  };
};
