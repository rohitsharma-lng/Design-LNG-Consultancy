'use client'

import { useEffect, useRef, useCallback } from 'react'
import Script from 'next/script'
import styles from './ai-specialization.module.css'

/* ================= DATA ================= */

const sections = [
  {
    title: 'Artificial Intelligence',
    desc: 'Our experts incorporate the latest AI frameworks to improve decisions, reduce manual effort and consistently streamline operations at scale.',
    visual: 'network',
    spanText: 'AI',
    spanCount: '01 / 06',
    cardBg: 'linear-gradient(108deg, rgba(55, 25, 202, 0.33) 2.63%, rgba(29, 209, 232, 0.09) 40.95%, rgba(29, 209, 232, 0.00) 56.27%), rgba(17, 22, 48, 1)',
    spanIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16.0004 6.66706C16.002 6.13377 15.8969 5.60554 15.6914 5.11346C15.4858 4.62137 15.1839 4.17536 14.8035 3.80165C14.423 3.42795 13.9717 3.13409 13.476 2.93737C12.9803 2.74064 12.4503 2.64503 11.9171 2.65614C11.3839 2.66726 10.8583 2.78487 10.3713 3.00208C9.88422 3.21929 9.44551 3.5317 9.08096 3.92093C8.71641 4.31017 8.43337 4.76837 8.24849 5.2686C8.06362 5.76882 7.98063 6.30096 8.00442 6.83373C7.22069 7.03524 6.49309 7.41246 5.87673 7.93681C5.26037 8.46116 4.77141 9.11889 4.44688 9.86019C4.12236 10.6015 3.97077 11.4069 4.00361 12.2155C4.03645 13.024 4.25285 13.8145 4.63642 14.5271C3.962 15.075 3.43166 15.7794 3.09154 16.579C2.75143 17.3786 2.61183 18.2492 2.68491 19.115C2.75798 19.9809 3.04151 20.8158 3.51083 21.5471C3.98015 22.2784 4.62104 22.8839 5.37776 23.3111C5.28431 24.034 5.34008 24.7685 5.54161 25.4691C5.74314 26.1697 6.08615 26.8215 6.54947 27.3843C7.01279 27.9472 7.58657 28.409 8.23538 28.7414C8.8842 29.0738 9.59426 29.2696 10.3217 29.3168C11.0492 29.364 11.7786 29.2616 12.4649 29.0159C13.1513 28.7701 13.7799 28.3863 14.3121 27.8881C14.8443 27.3898 15.2687 26.7878 15.559 26.1191C15.8494 25.4505 15.9996 24.7294 16.0004 24.0004V6.66706Z" stroke="#1DD1E8" stroke-width="1.86667" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 17.3333C13.1194 16.9395 14.0969 16.2227 14.8089 15.2733C15.5209 14.324 15.9354 13.1849 16 12" stroke="#1DD1E8" stroke-width="1.86667" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.00391 6.83301C8.03027 7.47799 8.21234 8.107 8.53457 8.66634" stroke="#1DD1E8" stroke-width="1.86667" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.63574 14.528C4.87966 14.3293 5.14068 14.1527 5.41574 14" stroke="#1DD1E8" stroke-width="1.86667" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.99962 23.9995C7.08073 24 6.17731 23.763 5.37695 23.3115" stroke="#1DD1E8" stroke-width="1.86667" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 17.333H21.3333" stroke="#1DD1E8" stroke-width="1.86667" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 24H24C24.7072 24 25.3855 24.281 25.8856 24.781C26.3857 25.2811 26.6667 25.9594 26.6667 26.6667V28" stroke="#1DD1E8" stroke-width="1.86667" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 10.667H26.6667" stroke="#1DD1E8" stroke-width="1.86667" stroke-linecap="round" stroke-linejoin="round"/><path d="M21.333 10.6667V6.66667C21.333 5.95942 21.614 5.28115 22.1141 4.78105C22.6142 4.28095 23.2924 4 23.9997 4" stroke="#1DD1E8" stroke-width="1.86667" stroke-linecap="round" stroke-linejoin="round"/><path d="M21.3337 18.0003C21.7018 18.0003 22.0003 17.7018 22.0003 17.3337C22.0003 16.9655 21.7018 16.667 21.3337 16.667C20.9655 16.667 20.667 16.9655 20.667 17.3337C20.667 17.7018 20.9655 18.0003 21.3337 18.0003Z" stroke="#1DD1E8" stroke-width="1.86667" stroke-linecap="round" stroke-linejoin="round"/><path d="M23.9997 4.66634C24.3679 4.66634 24.6663 4.36786 24.6663 3.99967C24.6663 3.63148 24.3679 3.33301 23.9997 3.33301C23.6315 3.33301 23.333 3.63148 23.333 3.99967C23.333 4.36786 23.6315 4.66634 23.9997 4.66634Z" stroke="#1DD1E8" stroke-width="1.86667" stroke-linecap="round" stroke-linejoin="round"/><path d="M26.6667 28.6663C27.0349 28.6663 27.3333 28.3679 27.3333 27.9997C27.3333 27.6315 27.0349 27.333 26.6667 27.333C26.2985 27.333 26 27.6315 26 27.9997C26 28.3679 26.2985 28.6663 26.6667 28.6663Z" stroke="#1DD1E8" stroke-width="1.86667" stroke-linecap="round" stroke-linejoin="round"/><path d="M26.6667 11.3333C27.0349 11.3333 27.3333 11.0349 27.3333 10.6667C27.3333 10.2985 27.0349 10 26.6667 10C26.2985 10 26 10.2985 26 10.6667C26 11.0349 26.2985 11.3333 26.6667 11.3333Z" stroke="#1DD1E8" stroke-width="1.86667" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  },
  {
    title: 'Agentic AI',
    desc: 'We introduce smart, automated AI agents that can act as required within the business lifecycle. It stays monitored, transparent and accountable for sessions, required for your business.',
    visual: 'agentic',
    spanText: 'Agents',
    spanCount: '02 / 06',
    cardBg: 'linear-gradient(108deg, rgba(55, 25, 202, 0.33) 2.63%, rgba(55, 25, 202, 0.09) 40.95%, rgba(29, 209, 232, 0.00) 56.27%), rgba(17, 22, 48, 1)',
    spanIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16.0003 10.6663V5.33301H10.667" stroke="#1DD1E8" stroke-width="1.86667" stroke-linecap="round" stroke-linejoin="round"/><path d="M23.9997 10.667H7.99967C6.52692 10.667 5.33301 11.8609 5.33301 13.3337V24.0003C5.33301 25.4731 6.52692 26.667 7.99967 26.667H23.9997C25.4724 26.667 26.6663 25.4731 26.6663 24.0003V13.3337C26.6663 11.8609 25.4724 10.667 23.9997 10.667Z" stroke="#1DD1E8" stroke-width="1.86667" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.66699 18.667H5.33366" stroke="#1DD1E8" stroke-width="1.86667" stroke-linecap="round" stroke-linejoin="round"/><path d="M26.667 18.667H29.3337" stroke="#1DD1E8" stroke-width="1.86667" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 17.333V19.9997" stroke="#1DD1E8" stroke-width="1.86667" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 17.333V19.9997" stroke="#1DD1E8" stroke-width="1.86667" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  },
  {
    title: 'Generative AI',
    desc: 'Our experts integrate Gen AI into the core of your business AI solution, ensuring customer interactions, knowledge systems, and operational tools.',
    visual: 'genai',
    spanText: 'Gen AI',
    spanCount: '03 / 06',
    cardBg: 'linear-gradient(108deg, rgba(29, 209, 232, 0.33) 2.63%, rgba(29, 209, 232, 0.09) 40.95%, rgba(29, 209, 232, 0.00) 56.27%), rgba(17, 22, 48, 1)',
    spanIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M13.2496 20.6663C13.1305 20.2049 12.89 19.7838 12.5531 19.4469C12.2161 19.1099 11.795 18.8694 11.3336 18.7503L3.15358 16.641C3.01402 16.6014 2.89119 16.5173 2.80373 16.4016C2.71627 16.2859 2.66895 16.1448 2.66895 15.9997C2.66895 15.8546 2.71627 15.7135 2.80373 15.5978C2.89119 15.482 3.01402 15.398 3.15358 15.3583L11.3336 13.2477C11.7948 13.1288 12.2158 12.8884 12.5528 12.5517C12.8897 12.215 13.1303 11.7942 13.2496 11.333L15.3589 3.15301C15.3981 3.01291 15.4821 2.88947 15.598 2.80154C15.7139 2.71361 15.8554 2.66602 16.0009 2.66602C16.1464 2.66602 16.2879 2.71361 16.4038 2.80154C16.5197 2.88947 16.6037 3.01291 16.6429 3.15301L18.7509 11.333C18.8699 11.7944 19.1105 12.2155 19.4474 12.5525C19.7844 12.8895 20.2055 13.13 20.6669 13.249L28.8469 15.357C28.9876 15.3958 29.1116 15.4797 29.2 15.5958C29.2884 15.7119 29.3363 15.8538 29.3363 15.9997C29.3363 16.1456 29.2884 16.2875 29.2 16.4036C29.1116 16.5197 28.9876 16.6035 28.8469 16.6423L20.6669 18.7503C20.2055 18.8694 19.7844 19.1099 19.4474 19.4469C19.1105 19.7838 18.8699 20.2049 18.7509 20.6663L16.6416 28.8463C16.6024 28.9865 16.5184 29.1099 16.4025 29.1978C16.2866 29.2858 16.1451 29.3333 15.9996 29.3333C15.8541 29.3333 15.7126 29.2858 15.5967 29.1978C15.4808 29.1099 15.3968 28.9865 15.3576 28.8463L13.2496 20.6663Z" stroke="#1DD1E8" stroke-width="1.86667" stroke-linecap="round" stroke-linejoin="round"/><path d="M26.667 4V9.33333" stroke="#1DD1E8" stroke-width="1.86667" stroke-linecap="round" stroke-linejoin="round"/><path d="M29.3333 6.66699H24" stroke="#1DD1E8" stroke-width="1.86667" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.33301 22.667V25.3337" stroke="#1DD1E8" stroke-width="1.86667" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.66667 24H4" stroke="#1DD1E8" stroke-width="1.86667" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  },
  {
    title: 'Computer Vision',
    desc: 'We incorporate computer vision to automate inspection, supervising and visual analysis across real-world operational settings.',
    visual: 'vision',
    spanText: 'CV',
    spanCount: '04 / 06',
    cardBg: 'linear-gradient(108deg, rgba(55, 25, 202, 0.33) 2.63%, rgba(29, 209, 232, 0.09) 40.95%, rgba(29, 209, 232, 0.00) 56.27%), rgba(17, 22, 48, 1)',
    spanIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M2.74936 16.4645C2.63824 16.1651 2.63824 15.8358 2.74936 15.5365C3.83162 12.9123 5.66871 10.6685 8.02772 9.08968C10.3867 7.51082 13.1614 6.66797 16 6.66797C18.8386 6.66797 21.6133 7.51082 23.9723 9.08968C26.3313 10.6685 28.1684 12.9123 29.2507 15.5365C29.3618 15.8358 29.3618 16.1651 29.2507 16.4645C28.1684 19.0887 26.3313 21.3324 23.9723 22.9113C21.6133 24.4901 18.8386 25.333 16 25.333C13.1614 25.333 10.3867 24.4901 8.02772 22.9113C5.66871 21.3324 3.83162 19.0887 2.74936 16.4645Z" stroke="#1DD1E8" stroke-width="1.86667" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z" stroke="#1DD1E8" stroke-width="1.86667" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  },
  {
    title: 'IoT',
    desc: 'We enable organizations to transform physical landscapes into digital, enhancing visibility and control across multiple operations.',
    visual: 'iot',
    spanText: 'IOT',
    spanCount: '05 / 06',
    cardBg: 'linear-gradient(108deg, rgba(55, 25, 202, 0.33) 2.63%, rgba(29, 209, 232, 0.09) 40.95%, rgba(29, 209, 232, 0.00) 56.27%), rgba(17, 22, 48, 1)',
    spanIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 26.667H16.0133" stroke="#1DD1E8" stroke-width="1.86667" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.66699 11.7599C6.33381 8.48017 11.0808 6.66699 16.0003 6.66699C20.9199 6.66699 25.6668 8.48017 29.3337 11.7599" stroke="#1DD1E8" stroke-width="1.86667" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.66699 17.1454C9.15938 14.7024 12.5103 13.334 16.0003 13.334C19.4904 13.334 22.8413 14.7024 25.3337 17.1454" stroke="#1DD1E8" stroke-width="1.86667" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.333 21.9057C12.5792 20.6842 14.2547 20 15.9997 20C17.7447 20 19.4201 20.6842 20.6663 21.9057" stroke="#1DD1E8" stroke-width="1.86667" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  },
  {
    title: 'Data Science and Analytics',
    desc: 'Our experts design and implement data foundations that support business analytics and insight across multiple functions without dependency.',
    visual: 'data',
    spanText: 'DATA',
    spanCount: '06 / 06',
    cardBg: 'linear-gradient(108deg, rgba(55, 25, 202, 0.33) 2.63%, rgba(29, 209, 232, 0.09) 40.95%, rgba(29, 209, 232, 0.00) 56.27%), rgba(17, 22, 48, 1)',
    spanIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M4 4V25.3333C4 26.0406 4.28095 26.7189 4.78105 27.219C5.28115 27.719 5.95942 28 6.66667 28H28" stroke="#1DD1E8" stroke-width="1.86667" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 22.6667V12" stroke="#1DD1E8" stroke-width="1.86667" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.333 22.667V6.66699" stroke="#1DD1E8" stroke-width="1.86667" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.667 22.667V18.667" stroke="#1DD1E8" stroke-width="1.86667" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  },
]

const total = sections.length

/* ================= COMPONENT ================= */

const AiSpecs = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const visualRef = useRef<HTMLDivElement>(null)
  const spanTagRef = useRef<HTMLSpanElement>(null)
  const spanIconRef = useRef<HTMLDivElement>(null)
  const spanCountRef = useRef<HTMLSpanElement>(null)
  const dotsRef = useRef<(HTMLSpanElement | null)[]>([])
  const currentRef = useRef(-1)
  const animFrameRef = useRef<number | null>(null)
  const gsapReadyRef = useRef(false)

  /* ================= CANVAS ANIMATIONS ================= */
  const startCanvasAnim = useCallback((targetEl: HTMLDivElement, variant: string) => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
    targetEl.innerHTML = ''

    const canvas = document.createElement('canvas')
    const W = 280
    const H = 200
    canvas.width = W
    canvas.height = H
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    targetEl.appendChild(canvas)

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const BLUE = '#3719CA'
    const CYAN = '#1DD1E8'
    let t = 0

    /* ---- variant: network (Card 1) ---- */
    const nodes = Array.from({ length: 9 }, () => ({
      x: Math.random() * (W - 40) + 20,
      y: Math.random() * (H - 40) + 20,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 3 + 3,
      cyan: Math.random() < 0.3,
    }))

    /* ---- variant: agentic (Card 2) hub + orbiting satellites ---- */
    const satellites = [
      { angle: 0, dist: 70, r: 7, delay: 0 },
      { angle: Math.PI * 0.4, dist: 85, r: 8, delay: 0.3 },
      { angle: Math.PI * 0.9, dist: 75, r: 6, delay: 0.6 },
      { angle: Math.PI * 1.3, dist: 88, r: 7, delay: 0.9 },
      { angle: Math.PI * 1.7, dist: 72, r: 7, delay: 1.2 },
    ]

    /* ---- variant: genai / data (Card 3 / 6) bars + line ---- */
    const barCount = variant === 'data' ? 6 : 5
    const bars = Array.from({ length: barCount }, (_, i) => ({
      phase: i * 0.5,
      baseH: 40 + Math.random() * 70,
    }))
    const linePts = [
      { x: 30, y: 150 }, { x: 70, y: 110 }, { x: 110, y: 125 },
      { x: 150, y: 80 }, { x: 190, y: 95 }, { x: 230, y: 55 }, { x: 260, y: 70 },
    ]

    /* ---- variant: vision (Card 4) eye + scan ---- */
    /* (uses t for scan motion) */

    /* ---- variant: iot (Card 5) hub + devices + rings ---- */
    const devices = [
      { x: 50, y: 50 }, { x: 230, y: 50 }, { x: 40, y: 155 },
      { x: 140, y: 168 }, { x: 240, y: 150 },
    ]

    function drawNetwork() {
      nodes.forEach((n) => {
        n.x += n.vx; n.y += n.vy
        if (n.x < 10 || n.x > W - 10) n.vx *= -1
        if (n.y < 10 || n.y > H - 10) n.vy *= -1
      })
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 130) {
            ctx!.beginPath()
            ctx!.moveTo(nodes[i].x, nodes[i].y)
            ctx!.lineTo(nodes[j].x, nodes[j].y)
            ctx!.strokeStyle = `rgba(55, 25, 202, ${(1 - dist / 130) * 0.7})`
            ctx!.lineWidth = 1
            ctx!.stroke()
          }
        }
      }
      nodes.forEach((n) => {
        if (n.cyan) {
          ctx!.beginPath()
          ctx!.arc(n.x, n.y, n.r + 4, 0, Math.PI * 2)
          ctx!.strokeStyle = 'rgba(29, 209, 232, 0.2)'
          ctx!.lineWidth = 1
          ctx!.stroke()
        }
        ctx!.beginPath()
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx!.fillStyle = n.cyan ? CYAN : BLUE
        ctx!.globalAlpha = n.cyan ? 0.9 : 1
        ctx!.fill()
        ctx!.globalAlpha = 1
      })
    }

    function drawAgentic() {
      const cx = W / 2, cy = H / 2
      /* central breathing halo */
      const pulse = 1 + Math.sin(t * 0.04) * 0.08
      ctx!.beginPath()
      ctx!.arc(cx, cy, 32 * pulse, 0, Math.PI * 2)
      ctx!.fillStyle = 'rgba(55, 25, 202, 0.15)'
      ctx!.fill()
      ctx!.strokeStyle = 'rgba(55, 25, 202, 0.6)'
      ctx!.lineWidth = 2
      ctx!.stroke()
      /* central blue dot */
      ctx!.beginPath()
      ctx!.arc(cx + 10, cy + 6, 12, 0, Math.PI * 2)
      ctx!.fillStyle = 'rgba(55, 25, 202, 0.85)'
      ctx!.fill()
      /* satellites & dashed beams */
      satellites.forEach((s) => {
        const a = s.angle + t * 0.006
        const x = cx + Math.cos(a) * s.dist
        const y = cy + Math.sin(a) * s.dist
        /* animated dashed line */
        ctx!.setLineDash([4, 4])
        ctx!.lineDashOffset = -t * 0.4 + s.delay * 10
        ctx!.beginPath()
        ctx!.moveTo(cx, cy); ctx!.lineTo(x, y)
        ctx!.strokeStyle = 'rgba(29, 209, 232, 0.45)'
        ctx!.lineWidth = 1
        ctx!.stroke()
        ctx!.setLineDash([])
        /* satellite node */
        ctx!.beginPath()
        ctx!.arc(x, y, s.r + 3, 0, Math.PI * 2)
        ctx!.fillStyle = 'rgba(29, 209, 232, 0.2)'
        ctx!.fill()
        ctx!.strokeStyle = 'rgba(29, 209, 232, 0.7)'
        ctx!.lineWidth = 1.5
        ctx!.stroke()
        ctx!.beginPath()
        ctx!.arc(x, y, s.r, 0, Math.PI * 2)
        ctx!.fillStyle = CYAN
        ctx!.globalAlpha = 0.9
        ctx!.fill()
        ctx!.globalAlpha = 1
      })
    }

    function drawBars(withGrid: boolean) {
      const baseY = H - 20
      const barW = 22
      const gap = (W - 40 - barW * barCount) / (barCount - 1)
      if (withGrid) {
        ctx!.strokeStyle = 'rgba(29, 209, 232, 0.08)'
        ctx!.lineWidth = 1
        for (let gy = 40; gy < baseY; gy += 30) {
          ctx!.beginPath(); ctx!.moveTo(20, gy); ctx!.lineTo(W - 20, gy); ctx!.stroke()
        }
      }
      bars.forEach((b, i) => {
        const h = b.baseH + Math.sin(t * 0.03 + b.phase) * 22
        const x = 20 + i * (barW + gap)
        const y = baseY - h
        const grad = ctx!.createLinearGradient(x, y, x, baseY)
        grad.addColorStop(0, i % 2 === 0 ? 'rgba(29, 209, 232, 0.7)' : 'rgba(55, 25, 202, 0.7)')
        grad.addColorStop(1, 'rgba(55, 25, 202, 0.1)')
        ctx!.fillStyle = grad
        ctx!.beginPath()
        const r = 3
        ctx!.moveTo(x + r, y)
        ctx!.lineTo(x + barW - r, y)
        ctx!.quadraticCurveTo(x + barW, y, x + barW, y + r)
        ctx!.lineTo(x + barW, baseY)
        ctx!.lineTo(x, baseY)
        ctx!.lineTo(x, y + r)
        ctx!.quadraticCurveTo(x, y, x + r, y)
        ctx!.fill()
      })
      /* animated drawn line */
      const progress = (Math.sin(t * 0.02) * 0.5 + 0.5)
      const endIdx = Math.floor(progress * (linePts.length - 1)) + 1
      ctx!.setLineDash([4, 4])
      ctx!.lineDashOffset = -t * 0.3
      ctx!.strokeStyle = 'rgba(29, 209, 232, 0.85)'
      ctx!.lineWidth = 2
      ctx!.beginPath()
      ctx!.moveTo(linePts[0].x, linePts[0].y)
      for (let i = 1; i < endIdx && i < linePts.length; i++) {
        ctx!.lineTo(linePts[i].x, linePts[i].y)
      }
      ctx!.stroke()
      ctx!.setLineDash([])
      /* dots along line */
      for (let i = 0; i < endIdx && i < linePts.length; i++) {
        ctx!.beginPath()
        ctx!.arc(linePts[i].x, linePts[i].y, 3, 0, Math.PI * 2)
        ctx!.fillStyle = CYAN
        ctx!.fill()
      }
    }

    function drawVision() {
      const cx = W / 2, cy = H / 2
      /* outer eye shape */
      ctx!.strokeStyle = 'rgba(55, 25, 202, 0.5)'
      ctx!.lineWidth = 2
      ctx!.beginPath()
      ctx!.ellipse(cx, cy, 90, 42, 0, 0, Math.PI * 2)
      ctx!.stroke()
      /* iris */
      const irisPulse = 26 + Math.sin(t * 0.05) * 3
      ctx!.beginPath()
      ctx!.arc(cx, cy, irisPulse, 0, Math.PI * 2)
      ctx!.fillStyle = 'rgba(55, 25, 202, 0.15)'
      ctx!.fill()
      ctx!.strokeStyle = 'rgba(29, 209, 232, 0.7)'
      ctx!.lineWidth = 2
      ctx!.stroke()
      /* pupil highlight */
      const pupilX = cx + Math.sin(t * 0.03) * 6
      ctx!.beginPath()
      ctx!.arc(pupilX, cy + 2, 10, 0, Math.PI * 2)
      ctx!.fillStyle = 'rgba(29, 209, 232, 0.85)'
      ctx!.fill()
      /* scan lines */
      ctx!.setLineDash([6, 6])
      for (let i = 0; i < 3; i++) {
        const offset = (t * 0.8 + i * 40) % 120 - 60
        const sy = cy + offset
        ctx!.lineDashOffset = -t * 0.5 + i * 8
        ctx!.strokeStyle = `rgba(29, 209, 232, ${0.35 - Math.abs(offset) / 200})`
        ctx!.lineWidth = 1
        ctx!.beginPath()
        ctx!.moveTo(cx - 88, sy); ctx!.lineTo(cx + 88, sy)
        ctx!.stroke()
      }
      ctx!.setLineDash([])
    }

    function drawIot() {
      const cx = W / 2, cy = H / 2
      /* concentric expanding rings */
      for (let i = 0; i < 3; i++) {
        const ringT = ((t * 0.5 + i * 60) % 180) / 180
        const radius = 20 + ringT * 75
        ctx!.beginPath()
        ctx!.arc(cx, cy, radius, 0, Math.PI * 2)
        ctx!.strokeStyle = `rgba(55, 25, 202, ${(1 - ringT) * 0.4})`
        ctx!.lineWidth = 1.5
        ctx!.stroke()
      }
      /* central hub */
      ctx!.beginPath()
      ctx!.arc(cx, cy, 16, 0, Math.PI * 2)
      ctx!.fillStyle = 'rgba(55, 25, 202, 0.85)'
      ctx!.fill()
      /* beams + device boxes */
      devices.forEach((d, i) => {
        const fade = (Math.sin(t * 0.04 + i * 0.7) * 0.5 + 0.5)
        ctx!.strokeStyle = `rgba(29, 209, 232, ${0.25 + fade * 0.4})`
        ctx!.lineWidth = 1
        ctx!.beginPath()
        ctx!.moveTo(cx, cy); ctx!.lineTo(d.x, d.y)
        ctx!.stroke()
        /* device rect */
        ctx!.fillStyle = 'rgba(29, 209, 232, 0.15)'
        ctx!.strokeStyle = 'rgba(29, 209, 232, 0.5)'
        ctx!.lineWidth = 1.5
        ctx!.beginPath()
        const bx = d.x - 11, by = d.y - 11
        ctx!.roundRect(bx, by, 22, 22, 4)
        ctx!.fill()
        ctx!.stroke()
        /* indicator dot */
        ctx!.beginPath()
        ctx!.arc(d.x, d.y, 2 + fade * 1.5, 0, Math.PI * 2)
        ctx!.fillStyle = CYAN
        ctx!.globalAlpha = 0.6 + fade * 0.4
        ctx!.fill()
        ctx!.globalAlpha = 1
      })
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H)
      switch (variant) {
        case 'network': drawNetwork(); break
        case 'agentic': drawAgentic(); break
        case 'genai':   drawBars(false); break
        case 'vision':  drawVision(); break
        case 'iot':     drawIot(); break
        case 'data':    drawBars(true); break
        default:        drawNetwork()
      }
      t++
      animFrameRef.current = requestAnimationFrame(draw)
    }

    draw()
  }, [])

  /* ================= RENDER VISUAL ================= */
  const renderVisual = useCallback(
    (data: (typeof sections)[0]) => {
      if (!visualRef.current) return
      startCanvasAnim(visualRef.current, data.visual)
    },
    [startCanvasAnim]
  )

  /* ================= UPDATE CONTENT ================= */
  const updateContent = useCallback(
    (index: number) => {
      const data = sections[index]
      if (titleRef.current) titleRef.current.textContent = data.title
      if (descRef.current) descRef.current.textContent = data.desc
      if (spanTagRef.current) spanTagRef.current.textContent = data.spanText
      if (spanIconRef.current) spanIconRef.current.innerHTML = data.spanIcon
      if (spanCountRef.current) spanCountRef.current.textContent = data.spanCount
      if (wrapperRef.current) wrapperRef.current.style.background = data.cardBg
      renderVisual(data)
    },
    [renderVisual]
  )

  /* ================= INIT FIRST SECTION ================= */
  useEffect(() => {
    updateContent(0)
    currentRef.current = 0
    dotsRef.current[0]?.classList.add(styles['active'])
  }, [updateContent])

  /* ================= GSAP SCROLL TRIGGER ================= */
  const initGsap = useCallback(() => {
    if (gsapReadyRef.current) return
    const w = window as any
    if (!w.gsap || !w.ScrollTrigger) return

    gsapReadyRef.current = true
    const gsap = w.gsap
    const ScrollTrigger = w.ScrollTrigger
    gsap.registerPlugin(ScrollTrigger)

    const animatedEls = [
      titleRef.current,
      descRef.current,
      visualRef.current,
      spanTagRef.current,
      spanIconRef.current,
      spanCountRef.current,
    ].filter(Boolean)

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: () => '+=' + window.innerHeight * (total - 1),
      scrub: 1,
      pin: true,
      pinSpacing: true,
      invalidateOnRefresh: true,
      snap: {
        snapTo: 1 / (total - 1),
        duration: { min: 0.2, max: 0.4 },
        delay: 0.05,
        ease: 'power1.inOut',
      },
      onUpdate: (self: any) => {
        const progress = self.progress * total
        const index = Math.min(Math.floor(progress), total - 1)

        if (index === currentRef.current) return
        currentRef.current = index

        gsap.to(animatedEls, {
          opacity: 0,
          y: 40,
          duration: 0.25,
          ease: 'power1.out',
          overwrite: true,
          onComplete: () => {
            updateContent(index)

            gsap.fromTo(animatedEls, { opacity: 0, y: 40 }, {
              opacity: 1,
              y: 0,
              duration: 0.4,
              stagger: 0.05,
              ease: 'power2.out',
            })
          },
        })

        dotsRef.current.forEach((dot) => dot?.classList.remove(styles['active']))
        dotsRef.current[index]?.classList.add(styles['active'])
      },
    })
  }, [updateContent])

  /* ================= CLEANUP ================= */
  useEffect(() => {
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
    }
  }, [])

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
        strategy="afterInteractive"
        onReady={initGsap}
      />

      <section ref={sectionRef} className={styles['nl-scroll-section']}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col px-2 sm:px-0 mb-8">
            <div className="flex items-center justify-center gap-2">
              <div className="sec-top-line mr-1"></div>
              <span className="sec-top-heading">ARTIFICIAL INTELLIGENCE</span>
              <div className="sec-dot"></div>
            </div>
            <h2 className="section-heading my-3 mx-auto" style={{ maxWidth: 780 }}>
              Smart Technologies Supporting <span className="grad">Modern Systems</span>
            </h2>
          </div>
        </div>

        {/* Scroll Section */}
        <div className={styles['nl-card-container']}>
          <div className={styles['nl-card-border']}>
            <div ref={wrapperRef} className={styles['nl-scroll-wrapper']}>
              <div className={styles['nl-scroll-left']}>
                <div className="flex items-center justify-start gap-2">
                  <span ref={spanTagRef} className={styles['nl-ai-span-tag']}></span>
                  <span ref={spanCountRef} className={styles['nl-ai-span-text']}></span>
                </div>
                <div ref={spanIconRef} className={styles['nl-ai-icon']}></div>
                <span className="nl-grad-line"></span>
                <h2 ref={titleRef} className={styles['nl-ai-title']}></h2>
                <p ref={descRef} className={styles['nl-ai-desc']}></p>
              </div>

              <div className={styles['nl-scroll-right']}>
                <div ref={visualRef} className={styles['nl-visual']}></div>
              </div>

              <div className={styles['nl-dots']}>
                {sections.map((_, i) => (
                  <span
                    key={i}
                    ref={(el) => { dotsRef.current[i] = el }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <span className={`${styles['scroll-down-info']} mx-auto mt-5`}>SCROLL TO EXPLORE ↓</span>
      </section>
    </>
  )
}

export default AiSpecs
