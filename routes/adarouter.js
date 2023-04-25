const express = require("express");
const router = express.Router();

const adaController = require("../controller/adaController");
const { TestVerisiOlustur } = require("../controller/testVerisiOlustur");
const { Analizet } = require("../controller/analiz");

//get

router.get("/analiz", Analizet);
// router.get("/musteri", adaController.getMusteri);
// router.get("/musteri/:id", adaController.getMusteriById);
// router.get("/sepet", adaController.getSepet);
// router.get("/sepet/:id", adaController.getSepetById);
// router.get("/sepeturun", adaController.getSepeturun);
// router.get("/sepeturun/:id", adaController.getSepeturunById);
// router.get("/", adaController.getAll);
// router.get("/:id", adaController.getById);

// router.get("/test", selectmusteri());
//post
router.post("/test", TestVerisiOlustur);
// router.post("/musteri", adaController.musterivesepetekle);
// router.post("/sepeturun/:id", adaController.urunekle);
// router.post("/topla", adaController.topla);
// router.post("/urun", adaController.urunekle);

module.exports = router;
