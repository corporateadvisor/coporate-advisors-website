import React from 'react'
import '../globals.css';
import View from '@/app/components/Service/View/page'
import Card from '@/app/components/Service/Card/page'
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

function page() {
  return (
    <div className="bg-white">
      <View/>
      <Card/>
      <CompanyFormation/>
      <Company/>
      <Assistance/>
      <Electronic/>
      <Intellectual/>
      <Corporate/>
      <Legal/>
      <HumanResource/>
      <ContactUsSN/>
      <WhatsAppButton />
    </div>
  )
}

export default page
