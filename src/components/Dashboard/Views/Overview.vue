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
              <h2 class="card-title">{{visitsDay}}</h2>
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
              <h2 class="card-title">{{visitsWeek}}</h2>
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
              <h2 class="card-title">{{visitsMonth}}</h2>
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
              <h2 class="card-title">{{catalogues}}</h2>
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
  import db from '../../firebaseInit'
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
    created(){

      // Contadores
      var mon = 0;
      var tue = 0;
      var wed = 0;
      var thu = 0;
      var fri = 0;

      // Variable date contiene dia actual
      var date = new Date();

      // Variable today y todayAux tiene la fecha actual formateada
      var today = new Date(date.getFullYear() + '-' + (date.getMonth()+1) + '-' + (date.getDate()));
      var todayAux = new Date(date.getFullYear() + '-' + (date.getMonth()+1) + '-' + (date.getDate()));

      // Variable d contiene el primer dia del mes actual
      var d = new Date(date.getFullYear() + '-' + (date.getMonth()+1) + '-01');

      // Variable w y thisWeek contiene el primer día de la semana actual
      var w = new Date(todayAux.setDate(date.getDate()-(date.getDay()-1)));
      var thisWeek = new Date(todayAux.setDate(date.getDate()-(date.getDay()-1)));

      // Variable lastWeek contiene fecha semana anterior
      var lastWeek = new Date(w.setDate(w.getDate()-7));

      // Catalogos entregados este mes
      db.firestore().collection('visits').where('createdAt', '>=', d).where('catalogue', '==', true).get()
        .then(snapshot => {
          this.catalogues = snapshot.size;
        })
        .catch(err => {
        console.log('Error getting documents', err);
        });

      // visitas realizadas este mes
      db.firestore().collection('visits').where('createdAt', '>=', d).get()
        .then(snapshot => {
          this.visitsMonth = snapshot.size;
        })
        .catch(err => {
        console.log('Error getting documents', err);
        });

      // Visitas realizadas esta semana
      db.firestore().collection('visits').where('createdAt', '>=', thisWeek).get()
        .then(snapshot => {
          this.visitsWeek = snapshot.size;
        })
        .catch(err => {
        console.log('Error getting documents', err);
        });

      // Visitas realizadas hoy
      db.firestore().collection('visits').where('createdAt', '>=', today).get()
        .then(snapshot => {
          this.visitsDay = snapshot.size;
        })
        .catch(err => {
        console.log('Error getting documents', err);
        });

      // Visitas realizadas semana anterior
      console.log('semana pasada', lastWeek);
      console.log('esta semana', thisWeek);
      db.firestore().collection('visits').where('createdAt','>=',lastWeek).where('createdAt','<',thisWeek).get()
        .then(snapshot => {
          snapshot.forEach(doc => {
             console.log(doc.id, '=>', doc.data());
             console.log(doc.data().createdAt.getDay());

             switch(doc.data().createdAt.getDay()){
                case 0:
                  //Sunday
                  break;
                case 1:
                  //Monday
                  mon = mon + 1;
                   break;
                case 2:
                  //Tuesday;
                  tue = tue + 1;                  
                  break;
                case 3:
                  //Wednesday
                  wed = wed + 1;                  
                  break;
                case 4:
                  //Thursday
                  thu = thu + 1;                  
                  break;
                case 5:
                  //Friday
                  fri = fri + 1;                  
                  break;
                case 6:
                  //Saturday
                  break;
                default:
                  console.log('Error al seleccionar dia de la semana');
             }

          });
          this.barChart.data.series[0] = [mon, tue, wed, thu, fri];
          console.log(snapshot.size);
          console.log(this.barChart.data.series[0]);
        })
        .catch(err => {
        console.log('Error getting documents', err);
        });

    },
    // mounted() {
    //   this.$http.headers.common.Authorization = localStorage.token;

    //   //Llamada para rellenar las cards
    //   this.$http.get('http://www.mocky.io/v2/5ae6e1ea2f00006200f0589c')
    //     .then(response => {
    //       if(response.status === 200) {
    //         this.infoCards = response.data;
    //       }
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })

    //   //Llamada para grafica de cátalogos
    //   this.$http.get('http://www.mocky.io/v2/5ae6f3262f00006b00f0590e')
    //     .then(response => {
    //       if(response.status === 200) {
    //         this.lineChart.data.labels = response.data.labels;
    //         this.lineChart.data.series = response.data.series;
    //       }
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })

    //   //Llamada para rellenar visitas
    //   this.$http.get('http://www.mocky.io/v2/5ae6f4682f00006b00f05914')
    //     .then(response => {
    //       if(response.status === 200) {
    //         this.barChart.data.labels = response.data.labels;
    //         this.barChart.data.series = response.data.series;
    //       }
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    // },
    data () {
      return {
        catalogues: '',
        visitsMonth: '',
        visitsWeek: '',
        visitsDay: '',
        lineChart: {
          data: {
            labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'],
            series: '',
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
            labels: ['Lun', 'Mar', 'Mier', 'Jue', 'Vie' ],
            series: []
          },
          options: {
            seriesBarDistance: 10,
            onlyInteger: true,
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
