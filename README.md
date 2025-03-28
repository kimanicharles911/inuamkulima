
<h1 align="center"><a href="" target="_blank">Inuamkulima</a></h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/kimanicharles911/emmethub_nodejs_modules/blob/master/LICENSE.txt" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> This is the Repository of Inuamkulima.

> Nodejs could not accomodate a success reponse code of 000 hence I used 200 and 201.


#### Setup/Installation Requirements
##### Install Dependencies

```
npm install
Collect MongoDB connection password on email
```

#### API Usage

| HTTP method | EndPoint |
| ---- |:---- |
| POST  | /api/products |
| POST  | /api/transactions |
| GET  | /api/products |
| POST  | /api/farmer |
| GET  | /api/farmers |
| POST  | /api/merchant |
| GET  | /api/merchants |



##### Request Body examples
* /api/products

```sh
{
  "name": "Tomatoes",
  "category": "Vegetables",
  "price": 5.99,
  "description": "Fresh tomatoes"
}

```

* /api/transactions

```sh
{
  "productName": "Fertilizer",
  "quantity": 10,
  "pricePerUnit": 15.5,
  "totalPrice": 155.0
}
```


* /api/farmer
```
{
  "name": "Kimani Waithaka",
  "location": "Nairobi, Kenya",
  "contact": "+254712345678",
  "walletBalance": 500.00,
  "mpesaMobileNumber": "+254712345678",
  "bankAccount": "12345678901234",
  "crops_and_livestock": "Maize, Cows, Goats"
}
```

* /api/merchant
```
{
  "name": "AgroVet Supplies",
  "location": "Eldoret, Kenya",
  "contact": "+254789123456",
  "bankAccount": "98765432101234",
  "products": "Fertilizers, Pesticides, Animal Feeds"
}
```



#### Setup/Installation Requirements

##### Install Dependencies

```sh
sudo apt install nodejs #(for linux platform)
npm install
```

* Add the below line in your package.json file as one of the scripts value:
```sh
"dev": "nodemon app.js"
```

##### Set up your MongoDB password
* Create a .env file in the root directory
* Then add the below line replacing the name password123 with the MongoDB password sent to your email.
```sh
MONGODB_PASSWORD=collect_it_from_submission_email
```

##### Development Usage

```sh
npm run dev
```


***