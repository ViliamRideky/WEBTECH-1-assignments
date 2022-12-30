const firstChart = document.getElementById("myChart");
let barChart;

let dataBarChart = {
    labels: [],
    datasets: [{
        label: "A",
        data: [],
        borderColor: '#16b555',
        backgroundColor: '#92f7ba',
    }, {
        label: "B",
        data: [],
        borderColor: "#0074bd",
        backgroundColor: '#8cd3ff',
    }, {
        label: "C",
        data: [],
        borderColor: '#ffff75',
        backgroundColor: "#c4c400",
    }, {
        label: "D",
        data: [],
        borderColor: '#ffb370',
        backgroundColor: "#e66b00",
    }, {
        label: "E",
        data: [],
        borderColor: '#e86f6f',
        backgroundColor: "#b00000",
    }, {
        label: "FX",
        data: [],
        borderColor: '#ff70ec',
        backgroundColor: "#69005b",
    }, {
        label: "FN",
        data: [],
        borderColor: '#abb0ff',
        backgroundColor: "#00032e",
    }]
}

let config1 = {
    type: "bar",
    data: dataBarChart,
    options: {
        indexAxis: "x",
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
}

let config2 = {
    type: "bar",
    data: dataBarChart,
    options: {
        indexAxis: "y",
        scales: {
            x: {
                beginAtZero: true
            }
        }
    }
}

fetch('./z03.json')
    .then((response) => response.json())
    .then((json) => chartsDisplay(json));

function chartsDisplay(json) {
    console.log(json);

    barChart = new Chart(firstChart, config1);
    fillBarChart(json, barChart);

    const pie = document.getElementById('pie2022').getContext("2d");

    new Chart(pie, {
        type: 'pie',
        data: {
            labels: ["A", "B", "C", "D", "E", "FX", "FN"],
            datasets: [{
                label: [json.webte1.zaznam[0].rok],
                data: [json.webte1.zaznam[0].hodnotenie.A, json.webte1.zaznam[0].hodnotenie.B, json.webte1.zaznam[0].hodnotenie.C, json.webte1.zaznam[0].hodnotenie.D, json.webte1.zaznam[0].hodnotenie.E, json.webte1.zaznam[0].hodnotenie.FX, json.webte1.zaznam[0].hodnotenie.FN],
                backgroundColor: ['#92f7ba', '#8cd3ff', "#c4c400", "#e66b00", "#b00000", "#69005b", "#00032e",],
                borderWidth: 1,
            },]
        },

        options: {
            responsive: true,
            scales: {
            },
            plugins: {
                datalabels: {
                    formatter: (value, pie) => {
                        let sum = 0;
                        let dataArr = pie.chart.data.datasets[0].data;
                        dataArr.map(data => {
                            sum += data;
                        });
                        let percentage = (value * 100 / sum).toFixed(2) + "%";
                        if ((value * 100 / sum) < 3) {
                            return null
                        }
                        else
                            return percentage;
                    },
                    color: '#fff',
                    anchor: "end",
                    align: "start",
                }
            }

        },
        plugins: [ChartDataLabels]
    });

    const pie_2 = document.getElementById('pie2021').getContext("2d");

    new Chart(pie_2, {
        type: 'pie',
        data: {
            labels: ["A", "B", "C", "D", "E", "FX", "FN"],
            datasets: [{
                label: [json.webte1.zaznam[1].rok],
                data: [json.webte1.zaznam[1].hodnotenie.A, json.webte1.zaznam[1].hodnotenie.B, json.webte1.zaznam[1].hodnotenie.C, json.webte1.zaznam[1].hodnotenie.D, json.webte1.zaznam[1].hodnotenie.E, json.webte1.zaznam[1].hodnotenie.FX, json.webte1.zaznam[1].hodnotenie.FN],
                backgroundColor: ['#92f7ba', '#8cd3ff', "#c4c400", "#e66b00", "#b00000", "#69005b", "#00032e",],
                borderWidth: 1,
            },]
        },

        options: {
            responsive: true,
            scales: {
            },
            plugins: {
                datalabels: {
                    formatter: (value, pie) => {
                        let sum = 0;
                        let dataArr = pie.chart.data.datasets[0].data;
                        dataArr.map(data => {
                            sum += data;
                        });
                        let percentage = (value * 100 / sum).toFixed(2) + "%";
                        if ((value * 100 / sum) < 3) {
                            return null
                        }
                        else
                            return percentage;
                    },
                    color: '#fff',
                    anchor: "end",
                    align: "start",
                }
            }

        },
        plugins: [ChartDataLabels]
    });

    const pie_3 = document.getElementById('pie2020').getContext("2d");

    new Chart(pie_3, {
        type: 'pie',
        data: {
            labels: ["A", "B", "C", "D", "E", "FX", "FN"],
            datasets: [{
                label: [json.webte1.zaznam[2].rok],
                data: [json.webte1.zaznam[2].hodnotenie.A, json.webte1.zaznam[2].hodnotenie.B, json.webte1.zaznam[2].hodnotenie.C, json.webte1.zaznam[2].hodnotenie.D, json.webte1.zaznam[2].hodnotenie.E, json.webte1.zaznam[2].hodnotenie.FX, json.webte1.zaznam[2].hodnotenie.FN],
                backgroundColor: ['#92f7ba', '#8cd3ff', "#c4c400", "#e66b00", "#b00000", "#69005b", "#00032e",],
                borderWidth: 1,
            },]
        },

        options: {
            responsive: true,
            scales: {
            },
            plugins: {
                datalabels: {
                    formatter: (value, pie) => {
                        let sum = 0;
                        let dataArr = pie.chart.data.datasets[0].data;
                        dataArr.map(data => {
                            sum += data;
                        });
                        let percentage = (value * 100 / sum).toFixed(2) + "%";
                        if ((value * 100 / sum) < 3) {
                            return null
                        }
                        else
                            return percentage;
                    },
                    color: '#fff',
                    anchor: "end",
                    align: "start",
                }
            }

        },
        plugins: [ChartDataLabels]
    });

    const pie_4 = document.getElementById('pie2019').getContext("2d");

    new Chart(pie_4, {
        type: 'pie',
        data: {
            labels: ["A", "B", "C", "D", "E", "FX", "FN"],
            datasets: [{
                label: [json.webte1.zaznam[3].rok],
                data: [json.webte1.zaznam[3].hodnotenie.A, json.webte1.zaznam[3].hodnotenie.B, json.webte1.zaznam[3].hodnotenie.C, json.webte1.zaznam[3].hodnotenie.D, json.webte1.zaznam[3].hodnotenie.E, json.webte1.zaznam[3].hodnotenie.FX, json.webte1.zaznam[3].hodnotenie.FN],
                backgroundColor: ['#92f7ba', '#8cd3ff', "#c4c400", "#e66b00", "#b00000", "#69005b", "#00032e",],
                borderWidth: 1,
            },]
        },

        options: {
            responsive: true,
            scales: {
            },
            plugins: {
                datalabels: {
                    formatter: (value, pie) => {
                        let sum = 0;
                        let dataArr = pie.chart.data.datasets[0].data;
                        dataArr.map(data => {
                            sum += data;
                        });
                        let percentage = (value * 100 / sum).toFixed(2) + "%";
                        if ((value * 100 / sum) < 3) {
                            return null
                        }
                        else
                            return percentage;
                    },
                    color: '#fff',
                    anchor: "end",
                    align: "start",
                }
            }

        },
        plugins: [ChartDataLabels]
    });

    const pie_5 = document.getElementById('pie2018').getContext("2d");

    new Chart(pie_5, {
        type: 'pie',
        data: {
            labels: ["A", "B", "C", "D", "E", "FX", "FN"],
            datasets: [{
                label: [json.webte1.zaznam[4].rok],
                data: [json.webte1.zaznam[4].hodnotenie.A, json.webte1.zaznam[4].hodnotenie.B, json.webte1.zaznam[4].hodnotenie.C, json.webte1.zaznam[4].hodnotenie.D, json.webte1.zaznam[4].hodnotenie.E, json.webte1.zaznam[4].hodnotenie.FX, json.webte1.zaznam[4].hodnotenie.FN],
                backgroundColor: ['#92f7ba', '#8cd3ff', "#c4c400", "#e66b00", "#b00000", "#69005b", "#00032e",],
                borderWidth: 1,
            },]
        },

        options: {
            responsive: true,
            scales: {
            },
            plugins: {
                datalabels: {
                    formatter: (value, pie) => {
                        let sum = 0;
                        let dataArr = pie.chart.data.datasets[0].data;
                        dataArr.map(data => {
                            sum += data;
                        });
                        let percentage = (value * 100 / sum).toFixed(2) + "%";
                        if ((value * 100 / sum) < 3) {
                            return null
                        }
                        else
                            return percentage;
                    },
                    color: '#fff',
                    anchor: "end",
                    align: "start",
                }
            }

        },
        plugins: [ChartDataLabels]
    });

    const pie_6 = document.getElementById('pie2017').getContext("2d");

    new Chart(pie_6, {
        type: 'pie',
        data: {
            labels: ["A", "B", "C", "D", "E", "FX", "FN"],
            datasets: [{
                label: [json.webte1.zaznam[5].rok],
                data: [json.webte1.zaznam[5].hodnotenie.A, json.webte1.zaznam[5].hodnotenie.B, json.webte1.zaznam[5].hodnotenie.C, json.webte1.zaznam[5].hodnotenie.D, json.webte1.zaznam[5].hodnotenie.E, json.webte1.zaznam[5].hodnotenie.FX, json.webte1.zaznam[5].hodnotenie.FN],
                backgroundColor: ['#92f7ba', '#8cd3ff', "#c4c400", "#e66b00", "#b00000", "#69005b", "#00032e",],
                borderWidth: 1,
            },]
        },

        options: {
            responsive: true,
            scales: {
            },
            plugins: {
                datalabels: {
                    formatter: (value, pie) => {
                        let sum = 0;
                        let dataArr = pie.chart.data.datasets[0].data;
                        dataArr.map(data => {
                            sum += data;
                        });
                        let percentage = (value * 100 / sum).toFixed(2) + "%";
                        if ((value * 100 / sum) < 3) {
                            return null
                        }
                        else
                            return percentage;
                    },
                    color: '#fff',
                    anchor: "end",
                    align: "start",
                }
            }

        },
        plugins: [ChartDataLabels]
    });

    const line = document.getElementById('lineChart').getContext("2d");

    new Chart(line, {
        type: 'line',
        data: {
            labels: [json.webte1.zaznam[0].rok, json.webte1.zaznam[1].rok, json.webte1.zaznam[2].rok, json.webte1.zaznam[3].rok, json.webte1.zaznam[4].rok, json.webte1.zaznam[5].rok],
            datasets: [{
                label: "A",
                data: [json.webte1.zaznam[0].hodnotenie.A, json.webte1.zaznam[1].hodnotenie.A, json.webte1.zaznam[2].hodnotenie.A, json.webte1.zaznam[3].hodnotenie.A, json.webte1.zaznam[4].hodnotenie.A, json.webte1.zaznam[5].hodnotenie.A],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },

        options: {
            responsive: true,
        },
    });
}

function fillBarChart(json, barChart) {
    let zaznam = json.webte1.zaznam;
    for (let i = 0; i < zaznam.length; i++) {
        let znamky = zaznam[i].hodnotenie;
        let x = 0;
        barChart.data.labels[i] = zaznam[i].rok;
        for (const key in znamky) {
            /*console.log(barChart.data.datasets[x].data);*/
            barChart.data.datasets[x].data.push(znamky[key]);
            x++;
        }
    }
    barChart.update();
}

/*https://www.youtube.com/watch?v=MfcjrMOmOrI   video tutorial*/
function shiftBarColumns() {
    console.log(window.innerWidth);
    const indexAxis = barChart.config.options.indexAxis;
    console.log(indexAxis);

    if (indexAxis == 'x' && window.innerWidth < 540) {
        /*console.log("convert to Y")*/
        barChart.destroy();
        barChart = new Chart(firstChart, config2);

    }

    if (indexAxis == 'y' && window.innerWidth >= 540) {
        /*console.log("convert to X")*/
        barChart.destroy();
        barChart = new Chart(firstChart, config1);
    }
}

/*---------------------------------------------------------------------------------------*/

const ioLabChart = document.getElementById('ioLabChart');
let draw_graph = true;
let amplitude = 1;

if (typeof (EventSource) !== "undefined") {
    let source = new EventSource("http://old.iolab.sk/evaluation/sse/sse.php");
    source.addEventListener("message", function (e) {
        let data = JSON.parse(e.data);

        if (amplitude === '') {
            amplitude = 1;
        }

        chart.data.labels.push(data.x);
        chart.data.datasets[0].data.push(data.y1 * amplitude);
        chart.data.datasets[1].data.push(data.y2 * amplitude);

        if (draw_graph === true) {
            chart.update();
        }

    }, false);

} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support server-sent events...";
}

const data = {
    labels: [],
    datasets: [
        {
            label: 'Zašumený sínus',
            data: [],
            fill: false,
            borderColor: '#2f7d1e',
            tension: 0,
            hidden: false,
        },
        {
            label: 'Zašumený kosínus',
            data: [],
            fill: false,
            borderColor: '#ff2140',
            tension: 0,
            hidden: false,
        }
    ]
};


const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: false,
            zoom: {
                zoom: {
                    wheel: {
                        enabled: false,
                    },
                    drag: {
                        enabled: false,
                    },
                    mode: 'xy',
                }
            }
        }
    }
};



