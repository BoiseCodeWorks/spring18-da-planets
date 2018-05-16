<template>
  <div class="hello">
    <!-- <h1>Hello {{target.name}} {{hello}}</h1>
    <div>
      Pets: {{target.totalPets}}
    </div>
    <button @click="target.totalPets++" :disabled="target.totalPets > target.tolerance">pet</button>
    <button @click="target.totalPets = 0" v-if="target.totalPets > target.tolerance">Reset</button> -->

    <h1 v-if="activeGalaxy._id">{{activeGalaxy.name}}</h1>


    <button @click="getGalaxies()">GET GALAXIES</button>


    <div class="galaxies">
      <div class="galaxy" v-for="galaxy in galaxies" :class="{'active-galaxy': activeGalaxy == galaxy}"  :key="galaxy._id">
        <h4>{{galaxy.name}}
          <button @click="getStars(galaxy)">GET DETAILS</button>
        </h4>
      </div>
    </div>

    <div class="stars">
      <div class="star" v-for="star in stars" :class="{'active-star': activeStar == star}" :key="star._id">
        <h4 :style="{color: star.color}">
          {{star.name}}
          <button @click="getPlanets(star)">call captian Planets</button>
        </h4>
      </div>
    </div>

    <div class="planets">
        <div class="planet" v-for="planet in planets" :class="{'active-planet': activePlanet == planet}" :key="planet._id">
          <h4>
            {{planet.name}}
          </h4>
        </div>
      </div>


  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        activeGalaxy: {},
        activeStar: {},
        activePlanet: {}
      }
    },
    computed: {
      hello() {
        return this.$store.state.hello
      },
      target() {
        return this.$store.state.target
      },
      galaxies() {
        return this.$store.state.galaxies
      },
      stars(){
        return this.$store.state.stars
      },
      planets(){
        return this.$store.state.planets
      }
    },
    methods: {
      getGalaxies() {
        this.$store.dispatch('getGalaxies')
      },
      getStars(galaxy) {
        this.activeGalaxy = galaxy
        this.$store.dispatch('getStars', galaxy)
      },
      getPlanets(star){
        this.activeStar = star
        this.$store.dispatch('getPlanets', star)
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .active-galaxy {
    background: blue;
    color: white;
  }
  .active-star {
    background: black;
    color: white;
  }
</style>
