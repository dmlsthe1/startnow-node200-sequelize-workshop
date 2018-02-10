# My Sequelize API

    A sequelize API to GET, POST, PUT, and DELETE built on nodejs.


## Setup

```
npm install
```
```
create a file called config.json located at
server > db > config > config.json
```
```
enter the following code into the config.json file replacing all fields with your information

{
  "development": {
    "username": "root",
    "password": "password",
    "database": "my_blog",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "password",
    "database": "my_blog",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "password",
    "database": "my_blog",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
```
npm start
```
```
Open the application of your choice to do api calls to the address shown in the console
```
```
Navigate to the endpoints and enjoy
```

## Contributing

* Open a pull request, all contributions will be considered.
