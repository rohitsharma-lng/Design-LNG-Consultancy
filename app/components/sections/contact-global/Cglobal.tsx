import Image from 'next/image'
import globalNetworkImg from '@/public/images/global-network-img.png'
import './c-global.css'

export default function Cglobal() {
  return (
    <section className="cg-section">
      <div className="cg-container">
        <div className="cg-content">
          <span className="cg-eyebrow">
            We are <span className="cg-eyebrow-grad">trusted by Enterprises</span>
          </span>

          <h2 className="cg-heading">Across 70+ Countries</h2>

          <p className="cg-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque dui risus, vel
            condimentum ipsum efficitur eget. Pellentesque eget vulputate tortor. Suspendisse ac lorem
            molestie, pulvinar felis quis, lacinia dolor. Praesent tristique nunc ut velit volutpat
            consectetur. Integer mattis tristique metus, sed volutpat velit interdum id.
          </p>
        </div>

        <div className="cg-image-wrap" aria-hidden="true">
          <Image
            src={globalNetworkImg}
            alt="Global network of connected enterprises"
            className="cg-image"
            priority={false}
            
          />
        </div>
      </div>
    </section>
  )
}
