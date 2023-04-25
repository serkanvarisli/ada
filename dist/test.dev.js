"use strict";

var _require = require("./controller/testVerisiOlustur"),
    createRandomMusteri = _require.createRandomMusteri,
    TestVerisiOlustur = _require.TestVerisiOlustur,
    getLastXMusteriIds = _require.getLastXMusteriIds,
    createRandomSepet = _require.createRandomSepet,
    createRandomUrun = _require.createRandomUrun,
    getLastSepetIds = _require.getLastSepetIds; // createRandomSepet(6, 3).then((sepetArray) => {
//   console.log(sepetArray);
// });


createRandomUrun(5).then(function (sonuc) {
  console.log(sonuc);
});