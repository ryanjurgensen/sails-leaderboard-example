# Installing the app
To install this demo app, first install Node.js and npm.  Then clone this repo and cd into it:

```
git clone git@github.com:balderdashy/sails-example.git sails-example && cd sails-example
```

Install Sails (uses package.json):

```
npm install
```

Finally, copy and rename the example config.ex.js file:

```
cp config.js.ex config.js
```

And customize it accordingly for your datasource:
(see Sequelize's documentation for more information on the options available to you.  At the time of this writing, Sequelize support mySQL, SQLite, and Postgres)

```
exports.datasource = {
        database: 'nameOfYourDatabaseForLocalTelefonicaPrototype',
        username: 'yourDBUser',
        password: 'yourDBPassword'
}
```

Finally, run the app with:
```
node sails.js
```

or, to automatically restart the app when you change things-
```
forever -w sails.js
```

# Showcase

## Back-end
### RESTful routing of WebSocket requests
![Screen Shot 2012-10-03 at 4.42.16 PM.png](http://i.imgur.com/z3sdV.png)
### Role-based authentication (supports sockets as well)
![Screen Shot 2012-10-03 at 4.14.43 PM.png](http://i.imgur.com/4edvM.png) 
### Familiar MVC architecture
![Screen Shot 2012-10-03 at 4.15.26 PM.png](http://i.imgur.com/24GSc.png) 

## Front-end
### The "Meteor example":
![Screen Shot 2012-10-03 at 4.06.12 PM.png](http://i.imgur.com/K1cDl.png) 
### Searchable table, with CRUD
![Screen Shot 2012-10-03 at 4.10.23 PM.png](http://i.imgur.com/Q3E0w.png)
### Tree structures
![Screen Shot 2012-10-03 at 4.10.46 PM.png](http://i.imgur.com/BLebW.png) 