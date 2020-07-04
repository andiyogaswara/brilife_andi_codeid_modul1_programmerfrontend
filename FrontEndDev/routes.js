"use strict";

module.exports = function (app) {
  var todoList = require("./controller");

  app.route("/").get(todoList.index);

  app.route("/propinsi").get(todoList.propinsi);

  app.route("/propinsi/:Id_Propinsi").get(todoList.findPropinsi);

  app.route("/propinsi").post(todoList.addPropinsi);

  app.route("/kontrasepsi").get(todoList.kontrasepsi);

  app.route("/kontrasepsi/:Id_Kontrasepsi").get(todoList.findKontrasepsi);

  app.route("/kontrasepsi").post(todoList.addKontrasepsi);

  app.route("/pemakaiKontrasepsi").get(todoList.pemakaiKontrasepsi);

  app
    .route("/pemakaiKontrasepsi/:Id_List")
    .get(todoList.findPemakaiKontrasepsi);

  app.route("/pemakaiKontrasepsi").post(todoList.addPemakaiKontrasepsi);
};
