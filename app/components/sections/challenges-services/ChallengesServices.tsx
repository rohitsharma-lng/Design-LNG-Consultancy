import styles from './challenges-services.module.css';

const challenges = [
  {
    number: '1',
    title: 'Complex Software Integration',
    body: 'Our expert team of enterprise software development engineers delivers API-driven connectivity. This ensures seamless connectivity between legacy systems, third-party apps and cloud platforms.',
  },
  {
    number: '2',
    title: 'Security Risks',
    body: 'We embed next-gen security protocols such as two-factor authentication, data encryption, and compliance with HIPAA, GDPR, and SOC 2.',
  },
  {
    number: '3',
    title: 'Scalability Issues',
    body: 'We develop microservices-based architectures that enable seamless scaling and optimized performance.',
  },
];

export default function Challenges() {
  return (
    <section className={styles['challenge-hld']}>
    <div className="container mx-auto px-4">
        <div className="flex flex-col px-2 sm:px-0 mb-8">
          <h2 className="section-heading text-center my-3 mx-auto" style={{ maxWidth: 1000 }}>
           How L&G Consultancy Handles Different <span className="grad">Challenges to Enterprise Software</span> Development? 
          </h2>
        </div>
      </div>
    
    <section className={styles['challenge-section']}>
      <div className={styles['challenge-grid']}>
        {challenges.map((item) => (
          <div key={item.number} className={styles['challenge-card']}>

            {/* Top half: Challenge label + title */}
            <div className={styles['challenge-card-top']}>
              <p className={styles['challenge-label']}>
                Challenge {item.number}
              </p>
              <h2 className={styles['challenge-title']}>
                {item.title}
              </h2>
            </div>

            {/* Full-width cyan divider */}
            <div className={styles['challenge-divider']} />

            {/* Bottom half: approach label + body */}
            <div className={styles['challenge-card-bottom']}>
              <p className={styles['challenge-approach-label']}>
                Our Strategic Approach
              </p>
              <p className={styles['challenge-body-text']}>
                {item.body}
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
    </section>
  );
}
