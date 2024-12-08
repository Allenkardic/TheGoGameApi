# to-do

This project is designed to be a simple customer support todoing system.

---

## Requirements

For development, you will only need Node.js and a node global package manager, Yarn, installed in your environement.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find
  git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and
  the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v21.7.3

    $ npm --version
    10.5.0

If you need to update `npm`, you can make it using `npm`!After running the following command, just open again the
command line.

    $ npm install npm -g

###

### Yarn installation

After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone 
    $ cd to-do
    $ yarn 

## Configure app

Open `to-do/.env` then edit it with your settings. You will need:

- MONGO_URI;
  Mongo db connection string e.g mongodb://0.0.0.0:27017/to-do

- PORT;
  Port for app to run on e.g 2020(any port of your choice)


## Running the project

Run the following commands

    $ yarn build
    $ yarn start:dev


## Running the Unit Tests

Run the following commands

    $ yarn test




## Project Structure

```
to-do
    |--seeds\               # Seed Data
    |--src\
        |--bin  
            |--www
                |--index.ts             # App entry point
        |--config\              # App config
        |--controllers\         # Route controllers (controller layer)
        |--entities\            # Mongo Entities
        |--interfaces\          # App Interfaces (types)
        |--middlewares\         # Custom express middlewares
        |--repositories\        # Repositories( data layer)
        |--routes\              # routes
        |--seed-config\         # seed init and config
        |--services\            # service layer
        |--utils\               # utils
        |--validators\          # validators
        |--app.ts               # Express app
    |--test\                # testDirectory
```






## REST API DOCUMENTATION

Once the application is up and running, you can call the endpoints.
The REST API to to-do service is described below.

### Health

#### Request

`GET /health/`

    curl --location 'localhost:1234/health/' \
    --header 'Content-Type: application/json' \
    --header 'Accept: application/json'

#### Response

    HTTP Status: 200 OK
    Content-Type: application/json
    

    Response Body
    {
      "status": "OK"
    }

### Create Todo

This endpoint is an authenticated endpoint. \
It requires an access token with a role with the following user types.
- USER
#### Request



`POST /todo/`

    curl --location 'localhost:1234/todo' \
    --header 'Content-Type: application/json' \
    --header 'Accept: application/json' \
    --header 'Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDM1MWI0OTM2OTcxZWNiMDBjNjYwZSIsImVtYWlsIjoibGFsZXllb2xhMUBncnIubGEiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTY5MTYzMTUxMX0.EEaeYHDn7YgoI6geXYBNxApakGyNpaHWT8sUyQrmXqw' \
    --data ' \
    {
      "title": "titleeoyaa",
      "body": "passwordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpassword"
    }'

#### Response

    HTTP Status: 201 Created
    Content-Type: application/json
    

    Response Body
    {
      "title": "titleeoyaa",
      "body": "passwordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpassword",
      "status": "CREATED",
      "startedDate": "2023-08-10T13:14:26.642Z",
      "creatorId": "64d351b4936971ecb00c660e",
      "_id": "64d4e2ef3dbdff12e8c801e0",
      "comments": [],
      "createdAt": "2023-08-10T13:15:27.904Z",
      "updatedAt": "2023-08-10T13:15:27.904Z",
      "__v": 0
    }

### Get All User Todos
This endpoint is an authenticated endpoint. \
It requires an access token with a role with the following user types.
- USER

#### Request

`GET /todo/`

    curl --location 'localhost:1234/todo' \
    --header 'Content-Type: application/json' \
    --header 'Accept: application/json' \
    --header 'Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDM1MWI0OTM2OTcxZWNiMDBjNjYwZSIsImVtYWlsIjoibGFsZXllb2xhMUBncnIubGEiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTY5MTYzMTUxMX0.EEaeYHDn7YgoI6geXYBNxApakGyNpaHWT8sUyQrmXqw'

#### Response

    HTTP Status: 200 OK
    Content-Type: application/json
    

    Response Body
    [
      {
          "_id": "64d4e2df3dbdff12e8c801da",
          "title": "titlee",
          "body": "passwordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpassword",
          "status": "CREATED",
          "startedDate": "2023-08-10T13:14:26.642Z",
          "creatorId": "64d351b4936971ecb00c660e",
          "comments": [],
          "createdAt": "2023-08-10T13:15:11.926Z",
          "updatedAt": "2023-08-10T13:15:11.926Z",
          "__v": 0
      },
      {
          "_id": "64d4e2e63dbdff12e8c801dc",
          "title": "titlee",
          "body": "passwordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpassword",
          "status": "CREATED",
          "startedDate": "2023-08-10T13:14:26.642Z",
          "creatorId": "64d351b4936971ecb00c660e",
          "comments": [],
          "createdAt": "2023-08-10T13:15:18.672Z",
          "updatedAt": "2023-08-10T13:15:18.672Z",
          "__v": 0
      }
    ]

### Comment on a todo

