const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HhrtvDhnHGYb3OJYABCTMiRYzrgPpLUaJMWH53adK8y9Ge8qe1W83AMKc1pk5Kb8VsH2qnjsTuctlkL4CZ2gi4300lvxvIt1T') 


//API

// - App config

const app = express();

// - Middlewares

app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received Boo!!! FOR THIS AMONT>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd"
  });

  //OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
});


// - Listen command
exports.api = functions.https.onRequest(app)

//http://localhost:5001/clone-36a38/us-central1/api 