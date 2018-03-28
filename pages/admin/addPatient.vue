<template>
    <section class="user-view">
        <div class="subsection">
            <div class="subsection-title">Add patient</div>
            <div style="margin: 10px 0;">
                <span class="patient-patientname">Name: </span>
                <input type="text" v-model="patientname"/>
            </div>
            <div style="margin: 10px 0;">
                <span class="patient-age">Age: </span>
                <input type="number" v-model="age"/>
            </div>
            <div style="margin: 10px 0;">
                <span class="patient-address">Address: </span>
                <input type="text" v-model="address"/>
            </div>
            <div style="margin: 10px 0;">
                <span class="patient-phonenum">Phone Number: </span>
                <input type="text" v-model="phonenum"/>
            </div>
            <div style="margin: 10px 0;">
                <span class="patient-gender">Gender: </span>
                <input type="text" v-model="gender"/>
            </div>
            <button type="button" class="button--grey" @click="insertPatient">Add</button>
        </div>
    </section>
</template>

<script>
  import axios from '~/plugins/axios'

  export default {

    data () {
      return {
        patientname: '',
        age: '',
        address: '',
        phonenum: '',
        gender: ''
      }
    },
    methods: {
      insertPatient () {
        axios.post('/api/admin/addPatient', {
          headers:
            {
              'Content-Type': 'application/json'
            },
          data:
            {
              patientname: this.patientname,
              age: this.age,
              address: this.address,
              phonenum: this.phonenum,
              gender: this.gender
            }
        }).then((res) => {
          self.$nuxt.$router.replace({ path: '/admin', force: true })
        })
          .catch((e) => {
            console.log(e)
          })
      },
      head () {
        return {
          title: `Add New Doctor`
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
    .user-view
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
            margin 25px 10px
            font-size 26px
            font-weight 500

</style>