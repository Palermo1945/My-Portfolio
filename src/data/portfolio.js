// ============================================================
// PORTFOLIO DATA — edit everything here. No content is
// hard-coded in components; this file is the single source
// of truth for the whole site.
// ============================================================

export const personal = {
  name: 'Christian',
  title: 'IT Professional & Software Developer',
  tagline:
    'Building practical software solutions through web development, mobile applications, databases, AI, and modern technologies.',
  location: ' Silay City, Philippines',
  email: 'christianpalermo19@gmail.com',
  resumeUrl: '#',
  availability: 'Available for work', // change to "Open to opportunities" / "Not currently available" etc.
  yearStarted: 2024, // used to compute "years active" — edit to your actual start year
  social: {
    github: 'https://github.com/Palermo1945',
    linkedin: 'https://www.linkedin.com/in/christian-palermo-5b966b268',
    other: '', // e.g. a personal blog, X/Twitter, etc. Leave blank to hide.
  },
}

export const aboutStats = [
  { label: 'Experience', value: '5+ Years' },
  { label: 'Projects Built', value: '10+' },
  { label: 'Technologies & Tools', value: '20+' },
  { label: 'Expertise', value: '6 Areas' },
]

export const aboutText = {
  intro:
    'I’m an IT professional and software developer with 5+ years of hands-on development experience, including 3 years of professional experience and 2 years of academic and personal project development. My professional work has involved developing web-based business systems that help organizations manage client records and operational data, including features for creating, updating, and deleting records, file uploads, and other workflow-driven functionality.',
  interests:
    'My technical interests and experience include full-stack web development, database-driven applications, mobile development, AI-powered features, chatbot integration, API integration, and file management systems. I have worked on applications where AI and chatbot functionality are integrated into existing business workflows, helping make systems more interactive and useful for their users.',
  goals:
    'Moving forward, I want to deepen my expertise in software engineering, AI integration, cloud technologies, and scalable systems. I’m particularly interested in building practical software solutions that combine reliable backend systems, intuitive interfaces, databases, and AI-powered features to solve real-world business and organizational problems.',
}

// Skill categories — every entry is editable. No fake percentages.
export const skills = [
   {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'PHP', 'CSS', 'SQL', 'Solidity', 'Python', 'Java', 'C++', 'GDscript'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'React Native', 'JavaScript', 'TypeScript', 'Vite', 'CSS', 'Vue', 'WordPress', 'Tailwind CSS', 'Bootstrap', 'HTML', 'Material UI'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Laravel', 'PHP', 'REST APIs', 'Spring Boot', 'Python', 'Flask', 'Google Appscript', 'Express.js', 'GraphQl'],
  },
  {
    category: 'Mobile',
    items: ['React Native', 'React Expo', 'Android Studio', 'MIT App Inventor', 'Flutter', 'Kotlin'],
  },
  {
    category: 'AI / Automation',
    items: ['OpenAI API (GPTs & Dalle)', 'Gemini API', 'Claude API', 'Dify', 'Document Extraction Tools', 'Prompt Engineering', 'DID API', 'Google APIs', 'Numpy', 'Pandas', 'Scikit-learn', 'Kers / TensorFlow', 'PyTorch', 'Matplotlib'],
  },
  {
    category: 'Cloud / Infrastructure / Database',
    items: ['AWS', 'AWS S3', 'Linux', 'Git / GitHub', 'Google Appscript', 'Appwrite', 'MySQL', 'Firebase', 'Firestore', 'Appwrite'],
  },
  {
    category: 'IT',
    items: ['Networking', 'Technical troubleshooting', 'System administration', 'Database management', 'Software installation', 'Hardware maintenance'],
  },
    {
    category: 'IDE / Tools',
    items: ['Visual Studio Code', 'Git', 'GitHub', 'Postman', 'Adobe Photoshop', 'WSL', 'Docker', 'Remix IDE', 'Render', 'Vercel', 'Visual Studio', 'Android Studio', 'Composer', 'XAMMP', 'MYSQL Workbench', 'UXP by Creative Cloud', 'Figma', 'Nmap', 'Wireshark', 'Virtual Box', 'Linux Terminal', 'PowerShell', 'CLIs', 'VIM', 'Jupyter Notebook', 'Pycharm'],
  },
]

