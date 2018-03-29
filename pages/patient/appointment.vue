<template>
    <section class="users-view" >
            <div class="content">
                <div class="subsection">
        <form style="display: flex;">
            <div style="margin: 10px 0;flex: 30%;">
                <span class="doctor-doctorid">Doctor </span>
                <select v-model="doctorid">
                    {{doctors[0].doctorname}}
                    <option disabled value="">Please select one</option>
                    <option v-for="doctor in doctors" v-bind:value="doctor.doctorid">
                        {{doctor.doctorname}}
                    </option>
                </select>
            </div>
                <div style="margin: 10px 0; flex: 30%;" v-if="doctorid">
                    <span class="appointment-date">Date </span>
                    <input name="date" type="date" v-model="date" v-validate="'date_format:YYYY-MM-DD|date_between:' + todaysDate + ',2018-12-31'" :class="{'input': true, 'is-danger': errors.has('date_between') }"/>
                </div>
                <div style="margin: 10px 0; flex: 30%;" v-if="date" >
                    <span class="appointment-time">Times </span>
                    <select v-model="booktime">
                        <option disabled value="">select time</option>
                        <option v-for="time in appointmentTimes" v-bind:value="time.time">
                            {{time.time}}
                        </option>
                    </select>
                </div>
            <button type="button" class="button--grey" @click="update" :disabled="errors.has('date')" style="flex: 10%;">Update</button>
        </form>
        <div v-show="errors.has('date')" class="content" style="color: red; position: relative;">{{ errors.first('date') }}</div>
            </div>
            </div>
    </section>
</template>

<script>
    import axios from '~/plugins/axios'

    export default {
      middleware: 'check-patient',
      async asyncData () {
        let doctorData = await axios.get('/api/doctors')
        return { doctors: doctorData.data }
      },
      beforeCreate () {
        if (this.$store.getters.getDoctorID === null || this.$store.getters.getAppointmentDate === null) {
          this.$nuxt.$router.replace({ path: '/patient' })
        }
      },
      data () {
        // build todays date variable
        var today = new Date()
        var dd = today.getDate()
        var mm = (today.getMonth() + 1)
        var yyyy = today.getFullYear()

        if (dd < 10) {
          dd = '0' + dd
        }

        if (mm < 10) {
          mm = '0' + mm
        }
        return {
          todaysDate: yyyy + '-' + mm + '-' + dd,
          email: '',
          doctorid: this.$store.getters.getDoctorID || '',
          date: this.$store.getters.getAppointmentDate || '',
          booktime: this.$store.getters.getAppointmentTime || '',
          duration: 1,
          appointmentTimes: [{time: '09:00:00'}, {time: '10:00:00'}, {time: '11:00:00'}, {time: '12:00:00'}, {time: '13:00:00'}, {time: '14:00:00'}, {time: '15:00:00'}, {time: '16:00:00'}]
        }
      },
      methods: {
        update () {
          let self = this

          axios.post('/api/patient/updateAppointment/' + this.$store.getters.getAuthUser.userid, {
            headers:
                    {
                      'Content-Type': 'application/json'
                    },
            data:
                    {
                      doctorid: self.doctorid,
                      date: self.date,
                      booktime: self.booktime,
                      duration: self.duration,
                      appointmentdatetime: this.$store.getters.getAppointmentDate + ' ' + this.$store.getters.getAppointmentTime

                    }})
            .catch((e) => {
              console.log(e)
            })
          self.$nuxt.$router.replace({ path: '/patient' })
        }

      },

      watch: {
        date: function (val) {
          var times = [{time: '09:00:00'}, {time: '10:00:00'}, {time: '11:00:00'}, {time: '12:00:00'}, {time: '13:00:00'}, {time: '14:00:00'}, {time: '15:00:00'}, {time: '16:00:00'}]
          axios.get('/api/doctor/appointments/' + this.doctorid + '/' + val).then((res) => {
            for (var time in res.data) {
              var index = times.findIndex(value => value.time === res.data[time].appointmentdatetime)
              if (index !== -1) {
                times.splice(index, 1)
              }
            }
            this.appointmentTimes = times
          })
        }
      }
    }
</script>

<style lang="stylus" scoped>
    .user-view
        padding-top 0

    .content {
        position absolute
        width 100%
    }

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
        a
            text-decoration underline
            &:hover
                color #515ec4

    button:disabled,
    button[disabled]{
        border: 1px solid #999999;
        background-color: #cccccc;
        color: #666666;
    }
</style>