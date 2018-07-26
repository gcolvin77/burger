var connection = require("./connection.js");

var orm = {
  selectAll: function(table) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  insertOne: function(table, burger_name) {
    var queryString = "INSERT INTO ?? VALUES (id, ? , ?)";
    console.log(queryString)
    connection.query(queryString, [table, burger_name], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  updateOne: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
    var queryString =
      "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

    connection.query(
      queryString,
      [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
      function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;