// Projects — replace with your real projects. `featured: true` shows in the
// large Featured Project section as well as (optionally) the grid.
export const projects = [
  {
    id: 'project-1',
    name: 'JGCML Point of Sale',
    category: 'Web',
    description: 'A browser-based point-of-sale and inventory system for grocery store staff, with separate admin and cashier workflows.',
    image: "./pos.png",
    technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'CSS'],
    github: '',
    demo: 'http://chrispointofsale.page.gd/pages/index.php',
    featured: false,
    details: {
      overview: 'A point-of-sale system for managing grocery sales and inventory, with tools for cashiers to process transactions and admins to manage store operations.',
      problem: 'The store needed one system to handle checkout, product stock, purchase orders, and sales records instead of tracking those activities separately.',
      solution: 'Built a PHP application backed by MySQL, with separate admin and cashier workspaces for day-to-day sales and store management.',
      features: [
        'Cashier checkout for cash and credit sales',
        'Product catalog and inventory tracking',
        'Purchase orders, supplier records, and stock receiving',
        'Printable sales receipts',
        'Customer records',
        'Sales, inventory, collection, and returns reports'
      ],
      architecture: 'Server-rendered PHP pages use PDO to access a MySQL database. Bootstrap, jQuery, and JavaScript provide the interface and interactive controls.',
      challenges: 'Keeping stock quantities and sales totals consistent across product entry, checkout, and payment flows required validating key values in the server-side handlers.',
      results: 'Created an end-to-end grocery POS workflow connecting checkout, inventory, purchasing, and reporting. The project provided practical experience building a database-backed business application.'
    }
  },
  {
    id: 'project-2',
    name: 'AI Resume to Video',
    category: 'AI Powered Web App',
    description: ' Website that let you convert your resume into a video with the help of Gemini API & Document Extractor tool to summarize the content and sent to DID to generate a video based on the summarize content of your resume.',
    image: "./AiPicture.png",
    technologies: ['React Native', 'Express.js', 'Tailwind CSS', 'Gemini API', 'DID API', 'Document Extractor Tool'],
    github: 'https://github.com/Palermo1945/SPicture.git',
    demo: 'https://picture-7x7m.onrender.com/',
    featured: true,
    details: {
  overview: 'An AI-powered web application that transforms a traditional resume into a video presentation. The system extracts and summarizes information from a resume, uses Gemini API to process the content, and sends the generated summary to the D-ID API to create a video based on the applicant’s professional information.',

  problem: 'Traditional resumes are primarily text-based and can make it difficult to present a candidate’s experience and skills in a more engaging format. Manually creating a professional introduction video from a resume can also require significant time and effort.',

  solution: 'Developed a web application that automates the process of converting resume content into a video. The application extracts information from uploaded documents, processes and summarizes the content using Gemini API, and uses D-ID API to generate a video presentation based on the resulting information.',

  features: [
    'Resume document upload and content extraction',
    'AI-powered resume content summarization using Gemini API',
    'Automated conversion of resume information into video content',
    'Integration with D-ID API for AI-generated video',
    'Document processing and information extraction',
    'Responsive web interface',
    'API-based communication between the application and external AI services'
  ],

  architecture: 'The application follows a web application architecture with a frontend interface communicating with an Express.js backend. The backend handles document processing, communicates with the Gemini API for content summarization, and sends the processed information to the D-ID API for video generation. The resulting video is then made available through the application interface.',

  challenges: 'One of the main challenges was coordinating multiple external services in a single workflow. The application needed to extract information from different document formats, process the extracted content using an AI model, structure the generated information appropriately, and communicate with the D-ID API to generate the final video. Handling asynchronous API operations and maintaining a reliable flow between these services were also important development considerations.',

  results: 'The project demonstrated how AI APIs and document-processing tools can be combined to automate the transformation of structured resume information into an engaging video presentation. It also provided practical experience in API integration, AI-powered content processing, document extraction, backend development, and asynchronous application workflows.'
}
  },
  {
    id: 'project-3',
    name: 'Brgy Management Information System',
    category: 'Web',
    description: 'A web-based information system for the Brgy, not official a project proposed for our Brgy but rejected ',
    image: "./brgy.png",
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    github: 'https://github.com/Palermo1945/brgy.git',
    demo: '',
    featured: false,
    details: {
      overview: 'PLACEHOLDER',
      problem: 'PLACEHOLDER',
      solution: 'PLACEHOLDER',
      features: ['PLACEHOLDER'],
      architecture: 'PLACEHOLDER',
      challenges: 'PLACEHOLDER',
      results: 'PLACEHOLDER',
    },
  },
]

export const experience = [
  // Add real entries. Example shape shown — delete or edit as needed.
  {
    company: 'THY Web Development Inc.',
    position: 'Software Engineer',
    dates: '2024 — 2026',
    description: 'Developed and maintained web applications for clients, focusing on full-stack development, database integration, and user interface design.',
    responsibilities: ['Developed and maintained web applications', 'Collaborated with clients to understand requirements and deliver solutions'],
    technologies: ['React', 'Node.js'],
    achievements: ['Improved application performance by 30%', 'Led a team of developers to successfully deliver a complex project on time'],
  },
]

export const education = [
{
  degree: 'Bachelor of Science in Information System',
  school: 'Carlos Hilado Memorial State College',
  dates: '2024',
  image: '/CHMSU.png',
  coursework: [
    'Database Management',
    'Web Development',
    'Systems Analysis and Design',
    'Software Development',
    'Information Technology Systems',
    'Business Information Systems'
  ],
  projects: [
    'Integrated Healthcare Management System',
    'Database-Driven Web Applications',
    'Mobile Application Development Projects'
  ],
},
]

export const certifications = [
  {
    name: 'Computer Systems Servicing NC II',
    org: 'Technical Education and Skills Development Authority (TESDA)',
    date: '2020',
    image: '/TESDA.png',
    link: '',
  },
]

export const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and modern websites and web applications.',
  },
  {
    title: 'Mobile Development',
    description: 'Building cross-platform mobile applications.',
  },
  {
    title: 'Database Systems',
    description: 'Designing and integrating database-driven applications.',
  },
  {
    title: 'AI Integration',
    description: 'Integrating AI APIs into applications and business systems.',
  },
  {
    title: 'API Development & Integration',
    description: 'Connecting applications with external services and APIs.',
  },
  {
    title: 'IT Systems',
    description: 'Developing practical IT solutions for business and organizational needs.',
  },
  {
    title: 'Technical Support',
    description: 'Troubleshooting software, systems, networking, and technical issues.',
  },
]

export const achievements = [
  // { title: 'PLACEHOLDER Achievement', date: '20XX', description: 'PLACEHOLDER description.' },
]

// Leave empty until you have real testimonials — the section hides itself
// automatically when this array is empty, per your request not to fake it.
export const testimonials = []

export const blogPosts = [
  // {
  //   title: 'PLACEHOLDER Article Title',
  //   date: '2026-01-01',
  //   category: 'Web Development',
  //   summary: 'PLACEHOLDER short summary.',
  //   readingTime: '5 min read',
  // },
]
