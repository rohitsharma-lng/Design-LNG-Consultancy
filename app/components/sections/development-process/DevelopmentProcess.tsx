'use client'

import { useState, useEffect, useRef, ReactNode } from 'react'
import styles from './development-process.module.css'

type Feature = { icon: ReactNode; label: string }
type NetworkNode = { x: number; y: number; r: number }
type NetworkConfig = { nodes: NetworkNode[]; edges: [number, number][] }

type Tab = {
  id: string
  label: string
  tabIcon: ReactNode
  cardIcon: ReactNode
  title: string
  description: string
  tags: string[]
  features: Feature[]
  network: NetworkConfig
}

/* ------------------------- Icons ------------------------- */

const IconDoc = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 3v6h6M8 13h8M8 17h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconAudit = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12h4l2-6 4 12 2-6h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconDesign = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M3 9h18M9 3v18" stroke="currentColor" strokeWidth="1.6"/>
  </svg>
)

const IconCode = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="m9 18-6-6 6-6M15 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconShield = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconUser = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M4 21c0-4 4-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
)

const IconRocket = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 4s5 1 5 6-6 9-6 9-3-1-5-3-3-5-3-5 4-1 6 0 3 3 3 3M9 17l-3 3M5 14l-2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="14.5" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.6"/>
  </svg>
)

/* Feature icons */
const FIChart = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
  </svg>
)
const FIEye = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" stroke="currentColor" strokeWidth="1.7"/>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.7"/>
  </svg>
)
const FIMap = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
    <path d="M9 4v14M15 6v14" stroke="currentColor" strokeWidth="1.7"/>
  </svg>
)
const FISearch = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.7"/>
    <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
  </svg>
)
const FIList = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
  </svg>
)
const FIBolt = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
  </svg>
)
const FILayers = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="m12 2 10 5-10 5L2 7l10-5ZM2 12l10 5 10-5M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
  </svg>
)
const FIPen = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 19 4 21l2-8 11-11 6 6L12 19Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
  </svg>
)
const FIBox = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 8 12 3 3 8v8l9 5 9-5V8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
    <path d="M3 8l9 5 9-5M12 13v8" stroke="currentColor" strokeWidth="1.7"/>
  </svg>
)
const FILock = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="11" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.7"/>
    <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="currentColor" strokeWidth="1.7"/>
  </svg>
)
const FIKey = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="14" r="4" stroke="currentColor" strokeWidth="1.7"/>
    <path d="m11 11 10-10M17 5l3 3M14 8l3 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
  </svg>
)
const FIBug = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="7" y="7" width="10" height="13" rx="5" stroke="currentColor" strokeWidth="1.7"/>
    <path d="M3 12h4M17 12h4M5 5l3 3M19 5l-3 3M12 7V4M12 20v-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
  </svg>
)
const FICheck = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const FICloud = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 18a5 5 0 1 1 1.5-9.8A6 6 0 0 1 20 11a4 4 0 0 1 0 8H7Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
  </svg>
)
const FISync = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const FIServer = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.7"/>
    <rect x="3" y="14" width="18" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.7"/>
    <path d="M7 7h.01M7 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

/* ------------------------- Network configs (per tab) ------------------------- */
/* Coordinates are normalized 0..1 against the canvas display size. */

