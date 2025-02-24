import { Experience, Education, Project, Skills } from '../types/types';

export const experiences: Experience[] = [
  {
    company: "BlueKaktus",
    role: "Software Engineer",
    period: "June 2023 -- Present",
    responsibilities: [
      "Created RESTful APIs and microservices using Flask to serve forecast data and manage system interactions efficiently.",
      "Automated deployment pipelines using Docker and GitLab CI/CD for automated testing, building, and deployment of the forecast-based system.",
      "Integrated machine learning models for time series forecasting to predict future trends and demands with high accuracy.",
      "Developed predictive models (XGBoost, LSTMs) for sales forecasting, advanced clustering for segmentation, and SHAP/LIME for insights"
    ]
  },
  {
    company: "S K Children Foundation",
    role: "Web Development Intern",
    period: "Aug. 2021 -- Dec. 2021",
    responsibilities: [
      "Developed and integrated RESTful APIs to connect the CMS with external services and applications, enhancing website functionality.",
      "Automated content management workflows, reducing manual effort and increasing operational efficiency."
    ]
  }
];

export const education: Education[] = [
  {
    institution: "Delhi Technological University",
    degree: "B. Tech (Computer Engineering)",
    grade: "CGPA 8.43",
    period: "June 2019 -- May 2023"
  },
  {
    institution: "Radiant Academy (CBSE)",
    degree: "Class 12",
    grade: "Percentage 91",
    period: "2017 -- 2019"
  },
  {
    institution: "Radiant Academy (CBSE)",
    degree: "Class 10",
    grade: "CGPA 8.8",
    period: "2019"
  }
];

export const projects: Project[] = [
  {
    title: "BinaryDreams",
    period: "March 2023 -- April 2023",
    description: "Developed a customizable image generation web application featuring the ability to select image generation quality and allowing sharing with the community.",
    techStack: ["ExpressJs", "ReactJs", "MongoDB", "Tailwind CSS", "DALL-E", "Cloudinary"],
    link: "https://binary-dreams-night.vercel.app/"
  },
  {
    title: "NyaySetu",
    period: "Oct. 2023 -- Dec. 2023",
    description: "Contributed for integrating GPT 3.5, Bhashini API, and other technologies to support key features. Fine-turned GPT 3.5 to provide citations and relevant legal articles and sections in the Indian Constitution.",
    techStack: ["GPT 3.5", "ReactJs", "NodeJs", "HuggingFace", "Bhashini API", "Whisper.ai"],
    link: "https://github.com/Surajhat/NyaySetu"
  }
];

export const skills: Skills = {
  techStack: ["Flask", "FastAPI", "MongoDB", "Docker", "Gitlab CI/CD", "ReactJs", "NodeJs"],
  programmingLanguages: ["Python", "JavaScript", "C++", "Shell Scripting(Bash)"],
  aiTechnologies: ["Tensorflow", "Keras", "Scikit-learn", "Pandas", "NumPy", "OpenCV"]
};

export const contactInfo = {
  name: "Suraj Narayan",
  phone: "+91 8920619030",
  email: "suraj314159@gmail.com",
  linkedin: "https://www.linkedin.com/in/suraj-narayan-0a99a11a7/",
  github: "https://github.com/Surajhat"
};

export const summary = `Software Engineer with expertise in developing RESTful APIs and microservices using Flask & FastAPI, and automating deployment pipelines with Docker and GitLab CI/CD. Skilled in integrating machine learning models for forecasting and analyzing data using various algorithms. Experienced in web development through internships and projects, including a GenAI Chatbot and a full-stack AI image generation app. Holds a B.Tech in Computer Engineering from Delhi Technological University with a strong grasp of Python, JavaScript, and modern tech stacks`;