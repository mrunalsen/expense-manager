import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(...registerables, ChartDataLabels);

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard-presentation.component.html'
})
export class DashboardPresentationComponent implements OnInit {
  public currentDate = new Date();
  public wallet = [
    {
      name: 'Paypal',
      money: 2750.75,
      icon: 'bi bi-paypal',
      menu: 'bi bi-three-dots-vertical'
    },
    {
      name: 'Jenius',
      money: 475.25,
      icon: 'bi bi-paypal',
      menu: 'bi bi-three-dots-vertical'
    },
    {
      name: 'Jenius',
      money: 475.25,
      icon: 'bi bi-paypal',
      menu: 'bi bi-three-dots-vertical'
    },
    {
      name: 'Jenius',
      money: 475.25,
      icon: 'bi bi-paypal',
      menu: 'bi bi-three-dots-vertical'
    },
    {
      name: 'Jenius',
      money: 475.25,
      icon: 'bi bi-paypal',
      menu: 'bi bi-three-dots-vertical'
    },
    {
      name: 'Jenius',
      money: 475.25,
      icon: 'bi bi-paypal',
      menu: 'bi bi-three-dots-vertical'
    },
  ];

  public savings = [
    {
      name: 'Samsung GS23 Ultra',
      total: 1000,
      saving: 100
    },
    {
      name: 'Iphone',
      total: 1000,
      saving: 100
    },
    {
      name: 'Home',
      total: 100000,
      saving: 100
    },
  ];
  constructor() { }

  ngOnInit(): void {
    this.renderChart();
  }

  public cardName(index: number, cardDetails: any): string {
    return cardDetails.name;
  }
  public savingsName(index: number, savingsDetails: any): string {
    return savingsDetails.name;
  }

  // margin for legends
  public legendMargin = {
    id: 'legendMargin',
    beforeInit(chart: any) {
      const fiValue = chart.legend.fit;
      chart.legend.fit = function () {
        fiValue.bind(chart.legend)();
        return (this.height += 8);
      };
    },
  };
  public renderChart() {
    new Chart("barchart", {
      type: 'bar',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
          {
            label: 'Earned',
            data: [20000],
            borderWidth: 1,
            borderRadius: 8
            // backgroundColor: ['#6acb6d']
          },
          {
            label: 'Spent',
            data: [500, 2500, 12000, 700],
            borderWidth: 1,
            borderRadius: 8
            // backgroundColor: ['#54d2f9']
          },
        ]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            grid: {
              drawOnChartArea: false,
            },
            // ticks: {
            //   display: false
            // },
          },
          y: {
            beginAtZero: true,
            border: {
              dash: [10],
            },
            ticks: {
              callback: function (label: any) {
                if (label == 0) {
                  return '$' + 0;
                } else
                  return label / 1000 + 'k';
              },
            }
          }
        },
        plugins: {
          datalabels: {
            anchor: 'start',
            align: 'start',
            color: 'transparent'
          },
          legend: {
            align: 'start',
            labels: {
              usePointStyle: true,
              pointStyle: 'circle',
            },
          }
        }
      },
      plugins: [this.legendMargin],
    });
  };
}