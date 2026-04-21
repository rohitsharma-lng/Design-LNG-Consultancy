"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import styles from "./header.module.css"
import Image from "next/image";
import fullLogo from "@/public/images/logo.svg"
import logoShape from "@/public/images/lg-shape.svg"
import aiSearchArrow from "@/public/icons/right-arrow-Icon.svg"
const AnimatedAiSparkle = dynamic(
  () => import("@/app/components/ui/AnimatedAiSparkle/AnimatedAiSparkle"),
  { ssr: false }
)



const cx = (...classes: (string | false | undefined | null)[]) =>
  classes.filter(Boolean).join(" ");

/* ── Reusable icons ──────────────────────────────────────── */

const ChevronDown = ({ hidden = false }: { hidden?: boolean }) => (
  <svg
    className={styles["menu-drp-icon"]}
    style={hidden ? { opacity: 0 } : undefined}
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
  >
    <g opacity="0.5">
      <path d="M1 1L5 5L9 1" stroke="#8B92A8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);


const HamburgerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
    <path d="M1 1H21" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M1 8H21" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M1 15H21" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

/* ── Gradient helper for dropdown item SVG icons ─────────── */
const G = ({ id, x1, y1, x2, y2 }: { id: string; x1: string; y1: string; x2: string; y2: string }) => (
  <linearGradient id={id} x1={x1} y1={y1} x2={x2} y2={y2} gradientUnits="userSpaceOnUse">
    <stop stopColor="#3719CA" />
    <stop offset="1" stopColor="#1DD1E8" />
  </linearGradient>
);

/* ── Navigation dropdown item data ───────────────────────── */

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const servicesItems: NavItem[] = [
  {
    label: "Enterprise App Development",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M10.5 9.333L12.833 7 10.5 4.667" stroke="url(#svc0a)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.5 4.667L1.167 7 3.5 9.333" stroke="url(#svc0b)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.458 2.333L5.542 11.667" stroke="url(#svc0c)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <defs><G id="svc0a" x1="10.5" y1="4.667" x2="14.233" y2="6.533" /><G id="svc0b" x1="1.167" y1="4.667" x2="4.9" y2="6.533" /><G id="svc0c" x1="5.542" y1="2.333" x2="10.856" y2="3.994" /></defs>
      </svg>
    ),
  },
  {
    label: "UI/UX Design",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7.875 4.083a.292.292 0 1 0 0-.583.292.292 0 0 0 0 .583Z" fill="url(#svc1a)" stroke="url(#svc1b)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.208 6.417a.292.292 0 1 0 0-.584.292.292 0 0 0 0 .584Z" fill="url(#svc1c)" stroke="url(#svc1d)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.958 4.667a.292.292 0 1 0 0-.584.292.292 0 0 0 0 .584Z" fill="url(#svc1e)" stroke="url(#svc1f)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.792 7.583a.292.292 0 1 0 0-.583.292.292 0 0 0 0 .583Z" fill="url(#svc1g)" stroke="url(#svc1h)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 1.167A5.833 5.833 0 1 0 7.961 11.849a.412.412 0 0 0-.255-.654.412.412 0 0 1-.255-.653A.988.988 0 0 1 8.424 9.563h1.164a3.266 3.266 0 0 0 3.24-3.24C12.813 3.507 10.185 1.167 7 1.167Z" stroke="url(#svc1i)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <G id="svc1a" x1="7.583" y1="3.5" x2="8.167" y2="4.083" /><G id="svc1b" x1="7.583" y1="3.5" x2="8.167" y2="4.083" />
          <G id="svc1c" x1="9.917" y1="5.833" x2="10.5" y2="6.417" /><G id="svc1d" x1="9.917" y1="5.833" x2="10.5" y2="6.417" />
          <G id="svc1e" x1="4.667" y1="4.083" x2="5.25" y2="4.667" /><G id="svc1f" x1="4.667" y1="4.083" x2="5.25" y2="4.667" />
          <G id="svc1g" x1="3.5" y1="7" x2="4.083" y2="7.583" /><G id="svc1h" x1="3.5" y1="7" x2="4.083" y2="7.583" />
          <G id="svc1i" x1="1.167" y1="1.167" x2="12.833" y2="12.829" />
        </defs>
      </svg>
    ),
  },
  {
    label: "Product Architecture",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M12.25 4.667a1.167 1.167 0 0 0-.583-1.009L7.583 1.324a1.167 1.167 0 0 0-1.166 0L2.333 3.658a1.167 1.167 0 0 0-.583 1.009v4.666a1.167 1.167 0 0 0 .583 1.01l4.084 2.333a1.167 1.167 0 0 0 1.166 0l4.084-2.334a1.167 1.167 0 0 0 .583-1.009V4.667Z" stroke="url(#svc2a)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1.925 4.083 7 7l5.075-2.917" stroke="url(#svc2b)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 12.833V7" stroke="url(#svc2c)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <defs><G id="svc2a" x1="1.75" y1="1.168" x2="13.35" y2="11.61" /><G id="svc2b" x1="1.925" y1="4.083" x2="3.473" y2="9.472" /><G id="svc2c" x1="7" y1="7" x2="8.943" y2="7.333" /></defs>
      </svg>
    ),
  },
  {
    label: "Data Analytics",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M1.75 1.75v9.333c0 .31.123.607.342.825.219.219.516.342.825.342H12.25" stroke="url(#svc3a)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.5 9.917V5.25" stroke="url(#svc3b)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.583 9.917V2.917" stroke="url(#svc3c)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.667 9.917V8.167" stroke="url(#svc3d)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <defs><G id="svc3a" x1="1.75" y1="1.75" x2="12.25" y2="12.25" /><G id="svc3b" x1="10.5" y1="5.25" x2="12.412" y2="5.66" /><G id="svc3c" x1="7.583" y1="2.917" x2="9.543" y2="3.197" /><G id="svc3d" x1="4.667" y1="8.167" x2="6.174" y2="9.028" /></defs>
      </svg>
    ),
  },
  {
    label: "AI Integration",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 2.917a1.75 1.75 0 0 0-1.787.073 1.75 1.75 0 0 0-.712 1.003 1.75 1.75 0 0 0-2.473 1.362 1.75 1.75 0 0 0 .272 1.001 1.75 1.75 0 0 0 .052 3.842 1.75 1.75 0 0 0 2.163 1.627A1.75 1.75 0 0 0 7 10.5V2.917Z" stroke="url(#svc4a)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 2.917a1.75 1.75 0 0 1 3.498.073 1.75 1.75 0 0 1 1.474 1.365 1.75 1.75 0 0 1-.277 1.001 1.75 1.75 0 0 1-.048 3.842 1.75 1.75 0 0 1-2.163 1.627A1.75 1.75 0 0 1 7 10.5V2.917Z" stroke="url(#svc4b)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.75 7.583a3.5 3.5 0 0 1-1.229-.901A3.5 3.5 0 0 1 7 5.25a3.5 3.5 0 0 1-.521 1.432A3.5 3.5 0 0 1 5.25 7.583" stroke="url(#svc4c)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <defs><G id="svc4a" x1="1.166" y1="1.162" x2="10.501" y2="5.828" /><G id="svc4b" x1="7" y1="1.162" x2="16.335" y2="5.828" /><G id="svc4c" x1="5.25" y1="5.25" x2="7.404" y2="8.481" /></defs>
      </svg>
    ),
  },
  {
    label: "Remote Engineering",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M9.333 12.25v-1.167a2.333 2.333 0 0 0-2.333-2.333H3.5a2.333 2.333 0 0 0-2.333 2.333V12.25" stroke="url(#svc5a)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.25 6.417a2.333 2.333 0 1 0 0-4.667 2.333 2.333 0 0 0 0 4.667Z" stroke="url(#svc5b)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.833 12.25v-1.167a2.333 2.333 0 0 0-1.75-2.258" stroke="url(#svc5c)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.333 1.826a2.333 2.333 0 0 1 0 4.52" stroke="url(#svc5d)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <defs><G id="svc5a" x1="1.167" y1="8.75" x2="3.701" y2="14.664" /><G id="svc5b" x1="2.917" y1="1.75" x2="7.583" y2="6.417" /><G id="svc5c" x1="11.083" y1="8.826" x2="13.859" y2="10.244" /><G id="svc5d" x1="9.333" y1="1.826" x2="12.383" y2="3.009" /></defs>
      </svg>
    ),
  },
  {
    label: "Cloud Solutions",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M10.208 11.083H5.25a4.083 4.083 0 0 1-1.58-7.858 4.083 4.083 0 0 1 5.494 2.608h1.044a2.625 2.625 0 0 1 0 5.25Z" stroke="url(#svc6a)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <defs><G id="svc6a" x1="1.167" y1="2.917" x2="8.841" y2="13.878" /></defs>
      </svg>
    ),
  },
];

const industriesItems: NavItem[] = [
  {
    label: "Banking",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M3.5 12.833V2.333c0-.31.123-.606.342-.825A1.167 1.167 0 0 1 4.667 1.167h4.666c.31 0 .607.123.825.341.219.219.342.516.342.825v10.5H3.5Z" stroke="url(#ind0a)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.5 7H2.333c-.31 0-.606.123-.825.342a1.167 1.167 0 0 0-.341.825v3.5c0 .31.122.607.341.825.219.219.516.342.825.342H3.5" stroke="url(#ind0b)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.5 5.25h1.167c.31 0 .606.123.825.342.218.218.341.515.341.825v5.25c0 .31-.123.606-.341.825a1.167 1.167 0 0 1-.825.341H10.5" stroke="url(#ind0c)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.833 3.5h2.334" stroke="url(#ind0d)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.833 5.833h2.334" stroke="url(#ind0e)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.833 8.167h2.334" stroke="url(#ind0f)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.833 10.5h2.334" stroke="url(#ind0g)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <G id="ind0a" x1="3.5" y1="1.167" x2="13.794" y2="7.343" /><G id="ind0b" x1="1.167" y1="7" x2="5.189" y2="8.609" />
          <G id="ind0c" x1="10.5" y1="5.25" x2="14.763" y2="6.562" /><G id="ind0d" x1="5.833" y1="3.5" x2="6.558" y2="5.19" />
          <G id="ind0e" x1="5.833" y1="5.833" x2="6.558" y2="7.523" /><G id="ind0f" x1="5.833" y1="8.167" x2="6.558" y2="9.856" />
          <G id="ind0g" x1="5.833" y1="10.5" x2="6.558" y2="12.19" />
        </defs>
      </svg>
    ),
  },
  {
    label: "Fintech",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M11.667 2.917H2.333c-.644 0-1.166.522-1.166 1.166v5.834c0 .644.522 1.166 1.166 1.166h9.334c.644 0 1.166-.522 1.166-1.166V4.083c0-.644-.522-1.166-1.166-1.166Z" stroke="url(#ind1a)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1.167 5.833h11.666" stroke="url(#ind1b)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <defs><G id="ind1a" x1="1.167" y1="2.917" x2="8.84" y2="13.879" /><G id="ind1b" x1="1.167" y1="5.833" x2="1.337" y2="7.819" /></defs>
      </svg>
    ),
  },
  {
    label: "Healthcare",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M11.083 8.167C11.952 7.315 12.833 6.294 12.833 4.958a3.208 3.208 0 0 0-6.833-1.042 3.208 3.208 0 0 0-5.833.042c0 1.342.875 2.362 1.75 3.209L7 12.25l4.083-4.083Z" stroke="url(#ind2a)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1.878 7h3.664l.291-.583L7 9.042 8.167 4.958 9.042 7h3.074" stroke="url(#ind2b)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <defs><G id="ind2a" x1="1.167" y1="1.75" x2="11.609" y2="13.352" /><G id="ind2b" x1="1.878" y1="4.958" x2="4.689" y2="12.004" /></defs>
      </svg>
    ),
  },
  {
    label: "Ecommerce",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M4.667 12.833a.583.583 0 1 0 0-1.166.583.583 0 0 0 0 1.166Z" stroke="url(#ind3a)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.083 12.833a.583.583 0 1 0 0-1.166.583.583 0 0 0 0 1.166Z" stroke="url(#ind3b)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1.196 1.196h1.167l1.551 7.245a1.167 1.167 0 0 0 1.167.92h5.705a1.167 1.167 0 0 0 1.138-.876l.962-4.334H2.987" stroke="url(#ind3c)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <defs><G id="ind3a" x1="4.083" y1="11.667" x2="5.25" y2="12.833" /><G id="ind3b" x1="10.5" y1="11.667" x2="11.667" y2="12.833" /><G id="ind3c" x1="1.196" y1="1.196" x2="8.864" y2="12.172" /></defs>
      </svg>
    ),
  },
  {
    label: "Manufacturing",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M1.167 11.667c0 .31.122.606.341.825.219.218.516.341.825.341h9.334c.31 0 .606-.123.825-.341.219-.219.341-.516.341-.825V4.667l-4.083 2.916V4.667L4.667 7.583V2.333c0-.31-.123-.606-.342-.825a1.167 1.167 0 0 0-.825-.341H2.333c-.31 0-.606.122-.825.341a1.167 1.167 0 0 0-.341.825v9.334Z" stroke="url(#ind4a)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.917 10.5h.583" stroke="url(#ind4b)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 10.5h.583" stroke="url(#ind4c)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.083 10.5h.584" stroke="url(#ind4d)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <defs><G id="ind4a" x1="1.167" y1="1.167" x2="12.833" y2="12.833" /><G id="ind4b" x1="9.917" y1="10.5" x2="10.787" y2="11.008" /><G id="ind4c" x1="7" y1="10.5" x2="7.87" y2="11.008" /><G id="ind4d" x1="4.083" y1="10.5" x2="4.954" y2="11.008" /></defs>
      </svg>
    ),
  },
  {
    label: "Travel",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M10.383 11.2 9.333 6.417l2.042-2.042c.875-.875 1.167-2.042.875-2.625-.583-.292-1.75 0-2.625.875L7.583 4.667 2.8 3.617a.583.583 0 0 0-.642.292l-.175.291a.583.583 0 0 0 .175.758L5.25 7l-1.167 1.75H2.333l-.583.583 1.75 1.167 1.167 1.75.583-.583V9.917L7 8.75l2.042 3.092a.583.583 0 0 0 .758.175l.292-.175a.583.583 0 0 0 .291-.642Z" stroke="url(#ind5a)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <defs><G id="ind5a" x1="1.75" y1="1.641" x2="12.359" y2="12.25" /></defs>
      </svg>
    ),
  },
  {
    label: "Hospitality",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M5.833 12.833V9.001" stroke="url(#ind6a)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 6.417h.006" stroke="url(#ind6b)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 4.083h.006" stroke="url(#ind6c)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.167 9.001v3.832" stroke="url(#ind6d)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.75 9.333A3.5 3.5 0 0 0 5.25 9.333" stroke="url(#ind6e)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.5 1.167H3.5c-.644 0-1.167.522-1.167 1.166v9.334c0 .644.523 1.166 1.167 1.166h7c.644 0 1.167-.522 1.167-1.166V2.333c0-.644-.523-1.166-1.167-1.166Z" stroke="url(#ind6f)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <G id="ind6a" x1="5.833" y1="9.001" x2="7.706" y2="9.49" /><G id="ind6b" x1="7" y1="6.417" x2="7.012" y2="6.417" />
          <G id="ind6c" x1="7" y1="4.083" x2="7.012" y2="4.084" /><G id="ind6d" x1="8.167" y1="9.001" x2="10.039" y2="9.49" />
          <G id="ind6e" x1="5.25" y1="8.75" x2="5.439" y2="9.885" /><G id="ind6f" x1="2.333" y1="1.167" x2="13.716" y2="10.272" />
        </defs>
      </svg>
    ),
  },
  {
    label: "Telecom",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2.858 11.142A5.833 5.833 0 0 1 2.858 2.858" stroke="url(#ind7a)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.55 9.45a3.5 3.5 0 0 1 0-4.958" stroke="url(#ind7b)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 8.167a1.167 1.167 0 1 0 0-2.334 1.167 1.167 0 0 0 0 2.334Z" stroke="url(#ind7c)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.45 4.55a3.5 3.5 0 0 1 0 4.958" stroke="url(#ind7d)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.142 2.858a5.833 5.833 0 0 1 0 8.225" stroke="url(#ind7e)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <G id="ind7a" x1="1.152" y1="2.858" x2="4.425" y2="3.533" /><G id="ind7b" x1="3.544" y1="4.492" x2="5.477" y2="4.884" />
          <G id="ind7c" x1="5.833" y1="5.833" x2="8.167" y2="8.167" /><G id="ind7d" x1="9.45" y1="4.55" x2="11.383" y2="4.942" />
          <G id="ind7e" x1="11.142" y1="2.858" x2="14.413" y2="3.537" />
        </defs>
      </svg>
    ),
  },
];

const technologiesItems: NavItem[] = [
  {
    label: "Cross-Platform & Web Development",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334Z" stroke="url(#tech0a)" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 1.333C6.288 3.131 5.333 5.518 5.333 8s.955 4.87 2.667 6.667C9.712 12.87 10.667 10.482 10.667 8S9.712 3.131 8 1.333Z" stroke="url(#tech0b)" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1.333 8h13.334" stroke="url(#tech0c)" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round" />
        <defs><G id="tech0a" x1="1.333" y1="1.333" x2="14.667" y2="14.667" /><G id="tech0b" x1="5.333" y1="1.333" x2="14.529" y2="5.012" /><G id="tech0c" x1="1.333" y1="8" x2="1.483" y2="9.989" /></defs>
      </svg>
    ),
  },
  {
    label: "Enterprise Technologies",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4 14.667V2.667c0-.354.14-.693.39-.943.25-.25.59-.39.943-.39h5.334c.353 0 .693.14.943.39.25.25.39.59.39.943v12H4Z" stroke="url(#tech1a)" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 8H2.667c-.354 0-.694.14-.943.39-.25.25-.39.59-.39.943v4.334c0 .353.14.693.39.943.25.25.59.39.943.39H4" stroke="url(#tech1b)" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 6h1.333c.354 0 .694.14.943.39.25.25.39.59.39.943v6.334c0 .353-.14.693-.39.943-.25.25-.59.39-.943.39H12" stroke="url(#tech1c)" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.667 4h2.666" stroke="url(#tech1d)" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.667 6.667h2.666" stroke="url(#tech1e)" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.667 9.333h2.666" stroke="url(#tech1f)" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.667 12h2.666" stroke="url(#tech1g)" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <G id="tech1a" x1="4" y1="1.333" x2="15.765" y2="8.392" /><G id="tech1b" x1="1.333" y1="8" x2="5.931" y2="9.839" />
          <G id="tech1c" x1="12" y1="6" x2="16.872" y2="7.499" /><G id="tech1d" x1="6.667" y1="4" x2="7.324" y2="5.753" />
          <G id="tech1e" x1="6.667" y1="6.667" x2="7.324" y2="8.42" /><G id="tech1f" x1="6.667" y1="9.333" x2="7.324" y2="11.087" />
          <G id="tech1g" x1="6.667" y1="12" x2="7.324" y2="13.753" />
        </defs>
      </svg>
    ),
  },
  {
    label: "Cloud & Infrastructure Solutions",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M11.667 12.667H6a4.667 4.667 0 0 1-1.982-8.988A4.667 4.667 0 0 1 10.473 6.667h1.194a3 3 0 0 1 0 6Z" stroke="url(#tech2a)" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round" />
        <defs><G id="tech2a" x1="1.334" y1="3.333" x2="10.104" y2="15.861" /></defs>
      </svg>
    ),
  },
  {
    label: "Modern Frontend Interface",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M12.667 2H3.333C2.597 2 2 2.597 2 3.333v9.334C2 13.403 2.597 14 3.333 14h9.334c.736 0 1.333-.597 1.333-1.333V3.333C14 2.597 13.403 2 12.667 2Z" stroke="url(#tech3a)" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 6h12" stroke="url(#tech3b)" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 14V6" stroke="url(#tech3c)" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round" />
        <defs><G id="tech3a" x1="2" y1="2" x2="14" y2="14" /><G id="tech3b" x1="2" y1="6" x2="2.166" y2="7.986" /><G id="tech3c" x1="6" y1="6" x2="7.969" y2="6.246" /></defs>
      </svg>
    ),
  },
  {
    label: "Digital Experience Platform",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8.553 1.453a1.333 1.333 0 0 0-1.106 0L1.733 4.053a.667.667 0 0 0 0 1.22l5.72 2.607a1.333 1.333 0 0 0 1.107 0l5.72-2.6a.667.667 0 0 0 0-1.22L8.553 1.453Z" stroke="url(#tech4a)" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1.333 8c0 .128.036.253.105.36a.667.667 0 0 0 .282.247l5.733 2.606a1.333 1.333 0 0 0 1.1 0l5.72-2.6a.667.667 0 0 0 .393-.613" stroke="url(#tech4b)" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1.333 11.333c0 .128.036.253.105.36a.667.667 0 0 0 .282.247l5.733 2.607a1.333 1.333 0 0 0 1.1 0l5.72-2.6a.667.667 0 0 0 .393-.614" stroke="url(#tech4c)" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round" />
        <defs><G id="tech4a" x1="1.335" y1="1.333" x2="6.667" y2="12.003" /><G id="tech4b" x1="1.333" y1="8" x2="2.901" y2="14.272" /><G id="tech4c" x1="1.333" y1="11.333" x2="2.901" y2="17.606" /></defs>
      </svg>
    ),
  },
];

const aboutItems: NavItem[] = [
  {
    label: "Our Team",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M9.333 12.25v-1.167a2.333 2.333 0 0 0-2.333-2.333H3.5a2.333 2.333 0 0 0-2.333 2.333V12.25" stroke="url(#abt0a)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.25 6.417a2.333 2.333 0 1 0 0-4.667 2.333 2.333 0 0 0 0 4.667Z" stroke="url(#abt0b)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.833 12.25v-1.167a2.333 2.333 0 0 0-1.75-2.258" stroke="url(#abt0c)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.333 1.826a2.333 2.333 0 0 1 0 4.52" stroke="url(#abt0d)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <defs><G id="abt0a" x1="1.167" y1="8.75" x2="3.701" y2="14.664" /><G id="abt0b" x1="2.917" y1="1.75" x2="7.583" y2="6.417" /><G id="abt0c" x1="11.083" y1="8.826" x2="13.859" y2="10.244" /><G id="abt0d" x1="9.333" y1="1.826" x2="12.383" y2="3.009" /></defs>
      </svg>
    ),
  },
  {
    label: "Global Presence",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M3.5 12.833V2.333c0-.31.123-.606.342-.825A1.167 1.167 0 0 1 4.667 1.167h4.666c.31 0 .607.123.825.341.219.219.342.516.342.825v10.5H3.5Z" stroke="url(#abt1a)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.5 7H2.333c-.31 0-.606.123-.825.342a1.167 1.167 0 0 0-.341.825v3.5c0 .31.122.607.341.825.219.219.516.342.825.342H3.5" stroke="url(#abt1b)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.5 5.25h1.167c.31 0 .606.123.825.342.218.218.341.515.341.825v5.25c0 .31-.123.606-.341.825a1.167 1.167 0 0 1-.825.341H10.5" stroke="url(#abt1c)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.833 3.5h2.334" stroke="url(#abt1d)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.833 5.833h2.334" stroke="url(#abt1e)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.833 8.167h2.334" stroke="url(#abt1f)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.833 10.5h2.334" stroke="url(#abt1g)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <G id="abt1a" x1="3.5" y1="1.167" x2="13.794" y2="7.343" /><G id="abt1b" x1="1.167" y1="7" x2="5.189" y2="8.609" />
          <G id="abt1c" x1="10.5" y1="5.25" x2="14.763" y2="6.562" /><G id="abt1d" x1="5.833" y1="3.5" x2="6.558" y2="5.19" />
          <G id="abt1e" x1="5.833" y1="5.833" x2="6.558" y2="7.523" /><G id="abt1f" x1="5.833" y1="8.167" x2="6.558" y2="9.856" />
          <G id="abt1g" x1="5.833" y1="10.5" x2="6.558" y2="12.19" />
        </defs>
      </svg>
    ),
  },
  {
    label: "Case Studies",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M1.75 1.75v9.333c0 .31.123.607.342.825.219.219.516.342.825.342H12.25" stroke="url(#abt2a)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.5 9.917V5.25" stroke="url(#abt2b)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.583 9.917V2.917" stroke="url(#abt2c)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.667 9.917V8.167" stroke="url(#abt2d)" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" />
        <defs><G id="abt2a" x1="1.75" y1="1.75" x2="12.25" y2="12.25" /><G id="abt2b" x1="10.5" y1="5.25" x2="12.412" y2="5.66" /><G id="abt2c" x1="7.583" y1="2.917" x2="9.543" y2="3.197" /><G id="abt2d" x1="4.667" y1="8.167" x2="6.174" y2="9.028" /></defs>
      </svg>
    ),
  },
];

/* ── Dropdown renderer ───────────────────────────────────── */

function DropdownList({ items }: { items: NavItem[] }) {
  return (
    <>
      {items.map((item) => (
        <li key={item.label}>
          <Link className={styles["dropdown-item"]} href={item.href}>
            <span className={styles["nl-li-dropdown-icon"]}>{item.icon}</span>
            <span className={styles["li-dropdown-label"]}>{item.label}</span>
          </Link>
        </li>
      ))}
    </>
  );
}

/* ── Header component ────────────────────────────────────── */

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasAutoHiddenRef = useRef(false);

  // Auto-hide after 3 seconds on initial load
  useEffect(() => {
    hideTimerRef.current = setTimeout(() => {
      if (window.scrollY <= 100) return;
      setHeaderHidden(true);
      hasAutoHiddenRef.current = true;
    }, 3000);
    return () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  // Scroll detection — after first hide, only show on scroll up
  useEffect(() => {
    let lastScroll = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);

      // Before first auto-hide, keep visible but trigger auto-hide if scrolled past threshold
      if (!hasAutoHiddenRef.current) {
        if (y > 100) {
          if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
          hideTimerRef.current = setTimeout(() => {
            setHeaderHidden(true);
            hasAutoHiddenRef.current = true;
          }, 3000);
        }
        lastScroll = y;
        return;
      }

      // After first auto-hide: scroll up = show, scroll down = hide
      if (Math.abs(y - lastScroll) > 5) {
        if (y > lastScroll && y > 100 && !menuOpen) {
          setHeaderHidden(true);
        } else {
          setHeaderHidden(false);
        }
      }
      lastScroll = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [menuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <>
    <div className="container mx-auto px-4 overflow-hidden">
      <nav
        id="nl-navbar"
        className={cx(
          styles["nav-bg"],
          scrolled && styles["scrolled"],
          headerHidden && styles["header-hidden"],
        )}
      >
        <div className={styles["nl-nav-inner"]}>
          {/* Full logo */}
          <Link className={styles["nav-logo"]} href="/">
            <Image src={fullLogo} alt="L&G logo" width={135} />
          </Link>

          {/* Compact logo (scrolled state) */}
          <Link className={styles["logo-shape"]} href="/">
            <Image src={logoShape} alt="L&G logo" width={42} height={42} />
          </Link>

          {/* Mobile top-bar search (visible when scrolled on mobile) */}
          <form className={`${styles["nl-mobile-topbar-search"]} relative`} role="search">
            <input className={styles["ai-searchbar"]} type="text" placeholder="Ask AI..." aria-label="Search" />
            <span className={styles["ai-svg"]}><AnimatedAiSparkle size={16} /></span>
            <button className={`${styles["nav-ai-search"]} absolute`} type="submit">
              <Image src={aiSearchArrow} alt="submit" width={14} height={14} />
            </button>
          </form>

          {/* Hamburger */}
          <button
            className={styles["nl-toggler"]}
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <HamburgerIcon />
          </button>

          {/* Nav menu */}
          <div
            className={cx(styles["nl-nav-menu"], menuOpen && styles["open"])}
            id="nlNavMenu"
          >
            {/* Close button (mobile) */}
            <button
              className={styles["nl-menu-close"]}
              aria-label="Close menu"
              onClick={closeMobileMenu}
            >
              <CloseIcon />
            </button>

            <ul className={`${styles["nl-navbar-nav"]} ${styles["px-0"]}`}>
              {/* Services */}
              <li
                className={cx(
                  styles["nav-item"],
                  styles["dropdown"],
                  styles["nl-nav-item"],
                  openDropdown === "services" && styles["show"],
                )}
              >
                <a
                  className={cx(styles["nav-link"], openDropdown === "services" && styles["open"])}
                  href="#"
                  onClick={(e) => { e.preventDefault(); toggleDropdown("services"); }}
                >
                  Services
                  <ChevronDown />
                </a>
                <ul className={cx(styles["nl-dropdown-menu"], openDropdown === "services" && styles["show"])}>
                  <DropdownList items={servicesItems} />
                </ul>
              </li>

              {/* Industries */}
              <li
                className={cx(
                  styles["nav-item"],
                  styles["dropdown"],
                  openDropdown === "industries" && styles["show"],
                )}
              >
                <a
                  className={cx(styles["nav-link"], openDropdown === "industries" && styles["open"])}
                  href="#"
                  onClick={(e) => { e.preventDefault(); toggleDropdown("industries"); }}
                >
                  Industries
                  <ChevronDown />
                </a>
                <ul className={cx(styles["nl-dropdown-menu"], openDropdown === "industries" && styles["show"])}>
                  <DropdownList items={industriesItems} />
                </ul>
              </li>

              {/* Technologies */}
              <li
                className={cx(
                  styles["nav-item"],
                  styles["dropdown"],
                  openDropdown === "technologies" && styles["show"],
                )}
              >
                <a
                  className={cx(styles["nav-link"], openDropdown === "technologies" && styles["open"])}
                  href="#"
                  onClick={(e) => { e.preventDefault(); toggleDropdown("technologies"); }}
                >
                  Technologies
                  <ChevronDown />
                </a>
                <ul className={cx(styles["nl-dropdown-menu"], openDropdown === "technologies" && styles["show"])}>
                  <DropdownList items={technologiesItems} />
                </ul>
              </li>

              {/* Who We Are (no dropdown) */}
              <li className={cx(styles["nav-item"], styles["small-nav-bar"])}>
                <Link className={styles["nav-link"]} href="#">
                  Who We Are
                  <ChevronDown hidden />
                </Link>
              </li>

              {/* About Us */}
              <li
                className={cx(
                  styles["nav-item"],
                  styles["dropdown"],
                  styles["small-nav-bar"],
                  openDropdown === "about" && styles["show"],
                )}
              >
                <a
                  className={cx(styles["nav-link"], openDropdown === "about" && styles["open"])}
                  href="#"
                  onClick={(e) => { e.preventDefault(); toggleDropdown("about"); }}
                >
                  About us
                  <ChevronDown />
                </a>
                <ul className={cx(styles["nl-dropdown-menu"], openDropdown === "about" && styles["show"])}>
                  <DropdownList items={aboutItems} />
                </ul>
              </li>
            </ul>

            {/* Desktop search */}
            <form className={`${styles["nl-ai-search"]} relative sm:mx-3 `} role="search" >
              <input className={styles["ai-searchbar"]} type="text" placeholder="Ask AI anything..." aria-label="Search" />
              <span className={styles["ai-svg"]}><AnimatedAiSparkle size={16} /></span>
              <button className={`${styles["nav-ai-search"]} absolute cursor-pointer`} type="submit">
                <Image src={aiSearchArrow} alt="submit" width={14} height={14} />
              </button>
            </form>

            {/* CTA */}
            <Link className={styles["nl-nav-cta"]} href="#">
              {"Let's Talk!"}
            </Link>
          </div>
        </div>
      </nav>
    </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className={styles["nl-menu-overlay"]}
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
};

export default Header;
