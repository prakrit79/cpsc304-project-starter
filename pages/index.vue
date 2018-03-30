<template>
  <section class="container">
    <div>
      <div class="links">
          <div class="title">Clinic Database</div>
          <div style="margin: 10px 0;">
              <span>Username: </span>
              <input type="text" v-model="username"/>
          </div>
          <div style="margin: 10px 0;">
              <span>Password: </span>
              <input type="password" v-model="password"/>
          </div>
          <div v-if="badlogin" >Bad login credentials</div>
          <button class="button--grey link" style="margin-left: 15px;" @click="login">Login</button>

      </div>
    </div>
  </section>
</template>

<script>
  import axios from '~/plugins/axios'

  export default {
    data () {
      return {
        badlogin: false,
        username: '',
        password: ''
      }
    },
    methods: {
      login () {
        axios.post('/api/login', {
          credentials: 'same-origin',
          headers:
            {
              'Content-Type': 'application/json'
            },
          data:
            {
              username: this.username,
              password: this.password
            }})
          .then((res) => {
            let authUser = res.data.authUser
            this.$store.commit('setUser', authUser)
            self.$nuxt.$router.replace({ path: '/' + authUser.usertype })
          })
          .catch((e) => {
            this.badlogin = true
            console.log(e)
          })
      }
    }
}
</script>

<style lang="stylus" scoped>
.container
  min-height 90vh
  display flex
  justify-content center
  align-items center
  text-align center

@media (min-height 1080px)
  .container
    margin-top -200px

.title
  font-family "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif /* 1 */
  display block
  font-weight 300
  font-size 100px
  color #35495e
  letter-spacing 1px

.subtitle
  font-weight 300
  font-size 42px
  color #526488
  word-spacing 5px
  padding-bottom 15px

.links
  padding-top 15px

@media (max-width 860px)
  .title
    font-size 64px
  .subtitle
    font-size 32px

@media (max-width 860px)
  .links
    .link
      width 50%
      margin-bottom 15px
      display relative
</style>
