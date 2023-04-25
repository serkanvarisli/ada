"use strict";

var mysqlConnector = require("../model/mysqlConnector.js");

var pool = require("../model/mysqlConnector.js");

var SEHIR = ["Ankara", "İstanbul", "İzmir", "Bursa", "Edirne", "Konya", "Antalya", "Diyarbakır", "Van", "Rize"]; // Müşteri işlemleri

var musteriEkle = function musteriEkle(ad, soyad, sehir) {
  return regeneratorRuntime.async(function musteriEkle$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(pool.query("INSERT INTO Musteri (ad,soyad,sehir) VALUES (?)", [[ad, soyad, sehir]]));

        case 3:
          _context.next = 8;
          break;

        case 5:
          _context.prev = 5;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 5]]);
};

var createRandomMusteri = function createRandomMusteri(musteriAdet) {
  var musteriArray = [];

  for (var index = 0; index < musteriAdet; index++) {
    var element = [generateRandomNameOrSurname(5), generateRandomNameOrSurname(5), SEHIR[Math.floor(Math.random() * SEHIR.length)]];
    musteriArray.push(element);
  }

  return musteriArray;
};

var generateRandomNameOrSurname = function generateRandomNameOrSurname(length) {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var charactersLength = characters.length;
  var counter = 0;

  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }

  return result;
};

var getLastXMusteriIds = function getLastXMusteriIds(musteriAdet) {
  var result, sonuc;
  return regeneratorRuntime.async(function getLastXMusteriIds$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(pool.query("SELECT id FROM musteri ORDER BY id DESC LIMIT ?", [musteriAdet]));

        case 2:
          result = _context2.sent;
          data = result[0];
          sonuc = data.map(function (item) {
            return item.id;
          });
          return _context2.abrupt("return", sonuc);

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
}; // - Sepet işlemleri


var sepetEkle = function sepetEkle(musteriId) {
  return regeneratorRuntime.async(function sepetEkle$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(pool.query("INSERT INTO sepet (musteriid) VALUES (?)", [musteriId]));

        case 3:
          _context3.next = 8;
          break;

        case 5:
          _context3.prev = 5;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);

        case 8:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 5]]);
};

var createRandomSepet = function createRandomSepet(sepetAdet, musteriAdet) {
  var musteriIds, index;
  return regeneratorRuntime.async(function createRandomSepet$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(getLastXMusteriIds(musteriAdet));

        case 2:
          musteriIds = _context4.sent;

          for (index = 0; index < sepetAdet; index++) {
            // const element = [musteriIds[Math.floor(Math.random() * musteriIds.length)]];
            // sepetArray.push(element);
            sepetEkle(musteriIds[Math.floor(Math.random() * musteriIds.length)]);
          } //   return sepetArray;


        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
};

var urunekle = function urunekle(sepetId, tutar, aciklama) {
  return regeneratorRuntime.async(function urunekle$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(pool.query("INSERT INTO sepeturun (sepetid,tutar,aciklama) VALUES (?,?,?)", [sepetId, tutar, aciklama]));

        case 3:
          _context5.next = 8;
          break;

        case 5:
          _context5.prev = 5;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);

        case 8:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 5]]);
};

var createRandomUrun = function createRandomUrun(sepetAdet) {
  var sepetIds, index, sepetId, random, j;
  return regeneratorRuntime.async(function createRandomUrun$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(getLastSepetIds(sepetAdet));

        case 2:
          sepetIds = _context6.sent;

          for (index = 0; index <= sepetAdet; index++) {
            sepetId = sepetIds[Math.floor(Math.random() * sepetIds.length)];
            random = Math.floor(Math.random() * (5 - 1) + 1);

            for (j = 0; j < random; j++) {
              // urunArray.push(index);
              urunekle(sepetId, Math.floor(Math.random() * (1000 - 100) + 100), generateRandomNameOrSurname(10));
            }
          }

        case 4:
        case "end":
          return _context6.stop();
      }
    }
  });
};

var getLastSepetIds = function getLastSepetIds(sepetAdet) {
  var result, data, sonuc;
  return regeneratorRuntime.async(function getLastSepetIds$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap(pool.query("SELECT id FROM sepet ORDER BY id DESC LIMIT ?", [sepetAdet]));

        case 2:
          result = _context7.sent;
          data = result[0];
          sonuc = data.map(function (item) {
            return item.id;
          });
          return _context7.abrupt("return", sonuc);

        case 6:
        case "end":
          return _context7.stop();
      }
    }
  });
};

var TestVerisiOlustur = function TestVerisiOlustur(req, res) {
  var musteriAdet = req.body.musteriAdet;
  var sepetAdet = req.body.sepetAdet;
  console.log("musteri", musteriAdet);
  console.log("s", sepetAdet);
  var dummyMusteri = createRandomMusteri(musteriAdet);
  dummyMusteri.forEach(function (musteri) {
    musteriEkle(musteri[0], musteri[1], musteri[2]);
  });
  createRandomSepet(sepetAdet, musteriAdet);
  createRandomUrun(sepetAdet);
  res.status(200).json({
    message: "Test Verisi Oluşturuldu"
  });
};

module.exports = {
  TestVerisiOlustur: TestVerisiOlustur,
  createRandomMusteri: createRandomMusteri,
  getLastXMusteriIds: getLastXMusteriIds,
  createRandomSepet: createRandomSepet,
  createRandomUrun: createRandomUrun,
  getLastSepetIds: getLastSepetIds
};