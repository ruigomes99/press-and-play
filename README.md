<br>
<p align="center">
<a href="https://www.uminho.pt" target="_blank"><img src="https://i.imgur.com/FXQo8OL.png" alt="University Of Minho"></a>
<a href="https://www.eng.uminho.pt" target="_blank"><img src="https://i.imgur.com/WABo4st.png" alt="Engineering School"></a>
<br><a href="http://www.dsi.uminho.pt" target="_blank"><strong>Information Systems Department</strong></a>

<h2 align="center">Web Programming - MIEGSI 2019/2020</h2>

<p align="center"><a href="https://press-and-play.herokuapp.com" target="_blank"><img src="https://i.imgur.com/FM3cgPV.png" alt="Press&Play"></a></p>
Press&Play is an application designed only for mobile with the objective of sharing spaces to rent for one hour so you can play football with your friends or strangers.
<br>

## Table Of Contents
- [Overview](#overview)
  - [The Problem](#problem)
- [Tech Stack](#tech)
- [Setup Your Workstation](#setup)
- [Configuration Options](#config)
- [Quick Start](#qstart)
- [Demo](#demo)
- [Authors](#authors)
- [Contribution](#contribution)
- [License](#license)

## Overview <a name = "overview"></a>
The 2019/2020 edition of the subject Web Programming (Programação para a WEB - PW) is intended to develop an application web/mobile system (PWA) that supports the management and realization of outdoor activity.

### The Problem <a name = "problem"></a>
The company “Task4Society” is responsible for organizing various outdoor activities and needs a web application that allows:
- Help manage each of their activities (admins and spaces)
- The participant's interaction with their activities

Our group is responsible for the Street Football activities. So, we decide to call the application "Press&Play" and split our group into three different teams. One team is responsible for the administrators part, another for space management and our team for managing participants/customers.

This is the repository of the exclusive application for smartphones using PWA technology for the participant's management.

## Tech Stack <a name = "tech"></a>
<details>
           <summary>Front-End</summary>
           <ul>
                <li>HTML5</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Fetch for API calls</li>
            </ul> 
</details>
<details>
           <summary>Back-End</summary>
           <ul>
                <li>NodeJs</li>
                <li>REST API</li>
                <li>Model-View-Controller</li>
                <li>MySQL</li>
                <li>Google Cloud Platform (Google OAuth2)</li>
            </ul> 
</details>
<details>
           <summary>DevOps</summary>
           <ul>
                <li>AWS Cloud9</li>
                <li>Git</li>
                <li>Heroku</li>
            </ul> 
</details>

## Setup Your Workstation <a name = "setup"></a>
- Install Node.js and npm to your local workstation
- Install MySQL Server to your local workstation

## Configuration Options <a name = "config"></a>
- Import our [example DataBase](https://github.com/ruigomes99/press-and-play/blob/main/config/MySQLDump.sql) to your local MySQL Server
- Configure your '.env' file
```shell
MYSQL_HOST = 127.0.0.1
MYSQL_DB = NAME
MYSQL_USER = USER
MYSQL_PASS = PASSWORD
EMAIL_USER = GMAIL
EMAIL_PASS = PASSWORD
BACK_URL = http://127.0.0.1:8080
GOOGLEAUTH_ID = ID
GOOGLEAUTH_SECRET = SECRET
```

## Quick Start <a name = "qstart"></a>
1. Clone the repository:
```shell
git clone https://github.com/ruigomes99/press-and-play.git
```
2. Change directory:
```shell
cd press-and-play
```
3. Install dependencies:
```shell
npm install
```
4. Start the server:
```shell
npm start
```
5. View the website at: http://127.0.0.1:8080

6. Install the PWA for a better experience

## Demo <a name = "demo"></a>
We have deployed a demo version so anyone can test the application without needing to install anything.
<br />The application is available at the following URL: https://press-and-play.herokuapp.com
<br />*Remember, this is just a demo and it's running on free services, so it has some limitations and it can have long loading times.*
<br />*The use of this demo is entirely at your own risk.*

## Authors <a name = "authors"></a>
 - [José Antunes](https://github.com/jose28antunes) (Full-Stack Dev)
 - [Rui Bernardo](https://www.linkedin.com/in/bernardo-rui) (Full-Stack Dev)
 - [Carlos Gonçalves](https://github.com/Carlosgoncalves00) (Front-End Dev)
 - [João Teixeira](https://github.com/JoaoTeixeira89218) (Front-End Dev)
 - [Manuel Ribeiro](https://github.com/ManuelRibeiro89247) (Front-End Dev)
 - [Joáo Guedes](https://github.com/JoaoGuedes01) (Back-End Dev)
 - [João Pedro Gonçalves](https://github.com/joaopedrofg7) (Back-End Dev)
 - [Rui Gomes](https://github.com/ruigomes99) (Back-End Dev)

## Contribution <a name = "contribution"></a>
 - [Filipe Portela](https://filipeportela.com/)
 - [João Pedro Silva](https://pt.linkedin.com/in/joaopedrofdasilva)

## License <a name = "license"></a>
- [MIT](https://choosealicense.com/licenses/mit/)
