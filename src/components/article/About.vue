<template>
    <!-- banner -->
    <div class="py-4 flex justify-center">
        <img src="https://images.unsplash.com/photo-1581093805071-a04e696db334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="porteximage" class="h-full">
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
            <div class="sm:flex sm:justify-evenly md:justify-start">
                <div class="flex justify-center whitespace-nowrap">
                    <h1 class="text-gray-800 text-2xl font-semibold uppercase py-1">
                        About our founder!
                    </h1>
                </div>
            </div>
            <p>Did you know that Portex's founder, Mr. Deakin, is a true Kiwi at heart? He started his journey as a Wintec student, studying I.T. and honing his skills in the tech industry. After gaining valuable experience and knowledge, he saw an opportunity to provide quality tech maintenance services in New Zealand, and thus, Portex was born.</p>
            <p>Mr. Deakin's passion for his work extends beyond just running a successful business. He cares deeply about New Zealand, its people, and its communities. That's why Portex is committed to providing affordable and accessible tech maintenance services to individuals and businesses across the country.</p>                            
            <p>But Mr. Deakin's commitment doesn't stop there. He believes that happy employees make for happy customers, which is why Portex values its team members just as much as its clients. By creating a positive and supportive work environment, Portex ensures that its employees feel valued and motivated to provide the best possible service to its customers.</p>
            <p>So, when you choose Portex, you're not just choosing a tech maintenance company, you're choosing a company that cares about its customers, its employees, and its community. Join the Portex family today and experience the best tech maintenance services in New Zealand.</p>
        </div>
        <div class="pb-4 col-start-auto md:pl-4">
            <h1 class="sm:flex sm:justify-evenly md:justify-start text-gray-800 text-2xl font-semibold uppercase py-1">
                About Portex!
            </h1>
            <p>Welcome to Portex, an online-based computing and I.T. maintenance company that has its roots firmly planted in Waikato and Hamilton. From humble beginnings, we have grown to become a leading provider of tech maintenance services across New Zealand, and we couldn't be prouder of our Kiwi heritage.</p>
            <p>At Portex, we understand the importance of community, which is why we are committed to giving back to the regions that have supported us throughout our journey. Whether it's through sponsorships, donations, or volunteer work, we believe that it's our responsibility to help build strong and vibrant communities across New Zealand.</p>
            <p>But our commitment to our roots doesn't stop there. We believe that our success as a company is due, in part, to our Kiwi values of hard work, ingenuity, and a can-do attitude. We take pride in providing top-notch tech maintenance services that are tailored to meet the unique needs of our customers, all while maintaining the friendly and approachable attitude that is synonymous with being a true Kiwi business.</p>
            <p>As we continue to expand our reach across New Zealand, we remain committed to upholding our Kiwi values and providing the best possible service to our customers. We are excited to see where the future takes us and look forward to serving you, our fellow Kiwis, for years to come.</p>
            <p>So, if you're looking for a tech maintenance company that values community, hard work, and a can-do attitude, look no further than Portex. Join us on our journey as we continue to grow and thrive across New Zealand.</p>
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