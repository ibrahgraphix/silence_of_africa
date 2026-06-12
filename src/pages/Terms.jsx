import React from 'react'
import Hero from '../components/Hero'
import bg from "../assets/terms.jpg"
import TermsData from '../components/TermsData'
import "./Terms.css"
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { WhatsAppIcon } from '../components/WhatsAppIcon'

const Terms = () => {
  return (
    <main  >
      <Navbar />
      <Hero 
        cname="hero-mid"
        heroImg={bg}
        title="Terms and Conditions"
    />


      <section className='terms-data'>


      
<div>
<TermsData 
title="Privacy Commitment" 
description="At Silence of Africa Safari, we respect your privacy and are committed to protecting your personal data. This policy outlines how we handle information collected on our website, www.silenceofafricasafari.com, and through our services. By using our website or requesting our services, you agree to this policy. We may update it periodically, so please check for changes. Your continued use of our website indicates your acceptance of any modifications.."
/>
<TermsData 
title="What information do we collect?" 
description="We collect and store information that you provide to us. This includes data you submit through forms, newsletter subscriptions, content submissions, and when you use our services or products. This information may include your name, email address, mailing address, phone number, and other relevant details.

To access our services, you'll need to share personal information, such as your name, age, address, telephone number, and email address.You have the right to request the deletion of your personal information from our system at any time. For more details, please see the Your Choices section.If you provide information about someone else, you confirm that you have their consent to share their personal data, including sensitive information, and that you've informed them about our identity."
/>
<TermsData 
title="What do we use your information for?" 
description="Any of the information we collect from you may be used in one of the following ways and as described elsewhere in this Privacy Policy.

To personalize your experience: Your information helps us to better respond to your individual needs

To improve our website: We continually strive to improve our website offerings based on the information and feedback we receive from you

To improve customer service: Your information helps us to more effectively respond to your customer service requests and support needs

To process transactions and fulfill contracts: Your information assists us delivering the product, service, information or anything else you request or purchase and fulfilling our contractual obligations

To administer a contest, promotion, survey or other site feature."
/>

</div>
      </section>
             
            
      <WhatsAppIcon  />
    <Footer />    
    </main>
  )
}

export default Terms
