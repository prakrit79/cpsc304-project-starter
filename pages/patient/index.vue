<template>
    <section class="users-view">
        <div class="content">
            <div class="subsection">
                <H3 >
                    Book New Appointment at:
                </H3>
                <div class="subsection" style="padding: 10px 20px; margin: 0 25px; position: relative; display: flex;" v-if="!show">
                    <button style="padding: 10px;" type="button" class="button--grey" v-on:click='getLocationDoctors(location.address)' v-for="(location, clinicname) in locations" :key="clinicname">{{location.clinicname}}</button>
                    <button style="padding: 10px;" type="button" class="button--grey" v-on:click='getAllDoctors()'>Any Location</button>
                </div>
                <section v-if="show" class="users-view">
                    <H3>
                        Location: {{location}}
                    </H3>
                </section>
                <makeAppointment :show="show" :doctors="doctors" />
                <H3 >
                    Appointments
                </H3>
                <ul style="list-style-type: none; padding: 0; margin: 0;">
                    <li v-for="(appointment, date, aptime) in appointments" :key="date + aptime" style="padding: 10px 20px; margin: 0 25px; position: relative; display: flex;">
                        {{ appointment.duration + ' hour appointment with ' + appointment.doctorname }}
                        {{' on ' + appointment.date }}
                        {{'@ ' + appointment.aptime }}
                        {{'location: ' + appointment.address}}
                        <button type="button" class="button--grey" v-on:click='update(appointment.doctorid, appointment.date, appointment.aptime)' style="flex: 10%">update</button>
                        <button type="button" class="button--grey" v-on:click='cancel(appointment.appointmentdatetime )' style="flex: 10%">cancel</button>
                    </li>
                </ul>
            </div>
            <div class="subsection">
                <h3>
                    My records
                </h3>
                <br>
                    <nuxt-link class="button--grey link" to="/patient/referral" style="flex: 10%"> Referrals</nuxt-link>
                    <nuxt-link class="button--grey link" to="/patient/prescription" style="flex: 10%"> Prescriptions</nuxt-link>
            </div>
            <div class="subsection">
                <H3 >
                    Account options
                </H3>
                <br>
                <button type="button" class="button--grey" v-on:click='deleteRecords()' style="flex: 10%">delete my records</button>
                <button type="button" class="button--grey" v-on:click='deleteAccount()' style="flex: 10%">delete my account</button>
            </div>
        </div>
    </section>
</template>

<script>
    import axios from '~/plugins/axios'
    import makeAppointment from './makeAppointment'

    export default {

      async asyncData ({ store }) {
        let appointmentData = await axios.get('/api/patient/appointments/' + store.getters.getAuthUser.userid)
        let doctorData = await axios.get('/api/doctors')
        let locationsData = await axios.get('/api/location')
        return { appointments: appointmentData.data, doctors: doctorData.data, locations: locationsData.data }
      },

      components: {
        'makeAppointment': makeAppointment
      },
    
      methods: {
        update (doctorid, date, time) {
          this.$store.commit('setDoctorID', doctorid)
          this.$store.commit('setAppointmentDate', date)
          this.$store.commit('setAppointmentTime', time)
          self.$nuxt.$router.replace({ path: '/patient/appointment' })
        },

        getLocationDoctors (address) {
          axios.get('/api/doctor/atAddress/' + address).then((res) => {
            this.doctors = res.data
            this.location = address
          }).then(this.show = true)
        },
        getAllDoctors () {
          axios.get('/api/doctors/').then((res) => {
            this.doctors = res.data
            this.location = 'All locations'
          }).then(this.show = true)
        },

        cancel (datetime) {
          axios.post('/api/patient/cancelAppointment/' + this.$store.getters.getAuthUser.userid, {
            headers:
                    {
                      'Content-Type': 'application/json'
                    },
            data:
                    {
                      datetime: datetime
                    }}).then(() => {
            var index = this.appointments.findIndex(value => value.appointmentdatetime === datetime)
            this.appointments.splice(index, 1)
          })
        },
        deleteRecords (patientid) {
          axios.post('/api/patient/deleteRecords/' + this.$store.getters.getAuthUser.userid)
          self.$nuxt.$router.go({ path: '../pages', force: true })
        },
        deleteAccount (patientid) {
          axios.post('/api/patient/deleteAccount/' + this.$store.getters.getAuthUser.userid)
          self.$nuxt.$router.go({ path: '../pages', force: true })
        }
      },

      data () {
        return {
          location: '',
          doctors: {},
          show: false
        }
      }
    }
</script>

<style lang="stylus" scoped>
    .users-view
        padding-top 0

    .content
        position absolute
        width 100%

    .subsection
        background-color #fff
        border-radius 2px
        margin 25px 0
        transition all .5s cubic-bezier(.55,0,.1,1)
        padding 10px 30px 10px 30px
        position relative
        line-height 20px
        .subsection-title
            font-size 26px
            font-weight 500
        .title
            font-size 18px
            font-weight 500


</style>