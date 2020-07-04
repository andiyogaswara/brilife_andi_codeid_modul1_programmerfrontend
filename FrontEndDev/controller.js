"use strict";

var response = require("./res");
var connection = require("./conn");

exports.propinsi = function (req, res) {
  connection.query("SELECT * FROM list_propinsi", function (
    error,
    rows,
    fields
  ) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

exports.findPropinsi = function (req, res) {
  var Id_Propinsi = req.params.Id_Propinsi;

  connection.query(
    "SELECT * FROM list_propinsi where Id_Propinsi = ?",
    [Id_Propinsi],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

exports.addPropinsi = function (req, res) {
  var Nama_Propinsi = req.body.Nama_Propinsi;

  connection.query(
    "INSERT INTO list_propinsi (Nama_Propinsi) values (?)",
    [Nama_Propinsi],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil menambahkan propinsi!", res);
      }
    }
  );
};

exports.kontrasepsi = function (req, res) {
  connection.query("SELECT * FROM list_kontrasepsi", function (
    error,
    rows,
    fields
  ) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

exports.findKontrasepsi = function (req, res) {
  var Id_Kontrasepsi = req.params.Id_Kontrasepsi;

  connection.query(
    "SELECT * FROM list_kontrasepsi where Id_Kontrasepsi = ?",
    [Id_Kontrasepsi],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

exports.addKontrasepsi = function (req, res) {
  var Nama_Kontrasepsi = req.body.Nama_Kontrasepsi;

  connection.query(
    "INSERT INTO list_kontrasepsi (Nama_Kontrasepsi) values (?)",
    [Nama_Kontrasepsi],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil menambahkan kontrasepsi!", res);
      }
    }
  );
};

exports.pemakaiKontrasepsi = function (req, res) {
  connection.query("SELECT * FROM list_pemakai_kontrasepsi", function (
    error,
    rows,
    fields
  ) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

exports.findPemakaiKontrasepsi = function (req, res) {
  var Id_List = req.params.Id_List;

  connection.query(
    "SELECT * FROM list_pemakai_kontrasepsi where Id_List = ?",
    [Id_List],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

exports.addPemakaiKontrasepsi = function (req, res) {
  var Id_Propinsi = req.body.Id_Propinsi;
  var Id_Kontrasepsi = req.body.Id_Kontrasepsi;
  var Jumlah_Pemakai = req.body.Jumlah_Pemakai;

  connection.query(
    "INSERT INTO list_pemakai_kontrasepsi (Id_Propinsi, Id_Kontrasepsi, Jumlah_Pemakai) values (?,?,?)",
    [Id_Propinsi, Id_Kontrasepsi, Jumlah_Pemakai],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil menambahkan pemakai kontrasepsi!", res);
      }
    }
  );
};

exports.index = function (req, res) {
  response.ok("Hello from the Node JS RESTful side!", res);
};
