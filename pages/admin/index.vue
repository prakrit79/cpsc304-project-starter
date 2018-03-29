<template>
    <section class="users-view">
        <H1>Admin Page</H1>
        <div class="content">
            <div class="subsection">
                <div class="subsection-title">Locations:</div>
                <ul style="list-style-type: none; padding: 0; margin: 0;">
                    <li v-for="location in locations" style="padding: 10px 20px; margin: 0 25px; position: relative;">
                        {{ location.clinicname }}
                        <ul style="list-style-type: disc; padding: 0; margin: 8px;">
                        Doctors:
                        <li v-for="doctor in getDoctorsForLocation(location)" style="padding: 10px; margin: 0 25px;">
                         Name: {{doctor.doctorname }} Specialization: {{getSpecialization(doctor.doctorid)}}
                        </li>
                        </ul>
                    </li>
                </ul>
                <nuxt-link type="button" class="button--grey" to="/admin/addDoctor" style="postion: right;">Add Doctor</nuxt-link>
            </div>
            <div class="subsection">
                <div class="subsection-title">Patients:</div>
                <ul style="list-style-type: none; padding: 0; margin: 0;">
                    <li v-for="patient in patients" style="padding: 10px 20px; margin: 0 25px; position: relative;">
                        {{'Patient Name: '+ patient.patientname}}
                        {{'Patient ID: '+ patient.patientid}}
                        <button type="button" class="button--grey" v-on:click='removePatient(patient.patientid)' style="flex: 10%">remove</button>
                    </li>
                </ul>
                <nuxt-link type="button" class="button--grey" to="/admin/addPatient" style="postion: right;">Add Patient</nuxt-link>
            </div>
            <div class="subsection">
                <div class="subsection-title">Appointments:</div>
                <ul style="list-style-type: none; padding: 0; margin: 0;">
                    <li v-for="appointment in appointments" style="padding: 10px 20px; margin: 0 25px; position: relative;">
                        {{ appointment }}
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
  import axios from '~/plugins/axios'

  export default {
    middleware: 'check-admin',
    async asyncData () {
      let {data} = await axios.get('/api/admin')
      return {locations: data.locations, doctors: data.doctors, appointments: data.appointments, patients: data.patients, specialists: data.specializations}
    },
    methods: {
      getDoctorsForLocation (location) {
        return this.doctors.filter(doctor => location.address === doctor.address)
      },
      getSpecialization (doctorid) {
        let specialization = this.specialists.find(specialist => specialist.doctorid === doctorid)
        if (specialization === undefined) {
          return 'None'
        } else {
          return specialization.areaofspecialization
        }
      },
      removePatient (id) {
        axios.post('/api/admin/removePatient/', {
          headers:
            {
              'Content-Type': 'application/json'
            },
          data:
            {
              patientid: id
            }})
          .then(res => {
            self.$nuxt.$router.go({ path: '/admin', force: true })
          })
      }
    },
    head () {
      return {
        title: 'Admin page'
      }
    }
  }
</script>

<style lang="stylus" scoped>
    .users-view
        padding-top 0

    .content
        width 100%

    .subsection
        background-color #fff
        border-radius 2px
        margin 25px 0
        transition all .5s cubic-bezier(.55,0,.1,1)
        padding 10px 30px 10px 30px
        line-height 20px
        .subsection-title
            font-size 26px
            font-weight 500
        .title
            font-size 18px
            font-weight 500
            text-decoration underline
            &:hover
                color #515ec4

</style>