export interface Project {
  id: number;
  projectCode: string;
  detailsUrl: string;
  imageUrl: string;
  technologies: string[];
  /** true = tiene página de detalle interna en /projects/{projectCode}/ en vez de enlazar a detailsUrl */
  hasDetailPage?: boolean;
  texts: {
    es: { title: string; description: string };
    en: { title: string; description: string };
  };
}

export const projects: Project[] = [
  {
    id: 6,
    projectCode: "dynamic-doc",
    detailsUrl: "https://synonymous-hurricane-aeb.notion.site/DynamicDoc-193fbc76f4688015826fe5fd051c54a1",
    imageUrl: "https://i.pinimg.com/736x/a6/dd/64/a6dd64ab89d43926b7b4094111bcdd85.jpg",
    technologies: ["angular", "tailwindcss"],
    hasDetailPage: true,
    texts: {
      es: {
        title: "DynamicDoc",
        description: "Aplicación para generar documentos PDF dinámicos con plantillas personalizables, validaciones de formulario y vista previa en tiempo real.",
      },
      en: {
        title: "DynamicDoc",
        description: "Application for generating dynamic PDF documents with customizable templates, form validation, and real-time preview.",
      },
    },
  },
  {
    id: 5,
    projectCode: "fiber-wave",
    detailsUrl: "https://synonymous-hurricane-aeb.notion.site/FiberWave-158fbc76f46880598cb5ef0403e05ce8",
    imageUrl: "https://i.pinimg.com/736x/46/3c/4c/463c4ccd24f112fc715e9543be578073.jpg",
    technologies: ["angular", "tailwindcss", "nodejs", "postgresql"],
    texts: {
      es: {
        title: "FiberWave",
        description: "Aplicación para gestionar suscripciones de Internet con un panel interactivo, autenticación segura y visualización de datos mediante gráficos dinámicos.",
      },
      en: {
        title: "FiberWave",
        description: "Application for managing Internet subscriptions with an interactive dashboard, secure authentication, and data visualization through dynamic charts.",
      },
    },
  },
  {
    id: 4,
    projectCode: "fusion-cinema",
    detailsUrl: "https://synonymous-hurricane-aeb.notion.site/Fusion-Cinema-6a2d8e5b637749e38ddeb197ca4b2ea7",
    imageUrl: "https://i.pinimg.com/736x/90/93/b0/9093b021e0e777411847276ac7517079.jpg",
    technologies: ["angular", "bootstrap", "java", "mysql"],
    texts: {
      es: {
        title: "Fusion Cinema",
        description: "Plataforma para explorar, gestionar y calificar películas con soporte multilenguaje y diseño responsivo.",
      },
      en: {
        title: "Fusion Cinema",
        description: "Platform to explore, manage, and rate movies with multilingual support and responsive design.",
      },
    },
  },
  {
    id: 3,
    projectCode: "pomodoro-app",
    detailsUrl: "https://synonymous-hurricane-aeb.notion.site/Pomodoro-158fbc76f4688028a378e1a6b21b3d21",
    imageUrl: "https://i.pinimg.com/736x/bd/54/d3/bd54d30f363f9a3a9f88ef67504ac73b.jpg",
    technologies: ["android", "java", "sqlite"],
    texts: {
      es: {
        title: "Pomodoro",
        description: "Aplicación móvil basada en la técnica Pomodoro, con temporizadores personalizables y diseño Material Design.",
      },
      en: {
        title: "Pomodoro",
        description: "Mobile app based on the Pomodoro technique, with customizable timers and Material Design UI.",
      },
    },
  },
  {
    id: 2,
    projectCode: "wayra-ticketing",
    detailsUrl: "https://synonymous-hurricane-aeb.notion.site/Wayra-158fbc76f46880ac9f57ebdb51cfc804",
    imageUrl: "https://i.pinimg.com/736x/7d/4a/c7/7d4ac79a383b6b7adc51d6a249cbff04.jpg",
    technologies: ["android", "java", "php", "mysql"],
    texts: {
      es: {
        title: "Wayra",
        description: "Aplicación móvil para la venta de pasajes en zonas sin internet, con sincronización remota y registro offline.",
      },
      en: {
        title: "Wayra",
        description: "Mobile app for ticket sales in offline areas, with remote synchronization and local storage.",
      },
    },
  },
  {
    id: 1,
    projectCode: "mini-project-suite",
    detailsUrl: "https://synonymous-hurricane-aeb.notion.site/Suite-de-Miniproyectos-10dfbc76f4688054a551da8666ca6d83",
    imageUrl: "https://i.pinimg.com/736x/4c/2f/1d/4c2f1da21153ebc07d393207919961f8.jpg",
    technologies: ["java", "mysql"],
    texts: {
      es: {
        title: "Suite de Miniproyectos",
        description: "Colección de aplicaciones desarrolladas en Java para la gestión de datos en distintos escenarios prácticos.",
      },
      en: {
        title: "Mini Project Suite",
        description: "A collection of Java applications for data management in various practical scenarios.",
      },
    },
  },
];

export const techLabels: Record<string, string> = {
  angular: "Angular",
  tailwindcss: "Tailwind CSS",
  nodejs: "Node.js",
  postgresql: "PostgreSQL",
  java: "Java",
  mysql: "MySQL",
  bootstrap: "Bootstrap",
  android: "Android",
  sqlite: "SQLite",
  php: "PHP",
};

export const uniqueTechCount = new Set(projects.flatMap((p) => p.technologies)).size;
