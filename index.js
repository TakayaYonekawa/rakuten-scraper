const PORT = 8000;

const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();

// Wrb scraping

const url = "https://www.rakuten.co.jp/category/110472/";
const data = [];

axios(url)
  .then((response) => {
    const htmlParser = response.data;

    const $ = cheerio.load(htmlParser);

    $(".searchresultitem", htmlParser).each(function () {
      const title = $(this).find(".title-link--3Ho6z").attr("title");
      const price = $(this).find(".price-wrapper--F8UPj").text();
      data.push({ title, price });
      console.log(data);
    });
  })
  .catch((error) => console.log(error));
app.listen(PORT, console.log("surver running!!"));