const NETWORKS: NetworkConfig[] = [
  // Evaluation — Y tree branching out to base nodes
  {
    nodes: [
      { x: 0.5, y: 0.18, r: 14 },
      { x: 0.32, y: 0.5, r: 11 },
      { x: 0.7, y: 0.5, r: 11 },
      { x: 0.18, y: 0.82, r: 8 },
      { x: 0.4, y: 0.82, r: 8 },
      { x: 0.62, y: 0.82, r: 8 },
      { x: 0.84, y: 0.82, r: 8 },
    ],
    edges: [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6], [4, 5]],
  },
  // Audit — circular ring
  {
    nodes: [
      { x: 0.5, y: 0.5, r: 14 },
      { x: 0.5, y: 0.18, r: 9 },
      { x: 0.78, y: 0.32, r: 9 },
      { x: 0.86, y: 0.62, r: 9 },
      { x: 0.66, y: 0.85, r: 9 },
      { x: 0.34, y: 0.85, r: 9 },
      { x: 0.14, y: 0.62, r: 9 },
      { x: 0.22, y: 0.32, r: 9 },
    ],
    edges: [
      [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7],
      [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 1],
    ],
  },
  // Design — grid
  {
    nodes: [
      { x: 0.25, y: 0.25, r: 10 },
      { x: 0.5, y: 0.25, r: 10 },
      { x: 0.75, y: 0.25, r: 10 },
      { x: 0.25, y: 0.5, r: 12 },
      { x: 0.5, y: 0.5, r: 14 },
      { x: 0.75, y: 0.5, r: 12 },
      { x: 0.25, y: 0.75, r: 10 },
      { x: 0.5, y: 0.75, r: 10 },
      { x: 0.75, y: 0.75, r: 10 },
    ],
    edges: [
      [0, 1], [1, 2], [3, 4], [4, 5], [6, 7], [7, 8],
      [0, 3], [3, 6], [1, 4], [4, 7], [2, 5], [5, 8],
    ],
  },
  // Development — branching tree
  {
    nodes: [
      { x: 0.5, y: 0.15, r: 13 },
      { x: 0.25, y: 0.4, r: 10 },
      { x: 0.75, y: 0.4, r: 10 },
      { x: 0.15, y: 0.65, r: 8 },
      { x: 0.35, y: 0.65, r: 8 },
      { x: 0.65, y: 0.65, r: 8 },
      { x: 0.85, y: 0.65, r: 8 },
      { x: 0.3, y: 0.88, r: 7 },
      { x: 0.7, y: 0.88, r: 7 },
    ],
    edges: [
      [0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6],
      [3, 7], [4, 7], [5, 8], [6, 8],
    ],
  },
  // Security — shield / concentric
  {
    nodes: [
      { x: 0.5, y: 0.5, r: 16 },
      { x: 0.5, y: 0.2, r: 9 },
      { x: 0.78, y: 0.38, r: 9 },
      { x: 0.78, y: 0.66, r: 9 },
      { x: 0.5, y: 0.84, r: 9 },
      { x: 0.22, y: 0.66, r: 9 },
      { x: 0.22, y: 0.38, r: 9 },
    ],
    edges: [
      [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
      [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 1],
    ],
  },
  // Testing — feedback loop
  {
    nodes: [
      { x: 0.2, y: 0.5, r: 12 },
      { x: 0.4, y: 0.25, r: 10 },
      { x: 0.6, y: 0.25, r: 10 },
      { x: 0.8, y: 0.5, r: 12 },
      { x: 0.6, y: 0.78, r: 10 },
      { x: 0.4, y: 0.78, r: 10 },
    ],
    edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [0, 3]],
  },
  // Deployment — hub & spoke with relay
  {
    nodes: [
      { x: 0.5, y: 0.5, r: 16 },
      { x: 0.18, y: 0.22, r: 8 },
      { x: 0.5, y: 0.16, r: 8 },
      { x: 0.82, y: 0.22, r: 8 },
      { x: 0.88, y: 0.55, r: 8 },
      { x: 0.78, y: 0.85, r: 8 },
      { x: 0.5, y: 0.9, r: 8 },
      { x: 0.22, y: 0.85, r: 8 },
      { x: 0.12, y: 0.55, r: 8 },
    ],
    edges: [
      [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8],
    ],
  },
]

/* ------------------------- Tabs data ------------------------- */

