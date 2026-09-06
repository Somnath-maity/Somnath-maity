
const   currentYear = new Date().getFullYear();
export const personalInfo = {
  name: 'Somnath Maity',
  greeting: "Hello I'm",
  title: 'Software Engineer',
  subtitle: 'DEVELOPER',
  email: 'somnathmaityatwork@gmail.com',
  phone: '+91 7875625428',
  address: 'Nagpur, Maharashtra, India',
  aboutText: [
    `Somnath here, a software engineer with over ${currentYear - 2022} years of experience in working with AI powered applications, I bring analytical thinking and problem-solving skills to the world of software development.`,
    'I am keen to learn new technologies and currently working with the modern stack such as React, Next, AI/ML integration, Agentic AI orchestration along with LLMOps.',
    'My journey into tech started with C/C++ and Java during my engineering studies, and I have since expanded into full-stack web development along with testing. I believe in continuous learning and applying technology to solve real-world problems.',
  ],
  // resumeFile: '/Somnath.pdf',
}

export const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/somnathmaityik/', // Add your LinkedIn URL
  github: 'https://github.com/Somnath-maity', // Add your GitHub URL
}

export const skills = [
  {
    category: 'Frontend Development',
    items: [
      'HTML5/CSS3',
      'TypeScript',
      'JavaScript',
      'React.js',
      'Redux',
      'Tailwind CSS',
    ],
  },
   {
    category: 'Backend',
    items: [
      'Java',
      'SpringBoot',
      'NodeJs',
      'ExpressJs',
    ],
  },
    {
    category: 'Testing',
    items: [
      'Rest-Assured',
      'Selenium',
      'Playwright',
      'Jest',
    ],
  }  ,
    {
    category: 'Devops',
    items: [
      'Docker',
      'AWS',
      'Kubernetes',
    ],
  },{
    category: 'Database',
    items: [
      'MongoDB',
      'PostgreSQL',
      'Pg-Vector'
    ],
  },{
    category: 'AI/ML',
    items: [
      'Claude-SDK',
      'PortKey AI',
      'AWS-Bedrock',
      'OpenAI-SDK'
    ],
  },
  {
    category: 'Tools',
    items: ['PostMan', 'Git & GitHub', 'VS Code', 'IntelliJ IDEA '],
  },
]

export const projects = [
  {
    title: 'Image-OCR',
    description:
      'A local RAG system for **image-based question answering**, using OCR, vector embeddings, and Claude LLMs to extract, retrieve, and answer questions from image content. Built with Node.js, Python, FastAPI, Qdrant, and Docker using a microservices architecture.',
    image: null, // Replace: import img from '../assets/project1.png'
    link: 'https://github.com/Somnath-maity/Image-OCR',
  },
  {
    title: 'MultiAgent-Orchestrator',
    description:
      'A Gen AI multi-agent system where a user submits a goal (e.g. "research X and draft a summary report"). A planner breaks it into a DAG of steps. A worker executes each step (LLM call or tool call) through Portkey, with schema validation, retries, caching, and response re-ranking. The client watches progress stream in.',
    image: null,
    link: 'https://github.com/Somnath-maity/Multi-Agent-Orchestrator',
  },
  {
    title: 'HealthCare-Microservices',
    description:
      'Containerised (docker) microservices backend for simulating the pipeline run for deployment, failures in production and running test in qa environment achieving by terraform, rest assured & dockerEngine.',
    image: null,
    link: 'https://github.com/Somnath-maity/HealthCare-Microservices',
  },
]

export const education = [
  {
    degree: 'B.E. in Mechanical Engineering',
    institution: 'SB Jain College of Engineering',
    year: '2018 - 2022',
    description:
      'Secured 80%. Participated in technical events and learned programming languages.',
    logo: null, // Replace: import logo from '../assets/college-logo.png'
  },
  {
    degree: 'Intermediate Education',
    institution: 'Sri Chaitanya Junior Kalasala',
    year: '2016 - 2018',
    description: 'Scored 89.2% in Science.',
    logo: null,
  },
  {
    degree: 'SSC',
    institution: "St. Francis De Sales Boy's School",
    year: '2015 - 2016',
    description: 'Passed in 1st division and scored 84%.',
    logo: null,
  },
]

export const contactMethods = [
  {
    type: 'Email',
    value: 'somnathmaityatwork@gmail.com',
    icon: 'email',
    action: 'mailto:somnathmaityatwork@gmail.com',
    label: 'Send a message',
  },
  {
    type: 'Phone',
    value: '+91 7875625428',
    icon: 'phone',
    action: 'tel:+917875625428',
    label: 'Call me',
  },
  {
    type: 'WhatsApp',
    value: '+91 7875625428',
    icon: 'whatsapp',
    action: 'https://wa.me/917875625428',
    label: 'Send a message',
  },
]
