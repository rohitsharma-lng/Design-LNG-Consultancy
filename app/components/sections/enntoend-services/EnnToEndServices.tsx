import React from 'react';
import styles from './enntoend-services.module.css';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    
    <div className={styles['endtoend-card']}>
      <div className={styles['endtoend-icon-wrapper']}>
        <div className={styles['endtoend-icon-border']} aria-hidden="true" />
        <img 
          src={icon}
          alt={`${title} icon`}
          className={styles['endtoend-icon-image']}
        />
      </div>
      <h3 className={styles['endtoend-title']}>{title}</h3>
      <p className={styles['endtoend-description']}>{description}</p>
    </div>
  );
};

const EndToEndServices: React.FC = () => {
  const services = [
    {
      icon: '/images/e2e-icon-1.png',
      title: "Business Evaluation",
      description: "We begin with analyzing the business needs, defining requirements and developing a work blueprint. Next, the experts collaborate with clients to develop a detailed release plan."
    },
    {
      icon: '/images/e2e-icon-2.png',
      title: "UI/UX Design",
      description: "Our software developers build robust architecture, engrossing UX, and enthralling experiences. Next, we deliver mockups and prototypes to receive feedback before development starts."
    },
    {
      icon: '/images/e2e-icon-3.png',
      title: "Agile Development",
      description: "At this phase, we adopt an iterative, agile approach for complex systems. This allows us to release usable features every other week, so clients benefit from functionality."
    },
    {
      icon: '/images/e2e-icon-4.png',
      title: "Quality Assurance",
      description: "Our QA team continuously performs user acceptance testing to verify that the software meets all necessary requirements. This ensures flawless performance, deployment readiness, and seamless end-user experience."
    },
    {
      icon: '/images/e2e-icon-5.png',
      title: "Deployment",
      description: "At this phase, we deploy the software to the desired platforms. This will help users use the software according to their requirements."
    },
    {
      icon: '/images/e2e-icon-6.png',
      title: "Post Delivery Support",
      description: "We provide ongoing support to fix issues promptly. This ensures that the software handles the business challenges to maintain peak performance."
    }
  ];

  return (
    <section className={styles['endtoend-container']}>
      <div className="container mx-auto px-0 md:px-4">
        <div className="flex flex-col px-2 sm:px-0 mb-8">
          <h2 className="section-heading text-center my-3 mx-auto" style={{ maxWidth: 684 }}>
           End-to-End Enterprise Application <span className="grad">Development Process</span> We Follow 
          </h2>
          <p className="head-description text-center m-0 mx-auto" style={{ maxWidth: 857 }}>
            Being a reputed enterprise software development company, we understand your application development requirements. This enables us to follow a step-by-step process that propels your business growth.
          </p>
        </div>
      </div>
      <div className={styles['endtoend-grid']}>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default EndToEndServices;