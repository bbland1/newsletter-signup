# Mailchimp Newsletter Signup Page

![License](https://img.shields.io/github/license/bbland1/newsletter-signup?style=plastic)
![Version](https://img.shields.io/github/package-json/v/bbland1/newsletter-signup?style=plastic)
![Language](https://img.shields.io/github/languages/top/bbland1/newsletter-signup?style=plastic)

This is a newsletter signup page that utilizes mailchimp to subscribe the users to the newsletter and store their name and emails. There is no newsletter attached it is just a sign up form. At this time it directs to a success page if the subscriber is new and uses a real email. If the email seems fake or the user is already subscribe at this time it will go to the same fail page.


## Requirements

Install all the dependencies of this project by using the [package.json](./package.json). For this project you will need to have mailchimp developer account set that up beforehand.

## Built With

* [dotenv](https://www.npmjs.com/package/dotenv)
* [Bootstrap 5](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
* [Express.js](https://expressjs.com)
* [Mailchimp](https://mailchimp.com/developer/)

### Local Development

1. Download and install the LTS version of [Node.js](https://nodejs.org/en). In this project [nvm](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) was used for the installing of a node version.
2. Create mailchimp developer account.
3. Install the project requirements

    ```shell
    npm install
    ```

4. Create a `env` file based on the `.env.sample` file and change `apiKey`, `listId`, `serverPrefix` to your specific settings to connect to mailchimp.

5. Run the app

    ```shell
    node app.js
    ```

### Deployment

This project was originally deployed with Heroku. While it still could have been deployed there with the removal of their free tier it was moved to [Render](https://render.com). Typically deployment of an Express app would follow the process listed [here](https://render.com/docs/deploy-node-express-app), but this was a migration following the steps [here](https://render.com/docs/migrate-from-heroku). The migration process was also very straight forward and while you will most likely follow typical deployment just incase there is something you would like to migrate to Render yourself.  

### License

See the [LICENSE](./LICENSE) file for license rights and limitations (MIT).
