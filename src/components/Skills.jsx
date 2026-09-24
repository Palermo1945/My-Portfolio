import { skills } from '../data/portfolio'
import { FaAmazon, FaCode, FaCss3Alt, FaJava } from 'react-icons/fa6'
import {
  SiAppwrite,
  SiBootstrap,
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFlask,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiLaravel,
  SiLinux,
  SiMysql,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiPhp,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiSolidity,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiWordpress,
} from 'react-icons/si'

const skillIcons = {
  javascript: SiJavascript,
  typescript: SiTypescript,
  php: SiPhp,
  css: FaCss3Alt,
  sql: SiMysql,
  solidity: SiSolidity,
  python: SiPython,
  java: FaJava,
  'c++': SiCplusplus,
  'react.js': SiReact,
  'react native': SiReact,
  vite: SiVite,
  vue: FaCode,
  wordpress: SiWordpress,
  'tailwind css': SiTailwindcss,
  bootstrap: SiBootstrap,
  html: SiHtml5,
  'node.js': SiNodedotjs,
  express: SiExpress,
  'express.js': SiExpress,
  laravel: SiLaravel,
  'spring boot': SiSpringboot,
  flask: SiFlask,
  graphql: SiGraphql,
  flutter: SiFlutter,
  kotlin: SiKotlin,
  'openai api (gpts & dalle)': FaCode,
  numpy: SiNumpy,
  pandas: SiPandas,
  'scikit-learn': SiScikitlearn,
  aws: FaAmazon,
  'aws s3': FaAmazon,
  linux: SiLinux,
  'git / github': SiGithub,
  git: SiGit,
  github: SiGithub,
  appwrite: SiAppwrite,
  mysql: SiMysql,
  firebase: SiFirebase,
  'visual studio code': FaCode,
  docker: SiDocker,
  vercel: SiVercel,
  figma: SiFigma,
}

function getSkillIcon(item) {
  return skillIcons[item.toLowerCase()] || FaCode
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Skills</p>
          <h2>Technical toolkit</h2>
          <p>Grouped by domain — updated as tools change, not as a scoreboard.</p>
        </div>

        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.category} className="skill-card card">
              <h3>{group.category}</h3>
              <ul className="skill-list">
                {group.items.map((item) => (
                  <li key={item} className="tag">
                    {(() => {
                      const Icon = getSkillIcon(item)
                      return <Icon className="skill-icon" aria-hidden="true" />
                    })()}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
