import React from "react";
import Image from "next/image";
import styles from "./footer.module.css";
import fullLogo from "@/public/images/logo.svg";
import footerText from "@/public/images/L&G-Consultancy-text.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="mx-auto max-w-[1360px] px-4">

        <div className={styles["footer-desktop"]}>
          <div className="flex justify-between gap-4 flex-wrap">

            <div className={styles["ft-cont"]}>
              <a href="#">
                <Image width={120} height={50} src={fullLogo} alt="L&G Logo" />
              </a>
              <p className={`${styles["ft-text"]} mt-4`}>
                From complexity to clarity, through immersive digital solutions. With Nordic values at our core.
              </p>
            </div>

            <div>
              <h3 className={styles["footer-title"]}>Company</h3>
              <ul className={styles["footer-links"]}>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Term</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Success Stories</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className={styles["footer-title"]}>Services</h3>
              <ul className={styles["footer-links"]}>
                <li><a href="#">Enterprise Application Development</a></li>
                <li><a href="#">UI/UX Design</a></li>
                <li><a href="#">Product Architecture</a></li>
                <li><a href="#">Data Analytics</a></li>
                <li><a href="#">AI Integration</a></li>
                <li><a href="#">Remote Engineering Excellence</a></li>
                <li><a href="#">Cloud Solutions</a></li>
              </ul>
            </div>

            <div>
              <h3 className={styles["footer-title"]}>Industries</h3>
              <ul className={styles["footer-links"]}>
                <li><a href="#">Banking</a></li>
                <li><a href="#">Fintech</a></li>
                <li><a href="#">Healthcare</a></li>
                <li><a href="#">Ecommerce</a></li>
                <li><a href="#">Manufacturing</a></li>
                <li><a href="#">Travel & Transport</a></li>
                <li><a href="#">Hospitality</a></li>
                <li><a href="#">Telecom</a></li>
              </ul>
            </div>

            <div>
              <h3 className={styles["footer-title"]}>Technologies</h3>
              <ul className={styles["footer-links"]}>
                <li><a href="#">Cross-Platform & Web Development</a></li>
                <li><a href="#">Enterprise Technologies</a></li>
                <li><a href="#">Cloud & Infrastructure Solutions</a></li>
                <li><a href="#">Modern Frontend Interface</a></li>
                <li><a href="#">Digital Experience Platform</a></li>
              </ul>
            </div>

          </div>
        </div>

        <div className={styles["footer-mobile"]}>

          <div className={styles["ft-cont"]}>
            <Image width={120} height={40} src={fullLogo} alt="L&G Logo" />
            <p className={`${styles["ft-text"]} mt-4`}>
              From complexity to clarity, through immersive digital solutions. With Nordic values at our core.
            </p>
          </div>

          <details className={styles["ft-details"]}>
            <summary className={styles["footer-title"]}>Company</summary>
            <ul className={`${styles["footer-links"]} mt-3`}>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Term</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Success Stories</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </details>

          <details className={styles["ft-details"]}>
            <summary className={styles["footer-title"]}>Services</summary>
            <ul className={`${styles["footer-links"]} mt-3`}>
              <li><a href="#">Enterprise Application Development</a></li>
              <li><a href="#">UI/UX Design</a></li>
              <li><a href="#">Product Architecture</a></li>
              <li><a href="#">Data Analytics</a></li>
              <li><a href="#">AI Integration</a></li>
              <li><a href="#">Remote Engineering Excellence</a></li>
              <li><a href="#">Cloud Solutions</a></li>
            </ul>
          </details>

          <details className={styles["ft-details"]}>
            <summary className={styles["footer-title"]}>Industries</summary>
            <ul className={`${styles["footer-links"]} mt-3`}>
              <li><a href="#">Banking</a></li>
              <li><a href="#">Fintech</a></li>
              <li><a href="#">Healthcare</a></li>
              <li><a href="#">Ecommerce</a></li>
              <li><a href="#">Manufacturing</a></li>
              <li><a href="#">Travel & Transport</a></li>
              <li><a href="#">Hospitality</a></li>
              <li><a href="#">Telecom</a></li>
            </ul>
          </details>

        

          <details className={styles["ft-details"]}>
            <summary className={styles["footer-title"]}>Technologies</summary>
            <ul className={`${styles["footer-links"]} mt-3`}>
              <li><a href="#">Cross-Platform & Web Development</a></li>
              <li><a href="#">Enterprise Technologies</a></li>
              <li><a href="#">Cloud & Infrastructure Solutions</a></li>
              <li><a href="#">Modern Frontend Interface</a></li>
              <li><a href="#">Digital Experience Platform</a></li>
            </ul>
          </details>

        </div>

        <hr className={`${styles["ft-seperator"]} my-4 md:my-7`} />

        <div className="mb-6">
          <div className={`${styles["ft-social-cont"]} flex items-center gap-3 justify-end`}>
            <a href="#" className={styles["ft-social-icons"]}>
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" viewBox="0 0 8 16" fill="none">
                <path d="M6.00208 0C3.89968 0 2.66667 1.18981 2.66667 3.90067V6.28571H0V9.14286H2.66667V16H5.33333V9.14286H7.46667L8 6.28571H5.33333V4.38393C5.33333 3.36279 5.64414 2.85714 6.53854 2.85714H8V0.117188C7.7472 0.0806161 7.01062 0 6.00208 0Z" fill="white"/>
              </svg>
            </a>
            <a href="#" className={styles["ft-social-icons"]}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.99785 3.89523C5.72636 3.89523 3.89315 5.72847 3.89315 8C3.89315 10.2715 5.72636 12.1048 7.99785 12.1048C10.2693 12.1048 12.1025 10.2715 12.1025 8C12.1025 5.72847 10.2693 3.89523 7.99785 3.89523ZM7.99785 10.6678C6.52888 10.6678 5.3301 9.46899 5.3301 8C5.3301 6.53101 6.52888 5.3322 7.99785 5.3322C9.46681 5.3322 10.6656 6.53101 10.6656 8C10.6656 9.46899 9.46681 10.6678 7.99785 10.6678ZM12.2707 2.77047C11.7403 2.77047 11.312 3.19876 11.312 3.72911C11.312 4.25947 11.7403 4.68776 12.2707 4.68776C12.801 4.68776 13.2293 4.26147 13.2293 3.72911C13.2294 3.60318 13.2048 3.47845 13.1566 3.36207C13.1085 3.24569 13.0379 3.13995 12.9489 3.0509C12.8598 2.96185 12.7541 2.89124 12.6377 2.84312C12.5213 2.795 12.3966 2.77031 12.2707 2.77047ZM15.9991 8C15.9991 6.89525 16.0091 5.80051 15.9471 4.69777C15.885 3.4169 15.5928 2.28014 14.6562 1.3435C13.7176 0.404868 12.5829 0.114672 11.302 0.0526304C10.1973 -0.0094115 9.10258 0.000595291 7.99985 0.000595291C6.89512 0.000595291 5.80041 -0.0094115 4.69768 0.0526304C3.41684 0.114672 2.28009 0.40687 1.34348 1.3435C0.404861 2.28214 0.11467 3.4169 0.0526294 4.69777C-0.00941132 5.80252 0.000595279 6.89725 0.000595279 8C0.000595279 9.10275 -0.00941132 10.1995 0.0526294 11.3022C0.11467 12.5831 0.406862 13.7199 1.34348 14.6565C2.28209 15.5951 3.41684 15.8853 4.69768 15.9474C5.80241 16.0094 6.89713 15.9994 7.99985 15.9994C9.10458 15.9994 10.1993 16.0094 11.302 15.9474C12.5829 15.8853 13.7196 15.5931 14.6562 14.6565C15.5948 13.7179 15.885 12.5831 15.9471 11.3022C16.0111 10.1995 15.9991 9.10475 15.9991 8ZM14.238 12.7192C14.0919 13.0834 13.9157 13.3556 13.6336 13.6358C13.3514 13.918 13.0812 14.0941 12.717 14.2402C11.6643 14.6585 9.16462 14.5644 7.99785 14.5644C6.83108 14.5644 4.32944 14.6585 3.27675 14.2422C2.91251 14.0961 2.64033 13.92 2.36015 13.6378C2.07796 13.3556 1.90184 13.0854 1.75575 12.7212C1.33948 11.6665 1.43354 9.16679 1.43354 8C1.43354 6.83321 1.33948 4.33152 1.75575 3.27881C1.90184 2.91456 2.07796 2.64238 2.36015 2.36219C2.64233 2.082 2.91251 1.90388 3.27675 1.75778C4.32944 1.3415 6.83108 1.43556 7.99785 1.43556C9.16462 1.43556 11.6663 1.3415 12.719 1.75778C13.0832 1.90388 13.3554 2.08 13.6356 2.36219C13.9177 2.64438 14.0939 2.91456 14.24 3.27881C14.6562 4.33152 14.5622 6.83321 14.5622 8C14.5622 9.16679 14.6562 11.6665 14.238 12.7192Z" fill="white" />
              </svg>
            </a>
            <a href="#" className={styles["ft-social-icons"]}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2.01339 0C0.901774 0 0 0.859364 0 1.92045C0 2.98155 0.901048 3.8608 2.0119 3.8608C3.12276 3.8608 4.0253 2.98155 4.0253 1.92045C4.0253 0.860091 3.12501 0 2.01339 0ZM11.8363 5.09091C10.1456 5.09091 9.17829 5.93488 8.71429 6.77415H8.66518V5.31676H5.33333V16H8.80506V10.7116C8.80506 9.31819 8.91525 7.97159 10.7217 7.97159C12.5023 7.97159 12.5283 9.56044 12.5283 10.7997V16H15.9955H16V10.1321C16 7.26083 15.3533 5.09091 11.8363 5.09091ZM0.276786 5.31676V16H3.75149V5.31676H0.276786Z" fill="white"/>
              </svg>
            </a>
            <a href="#" className={styles["ft-social-icons"]}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                <path d="M0.263239 0L5.676 8.72697L0 16H1.20986L6.21214 9.59046L10.1875 16H14L8.3359 6.86842L13.6966 0H12.4875L7.8005 6.00493L4.07574 0H0.263239Z" fill="white"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="mb-5">
          <div className={`${styles["ft-copyright-list"]} w-full text-center`}>
            <span>Copyright &copy; {year} L&G Consultancy. All Rights Reserved.</span>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="#">Manage Cookies</a>
              <a href="#">Terms and Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>

        <div>
          <Image src={footerText} alt="L&G Consultancy" className="w-full" />
        </div>

      </div>
    </footer>
  );
};

export default Footer;
