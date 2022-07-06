// The setup const to run the server
const express = require("express");
const bodyParser = require("body-parser");
const mailchimp = require("@mailchimp/mailchimp_marketing");
const app = express();
const port = 3000;

// Middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


// Gets the instial html page for the sign up
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html")
})

// Take the input from user an send to mailchimp
app.post("/", (req, res) => {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const apiKey = process.env.apiKey
  const serverPrefix = process.env.serverPrefix

  mailchimp.setConfig({
    apiKey: apiKey,
    server: serverPrefix,
  });

  const listId = process.env.listId;

  const subscribingUser = {
    firstName: firstName,
    lastName: lastName,
    email: email
  };
  console.log(subscribingUser.firstName, subscribingUser.lastName, subscribingUser.email)

  async function run() {
    try {
      const response = await mailchimp.lists.addListMember(listId, {
        email_address: subscribingUser.email,
        status: "subscribed",
        merge_fields: {
          FNAME: subscribingUser.firstName,
          LNAME: subscribingUser.lastName,
        }
      });

      console.log(`Successfully added contact as an audience member. The contact's id is ${response.id}.`)

      res.sendFile(__dirname + "/success.html");
      console.log(`This user's subscription status is ${response.status}.`);
    }
    catch (e) {
      if (e.status >= 400) {

        res.sendFile(__dirname + "/fail.html");
        console.error(`There was an issue with adding this user`, e);
      }
    }
  }
  run();
})

// Redirecting the failure page button back to the sign up page
app.post("/fail", (req, res) => {
  res.redirect("/");
})

// To get the server to listen
app.listen(process.env.PORT || port, (res, req) => {
  console.log(`Server is running on port ${port}.`);
})

