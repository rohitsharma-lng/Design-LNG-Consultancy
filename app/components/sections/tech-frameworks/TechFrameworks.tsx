'use client'

import React from 'react'
import styles from './Framework.module.css'

interface Framework {
  title: string
  description: React.ReactNode
  image: string
  href: string
}

const frameworks: Framework[] = [
  {
    title: 'Xamarin',
    description: (
      <>
        An <strong>open-source framework</strong> for developing native
        cross-platform mobile apps with a single C# codebase shared across iOS,
        Android and Windows.
      </>
    ),
    image: '/images/cross-platform-1.png',
    href: '#',
  },
  {
    title: 'Ionic',
    description: (
      <>
        An <strong>open-source UI toolkit</strong> to develop top-notch quality,
        cross-platform mobile, desktop and PWAs from a single codebase.
      </>
    ),
    image: '/images/cross-platform-2.png',
    href: '#',
  },
  {
    title: 'Flutter',
    description: (
      <>
        An <strong>open source SDK</strong> allowing developers to natively
        compile apps for mobile, web and desktop from a single reactive widget
        tree.
      </>
    ),
    image: '/images/cross-platform-3.png',
    href: '#',
  },
  {
    title: 'Python',
    description: (
      <>
        Multiple frameworks — <em>PySide, Flet and Kivy</em> — enable
        developers to facilitate cross-platform development from a single Python
        codebase.
      </>
    ),
    image: '/images/cross-platform-4.png',
    href: '#',
  },
  {
    title: 'PhoneGap',
    description: (
      <>
        A reliable <strong>open-source framework</strong> used for developing
        cross-platform mobile apps using the latest tech stacks across every
        major platform.
      </>
    ),
    image: '/images/cross-platform-5.png',
    href: '#',
  },
    {
    title: 'PhoneGap',
    description: (
      <>
        A reliable <strong>open-source framework</strong> used for developing
        cross-platform mobile apps using the latest tech stacks across every
        major platform.
      </>
    ),
    image: '/images/cross-platform-5.png',
    href: '#',
  },
  
]

interface Row {
  cards: Framework[]
  cols: 2 | 3
  wideLast?: boolean
}

function splitIntoRows(items: Framework[]): Row[] {
  const count = items.length
  if (count <= 3) return [{ cards: items, cols: 3 }]
  if (count === 4) return [
    { cards: items.slice(0, 2), cols: 2 },
    { cards: items.slice(2), cols: 2 },
  ]
  if (count === 5) return [
    { cards: items.slice(0, 3), cols: 3 },
    { cards: items.slice(3), cols: 3, wideLast: true },
  ]
  // 6+: chunks of 3
  const rows: Row[] = []
  for (let i = 0; i < count; i += 3) {
    rows.push({ cards: items.slice(i, Math.min(i + 3, count)), cols: 3 })
  }
  return rows
}

export default function TechFrameworks() {
  const rows = splitIntoRows(frameworks)

  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col items-center mb-12">
        <h2 className="section-heading">
          Frameworks We Use as a{' '}
          <span className="grad">
            Cross-Platform
            <br />
            Application Development Company
          </span>
        </h2>
      </div>

      <div className={styles.wrapper}>
        {rows.map((row, rowIdx) => (
          <div
            key={rowIdx}
            className={`${styles.row} ${row.cols === 3 ? styles.row3 : styles.row2}`}
          >
            {row.cards.map((fw, i) => (
              <a
                key={i}
                href={fw.href}
                className={`${styles.card} ${row.wideLast && i === row.cards.length - 1 ? styles.cardWide : ''}`}
              >
                <div className={styles.cardImageWrap}>
                  <img
                    src={fw.image}
                    alt={fw.title}
                    className={styles.cardImg}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{fw.title}</h3>
                  <p className={styles.cardDesc}>{fw.description}</p>
                </div>
                <div className={styles.cardArrow}>
                  <svg
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.917 7H11.083"
                      stroke="white"
                      strokeWidth="1.167"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 2.917L11.083 7L7 11.083"
                      stroke="white"
                      strokeWidth="1.167"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