This endpoint is an authenticated endpoint. \
It requires an access token with a role with the following user types.
- USER
- ADMIN
- AGENT
#### Request



`POST /todo/comment/`

    curl --location 'localhost:1234/todo/comment' \
    --header 'Content-Type: application/json' \
    --header 'Accept: application/json' \
    --header 'Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDM1MWI0OTM2OTcxZWNiMDBjNjYwZSIsImVtYWlsIjoibGFsZXllb2xhMUBncnIubGEiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTY5MTYzMTUxMX0.EEaeYHDn7YgoI6geXYBNxApakGyNpaHWT8sUyQrmXqw' \
    --data ' \
    {
      "todoId": "64d4edad3a5f9360f83f7b20",
      "content": "titttutuututututpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpassword"
    }'

#### Response

    HTTP Status: 200 Ok
    Content-Type: application/json
    

    Response Body
    {
      "_id": "64d4edad3a5f9360f83f7b20",
      "title": "settteettete",
      "body": "passwordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpassword",
      "status": "CREATED",
      "creatorId": "64d351b4936971ecb00c660e",
      "comments": [
          {
              "content": "titttutuututututpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpassword",
              "userId": "64d351b4936971ecb00c660e",
              "_id": "64d4ee0d3a5f9360f83f7b25"
          }
      ],
      "createdAt": "2023-08-10T14:01:17.752Z",
      "updatedAt": "2023-08-10T14:02:53.069Z",
      "__v": 0
    }

### Get a Todo by id
This endpoint is an authenticated endpoint. \
It requires an access token with a role with the following user types.
- USER
- ADMIN
- AGENT
#### Request

`GET /todo/id/:id`

    curl --location 'localhost:1234/todo/id/64d4e2df3dbdff12e8c801da' \
    --header 'Content-Type: application/json' \
    --header 'Accept: application/json' \
    --header 'Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDM1MWI0OTM2OTcxZWNiMDBjNjYwZSIsImVtYWlsIjoibGFsZXllb2xhMUBncnIubGEiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTY5MTYzMTUxMX0.EEaeYHDn7YgoI6geXYBNxApakGyNpaHWT8sUyQrmXqw'

#### Response

    HTTP Status: 200 OK
    Content-Type: application/json
    

    Response Body
    {
      "_id": "64d4e2df3dbdff12e8c801da",
      "title": "titlee",
      "body": "passwordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpassword",
      "status": "CREATED",
      "startedDate": "2023-08-10T13:14:26.642Z",
      "creatorId": "64d351b4936971ecb00c660e",
      "comments": [
          {
              "content": "oooososoosososs",
              "userId": "64d43f324c903f28bba47d99",
              "_id": "64d4f000efe8445076b5e303"
          },
          {
              "content": "oooososoosososs",
              "userId": "64d43f324c903f28bba47d99",
              "_id": "64d4f002efe8445076b5e307"
          },
          {
              "content": "oooososoosososs",
              "userId": "64d43f324c903f28bba47d99",
              "_id": "64d4f006efe8445076b5e30d"
          },
          {
              "content": "oooososoosososs",
              "userId": "64d351b4936971ecb00c660e",
              "_id": "64d4f00cefe8445076b5e315"
          }
      ],
      "createdAt": "2023-08-10T13:15:11.926Z",
      "updatedAt": "2023-08-10T14:11:24.240Z",
      "__v": 0
    }


### Process a todo
This endpoint is an authenticated endpoint. \
It requires an access token with a role with the following user types.

- AGENT
#### Request

`POST /todo/process/:id`
    
    curl --location --request POST 'localhost:1234/todo/process/64d4e2e63dbdff12e8c801dc' \
    --header 'Content-Type: application/json' \
    --header 'Accept: application/json' \
    --header 'Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDQzZjMyNGM5MDNmMjhiYmE0N2Q5OSIsImVtYWlsIjoiYWdlbnQxQGZpbmNyYS5jb20iLCJyb2xlIjoiQUdFTlQiLCJpYXQiOjE2OTE2NzY2MTl9.HV152vv7pyk4SG8pMzRg9hO7fpnRVoRuvUo10soeBY0'
#### Response

    HTTP Status: 200 OK
    Content-Type: application/json
    

    Response Body
    {
      "successful": true,
      "message": "Processing todo"
    }

### Close a todo
This endpoint is an authenticated endpoint. \
It requires an access token with a role with the following user types.
- ADMIN
- AGENT
#### Request

`GET /todo/close/:id`

    curl --location --request POST 'localhost:1234/todo/close/64d4e2e63dbdff12e8c801dc' \
    --header 'Content-Type: application/json' \
    --header 'Accept: application/json' \
    --header 'Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDQzZjMyNGM5MDNmMjhiYmE0N2Q5OSIsImVtYWlsIjoiYWdlbnQxQGZpbmNyYS5jb20iLCJyb2xlIjoiQUdFTlQiLCJpYXQiOjE2OTE2NzY2MTl9.HV152vv7pyk4SG8pMzRg9hO7fpnRVoRuvUo10soeBY0'

