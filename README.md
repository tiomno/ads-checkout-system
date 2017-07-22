Coding Exercise :: Ads Checkout System
=========================

This is my approach to the solution of a simple checkout system for advertising products.

> For the completion of this task, I decided to use React +Redux for the front end and Express.js with MongoDB for the backend.

### Requirements

* Node.js 7.6+ and NPM
* A local or remote MongoDB instance up and running

### Overview

I decided to approach the solution of this task with the factory components technique as described here <https://medium.com/javascript-scene/baby-s-first-reaction-2103348eccdd> by Eric Elliott but I would not mind using class components if that is the team style. There are some cases where it is easier to have a class component if the state needs to be handled at a component level. However, I try to use stateless components as much as possible and let Redux handle the app state.

My code style comes from jQuery, WordPress and Laravel with the use of a lot of spaces. But I feel confident writing, reading and reviewing code in any code style chosen by the team.

### Setup Instructions

Clone the project:

```
git clone https://github.com/tiomno/ads-checkout-system
cd ads-checkout-system/server
```

Run `npm install` in the server folder:

```
npm install
```

Make sure you have an instance of MongoDB running. For a local server, the configuration is ready to connect to `mongodb://localhost:27017/ads_checkout_db`. If you need to set a different path, you can do so by editing the files */server/seed.json* and */server/variables.env*. Those files would not have been pushed to this repo in a production environment, but I added them here for your convenience.

Everything should be ready to populate the DB and start the API server. Please, keep this terminal open.

```
npm run server
```

In a new terminal run `npm install` and `npm start` **from the root of the project repo** to get a local web server running to serve the front end of the application: 

```
npm install
npm start
```

To access the web app open <http://localhost:3000/>

### Tests

To run the tests, from the root of the repo:

```
npm test
```

### Limitations

- In the **Pricing Rules** option, only one deal or discount can be applied to a product.
- There is no validation, no real sessions or best security practices applied.
- The code base is lacking proper unit testing, the set-up and basic configuration is passing the test, though.

### License

<http://unlicense.org>
