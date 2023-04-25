"use strict";

var mysqlConnector = require("../model/mysqlConnector.js");

var pool = require("../model/mysqlConnector.js");

var Analizet = function Analizet(req, res) {
  var sql, sepetler;
  return regeneratorRuntime.async(function Analizet$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          sql = "SELECT  m.sehir as SehirAdi, count(s.id) as SepetAdet, SUM(su.tutar) AS ToplamTutar FROM sepet s JOIN musteri m ON s.musteriid = m.id JOIN sepeturun su ON s.id = su.sepetid GROUP BY m.sehir ORDER BY COUNT(s.id) DESC";
          _context.next = 3;
          return regeneratorRuntime.awrap(pool.query(sql));

        case 3:
          sepetler = _context.sent;
          res.json(sepetler[0]);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

module.exports = {
  Analizet: Analizet
};