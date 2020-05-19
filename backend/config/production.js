module.exports = {
  env: 'production',

  /**
   * PostgreSQL configuration for Sequelize.
   * More info: https://sequelize.org/v5/manual/getting-started.html#setting-up-a-connection
   */
  // database: {
  //   username: 'postgres',
  //   dialect: 'postgres',
  //   password: 'password.1',
  //   database: 'postgres',
  //   host: 'postgres',
  //   logging: console.log,
  // },

  /**
   * MySQL configuration for Sequelize.
   * More info: https://sequelize.org/v5/manual/getting-started.html#setting-up-a-connection
   */
  database: {
    username: 'root',
    dialect: 'mysql',
    password: 'password.1',
    database: 'production',
    host: '/cloudsql/kjs-sql',
    logging: console.log,
    migrationHost: '35.198.204.157',
  },

  /**
   * Configuration to allow email sending used on:
   * backend/src/services/shared/email/emailSender.js
   *
   * More info: https://nodemailer.com
   */
  email: {
    from: '<insert your email here>',
    host: null,
    auth: {
      user: null,
      pass: null,
    },
  },

  /**
   * Client URL used when sending emails.
   */
  clientUrl:
    'https://<insert project id here>.firebaseapp.com',
};
