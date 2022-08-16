google.charts.load("current", {
    packages: ["corechart"]
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ["Task", "Hours per Day"],
        ["Faturas Pagas", "2934527.37"],
        ["Faturas Vencidas", 2],
        ["Faturas em aberto", 2],
    ]);
    var options = {
        title: "Titulo do CHART",
        pieHole: 0.4,
    };
    var chart = new google.visualization.PieChart(document.getElementById("donutchart"));
    chart.draw(data, options);
}
google.charts.load("current", {
    packages: ["corechart", "bar"]
});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {
    var data = google.visualization.arrayToDataTable([
        ["A ESCREVER", "Contas a Receber",],
        ["1-30 Dias", 50],
        ["31-60 Dias", 39],
        ["61-90 Dias", 31],
        ["90+ Dias", 19],
    ]);
    var options = {
        title: "Idade de Contas a Receber",
        chartArea: {
            width: "65%"
        },
        hAxis: {
            title: '',
            minValue: 0
        },
        vAxis: {
            title: "Dias"
        }
    };
    var chart = new google.visualization.BarChart(document.getElementById("chart_div"));
    chart.draw(data, options);
}
google.charts.load("current", {
    "packages": ["bar"]
});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {
    var data = new google.visualization.arrayToDataTable([
        ["Move", "Porcentagem"],
        ["Total", "2934527.37"],
        ["Contas a Receber", "1587637.82"],
        ["Em Atraso", "146001042.25"],
    ]);
    var options = {
        width: 755,
        legend: {
            position: 'center'
        },
        chart: {
            title: '',
            subtitle: ''
        },
        axes: {
            x: {
                0: {
                    side: 'top',
                    label: ''
                }
            }
        },
        bar: {
            groupWidth: "100%"
        }
    };
    var chart = new google.charts.Bar(document.getElementById('top_x_div'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
};

ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"];
var myConfig2 = {
    "type": "gauge",
    "scale-r": {
        "aperture": 200,
        "values": "0:100:20"
    },
    "series": [{
        "values": [87]
    }]
};
zingchart.render({
    id: 'myChart',
    data: myConfig2,
    height: "100%",
    width: "100%"
});


var numberContent = 10;
var options = {
    series: [numberContent],
    chart: {
        height: 350,
        type: 'radialBar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
                margin: 0,
                size: '70%',
                background: '#fff',
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: 'front',
                dropShadow: {
                    enabled: true,
                    top: 3,
                    left: 0,
                    blur: 4,
                    opacity: 0.24
                }
            },
            track: {
                background: '#fff',
                strokeWidth: '67%',

            },

            dataLabels: {
                show: true,
                name: {
                    offsetY: -10,
                    show: true,
                    color: '#888',
                    fontSize: '17px'
                },
                value: {
                    formatter: function (val) {
                        return parseInt(val);
                    },
                    color: '#111',
                    fontSize: '36px',
                    show: true,
                }
            }
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#ABE5A1'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 365]
        }
    },
    stroke: {
        lineCap: 'round'
    },
    labels: ['Dias'],
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();