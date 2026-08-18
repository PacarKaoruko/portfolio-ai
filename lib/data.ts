export type SkillGroup = {
  title: string;
  items: string[];
};

export type Experience = {
  role: string;
  organization: string;
  period: string;
  description: string;
};

export type Education = {
  degree: string;
  school: string;
  period: string;
};

export type Project = {
  title: string;
  period: string;
  role: string;
  summary: string;
  challenge: string;
  work: string;
  outcome: string;
  tags: string[];
  url?: string;
};

export const skillGroups: SkillGroup[] = [
  { title: "Data Engineering", items: ["Pandas", "ETL", "SQL", "FAISS"] },
  { title: "Programming", items: ["Python", "TypeScript", "Java", "SQL"] },
  { title: "AI & ML", items: ["LangChain", "Scikit-learn", "TF-IDF", "KNN"] },
  { title: "Tools & Tech", items: ["Git", "FastAPI", "Streamlit", "HuggingFace"] },
];

export const experiences: Experience[] = [
  {
    role: "Data Engineer Intern",
    organization: "ALII UIN Jakarta",
    period: "Apr 2026 - Jun 2026",
    description: "Membangun pipeline penyelarasan teks hadis Arab dan terjemahan Indonesia dari data berskala besar.",
  },
  {
    role: "Data Analyst & Predictive Modeler",
    organization: "Dicoding Certification",
    period: "Apr 2026",
    description: "Mengeksplorasi segmentasi pelanggan dan model klasifikasi menggunakan K-Means, Decision Tree, serta Random Forest.",
  },
];

export const education: Education[] = [
  {
    degree: "S1 Teknik Informatika",
    school: "UIN Syarif Hidayatullah Jakarta",
    period: "Pendidikan tinggi",
  },
];

export const projects: Project[] = [
  {
    title: "Waguri AI",
    period: "Juli 2026",
    role: "Full-Stack RAG Agent Developer",
    summary: "Agen percakapan RAG untuk menjawab pertanyaan tentang portofolio developer secara cepat dan kontekstual.",
    challenge: "Menangani pertanyaan portofolio yang tidak terstruktur dengan respons yang relevan dan latensi rendah.",
    work: "Membangun RAG dengan LangChain dan Streamlit, pipeline ETL TextLoader serta RecursiveCharacterTextSplitter, embeddings all-MiniLM-L6-v2, FAISS, dan guardrails prompt injection.",
    outcome: "Menyediakan pencarian semantik cepat dan jawaban kontekstual untuk eksplorasi portofolio.",
    tags: ["LangChain", "Streamlit", "FAISS", "RAG"],
    url: "https://waguri-ai-imikerenaja.streamlit.app/",
  },
  {
    title: "Movie Recommender System",
    period: "Februari 2026",
    role: "Data Science Researcher",
    summary: "Sistem rekomendasi film berbasis konten untuk mengurangi choice paralysis saat mencari tontonan.",
    challenge: "Memberi saran film kontekstual dari koleksi data teks dalam jumlah besar.",
    work: "Menerapkan content-based filtering melalui tokenisasi, vektorisasi TF-IDF, dan perhitungan cosine similarity.",
    outcome: "Menghasilkan rekomendasi film relevan berdasarkan kemiripan konten.",
    tags: ["Python", "TF-IDF", "Cosine Similarity", "Recommendation"],
  },
];
