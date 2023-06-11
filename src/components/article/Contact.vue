<template>
    <!-- banner -->
    <div class="py-4 flex justify-center">
        <img src="https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="porteximage" class="h-full">
    </div>
    <!-- Call to Action -->
    <a href="form.html">
        <div class="justify-center hidden md:flex pd-4 bg-secondary-300 hover:bg-red-800 text-white font-bold py-2 px-4 rounded transition duration-300 text-center">
            <span class="uppercase">Request Service</span>
        </div>
    </a>
    <!-- Information -->
    <div class="flex justify-center whitespace-nowrap py-4">
        <h1 class="underline text-4xl text-gray-800 font-semibold uppercase py-1">
            Contact Us!
        </h1>
    </div>
    <div class="grid grid-col-1 md:grid-cols-2">
        <div class="pb-4 col-start-auto md:pr-4">
            <b class="text-gray-800">Email: <a class="underline text-red-800" href="mailto: exdea36@student.wintec.ac.nz">exdea36@student.wintec.ac.nz</a></b>
            <p>At Portex, we value our customers and appreciate any feedback they have to offer. We understand that communication is key, which is why we offer 24/7 support to ensure that you can reach us whenever you need us.</p>
            <p>If you have any questions, concerns, or feedback about our services, please don't hesitate to get in touch with us. Our friendly and knowledgeable customer service team is always here to help and will get back to you as soon as possible.</p>
            <p>You can contact us via phone, email, or by filling out the form below. We look forward to hearing from you and thank you for choosing Portex for all of your tech maintenance needs.</p>

        </div>
        <div class="pb-4 col-start-auto md:pl-4">
            <h1 class="hidden md:flex text-gray-800 text-2xl font-semibold uppercase py-1">
                We are based here:
            </h1> 
            <iframe width="100%" height="80%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0786242509266!2d175.2782120158364!3d-37.788197140354846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6d18a57fa16281%3A0x72b05e2e8812d179!2sWintec%20Te%20P%C5%ABkenga%20City%20Campus!5e0!3m2!1sen!2snz!4v1681011823855!5m2!1sen!2snz" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    <div class="container">
        <form action="#" class="space-y-8 pb-4">
            <div>
                <label for="subject" class="block mb-2">Subject:</label>
                <input type="text" id="subject" class="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm" placeholder="Please input a subject..." required>
            </div>
            <div class="sm:col-span-2">
                <label for="message" class="block mb-2">Your message:</label>
                <textarea id="message" rows="6" class="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300" placeholder="Leave a message..."></textarea>
            </div>
            <div>
                <label for="email" class="block mb-2">Your email:</label>
                <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 shadow-sm-light" placeholder="example@wintec.com" required>
            </div>
            <button type="submit" class="pd-4 bg-secondary-300 hover:bg-red-800 text-white font-bold py-2 px-4 rounded transition duration-300 text-center">Send message</button>
        </form>
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