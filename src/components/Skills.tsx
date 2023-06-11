import {
  faJs,
  faNodeJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: faReact },
  { name: "JavaScript", icon: faJs },
  { name: "Node.js", icon: faNodeJs },
  { name: "Python", icon: faPython },
  // Add more skills here...
];

const SkillsSection = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="w-full max-w-4xl p-4 mx-auto mt-10 bg-gray-900 text-white"
    >
      <h2 className="text-2xl font-bold">Skills</h2>
      <div className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <FontAwesomeIcon icon={skill.icon} className="text-2xl" />
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsSection;