const TABS: Tab[] = [
  {
    id: 'evaluation',
    label: 'Evaluation',
    tabIcon: IconDoc,
    cardIcon: IconDoc,
    title: 'Business Evaluation',
    description:
      'We assess the banking business needs with deep-dive workshops and stakeholder interviews. Once we have clarity, we create a strategic blueprint for software development.',
    tags: ['Discovery', 'KPI Mapping', 'Risk Analysis'],
    features: [
      { icon: FIChart, label: 'Market Analysis' },
      { icon: FIEye, label: 'Gap Assessment' },
      { icon: FIMap, label: 'Process Mapping' },
    ],
    network: NETWORKS[0],
  },
  {
    id: 'audit',
    label: 'Audit',
    tabIcon: IconAudit,
    cardIcon: IconAudit,
    title: 'Technical Audit',
    description:
      'Our engineers audit existing systems, integrations, and infrastructure to surface bottlenecks. The findings drive a prioritized modernization roadmap.',
    tags: ['Code Review', 'Architecture Audit', 'Compliance'],
    features: [
      { icon: FISearch, label: 'System Review' },
      { icon: FIList, label: 'Risk Register' },
      { icon: FIBolt, label: 'Performance Scan' },
    ],
    network: NETWORKS[1],
  },
  {
    id: 'design',
    label: 'Design',
    tabIcon: IconDesign,
    cardIcon: IconDesign,
    title: 'Product Design',
    description:
      'We craft intuitive customer journeys, design systems, and high-fidelity prototypes that reflect your brand and meet rigorous banking UX standards.',
    tags: ['UX Research', 'Wireframes', 'Design System'],
    features: [
      { icon: FIPen, label: 'UI Design' },
      { icon: FILayers, label: 'Design System' },
      { icon: FIBox, label: 'Prototyping' },
    ],
    network: NETWORKS[2],
  },
  {
    id: 'development',
    label: 'Development',
    tabIcon: IconCode,
    cardIcon: IconCode,
    title: 'Agile Development',
    description:
      'Cross-functional squads ship banking features in two-week sprints. We pair-program, peer-review, and automate quality gates from day one.',
    tags: ['Microservices', 'API First', 'CI/CD'],
    features: [
      { icon: IconCode, label: 'Clean Code' },
      { icon: FILayers, label: 'Modular Build' },
      { icon: FISync, label: 'Continuous Delivery' },
    ],
    network: NETWORKS[3],
  },
  {
    id: 'security',
    label: 'Security',
    tabIcon: IconShield,
    cardIcon: IconShield,
    title: 'Security & Compliance',
    description:
      'Zero-trust architectures, encryption at rest and in transit, and continuous threat modeling keep your platform aligned with banking regulations.',
    tags: ['Zero Trust', 'PCI-DSS', 'GDPR'],
    features: [
      { icon: FILock, label: 'Encryption' },
      { icon: FIKey, label: 'Access Control' },
      { icon: IconShield, label: 'Threat Modeling' },
    ],
    network: NETWORKS[4],
  },
  {
    id: 'testing',
    label: 'Testing',
    tabIcon: IconUser,
    cardIcon: IconUser,
    title: 'Quality Assurance',
    description:
      'Automated unit, integration, and load tests, paired with exploratory QA, ensure every release is reliable, performant, and audit-ready.',
    tags: ['Automation', 'Load Testing', 'UAT'],
    features: [
      { icon: FIBug, label: 'Defect Triage' },
      { icon: FICheck, label: 'Test Automation' },
      { icon: FIBolt, label: 'Stress Testing' },
    ],
    network: NETWORKS[5],
  },
  {
    id: 'deployment',
    label: 'Deployment',
    tabIcon: IconRocket,
    cardIcon: IconRocket,
    title: 'Cloud Deployment',
    description:
      'We launch on resilient cloud infrastructure with blue-green rollouts, observability, and 24/7 support so your platform scales without surprises.',
    tags: ['Blue-Green', 'Observability', 'Auto-scaling'],
    features: [
      { icon: FICloud, label: 'Cloud Setup' },
      { icon: FIServer, label: 'Infrastructure' },
      { icon: FISync, label: 'Monitoring' },
    ],
    network: NETWORKS[6],
  },
]

/* ------------------------- Component ------------------------- */

