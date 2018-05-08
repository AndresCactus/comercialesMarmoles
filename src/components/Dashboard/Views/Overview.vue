<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-warning">
              <i class="fa fa-vcard-o text-secondary"></i>
            </div>
            <div slot="content">
              <p class="card-category">Visitas hoy</p>
              <h2 class="card-title">{{infoCards.today}}</h2>
            </div>
            <div slot="footer">
              <i class="fa fa-refresh"></i>Hoy
            </div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-success">
              <i class="fa fa-briefcase text-secondary"></i>
            </div>
            <div slot="content">
              <p class="card-category">Visitas semana</p>
              <h2 class="card-title">{{infoCards.week}}</h2>
            </div>
            <div slot="footer">
              <i class="fa fa-refresh"></i>Semana actual
            </div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-danger">
              <i class="fa fa-calendar text-secondary"></i>
            </div>
            <div slot="content">
              <p class="card-category">Visitas mes</p>
              <h2 class="card-title">{{infoCards.month}}</h2>
            </div>
            <div slot="footer">
              <i class="fa fa-calendar-o"></i>Mes actual
            </div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-info">
              <i class="fa fa-book text-secondary"></i>
            </div>
            <div slot="content">
              <p class="card-category">Catálogos mes</p>
              <h2 class="card-title">{{infoCards.catalogue}}</h2>
            </div>
            <div slot="footer">
              <i class="fa fa-calendar-o"></i>Mes actual
            </div>
          </stats-card>
        </div>

      </div>
      <div class="row">
        <div class="col-md-8">
          <chart-card :chart-data="lineChart.data"
                      :chart-options="lineChart.options"
                      :responsive-options="lineChart.responsiveOptions">
            <template slot="header">
              <h4 class="card-title">Catálogos</h4>
              <p class="card-category">Catálogos y expositores entregados la semana anterior</p>
            </template>
            <template slot="footer">
              <div class="legend">
                <i class="fa fa-circle text-danger"></i> Catalogos entregados
                <i class="fa fa-circle text-info"></i> Expositores entregados
              </div>
              <hr>
              <div class="stats">
                <i class="fa fa-history"></i> Información actualizada al día de la semana
              </div>
            </template>
          </chart-card>
        </div>

        <div class="col-md-4">
          <chart-card
            :chart-data="barChart.data"
            :chart-options="barChart.options"
            :chart-responsive-options="barChart.responsiveOptions"
            chart-type="Bar">
            <template slot="header">
              <h4 class="card-title">Visitas</h4>
              <p class="card-category">Visitas realizadas la semana anterior</p>
            </template>
            <template slot="footer">
              <div class="legend">
                <i class="fa fa-circle text-info"></i> Visitas
              </div>
              <hr>
              <div class="stats">
                <i class="fa fa-history"></i> Información actualizada
              </div>
            </template>
          </chart-card>
          <!-- <chart-card :chart-data="pieChart.data" chart-type="Pie">
            <template slot="header">
              <h4 class="card-title">Email Statistics</h4>
              <p class="card-category">Last Campaign Performance</p>
            </template>
            <template slot="footer">
              <div class="legend">
                <i class="fa fa-circle text-info"></i> Open
                <i class="fa fa-circle text-danger"></i> Bounce
                <i class="fa fa-circle text-warning"></i> Unsubscribe
              </div>
              <hr>
              <div class="stats">
                <i class="fa fa-clock-o"></i> Campaign sent 2 days ago
              </div>
            </template>
          </chart-card> -->
        </div>
      </div>

      <!-- <div class="row">
        <div class="col-md-6">
          <chart-card
            :chart-data="barChart.data"
            :chart-options="barChart.options"
            :chart-responsive-options="barChart.responsiveOptions"
            chart-type="Bar">
            <template slot="header">
              <h4 class="card-title">2014 Sales</h4>
              <p class="card-category">All products including Taxes</p>
            </template>
            <template slot="footer">
              <div class="legend">
                <i class="fa fa-circle text-info"></i> Tesla Model S
                <i class="fa fa-circle text-danger"></i> BMW 5 Series
              </div>
              <hr>
              <div class="stats">
                <i class="fa fa-check"></i> Data information certified
              </div>
            </template>
          </chart-card>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
  import ChartCard from 'src/components/UIComponents/Cards/ChartCard.vue'
  import StatsCard from 'src/components/UIComponents/Cards/StatsCard.vue'
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  import Checkbox from 'src/components/UIComponents/Inputs/Checkbox.vue'

  export default {
    components: {
      Checkbox,
      Card,
      ChartCard,
      StatsCard
    },
    mounted() {
      this.$http.headers.common.Authorization = localStorage.token;

      //Llamada para rellenar las cards
      this.$http.get('http://www.mocky.io/v2/5ae6e1ea2f00006200f0589c')
        .then(response => {
          if(response.status === 200) {
            this.infoCards = response.data;
          }
        })
        .catch(error => {
          console.log(error)
        })

      //Llamada para grafica de cátalogos
      this.$http.get('http://www.mocky.io/v2/5ae6f3262f00006b00f0590e')
        .then(response => {
          if(response.status === 200) {
            this.lineChart.data.labels = response.data.labels;
            this.lineChart.data.series = response.data.series;
          }
        })
        .catch(error => {
          console.log(error)
        })

      //Llamada para rellenar visitas
      this.$http.get('http://www.mocky.io/v2/5ae6f4682f00006b00f05914')
        .then(response => {
          if(response.status === 200) {
            this.barChart.data.labels = response.data.labels;
            this.barChart.data.series = response.data.series;
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    data () {
      return {
        infoCards: [],
        lineChart: {
          data: {
            labels: [],
            series: [],
          },
          options: {
            onlyInteger: true,
            showArea: false,
            height: '245px',
            axisX: {
              showGrid: false,        
            },
            lineSmooth: true,
            showLine: true,
            showPoint: true,
            fullWidth: true,
            chartPadding: {
              right: 60
            }
          },
          responsiveOptions: [
            ['screen and (max-width: 640px)', {
              axisX: {
                labelInterpolationFnc (value) {
                  return value[0]
                }
              }
            }]
          ]
        },
        barChart: {
          data: {
            labels: [],
            series: []
          },
          options: {
            seriesBarDistance: 10,
            axisX: {
              showGrid: false
            },
            height: '245px'
          },
          responsiveOptions: [
            ['screen and (max-width: 640px)', {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc (value) {
                  return value[0]
                }
              }
            }]
          ]
        },
      }
    }
  }
</script>
<style>

.card-stats .card-body .numbers {
    text-align: center;
}

h4{
  font-weight: 400 !important;
}

h2{
  font-weight: 400 !important;
}


</style>
