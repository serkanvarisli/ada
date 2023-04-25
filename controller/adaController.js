const pool = require("../model/mysqlConnector.js");
const mysqlConnector = require("../model/mysqlConnector.js");
const { testVerisiOlustur } = require("../controller/testVerisiOlustur.js");
const adaController = {
  getAll: async (req, res) => {
    try {
      const [rows, fields] = await pool.query("SELECT * FROM musteri");
      const [rows2, fields2] = await pool.query("SELECT * FROM sepet");
      const [rows3, fields3] = await pool.query("SELECT * FROM sepeturun");
      res.json({
        musteri: rows,
        sepet: rows2,
        sepeturun: rows3,
      });
    } catch (err) {
      console.log(err);
    }
  },
  getById: async (req, res) => {
    try {
      const [rows, fields] = await pool.query(
        "SELECT * FROM musteri WHERE id = ?",
        [req.params.id]
      );
      const [rows2, fields2] = await pool.query(
        "SELECT * FROM sepet WHERE musteriid = ?",
        [req.params.id]
      );
      const [rows3, fields3] = await pool.query(
        "select * from sepeturun where sepetid = ?",
        [req.params.id]
      );
      res.json({
        musteri: rows,
        sepet: rows2,
        sepeturun: rows3,
      });
    } catch (err) {
      console.log(err);
    }
  },
  getMusteri: async (req, res) => {
    const [rows, fields] = await pool.query("SELECT * FROM musteri");
    res.json({
      musteri: rows,
    });
  },
  getMusteriById: async (req, res) => {
    try {
      const [rows, fields] = await pool.query(
        "SELECT * FROM musteri WHERE id = ?",
        [req.params.id]
      );
      res.json({
        musteri: rows,
      });
    } catch (error) {
      console.log(error);
    }
  },
  getSepet: async (req, res) => {
    try {
      const [rows, fields] = await pool.query("SELECT * FROM sepet");
      res.json({
        sepet: rows,
      });
    } catch (error) {
      console.log(error);
    }
  },
  getSepetById: async (req, res) => {
    try {
      const [rows, fields] = await pool.query(
        "SELECT * FROM sepet WHERE id = ?",
        [req.params.id]
      );
      res.json({
        sepet: rows,
      });
    } catch (error) {
      console.log(error);
    }
  },
  getSepeturun: async (req, res) => {
    try {
      const [rows, fields] = await pool.query("Select * from sepeturun");
      res.json({
        sepeturun: rows,
      });
    } catch (error) {
      console.log(error);
    }
  },
  getSepeturunById: async (req, res) => {
    try {
      const [rows, fields] = await pool.query(
        "Select * from sepeturun where sepetid= ? ",
        [req.params.id]
      );
      res.json({
        sepeturun: rows,
      });
    } catch (error) {
      console.log(error);
    }
  },
  musterivesepetekle: async (req, res) => {
    try {
      const [rows, fields] = await pool.query(
        "INSERT INTO musteri (ad,soyad,sehir) VALUES (?,?,?)",
        [req.body.ad, req.body.soyad, req.body.sehir]
      );
      const [rows2, fields2] = await pool.query(
        "INSERT INTO sepet (musteriid) VALUES (?)",
        [rows.insertId]
      );
      res.json({
        musteri: rows,
        sepet: rows2,
      });
    } catch (err) {
      console.log(err);
    }
  },
  urunekle: async (req, res) => {
    const [rows, fields] = await pool.query(
      "INSERT INTO sepeturun (sepetid,tutar,aciklama) VALUES (?,?,?)",
      [req.params.id, req.body.tutar, req.body.aciklama]
    );
    res.json({
      data: rows,
    });
  },
  topla: async (req, res) => {
    a = parseInt(req.body.a);
    b = parseInt(req.body.b);
    res.json({
      data: a + b,
    });
  },
  analiz: async (req, res) => {
    try {
    } catch (error) {
      console.log(error);
    }
  },
  // musteriekle: async (req, res) => {
  //   try {
  //     const [rows, fields] = await pool.query(
  //       "INSERT INTO musteri (ad,soyad,sehir) VALUES (?,?,?)",
  //       [req.body.ad, req.body.soyad, req.body.sehir]
  //     );
  //     res.json({
  //       data: rows,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
  // sepetekle: async (req, res) => {
  //   try {
  //     const [rows, fields] = await pool.query(
  //       "INSERT INTO sepet (musteriid) VALUES (?)",
  //       [req.params.id]
  //     );
  //     res.json({
  //       data: rows,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
  // urunekle: async (req, res) => {
  //   const [sepetIdRows, sepetIdFields] = await pool.query(
  //     "SELECT MAX(id) FROM sepet"
  //   );
  //   const sepetId = sepetIdRows[0]["MAX(id)"];

  //   const [rows, fields] = await pool.query(
  //     "INSERT INTO sepeturun (sepetid,tutar,aciklama) VALUES (?,?,?)",
  //     [sepetId, req.body.tutar, req.body.aciklama]
  //   );
  //   res.json({
  //     data: rows,
  //   });
  // },
};

module.exports = adaController;
