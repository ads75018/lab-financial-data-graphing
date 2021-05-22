const input = document.querySelector("input");
const startDate = document.getElementById("start-date");
const endDate = document.getElementById("end-date");






input.onchange = function () {
  const newStartDate = startDate.value;
  const newEndDate = endDate.value
 
  

  axios
    .get(
      `http://api.coindesk.com/v1/bpi/historical/close.json?start=${newStartDate}&end=${newEndDate}`
    )
    .then(function (response) {
      printTheChart(response.data);
    })
    .catch((err) => console.log(err));

  function printTheChart(bigData) {
    const bpi = bigData["bpi"];
    const dates = Object.keys(bpi);
    const moolah = Object.values(bpi);
    console.log(moolah);
    console.log(startDate);

    const ctx = document.getElementById("my-chart").getContext("2d");
    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: dates,
        datasets: [
          {
            label: "Bitcoin Stock Chart",
            backgroundColor: "rgb(0,255,255)",
            borderColor: "rgba(46, 49, 49, 1)",
            data: moolah,
          },
        ],
      },
    });
  }
};

axios
  .get("http://api.coindesk.com/v1/bpi/historical/close.json")
  .then(function (response) {
    printTheChart(response.data);
  })
  .catch((err) => console.log(err));

function printTheChart(bigData) {
  const bpi = bigData["bpi"];
  const dates = Object.keys(bpi);
  const moolah = Object.values(bpi);
  console.log(moolah);
  console.log(startDate)

  const ctx = document.getElementById("my-chart").getContext("2d");
  const chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: dates,
      datasets: [
        {
          label: "Bitcoin Stock Chart",
          backgroundColor: "rgb(0,255,255)",
          borderColor: "rgba(46, 49, 49, 1)",
          data: moolah,
        },
      ],
    },
  });
}
