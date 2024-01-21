# Pizza Menu

## Description

This interactive flip menu displays the different order items for a pizza restaurant.

frontend - HTML CSS JavaScript
backend - MongoDB

## Dependencies

- Bootstrap
- Google Fonts: 'Abril Fatface'
- `npm install express mongoose body-parser cors`
- `npm install mongodb`
- `npm install dotenv`

## Frontend

- Open the extension "Live Server"

## Backend

Run the backend server with:

```
node server.js
```

## Tested with Postman with a POST request at http://localhost:5000/api/orders

```
{
  "name": "John Doe",
  "address": "123 Maple Street",
  "contact": "555-1234",
  "instructions": "Leave on the porch",
  "items": [
    {
      "pizza": "cheese",
      "quantity": 2
    },
    {
      "pizza": "pepperoni",
      "quantity": 1
    }
  ],
  "total": 50.97
}

```

## TODO:

- add more pizza options
- pop out full menu - link items from both menu options together
- generate AI photos for each menu item
- checkout layout form style
- flip frontend to Next.js
- add Stripe payments options
