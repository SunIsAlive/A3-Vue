<template>
  <div class="bg-primary px-4  md:px-16 lg:px-32 2xl:px64"> <!-- sides -->
    <Nav :active-page="currentPage" />
    <Main :active-page="currentPage" />
  </div>
  <Footer />
</template>

<script>
import Footer from './components/Footer.vue'
import Nav from './components/Nav.vue'
import Main from './components/Main.vue'


export default {
  name: 'App',
  components: { 
    Nav,
    Main,
    Footer 
  },
  data() {
      return {
          currentPage: ''
      };
  },
  created() {
    this.currentPage = window.currentWebpage || this.getCurrentPage();
    console.log('Current Page:', this.currentPage);
  },
  methods: {
    getCurrentPage() {
      const path = window.location.pathname;
      
      if (path === 'home') {
        return 'home';
      } else if (path === 'product') {
        return 'product';
      } else if (path === 'contact') {
        return 'contact';
      } else if (path === 'about') {
        return 'about';
      } else if (path === 'form') {
        return 'form';
      } else {
        return '';
      }
    }
  }
}
</script>
