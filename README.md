# Module-13-Challenge
Bootcamp Module 13 Challenge - E-Commerce Back End

The challenge is to build the back end for an e-commerce site. You’ll take a working Express.js API and configure it to use Sequelize to interact with a MySQL database. 

# User Story
- AS A manager at an internet retail company
- I WANT a back end for my e-commerce website that uses the latest technologies
- SO THAT my company can compete with other e-commerce companies

# Acceptance Criteria
- GIVEN a functional Express.js API
- WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
- THEN I am able to connect to a database using Sequelize
- WHEN I enter schema and seed commands
- THEN a development database is created and is seeded with test data
- WHEN I enter the command to invoke the application
- THEN my server is started and the Sequelize models are synced to the MySQL database
- WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
- THEN I am able to successfully create, update, and delete data in my database

# Installation

run

```
mysql source schema.sql
```

on mysql server

```
npm install
```

on the root folder.

run

```
node seeds/index.js
```

to seed some data. Then run

```
node server.js
```

# Project Links:
[Video Directory](https://github.com/momentes/13-E-Commerce-BackEnd/tree/main/Video)

**Video Link**
[Video Link 1](https://drive.google.com/file/d/1ePPgXHo8SggwAV_CKqDJBzJZt4ZYyxPF/view?usp=sharing)

[Video Link 2](https://drive.google.com/file/d/1ePPgXHo8SggwAV_CKqDJBzJZt4ZYyxPF/view?usp=sharing)

**Repo Link**
https://github.com/momentes/13-E-Commerce-BackEnd

**Screenshot**

<img src="/lib/assets/images/1.png" width=85%>


# License

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
<a href = "https://opensource.org/licenses/MIT">License Link</a>
<a href = "https://gist.github.com/ckib16/8732561535ed766cd6b8">MIT Guide</a>

Thank you
End.        
<img src="/lib/assets/images/business-cat1.jpg" width=15%>