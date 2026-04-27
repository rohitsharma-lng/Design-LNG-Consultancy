
import Challenges from '@/app/components/sections/challenges-services/ChallengesServices'
import Client from '@/app/components/sections/clients/Client'
import CtaTypeTwo from '@/app/components/sections/cta-2/CtaTypeTwo'
import DevelopmentProcess from '@/app/components/sections/development-process/DevelopmentProcess'
import EndToEndServices from '@/app/components/sections/enntoend-services/EnnToEndServices'
import EnterpriseServices from '@/app/components/sections/enterprise-services/EnterpriseServices'
import FaqAccordion from '@/app/components/sections/faq/Faq'
import Industries from '@/app/components/sections/industries/Industries'
import ServiceAI from '@/app/components/sections/service-ai/ServiceAi'
import ServiceItems from '@/app/components/sections/serviceItems/ServiceItems'
import ServiceCustom from '@/app/components/sections/services-custom/ServicesCustom'
import Stats from '@/app/components/sections/stats/Stats'
import TechFrameworks from '@/app/components/sections/tech-frameworks/TechFrameworks'
import React from 'react'
import SerHeroBanner from '../components/sections/services-banner/ServicesBanner'
import ChlPinnedCards from '../components/sections/challenges-pinned-cards/ChlPinnedCards'
import Trusted from '../components/sections/ind-trusted-section/Trusted'
import BiBanner from '../components/sections/banking-industry-banner/BiBanner'
import ContactUsForm from '../components/sections/contactUsForm/contactUsForm'
import CtaThree from '../components/sections/CTA-3/CtaThree'
import Cglobal from '../components/sections/contact-global/Cglobal'
import Clocation from '../components/sections/contact-locations/Clocation'

export default function Review() {
  return (
    <>
      <BiBanner />
      <SerHeroBanner />
      <Client />
      <Stats />
      <Challenges />
      <CtaTypeTwo />
      <EndToEndServices />
      <EnterpriseServices />
      <FaqAccordion />
      <Industries />
      <ServiceAI />
      <ServiceItems />
      <ServiceCustom />
      <ChlPinnedCards/>
      <DevelopmentProcess />
      <TechFrameworks />
      <Trusted
        heading={
          <>
            Why L&G is Your Trusted{' '}
            <span className="grad">Banking App Development</span> Company?
          </>
        }
        description="As one of the reputed custom banking solutions companies, we bring a constructive approach to maintaining quality code, compliance, and customer trust. From banking mobile app development to legacy modernization, we go above & beyond to maximize user engagement."
        points={[
          { icon: '/icons/ind-trusted-icon-1.png', text: 'Next-gen architecture' },
          { icon: '/icons/ind-trusted-icon-2.png', text: 'AI-enabled custom solutions' },
          { icon: '/icons/ind-trusted-icon-3.png', text: '90% quicker compliance' },
          { icon: '/icons/ind-trusted-icon-4.png', text: 'On-time delivery, always' },
        ]}
        image="/images/ind-trusted-1.png"
        imageAlt="Banking app development"
      />
      <ContactUsForm/>
      <CtaThree/>
      <Cglobal/>
      <Clocation/>
    </>
  )
}
