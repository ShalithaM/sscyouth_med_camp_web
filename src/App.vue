<template>
  <div class="has-background-light">
    <Header/>
    <router-view/>
    <Footer/>
     <notifications position="bottom right" group="foo"/>
  </div>
</template>


<script>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  name: "Home",
  created() {
    window.scrollTo(0, 0);
  },
   components: {
    Header,
    Footer
  },
  methods: {}
};
</script>



<style>
@import "./assets/css/bulma.min.css";
@import "./assets/css/mystyle.css";
</style>