const chart = new Chart(ioLabChart, config);

const exitDraw = (button) => {

    if (draw_graph === true) {
        draw_graph = false;
        chart.config.options.plugins.zoom.zoom.wheel.enabled = true;
        chart.config.options.plugins.zoom.zoom.drag.enabled = true;
        chart.update();
    }
    console.log(chart.config.options.plugins.zoom.zoom.wheel.enabled)
}

const showLine = (checkbox) => {
    if (checkbox.classList.contains('line-cosinus')) {
        chart.data.datasets[1].hidden = !chart.data.datasets[1].hidden;

    } else if (checkbox.classList.contains('line-sinus')) {
        chart.data.datasets[0].hidden = !chart.data.datasets[0].hidden;
    }
    chart.update();
}


class sliderText extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div onchange = "show()">
        <input type="checkbox" value="" id="slider" name="choice">
        <label for="slider">Slider</label>
        <input type="checkbox" value="" id="number" name="choice">
        <label for="number">Number input</label> <br>
        
        <input type="range" class="slider" id="amp" name="amp" min="1" max="5" style = "display:none" value = "1">
        <input type="number" class="inputos "id="num" name="num" min="1" max="5" style = "display:none" value = "1">
        </div>`;
        let range = document.getElementById('amp');
        let field = document.getElementById('num');;


        field.addEventListener('input', function (e) {
            range.value = e.target.value;
            amplitude = e.target.value;
        });

        range.addEventListener('input', function (e) {
            field.value = e.target.value;
            amplitude = e.target.value;
        });


    }

}

function show() {
    let radio1 = document.getElementById("slider");
    let radio2 = document.getElementById("number");

    if (radio1.checked) {
        document.getElementById("amp").style.display = "block";
    }
    else {
        document.getElementById("amp").style.display = "none";
    }

    if (radio2.checked) {
        document.getElementById("num").style.display = "block";
    }
    else {
        document.getElementById("num").style.display = "none";
    }
}
customElements.define('slider-component', sliderText);