const DevelopmentProcess = () => {
  const [activeTab, setActiveTab] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)
  const transitionRef = useRef<number>(1) // 0 -> 1 fade-in
  const prevConfigRef = useRef<NetworkConfig | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2))

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = Math.floor(rect.width * dpr)
      canvas.height = Math.floor(rect.height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const start = performance.now()
    const fadeStart = performance.now()
    const fadeDuration = 600

    const draw = (now: number) => {
      const rect = canvas.getBoundingClientRect()
      const w = rect.width
      const h = rect.height
      const t = (now - start) / 1000
      transitionRef.current = Math.min(1, (now - fadeStart) / fadeDuration)
      const fade = transitionRef.current

      ctx.clearRect(0, 0, w, h)

      const config = TABS[activeTab].network
      const prev = prevConfigRef.current

      const drawConfig = (cfg: NetworkConfig, alpha: number) => {
        // Edges
        cfg.edges.forEach(([a, b], i) => {
          const na = cfg.nodes[a]
          const nb = cfg.nodes[b]
          const x1 = na.x * w
          const y1 = na.y * h
          const x2 = nb.x * w
          const y2 = nb.y * h

          ctx.strokeStyle = `rgba(29, 209, 232, ${0.18 * alpha})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(x1, y1)
          ctx.lineTo(x2, y2)
          ctx.stroke()

          // Traveling pulse along edge
          const speed = 0.35
          const phase = (t * speed + i * 0.17) % 1
          const px = x1 + (x2 - x1) * phase
          const py = y1 + (y2 - y1) * phase
          const pulseAlpha = (1 - Math.abs(0.5 - phase) * 2) * alpha
          if (pulseAlpha > 0) {
            const pg = ctx.createRadialGradient(px, py, 0, px, py, 14)
            pg.addColorStop(0, `rgba(29, 209, 232, ${0.7 * pulseAlpha})`)
            pg.addColorStop(1, 'rgba(29, 209, 232, 0)')
            ctx.fillStyle = pg
            ctx.beginPath()
            ctx.arc(px, py, 14, 0, Math.PI * 2)
            ctx.fill()

            ctx.fillStyle = `rgba(255, 255, 255, ${0.9 * pulseAlpha})`
            ctx.beginPath()
            ctx.arc(px, py, 2.2, 0, Math.PI * 2)
            ctx.fill()
          }
        })

        // Nodes
        cfg.nodes.forEach((n, i) => {
          const x = n.x * w
          const y = n.y * h
          const breathe = 1 + Math.sin(t * 2 + i * 0.6) * 0.08

          // Outer glow
          const og = ctx.createRadialGradient(x, y, 0, x, y, n.r * 2.6)
          og.addColorStop(0, `rgba(29, 209, 232, ${0.35 * alpha})`)
          og.addColorStop(1, 'rgba(29, 209, 232, 0)')
          ctx.fillStyle = og
          ctx.beginPath()
          ctx.arc(x, y, n.r * 2.6, 0, Math.PI * 2)
          ctx.fill()

          // Outer ring
          ctx.strokeStyle = `rgba(55, 25, 202, ${0.85 * alpha})`
          ctx.lineWidth = 1.4
          ctx.beginPath()
          ctx.arc(x, y, n.r * breathe, 0, Math.PI * 2)
          ctx.stroke()

          // Inner ring
          ctx.strokeStyle = `rgba(29, 209, 232, ${0.6 * alpha})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.arc(x, y, n.r * 0.65, 0, Math.PI * 2)
          ctx.stroke()

          // Core dot
          ctx.fillStyle = `rgba(29, 209, 232, ${alpha})`
          ctx.beginPath()
          ctx.arc(x, y, Math.max(2.5, n.r * 0.32), 0, Math.PI * 2)
          ctx.fill()
        })
      }

      if (prev && fade < 1) {
        drawConfig(prev, 1 - fade)
      }
      drawConfig(config, fade)

      animationRef.current = requestAnimationFrame(draw)
    }

    animationRef.current = requestAnimationFrame(draw)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      ro.disconnect()
      prevConfigRef.current = TABS[activeTab].network
    }
  }, [activeTab])

  const tab = TABS[activeTab]

  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="flex flex-col px-2 sm:px-0 mb-10">
          <div className="flex items-center justify-center gap-2">
            <div className="sec-top-line mr-1"></div>
            <span className="sec-top-heading">Process</span>
            <div className="sec-dot"></div>
          </div>
          <h2 className="section-heading text-center my-3">
            End-to-End Banking Software<br />
            <span className="grad">Development Process</span>
          </h2>
          <p className="head-description text-center mx-auto" style={{ maxWidth: 760 }}>
            Our custom banking and financial software development services serve multiple banking segments.
            This enables the banking business to cut through the noise.
          </p>
        </div>

        {/* Tabs */}
        <div className={styles['dp-tabs']}>
          {TABS.map((t, i) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(i)}
              className={`dp-tab ${i === activeTab ? 'dp-tab-active' : ''}`}
              aria-pressed={i === activeTab}
              suppressHydrationWarning
            >
              <span className="dp-tab-icon">{t.tabIcon}</span>
              <span className="dp-tab-label">{t.label}</span>
            </button>
          ))}
        </div>

        {/* Body */}
        <div className={styles['dp-body']}>
          {/* Left card */}
          <div className={styles['dp-card']} key={tab.id}>
            <div className={styles['dp-card-icon']}>{tab.cardIcon}</div>
            <h3 className={styles['dp-card-title']}>{tab.title}</h3>
            <p className={styles['dp-card-desc']}>{tab.description}</p>

            <div className={styles['dp-tags']}>
              {tab.tags.map((tag) => (
                <span key={tag} className={styles['dp-tag']}>{tag}</span>
              ))}
            </div>

            <div className={styles['dp-features']}>
              {tab.features.map((f) => (
                <div key={f.label} className={styles['dp-feature']}>
                  <div className={styles['dp-feature-icon']}>{f.icon}</div>
                  <div className={styles['dp-feature-label']}>{f.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right canvas */}
          <div className={styles['dp-canvas-wrap']}>
            <canvas ref={canvasRef} className={styles['dp-canvas']} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DevelopmentProcess
