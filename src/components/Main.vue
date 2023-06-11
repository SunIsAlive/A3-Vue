<template>
    <main class="bg-white px-4">
      <Home v-if="activePage === 'home'" />
      <Product v-if="activePage === 'product'" />
      <About v-if="activePage === 'about'" />
      <Contact v-if="activePage === 'contact'" />
    </main> <!-- main end -->
  </template>
  
  <script>
  import Home from './article/Home.vue'
  import Product from './article/Product.vue'
  import About from './article/About.vue'
  import Contact from './article/Contact.vue'
  
  export default {
    props: {
      activePage: {
        type: String,
        required: true
      }
    },
    components: {
      Home,
      Product,
      About,
      Contact
    }
  };
  </script>