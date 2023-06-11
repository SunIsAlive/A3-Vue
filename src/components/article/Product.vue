<template>
    <div class="pb-4 flex justify-center">  <!-- banner -->
        <img src="https://images.unsplash.com/photo-1581092919535-7146ff1a590b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="porteximage" class="h-full">
    </div>
    <!-- Call to Action -->
    <a href="form.html">
        <div class="justify-center hidden md:flex pd-4 bg-secondary-300 hover:bg-red-800 text-white font-bold py-2 px-4 rounded transition duration-300 text-center">
            <span class="uppercase">Request Service</span>
        </div>
    </a>
    <!-- Information -->
    <div class="grid grid-col-1 md:grid-cols-2">
        <div class="pb-4 col-start-auto md:pr-4">
            <div class="flex justify-start whitespace-nowrap">
                <h1 class="col-start-auto text-gray-800 text-2xl font-semibold uppercase py-1">
                    What are you waiting for?
                </h1>
            </div>
            <p>Looking for top-notch tech maintenance services that won't break the bank? Look no further than Portex!</p>
            <p>We offer a wide range of services to meet all of your tech maintenance needs, including hardware and software maintenance, virus removal, data recovery, and much more. With prices starting at just $49, we make it easy and affordable to keep your tech running smoothly.</p>
        </div>
        <div class="pb-4 col-start-auto md:pl-4">
            <div class="flex justify-end whitespace-nowrap">
                <h1 class="col-start-auto text-gray-800 text-2xl font-semibold uppercase py-1">
                    Order Now!
                </h1>
            </div>
            <p>And that's not all - we also offer great deals and discounts for our valued customers. Whether you're a first-time customer or a loyal regular, we have special offers that are sure to save you money.</p>
            <p>Ready to order a service? Simply fill out the form after one simple click! And one of our friendly and knowledgeable team members will be in touch to get you started. At Portex, we pride ourselves on providing fast, efficient, and affordable tech maintenance services that you can rely on. So why wait? Order your service today and experience the Portex difference. <b>Request a service!</b></p>
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