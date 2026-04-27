import Image from 'next/image'
import './cta3.css'

const CtaThree = () => {
  return (
    <section>
      <div className="mx-auto px-4">
        <div className="cta3-body flex items-center">
          <div className="cta3-content flex flex-col items-start gap-6 px-6 sm:px-10 md:px-14 py-8 md:py-12">
            <h2 className="cta3-heading">Join Our Team</h2>
            <div className="cta3-actions flex flex-wrap items-center gap-3 sm:gap-4">
              <a href="#" className="btn-gradient cta3-btn">
                View Careers
              </a>
              <a href="#" className="cta3-btn-solid">
                Send Email
              </a>
            </div>
          </div>
          <div className="cta3-image" aria-hidden="true">
            <Image
              src="/images/cta-3-contact.png"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaThree
