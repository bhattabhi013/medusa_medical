# SwagNation

<img width="252" alt="image" src="https://user-images.githubusercontent.com/47862474/197412677-f7511542-e68b-4a3f-b44e-0a4b684cb2bf.png">


###  DEMO LINK
- https://www.youtube.com/watch?v=bzoiAzrnp1Y

## About

### Participants

| Name            |   Github Handle       |       Discord Handle |
|-----------------|-----------------------|----------------------|
| Abhishek Bhatt  |   bhattabhi013        |  Abhi_bhatt#5685     |
| Vanshita Mathur |   Vanshiii203         |  vanshita_mathur#7511|
| Mohit Namdev    |   MohitNamdev22       |  Mohit Namdev#1188   |
| Shravani Kaware |   ShravaniAK          |  shravani kaware#8892|
| Shreya Sarkar   |   zugzwang03          |  Shreya Sarkar#5309  |

### Description

An open source ecommerce web application built using Medusa and React. It includes products screen,product details, cart and checkout.
It is a swag store which offers easy and smooth ordering and delivery of swags across the country to the fashion and tech enthusiasts. The project has some future scopes yet to be touched upon like payment portal and login, registration page. 

### Preview

- Home 
<img width="753" alt="image" src="https://user-images.githubusercontent.com/47862474/197413247-d88fe9ea-fb31-449b-bba0-599bcbaf2f8e.png">

- Contact Us
<img width="831" alt="image" src="https://user-images.githubusercontent.com/47862474/197411884-24089749-da49-4086-995c-dee366709218.png">

- About Us
<img width="759" alt="image" src="https://user-images.githubusercontent.com/47862474/197413382-9f06e776-f4a9-4256-9717-66160fddc9e2.png">

- Product Details
<img width="447" alt="image" src="https://user-images.githubusercontent.com/47862474/197411924-085d25d4-b952-4b8e-bbe6-67307f0927ad.png">

- Checkout 
<img width="844" alt="image" src="https://user-images.githubusercontent.com/47862474/197413685-4781001a-d955-4aa9-b8df-035ebfb25252.png">

## Set up Project

### Prerequisites

Before running the application your system must have: 

1. Node.js v16.9.0 or greater installed on your machine
2. Medusa fully set up

### Install Project

1. Clone the repository:

```bash
git clone https://github.com/bhattabhi013/medusa_medical.git
```

2. Change directory and install dependencies:

##### For the server:
```bash
cd server
npm install
npm start or medusa develop
```

##### For the storefront:
```bash
cd storefront
npm install
npm start
```

##### For the admin:
```bash
cd admin
npm install
npm start
```

- Resolve CORS error: 
Change the localhost's port number in `medusa-config.js` file in server. <br/>
Ex: `const STORE_CORS = process.env.STORE_CORS || "http://localhost:3000 "`

# Resources

In this section, include links to Medusa’s GitHub repository and documentation. If you think there are any specific documentation pages that can be helpful to understand your submission more, include these specific pages.

For example:

- [Medusa’s GitHub repository](https://github.com/medusajs/medusa)
- [How to Create Services](https://docs.medusajs.com/advanced/backend/services/create-service)
- [ReactJs](https://reactjs.org/docs/getting-started.html)

If you also used any other framework, service, or tool, you can include some links to helpful resources related to those tools.
