'use client'

import { useId } from 'react'
import styles from './animatedAiSparkle.module.css'

interface AnimatedAiSparkleProps {
  size?: number
  className?: string
}

const AnimatedAiSparkle = ({ size = 18, className = '' }: AnimatedAiSparkleProps) => {
  const id = useId()
  const clipId = `aiSparkleClip${id}`

  return (
    <span className={`${styles.sparkleWrapper} ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 18 18"
        fill="none"
        className={styles.sparkleSvg}
      >
        <g clipPath={`url(#${clipId})`}>
          {/* Main four-point star */}
          <path
            className={styles.mainStar}
            d="M7.453 11.625a1.84 1.84 0 0 1-.341-.597 1.84 1.84 0 0 0-.597-.341L1.774 9.361a.392.392 0 0 1 0-.722l4.601-1.187a1.84 1.84 0 0 0 .597-.341c.165-.165.283-.371.341-.597L8.639 1.774a.392.392 0 0 1 .722 0l1.186 4.601c.058.226.176.432.341.597.165.165.371.283.597.341l4.601 1.186a.392.392 0 0 1 0 .722l-4.601 1.187a1.84 1.84 0 0 0-.597.341 1.84 1.84 0 0 0-.341.597l-1.186 4.601a.392.392 0 0 1-.722 0L7.453 11.625Z"
            stroke="#8B5CF6"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Top-right small plus */}
          <path
            className={styles.sparkle1}
            d="M15 2.25V5.25"
            stroke="#8B5CF6"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className={styles.sparkle1}
            d="M16.5 3.75H13.5"
            stroke="#8B5CF6"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Bottom-left small plus */}
          <path
            className={styles.sparkle2}
            d="M3 12.75V14.25"
            stroke="#8B5CF6"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className={styles.sparkle2}
            d="M3.75 13.5H2.25"
            stroke="#8B5CF6"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id={clipId}>
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </span>
  )
}

export default AnimatedAiSparkle
