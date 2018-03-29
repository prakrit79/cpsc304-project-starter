import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      authUser: null,
      doctorid: null,
      appointmentDate: null,
      appointmentTime: null
    },
    mutations: {
      setUser (state, user) {
        state.authUser = user
      },
      setDoctorID (state, data) {
        state.doctorid = data
      },
      setAppointmentDate (state, data) {
        state.appointmentDate = data
      },
      setAppointmentTime (state, data) {
        state.appointmentTime = data
      }
    },
    getters: {
      getAuthUser: state => {
        return state.authUser
      },
      getDoctorID: state => {
        return state.doctorid
      },
      getAppointmentDate: state => {
        return state.appointmentDate
      },
      getAppointmentTime: state => {
        return state.appointmentTime
      }
    },
    actions: {
      nuxtServerInit ({ commit }, { req }) {
        if (req.session && req.session.authUser) {
          commit('setUser', req.session.authUser)
        }
      }

    }
  })
}

export default createStore
