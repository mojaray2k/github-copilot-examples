// on window load
window.onload = function () {
    function getIncomeValues() {
        var JanuaryIncome = document.getElementById("januaryIncome").value;
        var FebruaryIncome = document.getElementById("februaryIncome").value;
        var MarchIncome = document.getElementById("marchIncome").value;
        var AprilIncome = document.getElementById("aprilIncome").value;
        var MayIncome = document.getElementById("mayIncome").value;
        var JuneIncome = document.getElementById("juneIncome").value;
        var JulyIncome = document.getElementById("julyIncome").value;
        var AugustIncome = document.getElementById("augustIncome").value;
        var SeptemberIncome = document.getElementById("septemberIncome").value;
        var OctoberIncome = document.getElementById("octoberIncome").value;
        var NovemberIncome = document.getElementById("novemberIncome").value;
        var DecemberIncome = document.getElementById("decemberIncome").value;
        return [JanuaryIncome, FebruaryIncome, MarchIncome, AprilIncome, MayIncome, JuneIncome,
            JulyIncome, AugustIncome, SeptemberIncome, OctoberIncome, NovemberIncome, DecemberIncome
        ];
    }

    function getExpensesValues() {
        // get input value for JanuaryExpenses
        var JanuaryExpenses = document.getElementById("januaryExpenses").value;
        // get input value for FebruaryExpenses
        var FebruaryExpenses = document.getElementById("februaryExpenses").value;
        // get input value for MarchExpenses
        var MarchExpenses = document.getElementById("marchExpenses").value;
        // get input value for AprilExpenses
        var AprilExpenses = document.getElementById("aprilExpenses").value;
        // get input value for MayExpenses
        var MayExpenses = document.getElementById("mayExpenses").value;
        // get input value for JuneExpenses
        var JuneExpenses = document.getElementById("juneExpenses").value;
        // get input value for JulyExpenses
        var JulyExpenses = document.getElementById("julyExpenses").value;
        // get input value for AugustExpenses
        var AugustExpenses = document.getElementById("augustExpenses").value;
        // get input value for SeptemberExpenses
        var SeptemberExpenses = document.getElementById("septemberExpenses").value;
        // get input value for OctoberExpenses
        var OctoberExpenses = document.getElementById("octoberExpenses").value;
        // get input value for NovemberExpenses
        var NovemberExpenses = document.getElementById("novemberExpenses").value;
        // get input value for DecemberExpenses
        var DecemberExpenses = document.getElementById("decemberExpenses").value;
        return [JanuaryExpenses, FebruaryExpenses, MarchExpenses, AprilExpenses, MayExpenses,
            JuneExpenses, JulyExpenses, AugustExpenses, SeptemberExpenses, OctoberExpenses, NovemberExpenses,
            DecemberExpenses
        ];
    }

    // create chart js bar chart for id myChart
    var ctx = document.getElementById('myChart').getContext('2d');
    // create new chart object
    var myChart = new Chart(ctx, {
        // type of chart
        type: 'bar',
        // data for chart
        data: {
            // labels for chart
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
                'October', 'November', 'December'
            ],
            // datasets for chart
            datasets: [{
                // label for dataset
                label: 'Income',
                // data for dataset
                data: getIncomeValues(),
                // background color for dataset
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ],
                // border color for 
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'
                ],
                // border width
                borderWidth: 1
            },
            {
                // label for dataset
                label: 'Expenses',
                // data for dataset
                data: getExpensesValues(),
                // background color for dataset
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255,99,132,0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                // border color for dataset
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255,99,132,1   )',
                    'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'
                ],
                // border width
                borderWidth: 1
            }
            ]
        },
        // options for chart
        options: {
            // scales for chart
            scales: {
                // yAxes for chart
                yAxes: [{
                    // ticks for chart
                    ticks: {
                        // begin at zero
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    // dowlnoad button click handler
    document.getElementById("download").addEventListener("click", function () {
        // get canvas
        var canvas = document.getElementById("myChart");
        // get image of canvas
        var img = canvas.toDataURL("image/png", 1.0);
        // create link
        var link = document.createElement('a');
        // set link download attribute to chart.png
        link.download = "chart.png";
        // set link href attribute to img
        link.href = img;
        // append link to body
        document.body.appendChild(link);
        // click link
        link.click();
        // remove link from body
        document.body.removeChild(link);
    }
    );

    // click handler for #chart button
    document.getElementById("chart-tab").addEventListener("click", function () {
        // update chart
        myChart.data.datasets[0].data = getIncomeValues();
        myChart.data.datasets[1].data = getExpensesValues();
        myChart.update();
    }
    );
};