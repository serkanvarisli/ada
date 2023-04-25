const {
  createRandomMusteri,
  TestVerisiOlustur,
  getLastXMusteriIds,
  createRandomSepet,
  createRandomUrun,
  getLastSepetIds,
} = require("./controller/testVerisiOlustur");

// createRandomSepet(6, 3).then((sepetArray) => {
//   console.log(sepetArray);
// });
createRandomUrun(5).then((sonuc) => {
  console.log(sonuc);
});
