<template>
    <div class="bg-white w-full shadow-md rounded-xl p-10 space-y-6">
        <div class="relative flex items-center p4">
            <div class="text-2xl font-semibold">
                <p> 📘 GitHub Contributions</p>
            </div>
            <div class="absolute right-0">
                <select v-model="selected" class="" @change="this.redrawGraph()">
                    <option v-for="(year, index) in years" :key="index" :value="index" class="outline-none border-transparent">
                        {{ year }}
                    </option>
                </select>
            </div> 
        </div>
        
        <div class="shadow-xl rounded-md">
            <canvas class="mt-6 inline" ref="myChart"></canvas>
        </div>  
    </div>

</template>

<script>
import Chart from "chart.js"
import axios from "axios"


export default {

    data: () => ({
        selected: 0,
        years: [],
        contributions: [],
        myChart: null,
        
    }),

    mounted(){
        axios.get("https://contributions-api.herokuapp.com/api/years/months/andantillon").then((res) => {
            res.data.years.forEach(year => {
                this.years.push(year.year)
                this.contributions.push(Array.from(year.months, month => month.count))
            })
        }).finally(() => {
            this.drawGraph()
        })
        
    },

    methods: {
        drawGraph(){
            const ctx = this.$refs.myChart.getContext('2d')
            this.myChart = new Chart(ctx, this.config)
            this.myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    datasets: [{
                        lineTension: 0.2,
                        backgroundColor: 'rgba(0,0,0,0)',
                        borderColor: 'rgb(0, 170, 255)',
                        pointBorderColor: 'rgb(0, 170, 255)',
                        pointBackgroundColor: 'rgb(0, 170, 255)',
                        borderWidth: 1,
                        spanGaps: true,
                        data: this.contributions[this.selected]
                    }]
                },
                options: {
                    responsive: true,
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display: false,
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                display: false,
                            },
                            ticks: {
                                beginAtZero: true,
                                suggestedMax: 50,
                                stepSize: 10,
                            }
                        }]
                    }
                }
            });
        },

        redrawGraph(){
            this.myChart.clear()
            this.myChart.data.datasets[0].data = this.contributions[this.selected]
            this.myChart.update({
                duration: 1000
            })
        }
    },  
    
}
</script>