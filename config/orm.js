var connection = require("./connection.js");

var orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: function(table, burger_name, devoured, cb) {
    var queryString = "INSERT INTO ?? VALUES (id, ? , ?)";
    
    connection.query(queryString, [table, burger_name, devoured], function(err, result) {
      if (err) throw err;
      
      cb(result);
    });
  },

  updateOne: function(table, column, newValue, column2, oldValue, cb) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";

    connection.query(queryString,[table, column, newValue, column2, oldValue],
      function(err, result) {
        if (err) throw err;
        cb(result);
      }
    );
  }
};

module.exports = orm;