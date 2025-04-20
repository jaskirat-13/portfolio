import { ProjectItem } from "../types";

export const projectsData: ProjectItem[] = [
  {
    title: "Kullu Creations",
    description: "An e-commerce platform for Himachali products",
    image: "kullu.png",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
    github: "https://github.com/jaskirat09/KulluCreations",
    live: "https://kullucreations.vercel.app",
    details: {
      problem: "Local Himachali products lacked digital presence and accessibility",
      solution: "Developed a full-stack e-commerce platform to connect local artisans with customers",
      features: [
        "User authentication",
        "Admin product management",
        "Order placement & tracking",
        "Responsive UI for all devices"
      ],
      impact: "Empowered local businesses by expanding their reach online"
    },
  },
  {
    title: "DisasterSense",
    description: "A real-time disaster alert and awareness platform",
    image: "disaster.png",
    tech: ["Node.js", "Google Maps API", "NLP", "Gmail API"],
    github: "https://github.com/jaskirat09/DisasterSense",
    live: "",
    details: {
      problem: "People remain unaware of flood-prone or waterlogged areas in real time",
      solution: "Created a system to send email alerts with live updates using Google Maps and NLP",
      features: [
        "Real-time flood alerts",
        "Location-based tracking via Google Maps",
        "Email notifications using Gmail API",
        "Drought detection system"
      ],
      impact: "Improved public safety by informing users and municipal bodies in advance"
    },
  },
  {
    title: "Fit Fusion",
  description: "A responsive fitness landing page website",
  image: "fitfusion.png",
  tech: ["HTML", "CSS", "JavaScript"],
  github: "https://github.com/jaskirat-13/FITNESS-WEBSITE",
  live: "",
  details: {
    problem: "Gyms and fitness centers need a professional online presence to attract members",
    solution: "Created a modern landing page showcasing gym facilities, plans, and features",
    features: [
      "Responsive design",
      "Interactive navigation",
      "Membership plans section",
      "Visual appeal with hero banners"
    ],
    impact: "Enhanced gym’s online reach and user engagement"
  },
  },
  {
    title: "Scientific Calculator",
  description: "A GUI-based scientific calculator built using Python and Tkinter.",
  image: "calculator.jpg",
  tech: ["Python", "Tkinter", "Math Module"],
  github: "https://github.com/jaskirat-13/Scientific-Calculator",
  live: "",
  details: {
    problem: "Students and professionals need a quick tool to perform both basic and scientific calculations.",
    solution: "Designed a GUI-based calculator with operations including trigonometric, logarithmic, factorial, and arithmetic functionalities.",
    features: [
      "Basic arithmetic operations",
      "Trigonometric functions (sin, cos, tan)",
      "Logarithmic and exponential calculations",
      "Square, square root, power and factorial computations"
    ],
    impact: "Provides a lightweight and easy-to-use calculator for quick scientific calculations."
  },
  }
];
