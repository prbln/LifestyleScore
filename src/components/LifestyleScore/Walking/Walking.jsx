import "./walking.css";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { Line } from "react-chartjs-2";
// Chart.register(CategoryScale);
import Chart from "chart.js/auto";

const sampleData = require("./sampleData.json");
const monthAvg = [0];
const user = sampleData["user2"];
const vals = [];
for (let key in user) {
  vals.push(...user[key]);
  monthAvg.push(
    Math.round(
      user[key].reduce((agg, val) => val.count + agg, 0) / user[key].length
    )
  );
}
const Walking = () => {
  return (
    <div id="heatmap-container">
      {/* <p
        id="close"
        onClick={() => {
          setshowLifestyle(!showLifestyle);
          setshowRunning(!showRunning);
        }}
      >
        x
      </p> */}
      <div className="plot">
        <CalendarHeatmap
          startDate={new Date("2022-12-31")}
          endDate={new Date("2023-12-31")}
          values={vals}
          classForValue={(value) => {
            if (!value) {
              return "color-empty";
            }
            return value.count < 10000 ? "color-scale-1" : "color-scale-2";
          }}
        />
      </div>
      <div className="plot">
        <Line
          data={{
            // x-axis label values
            labels: [
              "",
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            datasets: [
              {
                label: "Average Steps",
                // y-axis data plotting values
                data: monthAvg,
                fill: false,
                borderWidth: 4,
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "green",
                responsive: true,
              },
            ],
          }}
        />
        <h2>
          Lifestyle score = {monthAvg.filter((val) => val > 10000).length}
        </h2>
      </div>
    </div>
  );
};

export default Walking;
