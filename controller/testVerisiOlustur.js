const mysqlConnector = require("../model/mysqlConnector.js");
const pool = require("../model/mysqlConnector.js");

const SEHIR = [
  "Ankara",
  "İstanbul",
  "İzmir",
  "Bursa",
  "Edirne",
  "Konya",
  "Antalya",
  "Diyarbakır",
  "Van",
  "Rize",
];
// Müşteri işlemleri
const musteriEkle = async (ad, soyad, sehir) => {
  try {
    await pool.query("INSERT INTO Musteri (ad,soyad,sehir) VALUES (?)", [
      [ad, soyad, sehir],
    ]);
  } catch (error) {
    console.log(error);
  }
};
const createRandomMusteri = (musteriAdet) => {
  let musteriArray = [];
  for (let index = 0; index < musteriAdet; index++) {
    const element = [
      generateRandomNameOrSurname(5),
      generateRandomNameOrSurname(5),
      SEHIR[Math.floor(Math.random() * SEHIR.length)],
    ];
    musteriArray.push(element);
  }
  return musteriArray;
};
const generateRandomNameOrSurname = (length) => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};
const getLastXMusteriIds = async (musteriAdet) => {
  const result = await pool.query(
    "SELECT id FROM musteri ORDER BY id DESC LIMIT ?",
    [musteriAdet]
  );
  data = result[0];
  const sonuc = data.map((item) => item.id);
  return sonuc;
};
// - Sepet işlemleri
const sepetEkle = async (musteriId) => {
  try {
    await pool.query("INSERT INTO sepet (musteriid) VALUES (?)", [musteriId]);
  } catch (error) {
    console.log(error);
  }
};
const createRandomSepet = async (sepetAdet, musteriAdet) => {
  //   let sepetArray = [];
  let musteriIds = await getLastXMusteriIds(musteriAdet);
  for (let index = 0; index < sepetAdet; index++) {
    // const element = [musteriIds[Math.floor(Math.random() * musteriIds.length)]];
    // sepetArray.push(element);
    sepetEkle(musteriIds[Math.floor(Math.random() * musteriIds.length)]);
  }
  //   return sepetArray;
};

const urunekle = async (sepetId, tutar, aciklama) => {
  try {
    await pool.query(
      "INSERT INTO sepeturun (sepetid,tutar,aciklama) VALUES (?,?,?)",
      [sepetId, tutar, aciklama]
    );
  } catch (error) {
    console.log(error);
  }
};
const createRandomUrun = async (sepetAdet) => {
  //   let urunArray = [];
  let sepetIds = await getLastSepetIds(sepetAdet);
  for (let index = 0; index <= sepetAdet; index++) {
    let sepetId = sepetIds[Math.floor(Math.random() * sepetIds.length)];
    let random = Math.floor(Math.random() * (5 - 1) + 1);
    for (let j = 0; j < random; j++) {
      // urunArray.push(index);
      urunekle(
        sepetId,
        Math.floor(Math.random() * (1000 - 100) + 100),
        generateRandomNameOrSurname(10)
      );
    }
  }
};

const getLastSepetIds = async (sepetAdet) => {
  const result = await pool.query(
    "SELECT id FROM sepet ORDER BY id DESC LIMIT ?",
    [sepetAdet]
  );
  const data = result[0];
  const sonuc = data.map((item) => item.id);
  return sonuc;
};

const TestVerisiOlustur = (req, res) => {
  let musteriAdet = req.body.musteriAdet;
  let sepetAdet = req.body.sepetAdet;
  console.log("musteri", musteriAdet);
  console.log("s", sepetAdet);

  let dummyMusteri = createRandomMusteri(musteriAdet);
  dummyMusteri.forEach((musteri) => {
    musteriEkle(musteri[0], musteri[1], musteri[2]);
  });
  createRandomSepet(sepetAdet, musteriAdet);
  createRandomUrun(sepetAdet);
  res.status(200).json({
    message: "Test Verisi Oluşturuldu",
  });
};

module.exports = {
  TestVerisiOlustur,
  createRandomMusteri,
  getLastXMusteriIds,
  createRandomSepet,
  createRandomUrun,
  getLastSepetIds,
};
