import Image from 'next/image'
import styles from './trusted.module.css'

interface TrustedPoint {
  icon: string
  text: string
}

interface TrustedProps {
  heading: React.ReactNode
  description: string
  points: TrustedPoint[]
  image: string
  imageAlt?: string
}

export default function Trusted({ heading, description, points, image, imageAlt = 'Trusted section image' }: TrustedProps) {
  return (
    <section>
      <div className={styles['trusted-section']}>
        {/* Left: Content */}
        <div className={styles['trusted-content']}>
          <h2 className={styles['trusted-heading']}>{heading}</h2>
          <p className={styles['trusted-description']}>{description}</p>

          <div className={styles['trusted-points']}>
            {points.map((point, index) => (
              <div key={index} className={styles['trusted-point']}>
                <div className={styles['trusted-point-icon']}>
                  <Image src={point.icon} alt="" width={18} height={18} />
                </div>
                <span className={styles['trusted-point-text']}>{point.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div className={styles['trusted-image']}>
          <Image src={image} alt={imageAlt} width={560} height={500} priority />
        </div>
      </div>
    </section>
  )
}
