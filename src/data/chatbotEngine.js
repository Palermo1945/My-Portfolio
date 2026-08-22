import {
  personal,
  aboutText,
  skills,
  projects,
  experience,
  education,
} from '../data/portfolio'

const allSkills = skills.flatMap((g) => g.items)

function findSkillMatch(text) {
  return allSkills.find((skill) => text.includes(skill.toLowerCase()))
}

export function getBotResponse(rawInput) {
  const text = rawInput.toLowerCase().trim()

  if (!text) {
    return "I didn't catch that — try asking about skills, projects, experience, or how to get in touch."
  }

  if (/\b(hi|hello|hey)\b/.test(text)) {
    return `Hi! I'm ${personal.name}'s AI assistant. Ask me about skills, projects, experience, education, or how to get in touch.`
  }

  if (/(contact|reach|email|get in touch|hire)/.test(text)) {
    return `You can reach ${personal.name} at ${personal.email}, or use the contact form in the Contact section. Links to GitHub and LinkedIn are in the footer.`
  }

  if (/(mobile|react native|expo|app development)/.test(text)) {
    const has = allSkills.some((s) => /react native|expo/i.test(s))
    return has
      ? `Yes — ${personal.name} works with React Native and Expo for cross-platform mobile development.`
      : `Mobile development experience isn't listed yet — check the Skills section for the current list.`
  }

  if (/(backend|server|api|node|express|laravel|php)/.test(text)) {
    const backend = skills.find((g) => g.category === 'Backend')
    return backend
      ? `On the backend, ${personal.name} works with: ${backend.items.join(', ')}.`
      : 'Backend skills are listed in the Skills section.'
  }

  if (/(database|sql|mysql|firebase|firestore)/.test(text)) {
    const db = skills.find((g) => g.category === 'Database')
    return db
      ? `Database technologies: ${db.items.join(', ')}.`
      : 'Database skills are listed in the Skills section.'
  }

  if (/(ai|artificial intelligence|openai|gemini|machine learning)/.test(text)) {
    const ai = skills.find((g) => g.category === 'AI')
    return ai
      ? `Yes — ${personal.name} builds AI-powered applications using ${ai.items.join(', ')}. See the Projects section for examples.`
      : 'AI integration is one of the listed skill areas — check the Skills section.'
  }

  if (/(cloud|aws|linux|infrastructure|devops)/.test(text)) {
    const cloud = skills.find((g) => g.category === 'Cloud / Infrastructure')
    return cloud
      ? `Cloud & infrastructure: ${cloud.items.join(', ')}.`
      : 'Cloud/infrastructure skills are listed in the Skills section.'
  }

  if (/(technolog|tech stack|what.*know|skills)/.test(text)) {
    const single = findSkillMatch(text)
    if (single) {
      return `Yes, ${single} is one of the technologies ${personal.name} works with. See the Skills section for the full breakdown by category.`
    }
    return `${personal.name} works across: ${skills.map((g) => g.category).join(', ')}. Check the Skills section for the full list.`
  }

  if (/(project|built|portfolio|work.*done)/.test(text)) {
    if (projects.length === 0) return 'Projects are being added — check back soon, or see the Projects section.'
    const names = projects.slice(0, 3).map((p) => p.name).join(', ')
    return `A few projects: ${names}. Open the Projects section to filter by category and see full details.`
  }

  if (/(experience|worked|job|role|company)/.test(text)) {
    if (experience.length === 0) {
      return `Experience details are being added to the Experience section — check back soon, or ask about skills and projects in the meantime.`
    }
    const latest = experience[0]
    return `Most recent role: ${latest.position} at ${latest.company} (${latest.dates}). See the Experience section for the full timeline.`
  }

  if (/(education|degree|school|university|study)/.test(text)) {
    if (education.length === 0) {
      return 'Education details are being added — check the Education section for updates.'
    }
    const edu = education[0]
    return `${edu.degree} — ${edu.school} (${edu.dates}). See the Education section for more.`
  }

  if (/(about|who are you|who is|background)/.test(text)) {
    return aboutText.intro
  }

  const single = findSkillMatch(text)
  if (single) {
    return `Yes — ${single} is part of ${personal.name}'s toolkit. See the Skills section for context.`
  }

  return `I'm not sure about that specifically, but you can ask about skills, projects, experience, education, or contact info — or reach ${personal.name} directly at ${personal.email}.`
}

export const suggestedQuestions = [
  'What technologies does he know?',
  'Tell me about his projects.',
  'Does he have mobile development experience?',
  'How can I contact him?',
]
