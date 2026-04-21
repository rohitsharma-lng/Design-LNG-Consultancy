import styles from './services-custom.module.css';

// ── Shared prop type ──────────────────────────────────────────────────────────

interface IconProps {
  className?: string;
}

// ── SVG icon components ───────────────────────────────────────────────────────

function IconAutomation({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="14" height="10" rx="2.5" stroke="#3b5bff" strokeWidth="1.8"/>
      <rect x="21" y="3" width="14" height="10" rx="2.5" stroke="#7c3aed" strokeWidth="1.8"/>
      <rect x="3" y="25" width="14" height="10" rx="2.5" stroke="#3b5bff" strokeWidth="1.8"/>
      <rect x="21" y="25" width="14" height="10" rx="2.5" stroke="#7c3aed" strokeWidth="1.8"/>
      <path d="M10 13v6M28 13v6M10 19h18" stroke="#3b5bff" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="19" cy="19" r="2" fill="#7c3aed"/>
    </svg>
  );
}

function IconAnalytics({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="32" height="26" rx="3" stroke="#3b5bff" strokeWidth="1.8"/>
      <path d="M9 22l5-6 5 4 5-8 5 5" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 32h22" stroke="#3b5bff" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M19 29v3" stroke="#3b5bff" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

function IconCompliance({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 3l14 5v10c0 8-6 14-14 17C11 32 5 26 5 18V8l14-5z" stroke="#3b5bff" strokeWidth="1.8" strokeLinejoin="round"/>
      <circle cx="19" cy="17" r="4" stroke="#7c3aed" strokeWidth="1.8"/>
      <path d="M13 28c1.5-3 3.2-5 6-5s4.5 2 6 5" stroke="#3b5bff" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M15 16l3 3 5-5" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconCost({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="8" width="32" height="22" rx="3" stroke="#3b5bff" strokeWidth="1.8"/>
      <circle cx="19" cy="19" r="5" stroke="#7c3aed" strokeWidth="1.8"/>
      <path d="M19 16v6M17 19h4" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="7" cy="19" r="1.5" fill="#3b5bff"/>
      <circle cx="31" cy="19" r="1.5" fill="#3b5bff"/>
    </svg>
  );
}

// ── Card data type ────────────────────────────────────────────────────────────

interface CardData {
  id: string;
  Icon: React.FC<IconProps>;
  title: string;
  desc: string;
}

// ── Card data ─────────────────────────────────────────────────────────────────

const cards: CardData[] = [
  {
    id: 'automation',
    Icon: IconAutomation,
    title: 'If Outdated Processing Hinders Your Growth',
    desc: 'Your internal team may face constant bottlenecks due to unorganized spreadsheets and manual workflows. Custom enterprise software can automate routine tasks and foster seamless collaboration.',
  },
  {
    id: 'analytics',
    Icon: IconAnalytics,
    title: 'If You Need Real-Time Insights to Make Data-Driven Decisions',
    desc: 'Custom analytics and dashboards provide in-depth access to KPI understanding. This enables quick responses to consistently changing market conditions.',
  },
  {
    id: 'compliance',
    Icon: IconCompliance,
    title: 'If Compliance Concerns Make You Think Twice',
    desc: 'Increasing cases of cyber threats make compliance an urgent priority. A custom-built software encryption protects your business data from end to end.',
  },
  {
    id: 'cost',
    Icon: IconCost,
    title: 'If Existing Software Is Costing You More',
    desc: 'Older platforms may be expensive to maintain and will cost you more over time. Replace them with cutting-edge software to reduce cost and boost performance.',
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function ServiceCustom() {
  return (
    <section className={styles['ces-section']}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col px-2 sm:px-0 mb-8">
          <h2 className="section-heading text-center my-3 mx-auto" style={{ maxWidth: 1000 }}>
            Indicators to Understand You Need <span className="grad">Custom Enterprise Software</span> Now
          </h2>
        </div>
      </div>
      <div className={styles['ces-container']}>
        <div className={styles['ces-grid']}>
          {cards.map(({ id, Icon, title, desc }) => (
            <div key={id} className={styles['ces-card']}>
              <div className={styles['ces-icon-wrapper']}>
                <Icon className={styles['ces-icon']} />
              </div>
              <div className={styles['ces-card-content']}>
                <h3 className={styles['ces-card-title']}>{title}</h3>
                <p className={styles['ces-card-desc']}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}