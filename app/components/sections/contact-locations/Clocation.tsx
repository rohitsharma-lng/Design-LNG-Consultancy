'use client'

import { useState } from 'react'
import Image from 'next/image'
import './Clocation.css'

type Office = {
  city: string
  address: string
}

type Location = {
  code: 'ZA' | 'AE' | 'IN'
  country: string
  offices: Office[]
  phone: string
  map: string
}

const locations: Location[] = [
  {
    code: 'ZA',
    country: 'South Africa',
    offices: [
      {
        city: 'Cape Town',
        address: '4th Floor, Mutual Park, Pinelands, Capetown, South Africa - 7405.',
      },
    ],
    phone: '+27-849465127',
    map: '/images/sa-map.png',
  },
  {
    code: 'AE',
    country: 'UAE',
    offices: [
      {
        city: 'Dubai',
        address: 'FZCO 421, Dubai Commercity, Dubai, United Arab Emirates.',
      },
    ],
    phone: '+971-555079890',
    map: '/images/UAE-map.png',
  },
  {
    code: 'IN',
    country: 'India',
    offices: [
      {
        city: 'Amritsar',
        address:
          'SCO 6, Floor - 5, Dua Square, Ranjit Avenue, Block - B, Amritsar, Punjab, India - 143002.',
      },
      {
        city: 'Kolkata',
        address: 'Worknests, Tower 2, Godrej Waterside, Sector V, Kolkata - 700091.',
      },
      {
        city: 'Chandigarh',
        address: '902, Bestech Towers, Mohali.',
      },
    ],
    phone: '+91-7717305144',
    map: '/images/INDIA-map.png',
  },
]

export default function Clocation() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = locations[activeIndex]

  return (
    <section className="cl-section">
      <div className="cl-container">
        <div className="cl-tabs" role="tablist" aria-label="Office locations">
          {locations.map((loc, i) => {
            const isActive = i === activeIndex
            return (
              <button
                key={loc.code}
                type="button"
                role="tab"
                id={`cl-tab-${loc.code}`}
                aria-selected={isActive}
                aria-controls="cl-map-panel"
                className={`cl-tab ${isActive ? 'cl-tab-active' : ''}`}
                onClick={() => setActiveIndex(i)}
                suppressHydrationWarning
              >
                <span className="cl-tab-watermark" aria-hidden="true">
                  {loc.code}
                </span>

                <span className="cl-tab-head">
                  <span className="cl-tab-dot" aria-hidden="true" />
                  <span className="cl-tab-code">{loc.code}</span>
                  <span className="cl-tab-country">{loc.country}</span>
                </span>

                {isActive && (
                  <span className="cl-tab-body">
                    {loc.offices.map((office, idx) => (
                      <span key={office.city} className="cl-office">
                        <span className="cl-city">{office.city}</span>
                        <span className="cl-address">{office.address}</span>
                        {idx < loc.offices.length - 1 && (
                          <span className="cl-divider" aria-hidden="true" />
                        )}
                      </span>
                    ))}
                    <span className="cl-phone-row">
                      <span className="cl-phone-label">Phone:</span>{' '}
                      <a
                        href={`tel:${loc.phone.replace(/[^+\d]/g, '')}`}
                        className="cl-phone"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {loc.phone}
                      </a>
                    </span>
                  </span>
                )}
              </button>
            )
          })}
        </div>

        <div
          className="cl-map-wrap"
          role="tabpanel"
          id="cl-map-panel"
          aria-labelledby={`cl-tab-${active.code}`}
        >
          <Image
            key={active.code}
            src={active.map}
            alt={`Map of L&G office in ${active.country}`}
            className="cl-map"
            width={1100}
            height={760}
            priority={false}
          />
        </div>
      </div>
    </section>
  )
}
