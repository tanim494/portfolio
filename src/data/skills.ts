export type SkillCategory = {
  category: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "AI Automation & Agentic Systems",
    items: [
      "n8n Workflow Automation",
      "LangChain Agents & Tool Calling",
      "Speech-to-Text (STT) & Audio Transcription",
      "Computer Vision & Multimodal Inspection",
      "Meta Graph API & Webhooks",
      "WhatsApp Business API",
      "Google Sheets CRM Sync",
      "Dynamic Pricing Engines",
    ],
  },
  {
    category: "AI, Multimodal & NLP Research",
    items: [
      "PyTorch",
      "Hugging Face (Transformers, PEFT, Datasets)",
      "Vision-Language Models (VLMs)",
      "4-bit QLoRA Fine-Tuning",
      "LLM-as-a-Judge Evaluation",
      "Cross-Modal Transformers & Vision Backbones",
      "Benchmark Construction & Semantic Evaluation",
    ],
  },
  {
    category: "Mobile & Android Development",
    items: [
      "Android SDK",
      "Kotlin & Java",
      "Jetpack Components",
      "Coroutines & Flow",
      "Retrofit & OkHttp",
      "Firebase (Auth, Firestore, FCM)",
      "Room Database",
      "Material Design 3",
    ],
  },
  {
    category: "Compute, Cloud & Tools",
    items: [
      "Kaggle (Dual NVIDIA T4 GPUs)",
      "Google Colab",
      "Hugging Face Hub",
      "Weights & Biases (wandb)",
      "Git & GitHub",
      "Linux / Bash",
      "TypeScript & JavaScript",
      "Python",
    ],
  },
];

export const skills: string[] = skillCategories.flatMap((c) => c.items);
