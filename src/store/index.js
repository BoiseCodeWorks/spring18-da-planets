import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

let api = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 3000,
  // withCredentials: true
})

vue.use(vuex)
//code above here is always the same ^^^

export default new vuex.Store({
  state:{
    hello: "WORLD!!!!!",
    target: {
      name: 'mr snibbly',
      tolerance: 9,
      totalPets: 0
    },
    galaxies: [],
    stars: [],
    planets: []
  },
  mutations: {
    setGalaxies(state, galaxies){
      state.galaxies = galaxies
    },
    setStars(state, stars){
      state.stars = stars
    },
    setPlanets(state, planets){
      state.planets = planets
    }
  },
  actions:{
    getGalaxies({dispatch, commit}){
      api.get('galaxies')
      .then(res =>{
        commit('setGalaxies', res.data)
      })
    },
    getStars({dispatch, commit}, galaxy){
      api.get('stars?galaxyId='+galaxy._id)
        .then(res =>{
          commit('setStars', res.data)
        })
    },
    getPlanets({dispatch, commit}, star){
      api.get('planets?starId='+star._id)
        .then(res =>{
          commit('setPlanets', res.data)
        })
    }
  }
})


function StoreService(){
  
  var state = {
    hello: "WORLD!!!!"
  }


  // this.getHello(){
  //   return state.hello
  // }


  // this.getGalaxies = function(cb){
  //   $.get(url)
  //     .then(res => {
  //       cb(res)
  //     })
  // }


}




