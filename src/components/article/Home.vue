<template>
    <div class="pb-4 flex justify-center">  <!-- banner -->
        <img src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80" alt="porteximage" class="h-full">
    </div>
    <!-- Call to Action -->
    <a href="form.html">
        <div class="justify-center hidden md:flex pd-4 bg-secondary-300 hover:bg-red-800 text-white font-bold py-2 px-4 rounded transition duration-300 text-center">
            <span class="uppercase">Request Service</span>
        </div>
    </a>
    <!-- Information -->
    <div class="flex justify-center whitespace-nowrap">
        <h1 class="col-start-auto text-gray-800 text-2xl font-semibold uppercase py-1">
            Kia Ora New Zealand!
        </h1>
    </div>
    <div class="grid grid-col-1 md:grid-cols-2">
        <div class="pb-4 col-start-auto md:pr-4">
            <p>Are you looking for reliable and efficient tech maintenance services in New Zealand? Look no further than Portex! As a leading online-based computing and I.T. maintenance company, we are dedicated to providing on-call maintenance for a variety of tech products including hardware and software.</p>
            <p>At Portex, we understand the importance of timely and effective tech support. That's why we offer an enlistment service that is entirely online, ensuring that our customers receive the assistance they need when they need it, all from the comfort of their own home or office.</p>
            <p>Our team of highly skilled technicians is available around the clock to provide expert advice and solutions for any tech-related issues that you may encounter. Whether you're experiencing software glitches or hardware malfunctions, we've got you covered!</p>
        </div>
        <div class="pb-4 col-start-auto md:pl-4">
            <p>We take pride in our commitment to customer service and ensuring that our customers are satisfied with our services. We believe that every customer deserves personalized attention and care, which is why we go the extra mile to ensure that you receive the support you need.</p>
            <p>With Portex, you can rest assured that your tech maintenance needs are in good hands. Our services are tailored to meet your unique requirements, ensuring that you receive the best possible support and solutions for your tech-related issues.</p>
            <p>So, why wait? Sign up for Portex's enlistment service today and experience top-notch tech maintenance services like never before. We look forward to serving you!</p>
        </div>
    </div>
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