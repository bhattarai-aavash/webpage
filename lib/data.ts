// /lib/data.ts

export const personalInfo = {
  name: "Aavash Bhattarai",
  title: "CS Graduate Student & AI/ML Engineer",
  tagline: "Building production-grade AI systems — from LLM microservices to distributed infrastructure.",
  email: "aavashbhattarai@gmail.com",
  phone: "307-761-9567",
  location: "Laramie, Wyoming",
  github: "https://github.com/bhattarai-aavash",
  linkedin: "", // TODO: add your LinkedIn URL
  resumeUrl: "/resume.pdf",
};

export const about = {
  bio: `Computer Science Graduate Student at the University of Wyoming specializing in AI-powered software systems, Large Language Models, and Agentic Systems. I build production-grade AI applications — LLM microservices, document intelligence pipelines, and real-time inference systems — backed by strong foundations in backend APIs, distributed systems, and data engineering.`,
  stats: [
    { label: "Years of Experience", value: "2+" },
    { label: "Projects Shipped", value: "10+" },
    { label: "IEEE Publication", value: "1" },
  ],
};

export const skills = [
  {
    category: "Languages",
    items: ["Python", "C", "C++", "TypeScript"],
  },
  {
    category: "AI & LLM Systems",
    items: ["LangChain", "AutoGen", "CrewAI", "LangGraph", "LlamaIndex", "HuggingFace", "Prompt Engineering", "RAG Pipelines"],
  },
  {
    category: "ML Libraries",
    items: ["PyTorch", "TensorFlow", "Scikit-Learn", "OpenCV", "NumPy", "Pandas", "Apache Spark", "ONNX"],
  },
  {
    category: "Backend & Frameworks",
    items: ["FastAPI", "Django", "Express", "REST APIs"],
  },
  {
    category: "Databases & Vector Stores",
    items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "ChromaDB", "Pinecone", "FAISS"],
  },
  {
    category: "Cloud & MLOps",
    items: ["Docker", "Kubernetes", "AWS (EC2, S3, SageMaker)", "Azure Data Factory", "Azure Synapse", "Databricks", "MLflow", "Jenkins", "Linux", "Bash"],
  },
];

export const experience = [
  {
    company: "University of Wyoming",
    role: "Graduate Research Assistant",
    location: "Laramie, WY",
    dates: "Aug 2024 – Present",
    bullets: [
      "Analyzed and optimized a distributed key-value store (KeyDB) by evaluating Sequential, Eventual, and Causal Consistency under high-concurrency workloads.",
      "Developed and deployed a real-time Plant Classification System on NVIDIA Jetson, achieving 95% accuracy with optimized edge AI inference.",
      "Built data processing and experimentation pipelines for structured and unstructured data, enabling reproducible evaluation workflows for ML systems.",
    ],
  },
  {
    company: "FuseMachines",
    role: "Machine Learning Engineer",
    location: "New York, NY (Remote)",
    dates: "Jul 2023 – Jul 2024",
    bullets: [
      "Designed and deployed a production-grade LLM microservice, enabling conversational AI capabilities and improving user engagement by 10%.",
      "Built end-to-end LLM application pipelines including request handling, prompt design, model execution, response post-processing, and logging.",
      "Developed and exposed REST APIs for AI-powered services, enabling integration with external applications.",
      "Containerized and orchestrated services using Docker and Kubernetes, ensuring scalability and reproducibility.",
      "Implemented evaluation and monitoring workflows to improve LLM output quality through iterative prompt refinement and testing.",
    ],
  },
  {
    company: "FuseMachines",
    role: "AI Intern",
    location: "New York, NY (Remote)",
    dates: "Apr 2023 – Jul 2023",
    bullets: [
      "Built scalable document and image processing pipelines handling unstructured data across PDFs and images.",
      "Fine-tuned LayoutLM for information extraction, improving accuracy by 5% through systematic error analysis.",
      "Optimized inference workflows via batching and pipeline refactoring, reducing end-to-end latency by 35%.",
    ],
  },
];

export const projects = [
  {
    slug: "nyc-citibike-analysis",
    title: "NYC Citi Bike Urban Mobility Analysis",
    description: "Large-scale analysis of 70M+ trip records to uncover urban mobility patterns, commuter segments, and station utilization trends.",
    details: `Processed 70M+ trip records using Apache Spark to analyze large-scale user behavior and temporal demand patterns. Applied FP-Growth mining to identify recurring usage segments (commuter vs. off-peak users) and developed Power BI dashboards to visualize spatio-temporal trends and station utilization.`,
    image: "/images/project-analytics.svg",
    tech: ["Apache Spark", "FP-Growth", "Power BI", "Python", "Pandas"],
    github: "", // TODO: add GitHub link
    demo: "",
  },
  // TODO: Add more projects here
];

export const education = [
  {
    school: "University of Wyoming",
    degree: "Masters in Computer Science",
    dates: "Expected 2026",
    gpa: "4.00",
  },
  {
    school: "Kathmandu Engineering College, Tribhuvan University",
    degree: "Bachelors in Computer Engineering",
    dates: "August 2023",
    gpa: "",
  },
];

export const publications = [
  {
    title: "Improving Performance of Distributed Deep Learning in Malware and Intrusion Detection through Relaxed Consistency",
    venue: "IEEE 5th Cyber Awareness and Research Symposium (CARS'25)",
    year: "2025",
  },
];