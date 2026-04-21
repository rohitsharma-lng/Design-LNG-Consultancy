const BiBanner = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-0 sm:pt-24 md:pt-28">
      {/* Content */}
      <div className="mx-auto max-w-[1360px] px-4 w-full relative z-[2]">
        <div className="flex flex-col items-center px-2 sm:px-0">
          {/* Heading */}
          <h1 className="section-heading my-3 mx-auto max-w-[760px]">
            Develop Interactive, AI-Fueled Apps with{" "}
            <span className="grad">Cross-Platform App Development Services</span>
          </h1>

          {/* Subtitle row */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {/* Sparkle icon */}
            <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
              viewBox="0 0 18 18" fill="none">
              <g clipPath="url(#clip0_bi_sparkle)">
                <path
                  d="M7.45277 11.625C7.38581 11.3655 7.25052 11.1286 7.06098 10.939C6.87144 10.7495 6.63457 10.6142 6.37502 10.5473L1.77377 9.36075C1.69526 9.33847 1.62617 9.29119 1.57698 9.22609C1.52778 9.16098 1.50116 9.08161 1.50116 9C1.50116 8.9184 1.52778 8.83902 1.57698 8.77392C1.62617 8.70882 1.69526 8.66154 1.77377 8.63925L6.37502 7.452C6.63448 7.38511 6.87128 7.24993 7.06082 7.06053C7.25035 6.87113 7.38569 6.63442 7.45277 6.375L8.63927 1.77375C8.66132 1.69494 8.70855 1.62551 8.77376 1.57605C8.83896 1.52659 8.91855 1.49982 9.00039 1.49982C9.08223 1.49982 9.16182 1.52659 9.22703 1.57605C9.29223 1.62551 9.33946 1.69494 9.36152 1.77375L10.5473 6.375C10.6142 6.63456 10.7495 6.87143 10.9391 7.06097C11.1286 7.25051 11.3655 7.3858 11.625 7.45275L16.2263 8.6385C16.3054 8.66033 16.3752 8.70751 16.4249 8.77281C16.4746 8.83811 16.5016 8.91792 16.5016 9C16.5016 9.08208 16.4746 9.1619 16.4249 9.2272C16.3752 9.2925 16.3054 9.33968 16.2263 9.3615L11.625 10.5473C11.3655 10.6142 11.1286 10.7495 10.9391 10.939C10.7495 11.1286 10.6142 11.3655 10.5473 11.625L9.36077 16.2263C9.33871 16.3051 9.29148 16.3745 9.22628 16.424C9.16107 16.4734 9.08148 16.5002 8.99964 16.5002C8.9178 16.5002 8.83821 16.4734 8.77301 16.424C8.7078 16.3745 8.66057 16.3051 8.63852 16.2263L7.45277 11.625Z"
                  stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_bi_sparkle">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="head-description !text-left mb-0">
              Mobile-Focused Apps for Maximum User Engagement
            </span>
          </div>

          {/* CTA Button */}
          <a href="#" className="btn-gradient cta-sec-btn mt-6">
            Talk to an App Development Expert
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M0.9375 6.1875H11.4375M11.4375 6.1875L6.1875 0.9375M11.4375 6.1875L6.1875 11.4375" stroke="white" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* Video */}
      <div className="relative mt-8 w-full top-[-450px]">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)] via-transparent to-transparent z-[1] h-[80px] pointer-events-none" />
        <video
          className="w-full block"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/Bi-banner-video-2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent z-[1] h-[120px] pointer-events-none" />
      </div>
    </section>
  )
}

export default BiBanner