#### Response

    HTTP Status: 200 OK
    Content-Type: application/json
    

    Response Body
    {
      "successful": true,
      "message": "Processing todo"
    }


### Get All Todos
This endpoint is an authenticated endpoint. \
It requires an access token with a role with the following user types.
- ADMIN
- AGENT
#### Request

`GET /todo/all/`

    curl --location 'localhost:1234/todo/all' \
    --header 'Content-Type: application/json' \
    --header 'Accept: application/json' \
    --header 'Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDQzZjMyNGM5MDNmMjhiYmE0N2Q5OSIsImVtYWlsIjoiYWdlbnQxQGZpbmNyYS5jb20iLCJyb2xlIjoiQUdFTlQiLCJpYXQiOjE2OTE2NzY2MTl9.HV152vv7pyk4SG8pMzRg9hO7fpnRVoRuvUo10soeBY0'

#### Response

    HTTP Status: 200 OK
    Content-Type: application/json
    

    Response Body
    [
      {
          "_id": "64d4e2df3dbdff12e8c801da",
          "title": "titlee",
          "body": "passwordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpassword",
          "status": "CREATED",
          "startedDate": "2023-08-10T13:14:26.642Z",
          "creatorId": "64d351b4936971ecb00c660e",
          "comments": [
              {
                  "content": "oooososoosososs",
                  "userId": "64d43f324c903f28bba47d99",
                  "_id": "64d4f000efe8445076b5e303"
              }
          ],
          "createdAt": "2023-08-10T13:15:11.926Z",
          "updatedAt": "2023-08-10T14:11:24.240Z",
          "__v": 0
      },
      {
          "_id": "64d4e2e63dbdff12e8c801dc",
          "title": "titlee",
          "body": "passwordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpassword",
          "status": "COMPLETED",
          "startedDate": "2023-08-10T16:04:47.773Z",
          "creatorId": "64d351b4936971ecb00c660e",
          "comments": [],
          "createdAt": "2023-08-10T13:15:18.672Z",
          "updatedAt": "2023-08-10T18:00:33.517Z",
          "__v": 0,
          "agentId": "64d43f324c903f28bba47d99",
          "completedDate": "2023-08-10T18:00:33.516Z"
      }
    ]



### Get Recently closed Todos
This endpoint is an authenticated endpoint. \
It requires an access token with a role with the following user types.
- ADMIN
- AGENT
#### Request

`GET /todo/recently-closed/`

    curl --location 'localhost:1234/todo/recently-closed' \
    --header 'Content-Type: application/json' \
    --header 'Accept: application/json' \
    --header 'Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDQzZjMyNGM5MDNmMjhiYmE0N2Q5OSIsImVtYWlsIjoiYWdlbnQxQGZpbmNyYS5jb20iLCJyb2xlIjoiQUdFTlQiLCJpYXQiOjE2OTE2NzY2MTl9.HV152vv7pyk4SG8pMzRg9hO7fpnRVoRuvUo10soeBY0'
#### Response

    HTTP Status: 200 OK
    Content-Type: application/json
    

    Response Body
    [
      {
          "_id": "64d4e2e63dbdff12e8c801dc",
          "title": "titlee",
          "body": "passwordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpassword",
          "status": "COMPLETED",
          "startedDate": "2023-08-10T16:04:47.773Z",
          "creatorId": "64d351b4936971ecb00c660e",
          "comments": [],
          "createdAt": "2023-08-10T13:15:18.672Z",
          "updatedAt": "2023-08-10T18:00:33.517Z",
          "__v": 0,
          "agentId": "64d43f324c903f28bba47d99",
          "completedDate": "2023-08-10T18:00:33.516Z"
      },
      {
          "_id": "64d4e2e73dbdff12e8c801de",
          "title": "titlee",
          "body": "passwordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpassword",
          "status": "COMPLETED",
          "startedDate": "2023-08-10T16:05:54.267Z",
          "creatorId": "64d351b4936971ecb00c660e",
          "comments": [],
          "createdAt": "2023-08-10T13:15:19.340Z",
          "updatedAt": "2023-08-10T16:06:01.849Z",
          "__v": 0,
          "agentId": "64d43f324c903f28bba47d99",
          "completedDate": "2023-08-08T16:06:01.848Z"
      }
    ]

### Status Codes

Service returns the following status codes in its API:

| Status Code | Body             |
|:------------|:------------------------|
| 200         | `OK`                    |
| 201         | `CREATED`               |
| 400         | `BAD REQUEST`           |
| 404         | `NOT FOUND`             |
| 409         | `CONFLICT`              |
| 500         | `INTERNAL SERVER ERROR` |



## IMPROVEMENTS

The following are list of possible improvements;

- JWT token generated should have an expiry date that renders it invalid 

- Pagination should be implemented on the get multiple todo calls

