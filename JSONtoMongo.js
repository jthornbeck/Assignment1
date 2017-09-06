'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  Listing = require('./ListingSchema.js'),
  config = require('./config');

mongoose.connect(config.db.uri);

var listingData;
fs.readFile('listings.json', 'utf8', function(err, data) {
  /*
      This callback function should save the data in the listingData variable,
      then start the server.
     */
  if (err)
    throw err;
  listingData = JSON.parse(data);
  var count = listingData.entries.length;
  console.log(count);

  for (var entry = 0; entry < count; entry++) {
    if (listingData.entries[entry].coordinates && listingData.entries[entry].address) {
      var newEntry = new Listing({
        code: listingData.entries[entry].code,
        name: listingData.entries[entry].name,
        coordinates: {
          latitude: listingData.entries[entry].coordinates.latitude,
          longitude: listingData.entries[entry].coordinates.longitude
        },
        address: listingData.entries[entry].address
      });
      console.log('1');
      // save the user
      newEntry.save(function(err, listing) {
        if (err)
          throw err;

        console.log('1User created!');
      });
    } else{
      var newEntry = new Listing({code: listingData.entries[entry].code, name: listingData.entries[entry].name});
      console.log('4');
      // save the user
      newEntry.save(function(err, listing) {
        if (err)
          throw err;

        console.log('4User created!');
      });
    }

  }

  console.log('done');
});
/* Connect to your database */

/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */

/*
  Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */
