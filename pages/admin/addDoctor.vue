<template>
    <section class="user-view">
        <div class="subsection">
            <div class="subsection-title">Add doctor</div>
            <form style="margin: 15px 15px;">
                <div style="margin: 10px 0;">
                    <span>Name: </span>
                    <input type="text" v-model="doctorname"/>
                </div>
                <div style="margin: 10px 0;">
                    <span>Email: </span>
                    <input type="text" v-model="email"/>
                </div>
                <div style="margin: 10px 0;">
                    <span>Phone Number: </span>
                    <input type="number" v-model="phone"/>
                </div>
                <div style="margin: 10px 0;">
                    <span>Location: </span>
                    <select v-model="address">
                        <option disabled value="">Please select one</option>
                        <option v-for="location in locations" v-bind:value="location.address">
                            {{location.clinicname}}
                        </option>
                    </select>
                </div>
            </form>
            <button type="button" class="button--grey" @click="submitInsert">Add</button>
        </div>
    </section>
</template>

<script>
  import axios from '~/plugins/axios'

  export default {

    data () {
      return {
        doctorname: '',
        email: '',
        address: '',
        phone: ''
      }
    },
    async asyncData () {
      let {data} = await axios.get('/api/admin/getLocations')
      return {locations: data.locations}
    },

    methods: {
      submitInsert () {
        let self = this

        axios.post('/api/admin/addDoctor', {
          headers:
            {
              'Content-Type': 'application/json'
            },
          data:
            {
              doctorname: self.doctorname,
              email: self.email,
              address: self.address,
              phone: self.phone
            }})
          .then((res) => {
            self.$nuxt.$router.replace({ path: '/admin', force: true })
          })
          .catch((e) => {
            console.log(e)
          })
      }
    },

    head () {
      return {
        title: `Add New Doctor`
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