# zomato-jquery-sdk

This is a Zomato's jQuery SDK to connect with the Zomato's API.

  - Just load the zomato.js along with jQuery library.
  - Initialize the Zomato's SDK with the key you got when you  signed up.
  - Execute the respective api function respective to the api handler specified in the Zomato's API.

Markdown is a lightweight markup language based on the formatting conventions that people naturally use in email.  As [John Gruber] writes on the [Markdown site][df1]

### Version
1.0.0

### Dependencies

This library depends on jQuery library.

### Initialisation

Load the zomato.js:

```javascript
$ Zomato.init("<YOUR-ZOMATO-API-KEY>");
```
For example

```javascript
Zomato.init("8c2run923ur9n23ur92nc93uer8932ue"); //its a fake one ;-)
```

### Geocode

If you want to find nearby restaurants based on your location co-ordinates, here is the function to get the JSON formatted data. The number of entries are limited to 10 by default.  
```javascript
Zomato.geocode({latitide:<latitude co-ordinate>, longitude:<longitude co-ordinate>},function(restaurants){
    //do your logic for restaurants data.
},function(error){
    //on error here is the logic for on error 
})
```

### Restaurant details

If you want to get all the details regarding a particular restaurant, here is the function to access the /restaurant API handle. 
```javascript
Zomato.restaurant(<restaurant_id>,function(restaurant){
    //do your logic for restaurant's data.
},function(error){
    //on error here is the logic for on error 
})
```


### Todos

 - Add more functions for more API handles
 - Create a pure Javascript library

License
----

MIT


**Free Software, Hell Yeah!**



