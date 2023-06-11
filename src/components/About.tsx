import { motion } from "framer-motion";

const projects = [
  {
    title: "Senior Full Stack Developer | Crib Equity",
    description:
      "Architected and developed a cutting-edge real estate platform using Next.js, Tailwind CSS, and TypeScript, resulting in increased lead generation and enhanced user experience.",
    link: "https://github.com/davisuga/crib-equity",
  },
  {
    title: "Software Developer | Float Capital",
    description:
      "Implemented and deployed a comprehensive end-to-end data validation service, boosting confidence in the backend-generated data.",
    link: "https://github.com/davisuga/float-capital",
  },
  {
    title: "Full-stack Developer | EkonoMe",
    description:
      "Developed a sophisticated user-facing mobile app with appointment scheduling, chat, and video conferencing capabilities.",
    link: "https://github.com/davisuga/ekonome",
  },
  {
    title: "Frontend Developer | Harmonize (via Holonic)",
    description:
      "Built a range of frontend features from Figma designs, including a real-time messaging center, user management system, and dynamic forms.",
    link: "https://github.com/davisuga/harmonize",
  },
  {
    title: "Software Engineer | Sambatech",
    description:
      "Developed customized educational mobile apps from scratch for various companies.",
    link: "https://github.com/davisuga/sambatech",
  },
  {
    title: "Mobile/Frontend Developer | Adorie",
    description:
      "Developed innovative features, such as geolocation of products and stores, dynamic filters, and persistent cache using React Native.",
    link: "https://github.com/davisuga/adorie",
  },
  {
    title: "Software Developer | Alpha Lumen Institute",
    description:
      'Conceptualized and developed the "Compartilhe" app using Parse in the backend and React Native.',
    link: "https://github.com/davisuga/alpha-lumen",
  },
  {
    title: "Open Source Developer",
    description:
      "Added support for custom commands on ocaml-redis. Updated ReScript version and added support for ScrollView features on rescript-reanimated.",
    link: "https://github.com/davisuga",
  },
];

const ProjectsSection = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="w-full max-w-4xl p-4 mx-auto mt-10"
    >
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="p-4 border bg-neutral-900 border-neutral-800 rounded-lg  shadow"
          >
            <h3 className="text-lg font-bold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
