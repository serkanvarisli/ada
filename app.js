const { mysqlConnector } = require("./model/mysqlConnector.js");

const express = require("express");

const app = express();
const port = process.env.PORT || 8000;
const adaRouter = require("./routes/adarouter.js");
app.use(express.json());
app.use("/api", adaRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Selamlar");
});

// class deneme {
//   constructor() {
//     this.ad = "Serkan";
//     this.yas = 23;
//   }
//   toplam() {
//     return "Benim adım " + this.ad;
//   }
// }

// class deneme2 extends deneme {
//   toplam() {
//     return "Benim adım " + this.ad + ", " + this.yas + " yaşındayım.";
//   }
// }
// const Deneme = new deneme();
// const Deneme2 = new deneme2();
// console.log(Deneme.toplam());
// console.log(Deneme2.toplam());
