<template>
    <transition name="expand">
        <section class="users-view" v-if="show" >
            <form style="padding: 10px 20px; margin: 0 25px; position: relative;">
                <div style="margin: 10px 0;">
                    <span class="doctor-doctorid">Choose Doctor </span>
                    <select v-model="doctorid">
                        {{doctors[0].doctorname}}
                        <option disabled value="">Please select one</option>
                        <option v-for="doctor in doctors" v-bind:value="doctor.doctorid" v-if="doctors.length > 0">
                            {{doctor.doctorname}}
                        </option>
                    </select>
                </div>
                <transition name="expand">
                    <div style="margin: 10px 0;" v-if="doctorid">
                        <span class="appointment-date">Date </span>
                        <input name="date" type="date" v-model="date" v-validate="'date_format:YYYY-MM-DD|date_between:' + todaysDate + ',2018-12-31'" :class="{'input': true, 'is-danger': errors.has('date_between') }"/>
                        <div v-show="errors.has('date')" class="content" style="color: red;">{{ errors.first('date') }}</div>
                    </div>
                </transition>
                <transition name="expand">
                    <div style="margin: 10px 0;" v-if="date && !errors.has('date')" >
                        <span class="appointment-time">Available Times </span>
                        <select v-model="booktime">
                            <option disabled value="">select time</option>
                            <option v-for="time in appointmentTimes" v-bind:value="time.time">
                                {{time.time}}
                            </option>
                        </select>
                    </div>
                </transition>
            </form>
            <transition name="expand">
                <button type="button" class="button--grey" @click="submitInsert" v-if="doctorid && date && booktime && !errors.has('date')" style="padding: 10px 20px; margin: 0 45px; position: relative;">Book</button>
            </transition>
        </section>
    </transition>
</template>

<script>
    import axios from '~/plugins/axios'

    export default {
      middleware: 'check-patient',
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
          doctorid: '',
          date: '',
          booktime: '',
          duration: 1,
          appointmentTimes: [{time: '09:00:00'}, {time: '10:00:00'}, {time: '11:00:00'}, {time: '12:00:00'}, {time: '13:00:00'}, {time: '14:00:00'}, {time: '15:00:00'}, {time: '16:00:00'}]
        }
      },

      watch: {
        date: function (val) {
          axios.get('/api/doctor/appointments/' + this.doctorid + '/' + val).then((res) => {
            for (var time in res.data) {
              var index = this.appointmentTimes.findIndex(value => value.time === res.data[time].appointmentdatetime)
              if (index !== -1) {
                this.appointmentTimes.splice(index, 1)
              }
            }
          })
        },

        booktime: function () {
          let self = this
          axios.get('/api/doctorsfree/' + self.date + ' ' + self.booktime).then((doctorsfree) => {
            for (var doctor in this.doctors) {
              var index = doctorsfree.data.findIndex(value => value.doctorid === this.doctors[doctor].doctorid)

              if (index === -1) {
                this.doctors.splice(doctor, 1)
              }
            }
          })
        }
      },

      props: ['show', 'doctors'],

      methods: {
        submitInsert () {
          let self = this

          axios.post('/api/patient/makeAppointment/' + this.$store.getters.getAuthUser.userid, {
            headers:
                        {
                          'Content-Type': 'application/json'
                        },
            data:
                        {
                          doctorid: self.doctorid,
                          date: self.date,
                          booktime: self.booktime,
                          duration: self.duration
                        }})
            .catch((e) => {
              console.log(e)
            })
          self.$nuxt.$router.go({ path: '/patient', force: true })
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

    .expand-enter-active {
        transition: all .3s ease;
    }
    .expand-leave-active {
        transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
        overflow: hidden;
    }
    .expand-enter, .expand-leave-to  {
        transform: translateX(10px);
        height: 0;
        opacity: 0;
    }

</style>