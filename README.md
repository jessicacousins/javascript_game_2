# Pizza App Software

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

## Proprietary Software License Agreement

Copyright (c) 2024, _Jessica Cousins_

**All rights reserved.**

This software and associated documentation files (the "Pizza App Software") are the proprietary information and valuable intellectual property of Jessica Cousins and are provided under the following license terms:

### Application Process for License Grant

Jessica Cousins grants a revocable, non-exclusive, non-transferable, limited license to use the Pizza App Software upon successful completion of an application process, solely for personal or internal business purposes. This license is subject to your compliance with the terms of this Agreement and the successful completion of the application process outlined below.

The specifics of the application process, including submission details and criteria for approval, are available upon request. Applicants must provide accurate and complete information during the application process. Misrepresentation or failure to provide required information may result in the denial of the application or termination of the license.

### Restrictions

**You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit the Pizza App Software without the prior written permission of Jessica Cousins, which may be granted as part of the application process for specific uses.**

#### Attribution

You must acknowledge the copyright and proprietary rights of Jessica Cousins in all copies of the Pizza App Software and any public use thereof.

### No Resale or Redistribution

You are not permitted to sell, resell, rent, lease, distribute, sublicense, or otherwise make the Pizza App Software available to any third party without undergoing a separate application process for such redistribution, subject to approval by Jessica Cousins.

### Termination

This license is effective until terminated. Your rights under this license will terminate automatically without notice from Jessica Cousins if you fail to comply with any term(s) of this license or if you provide false information during the application process. Upon termination, you must cease all use of the Pizza App Software and destroy all copies, full or partial, of the Pizza App Software.

### Warranty Disclaimer

The Pizza App Software is provided "as is," without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, and noninfringement.

### Limitation of Liability

In no event shall Jessica Cousins be liable for any claim, damages, or other liability, whether in an action of contract, tort, or otherwise, arising from, out of, or in connection with the Pizza App Software or the use or other dealings in the Pizza App Software.

### Governing Law

This Agreement shall be governed by and construed in accordance with the laws of [Your Country/State], without giving effect to any principles of conflicts of law.

### Application and Contact Information

For information on the application process or to apply for a license, please contact Jessica Cousins. Ensure that you provide all required information as specified in the application guidelines.

**By using the Pizza App Software, you acknowledge that you have read this Agreement, understand it, and agree to be bound by its terms and conditions.**

## Contributing:

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
