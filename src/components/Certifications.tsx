import { Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

const certifications = [
  {
    title: 'Data Structures and Algorithms',
    issuer: 'Board Infinity',
    date: 'July 2024',
  },
  {
    title: 'Cloud Computing',
    issuer: 'NPTEL',
    date: 'July 2024 – Oct 2024',
  },
  {
    title: 'Server-side JavaScript with Node.js',
    issuer: 'Coursera',
    date: 'April 2024',
  },
  {
    title: 'Programming in C++: A Hands-On Introduction',
    issuer: 'Coursera',
    date: 'Feb 2024',
  },
  {
    title: 'Introduction to Generative AI',
    issuer: 'Google Cloud',
    date: 'Jan 2024',
  },
  {
    title: 'The Bits and Bytes of Computer Networking',
    issuer: 'Google',
    date: 'Nov 2023',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Certifications
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md"
              variants={fadeInUp}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Award className="w-6 h-6 text-indigo-600" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{cert.title}</h3>
              <p className="text-gray-700 text-sm mb-1 text-center">{cert.issuer}</p>
              <p className="text-gray-500 text-xs text-center">{cert.date}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
