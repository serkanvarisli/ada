const mysqlConnector = require("../model/mysqlConnector.js");
const pool = require("../model/mysqlConnector.js");

const Analizet = async (req, res) => {
  let sql =
    "SELECT  m.sehir as SehirAdi, count(s.id) as SepetAdet, SUM(su.tutar) AS ToplamTutar FROM sepet s JOIN musteri m ON s.musteriid = m.id JOIN sepeturun su ON s.id = su.sepetid GROUP BY m.sehir ORDER BY COUNT(s.id) DESC";
  const sepetler = await pool.query(sql);
  res.json(sepetler[0]);
};
module.exports = { Analizet };
