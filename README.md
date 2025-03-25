
<h1 align="center"><a href="" target="_blank">Inuamkulima</a></h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/kimanicharles911/emmethub_nodejs_modules/blob/master/LICENSE.txt" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> This is the Repository of an Inuamkulima.


#### Setup/Installation Requirements
##### Install Dependencies

```
npm install
```

#### API Usage

| HTTP method      |   EndPoint   |   Public Access   |   Example   |
| ---- |:---- |:---- |:---- |
| POST     | /api/v1/cars/car    |  TRUE    |  Find example in routes/index.js    |
| GET     | /api/v1/cars/car    |  TRUE    |  https://cruzcarsautomartmern.herokuapp.com/api/v1/cars/car    |
| GET     | /api/v1/cars/car?id=61f3bf1ec27ace1490f0b84b    |  TRUE    |  https://cruzcarsautomartmern.herokuapp.com/api/v1/cars/car?id=61f3bf1ec27ace1490f0b84b    |
| GET     | /api/v1/cars/search?carAge=9    |  TRUE    |  https://cruzcarsautomartmern.herokuapp.com/api/v1/cars/search?carAge=9    |
| PATCH     | /api/v1/cars/car/:id    |  TRUE    |  Find example in routes/index.js    |
| DELETE     | /api/v1/cars/car/:id    |  TRUE    |  https://cruzcarsautomartmern.herokuapp.com/api/v1/cars/car/61f37614e24f30ca0558cc41    |


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
MONGODB_PASSWORD=password123
```

##### Development Usage

```sh
npm run dev
```

<br>
## License and Copyright Information.

This project is MIT licensed see [my MIT LICENSE](https://github.com/kimanicharles911/inuamkulima/blob/master/LICENSE.txt) for details.<br />
Copyright © 2022 [Charles Kimani](https://github.com/kimanicharles911).

### Author

###### 👤 **Charles Kimani**

* Website: [author.emmethub.com](https://author.emmethub.com)
* Github: [@kimanicharles911](https://github.com/kimanicharles911)
* LinkedIn: [@kimanicharles](https://linkedin.com/in/kimanicharles)

#### Show your support

Give a ⭐️ if this project helped you!

***