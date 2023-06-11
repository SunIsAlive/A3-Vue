<template>
    <nav class="bg-white pt-2 pb-4"> <!-- nav bar begins-->
        <div class="flex justify-center md:justify-between whitespace-nowrap">
            <!-- desktop nav -->
            <div class="hidden md:flex px-2 w-32 items-center text-gray-900">
                <div :class="[{'text-gray-950': activePage === 'home'}, 'px-2 hover:text-gray-200 transition duration-300']">
                    <a href="index.html">
                        <span :class="[{'bg-secondary-300': activePage === 'home', 'bg-secondary-100': activePage !== 'home'}, 'flex justify-center w-32 px-4 py-4 hover:bg-red-700 transition duration-300']">Home</span>
                    </a>
                </div>
                <div :class="[{'text-gray-950': activePage === 'product'}, 'px-2 hover:text-gray-200 transition duration-300']">
                    <a href="product.html">
                        <span :class="[{'bg-secondary-300': activePage === 'product', 'bg-secondary-100': activePage !== 'product'}, 'flex justify-center w-32 px-4 py-4 hover:bg-red-700 transition duration-300']">Services</span>
                    </a>
                </div>
                <div :class="[{'text-gray-950': activePage === 'about'}, 'px-2 hover:text-gray-200 transition duration-300']">
                    <a href="about.html">
                        <span :class="[{'bg-secondary-300': activePage === 'about', 'bg-secondary-100': activePage !== 'about'}, 'flex justify-center w-32 px-4 py-4 hover:bg-red-700 transition duration-300']">About Us</span>
                    </a>
                </div>
                <div :class="[{'text-gray-950': activePage === 'contact'}, 'px-2 hover:text-gray-200 transition duration-300']">
                    <a href="contact.html">
                        <span :class="[{'bg-secondary-300': activePage === 'contact', 'bg-secondary-100': activePage !== 'contact'}, 'flex justify-center w-32 px-4 py-4 hover:bg-red-700 transition duration-300']">Contact Us</span>
                    </a>
                </div>
            </div>
            <div>
            <!-- logo -->
                <div class="w-48 flex md:hidden cs:w-48 cs2:w-28 cs2:flex">
                    <img src="../assets/img/logo.png" alt="logo">
                </div>
            </div>
        </div>
        <!-- mobile nav -->
        <div class="md:hidden text-center">
            <a href="index.html" class="block py-2 px-4 hover:bg-gray-100">Home</a>
            <a href="product.html" class="block py-2 px-4 hover:bg-gray-100">Services</a>
            <a href="contact.html" class="block py-2 px-4 hover:bg-gray-100">Contact Us</a>
            <a href="about.html" class="block py-2 px-4 hover:bg-gray-100">About Us</a>
            <div class="flex justify-center pt-4">
                <!-- Call to action -->
                <button class="pd-4 bg-secondary-300 hover:bg-red-800 text-white font-bold py-2 px-4 rounded transition duration-300">
                        <a href="form.html">
                            <span class="uppercase">Request Service</span>
                        </a>
                </button>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  props: {
    activePage: {
      type: String,
      required: true
    }
  }
};
</script>