'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './techStack.module.css'

type Category = 'all' | 'frontend' | 'backend' | 'cloud' | 'tools'

const filters: { label: string; value: Category }[] = [
  { label: 'All', value: 'all' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
  { label: 'Cloud', value: 'cloud' },
  { label: 'Tools', value: 'tools' },
]

const techs: { name: string; img: string; category: Category; cls: string }[] = [
  { name: 'ReactJS', img: '/images/tc-react.png', category: 'frontend', cls: 'tc-react' },
  { name: 'NextJS', img: '/images/tc-NextJS.png', category: 'frontend', cls: 'tc-nextjs' },
  { name: 'AngularJS', img: '/images/tc-AngularJS.png', category: 'frontend', cls: 'tc-angular' },
  { name: 'Microsoft .NET', img: '/images/tc-Microsoft .NET.png', category: 'backend', cls: 'tc-dotnet' },
  { name: 'Java', img: '/images/tc-jawa.png', category: 'backend', cls: 'tc-java' },
  { name: 'Python', img: '/images/tc-python.png', category: 'backend', cls: 'tc-python' },
  { name: 'Azure', img: '/images/tc-Azure.png', category: 'cloud', cls: 'tc-azure' },
  { name: 'Google Cloud', img: '/images/tc-Gemini.png', category: 'cloud', cls: 'tc-gcloud' },
  { name: 'AWS', img: '/images/tc-AWS.png', category: 'cloud', cls: 'tc-aws' },
  { name: 'Sitecore', img: '/images/tc-Sitecore.png', category: 'tools', cls: 'tc-sitecore' },
  { name: 'Adobe', img: '/images/tc-Adobe.png', category: 'tools', cls: 'tc-adobe' },
  { name: 'Open Source DXP', img: '/images/tc-OpenSource DXP Technologies.png', category: 'tools', cls: 'tc-drupal' },
  { name: 'Oracle', img: '/images/tc-Oracle.png', category: 'tools', cls: 'tc-oracle' },
  { name: 'Microsoft', img: '/images/tc-Microsoft.png', category: 'tools', cls: 'tc-microsoft' },
  { name: 'Databricks', img: '/images/tc-Databricks.png', category: 'tools', cls: 'tc-databricks' },
  { name: 'Snowflake', img: '/images/tc-SnowFlake.png', category: 'tools', cls: 'tc-snowflake' },
  { name: 'Azure DevOps', img: '/images/tc-Azure Devops.png', category: 'tools', cls: 'tc-azdevops' },
  { name: 'Harness', img: '/images/tc-Harness.png', category: 'tools', cls: 'tc-harness' },
  { name: 'Jenkins', img: '/images/tc-Jenkins.png', category: 'tools', cls: 'tc-jenkins' },
  { name: 'OpenAI', img: '/images/tc-OpenAI.png', category: 'tools', cls: 'tc-openai' },
  { name: 'Gemini', img: '/images/tc-Gemini.png', category: 'tools', cls: 'tc-gemini' },
  { name: 'LangChain', img: '/images/tc-Langchain.png', category: 'tools', cls: 'tc-langchain' },
]

const TechStack = () => {
  const [activeFilter, setActiveFilter] = useState<Category>('all')

  return (
    <div className="p-0">
      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20" style={{background: '#0A0E17'}}
      >

        {/* Section Heading */}
        <div className="flex flex-col px-2 sm:px-0 mb-8">
          <div className="flex items-center justify-center gap-2">
            <div className="sec-top-line mr-1"></div>
            <span className="sec-top-heading">Tech Stack</span>
            <div className="sec-dot"></div>
          </div>
          <h2 className="section-heading mt-3">
            Cutting Edge <span className="grad">Technologies </span>We Use
          </h2>
          <p className="head-description mb-0 mx-auto" style={{ maxWidth: 524 }}>
            At L&amp;G Consultancy, we use the latest technologies and tools that deliver constantly without compromising quality.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="px-2 sm:px-0">
          <div className={styles['tech-filter-wrap']}>
            <div className={styles['tech-filter']}>
              {filters.map((f) => {
                const isActive = activeFilter === f.value
                const count =
                  f.value === 'all'
                    ? techs.length
                    : techs.filter((t) => t.category === f.value).length
                return (
                  <button
                    key={f.value}
                    className={`filter-btn ${styles['tab']} ${isActive ? `active ${styles['tab-active']}` : ''}`}
                    onClick={() => setActiveFilter(f.value)}
                  >
                    {f.label}
                    <span className={styles['tab-count']}>{count}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Tech Grid */}
        <div className="px-2 sm:px-0">
          <div className={styles['tech-grid']}>
            {techs.map((tech) => {
              const isDimmed = activeFilter !== 'all' && tech.category !== activeFilter
              return (
                <div
                  key={tech.name}
                  className={`${styles['tech-card']} ${styles[tech.cls]} ${isDimmed ? styles['dimmed'] : ''}`}
                  data-category={tech.category}
                >
                  <div className={styles['tech-icon-wrap']}>
                    <Image src={tech.img} alt={tech.name} width={42} height={42} />
                  </div>
                  <span className={styles['tech-name']}>{tech.name}</span>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}

export default TechStack
