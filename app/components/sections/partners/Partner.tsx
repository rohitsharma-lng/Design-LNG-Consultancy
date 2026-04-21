import React from 'react'
import Image from 'next/image'
import styles from './partner.module.css'

const partners = [
  { name: 'Salesforce', src: '/images/salesforce.png', cls: 'salesforce' },
  { name: 'Databricks', src: '/images/databricks.png', cls: 'databricks' },
  { name: 'Adobe', src: '/images/Adobe.png', cls: 'adobe' },
  { name: 'Microsoft', src: '/images/Microsoft.png', cls: 'microsoft' },
  { name: 'Harness', src: '/images/harness.png', cls: 'harness' },
  { name: 'Modefin', src: '/images/Modefin.png', cls: 'modefin' },
  { name: 'Sitecore', src: '/images/Sitecore.png', cls: 'sitecore' },
  { name: 'Optimizely', src: '/images/Optimizely.png', cls: 'optimizely' },
]

const PartnerColumn = ({ direction }: { direction: 'nl-partners-down' | 'nl-partners-up' }) => (
  <div className={styles['nl-partners-col']}>
    <div className={`${styles['nl-partners-track']} ${styles[direction]}`}>
      {[...partners, ...partners].map((partner, i) => (
        <div key={`${partner.cls}-${i}`} className={`${styles['nl-partners-item']} ${styles[partner.cls]}`}>
          <Image src={partner.src} alt={partner.name} width={180} height={100} />
        </div>
      ))}
    </div>
  </div>
)

const Partner = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 px-2 sm:px-0">

          {/* Left: text content */}
          <div className="w-full md:w-1/2">
            <div className="flex items-center justify-start gap-2">
              <div className="sec-top-line mr-1"></div>
              <span className="sec-top-heading !text-left">PARTNERS</span>
              <div className="sec-dot"></div>
            </div>
            <h2 className="section-heading !text-left my-3 max-w-[548px]">
              Collaborating with
              <span className="grad"> Global Tech </span>
              Partnerships
            </h2>
            <p className="head-description !text-left m-0 max-w-[478px]">
              We partner with the world&apos;s most innovative technology
              platforms to deliver cutting-edge solutions that drive digital
              transformation and accelerate business growth.
            </p>
          </div>

          {/* Right: vertical marquee columns */}
          <div className="w-full md:w-1/2">
            <div className={styles['nl-partners']}>
              <PartnerColumn direction="nl-partners-down" />
              <PartnerColumn direction="nl-partners-up" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Partner
