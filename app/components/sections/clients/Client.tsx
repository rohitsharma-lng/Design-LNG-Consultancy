import React from 'react'
import styles from './client.module.css'
import Image from 'next/image'

const clients = [
  { name: 'Prodigy Finance', src: '/images/Prodigy Finance.png', cls: 'prodigy' },
  { name: 'Mediclinic', src: '/images/Mediclinic.png', cls: 'mediclinic' },
  { name: 'Sony', src: '/images/Sony.png', cls: 'sony' },
  { name: 'Forever 21', src: '/images/Forever 21.png', cls: 'forever' },
  { name: 'We Fix', src: '/images/We Fix.png', cls: 'wefix' },
  { name: 'IDM', src: '/images/IDM.png', cls: 'idm' },
  { name: 'Sanlam', src: '/images/Sanlam.png', cls: 'sanlam' },
  { name: 'Chesneys', src: '/images/Chesneys.png', cls: 'skea' },
  { name: 'Truworths', src: '/images/Truworths.png', cls: 'truworths' },
  { name: 'Rheemera', src: '/images/Rheemera.png', cls: 'rheumera' },
  { name: 'Knowledge Group', src: '/images/Knowledge Group.png', cls: 'kgc' },
  { name: 'LexisNexis', src: '/images/LexisNexis.png', cls: 'lexis' },
  { name: 'Santam', src: '/images/Santam.png', cls: 'santam' },
  { name: 'Debt Busters', src: '/images/Debt Busters.png', cls: 'debt-buster' },
  { name: 'Lottostar', src: '/images/Lottostar.png', cls: 'loto' },
]

const ClientRow = ({ direction }: { direction: 'nl-left' | 'nl-right' }) => (
  <div className={styles['nl-marquee']}>
    <div className={`${styles['nl-track']} ${styles[direction]}`}>
      {[...clients, ...clients].map((client, i) => (
        <div key={`${client.cls}-${i}`} className={`${styles['nl-item']} ${styles[client.cls]}`}>
          <Image src={client.src} alt={client.name} width={180} height={115} />
        </div>
      ))}
    </div>
  </div>
)

const Client = () => {
  return (
    <section className="py-20">
      {/* Section label */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-4 px-2 sm:px-0">
          <div className="sec-top-line mr-1"></div>
          <span className="sec-top-heading">Trusted by Global Innovators</span>
          <div className="sec-dot"></div>
        </div>
      </div>

      {/* Marquee wrapper */}
      <div className={styles['nl-marquee-wrapper']}>
        {/* TOP ROW — scrolls left */}
        <ClientRow direction="nl-left" />

        {/* BOTTOM ROW — scrolls right */}
        <ClientRow direction="nl-right" />
      </div>
    </section>
  )
}

export default Client
