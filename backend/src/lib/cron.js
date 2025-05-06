import cron from "cron";
import https from "https";

const job = new cron.CronJob("*/14 * * * *", function () {
  https
    .get(process.env.API_URL, (res) => {
      if (res.statusCode === 200) console.log("GET request sent successfully");
      else console.log("GET requst failed", res.statusCode);
    })
    .on("error", (e) => console.error("Error while sendng request", e));
});

export default job;
