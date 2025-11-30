import React from 'react'
import '../globals.css';
import View from '@/app/components/Service/View/page'
import ServicesPage from '@/app/components/Service/Card/page'
import Company from '@/app/components/Service/Company/page'
import Legal from '@/app/components/Service/Legal/page'
import Corporate from '@/app/components/Service/Corporate/page'
import Intellectual from '@/app/components/Service/Intellectual/page'
import Assistance from '@/app/components/Service/Assistance/page'
import ContactUsSN from '@/app/components/Contact-us-Start-now/page';
import Electronic from '@/app/components/Service/Electronic/page';
import HumanResource from '@/app/components/Service/Human-Resource/page';
import CompanyFormation from '@/app/components/Service/Company-Formation/page';
import WhatsAppButton from '@/app/components/whatsApp/page';
import UAEBusines from '@/app/components/Service/UAE-Busines/page'

function Page() {
  return (
    <div className="bg-white">
      <View/>
      <ServicesPage/> {/* Use the client component */}
      
      {/* Add id attributes to each section */}
      <section id="company-formation">
        <CompanyFormation/>
      </section>
      
      <section id="company-secretarial">
        <Company/>
      </section>
      
      <section id="corporate-governance">
        <Assistance/>
      </section>
      
      <section id="electronic-filing">
        <Electronic/>
      </section>
      
      <section id="intellectual-property">
        <Intellectual/>
      </section>
      
      <section id="corporate-contract">
        <Corporate/>
      </section>
      
      <section id="legal-consultancy">
        <Legal/>
      </section>
      
      <section id="human-resource">
        <HumanResource/>
      </section>
      
      <section id="uae-business">
        <UAEBusines />
      </section>
      
      <ContactUsSN/>
      <WhatsAppButton />
    </div>
  )
}

export default Page