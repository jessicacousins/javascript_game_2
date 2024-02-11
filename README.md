# Pizza Menu

## Description

This interactive flip menu displays the different order items for a pizza restaurant.

- frontend - HTML CSS JavaScript
- backend - MongoDB

## Dependencies

- Bootstrap
- Google Fonts: 'Abril Fatface'
- Google Icons
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
- pop out full menu - style it
- generate AI photos for each menu item
- checkout layout form style
- flip frontend to Next.js
- add Stripe payments options
- create logo

## License Info:

[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)  
_Copyright (c) 2024 Jessica Cousins_

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Contributing:

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
