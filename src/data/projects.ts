export type Project = {
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  logo?: string;
  playStoreUrl?: string;
  githubUrl?: string;
  huggingFaceUrl?: string;
  doiUrl?: string;
  downloadUrl?: string;
  badge?: string;
  category: "Android App" | "AI & Automation" | "AI & Research" | "Algorithms";
};

export const androidApps: Project[] = [
  {
    title: "NetisLink",
    description:
      "Network management utility to discover, authenticate, and configure Netis routers locally with real-time device scanning.",
    longDescription:
      "An Android app engineered to discover and control Netis routers over the local network. Implements RFC-compliant Digest authentication against the router's CGI interface, provides real-time connected client discovery, Wi-Fi password management, bandwidth monitoring, and one-tap network reboot utilities. Built with Kotlin and modern coroutines for smooth asynchronous network calls.",
    tech: ["Kotlin", "Android SDK", "Digest Auth", "Retrofit", "Coroutines", "MVVM"],
    githubUrl: "https://github.com/tanim494/NetisLink",
    downloadUrl: "/NetisRouterApp.apk",
    badge: "Android Utility",
    category: "Android App",
  },
  {
    title: "IIUC-Pedia",
    description:
      "Campus companion platform serving 500+ university students with real-time bus tracking, academic resources, and community chat.",
    longDescription:
      "A comprehensive educational hub designed for International Islamic University Chittagong students. Currently maintaining v3.5 and actively serving 500+ users with real-time bus tracking, automated campus notice feeds, semester-wise syllabus access, and community chat with Firebase backends.",
    tech: ["Java", "Android SDK", "Firebase Auth", "Firestore", "Cloud Messaging", "Material 3"],
    logo: "/iiuc-pedia.png",
    downloadUrl: "https://iiuc-pedia.vercel.app/",
    githubUrl: "https://github.com/tanim494/IIUC-Pedia",
    badge: "500+ Active Users",
    category: "Android App",
  },
  {
    title: "Tool Bank",
    description:
      "Daily utility Android app featuring a magnetic sensors digital compass, accurate Salat prayer times, and offline utilities.",
    longDescription:
      "A multi-utility application designed for daily needs. Features digital magnetic sensors compass for Qibla direction, dynamic Salat prayer time calculation based on geolocation, and offline calculators. Designed for smooth, battery-efficient operation across Android devices.",
    tech: ["Java", "Android SDK", "Sensors API", "Location Services", "Material Design"],
    logo: "/tool-bank.svg",
    githubUrl: "https://github.com/tanim494/Tool-Bank",
    badge: "Open Source",
    category: "Android App",
  },
];

export const aiAndResearchProjects: Project[] = [
  {
    title: "Bismillah Steel Virtual Assistant",
    description:
      "Production multimodal AI assistant built in n8n for Bismillah Steel & Traders. Handles Messenger inquiries, transcribes voice notes, inspects furniture images, and computes real-time pricing.",
    longDescription:
      "A production AI assistant deployed for Bismillah Steel & Traders to automate customer inquiries 24/7. It handles customer text, transcribes incoming voice notes via Speech-to-Text, analyzes custom furniture photos with Computer Vision, calculates precise manufacturing costs via a physics-based pricing engine, syncs leads and orders to Google Sheets CRM, and sends instant WhatsApp alerts to the owner and customers.",
    tech: [
      "n8n",
      "LangChain Agents",
      "Speech-to-Text (STT)",
      "Computer Vision",
      "Dynamic Pricing Engine",
      "Google Sheets CRM",
      "Meta Graph API",
      "WhatsApp API",
    ],
    logo: "/bismillah-steel.svg",
    badge: "Production · n8n Multimodal",
    category: "AI & Automation",
  },
  {
    title: "BangladeshiVQA Benchmark & Toolkit",
    description:
      "Culturally grounded native Bangla Visual Question Answering benchmark of 2,068 images and 7,038 tiered QA pairs.",
    longDescription:
      "Undergraduate thesis project. Constructed a unique VQA benchmark strictly focused on Bengali cultural context, addressing the scarcity of localized AI training data. Engineered end-to-end data acquisition pipelines, image deduplication, Bangla text normalization, 4-bit QLoRA parameter-efficient fine-tuning of Vision-Language Models (VLMs) on dual NVIDIA T4 GPUs via Kaggle and Colab, cross-modal Transformer and Vision baseline architectures, and an automated LLM-as-a-Judge evaluation framework. Released on Hugging Face with an official DOI.",
    tech: [
      "Python",
      "PyTorch",
      "Hugging Face",
      "Vision-Language Models (VLM)",
      "4-bit QLoRA",
      "Cross-Modal Transformers",
      "LLM-as-a-Judge",
      "Kaggle",
      "Google Colab",
    ],
    githubUrl: "https://github.com/tanim494/BangladeshiVQA",
    huggingFaceUrl: "https://huggingface.co/datasets/tanim494/BangladeshiVQA",
    doiUrl: "https://doi.org/10.57967/hf/10089",
    badge: "Thesis · DOI: 10.57967/hf/10089",
    category: "AI & Research",
  },
  {
    title: "Competitive Problem Solving",
    description:
      "Archive of algorithmic problem solutions and data structure implementations on CodeForces and online judges.",
    longDescription:
      "A structured repository of solutions to algorithmic challenges on CodeForces and competitive programming platforms. Focuses on optimal time and space complexity, dynamic programming, graph theory, and number theory in Java and Kotlin.",
    tech: ["Java", "Kotlin", "Algorithms", "Data Structures", "CodeForces"],
    githubUrl: "https://github.com/tanim494/CodeForces",
    badge: "Open Source",
    category: "Algorithms",
  },
];

// Alias for backward compatibility
export const researchProjects = aiAndResearchProjects;
export const projects: Project[] = [...androidApps, ...aiAndResearchProjects];
