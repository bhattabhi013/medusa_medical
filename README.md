# MediSwiss

![mediSwiss](https://user-images.githubusercontent.com/47862474/197398806-7156d524-81f6-463a-8da7-c83d6c7c9425.png  width=140px height=110px)

DEMO LINK

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
It is a medicine store which offers easy and smooth ordering and delivery of medicines across the country to patients recuperating from
ailments. The project has some future scopes yet to be touched upon like payment portal and login, registration page. 

### Preview


## Set up Project

### Prerequisites

Before running the applicaiton your system must have: 

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
