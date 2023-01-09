import fs from "fs";
import path from "path";
import { parse } from "csv-parse";

const hockeyStats = path.join(process.cwd(), "hockey-stats/stats.csv");

export default function getSkaters(req, res) {
  let skaters = [];
  let id = 1;
  fs.createReadStream(hockeyStats)
    .pipe(parse({ delimiter: ":" }))
    .on("data", function (csvrow) {
      const rowValues = csvrow[0].split("\t");
      const skater = {
        id: id,
        name: rowValues[0],
        offense: rowValues[1],
        defense: rowValues[2],
        skating: rowValues[3],
        passing: rowValues[4],
        shot: rowValues[5],
        stick: rowValues[6],
      };

      if (skater.name !== "Name") {
        id++;
        skaters = [...skaters, skater];
      }
    })
    .on("end", function () {
      res.status(200).json({ skaters: skaters });
    });
}
