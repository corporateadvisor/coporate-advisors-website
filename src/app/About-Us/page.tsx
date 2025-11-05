import React from 'react'
import Ideas from '@/app/components/Aboutus/Idea/page';
import Ourmembers from '@/app/components/Aboutus/Our-Team/page';
import WhoWeAre from '@/app/components/Aboutus/Who-we/page'
import OurCommitment from '@/app/components/Aboutus/Our-Com/page'
import CSR from '@/app/components/Aboutus/CSR/page'
import ContactusStartnow from '@/app/components/Contact-us-Start-now/page'
import WhatsAppButton from '@/app/components/whatsApp/page';
import Partners from '@/app/components/Aboutus/Partners/page';
function page() {
  return (
    <div>
      <Ideas />
      <Ourmembers />
      <WhoWeAre />
      <OurCommitment />
      <CSR />
      <Partners/>
      <ContactusStartnow />
      <WhatsAppButton />
    </div>
  )
}

export default page
