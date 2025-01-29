'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import ApplicationModal from '@/components/ApplicationModal';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const opportunities = [
  {
    id: 1,
    title: "Plantation d'arbres",
    category: "Environnement",
    location: "Paris",
    commitment: "Week-end",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
    description: "Participez à nos journées de plantation d'arbres pour reverdir la ville.",
    skills: ["Jardinage", "Travail en équipe"],
    schedule: "Samedis et dimanches, 9h-17h",
    requirements: "Aucune expérience requise, formation sur place"
  },
  {
    id: 2,
    title: "Animateur environnemental",
    category: "Éducation",
    location: "National",
    commitment: "Régulier",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop",
    description: "Sensibilisez les jeunes aux enjeux environnementaux dans les écoles.",
    skills: ["Pédagogie", "Communication"],
    schedule: "En semaine, horaires flexibles",
    requirements: "Expérience en animation souhaitée"
  },
  {
    id: 3,
    title: "Guide vélo urbain",
    category: "Transport",
    location: "Lyon",
    commitment: "Ponctuel",
    image: "https://images.unsplash.com/photo-1556316384-12c35d30afa4?w=800&h=600&fit=crop",
    description: "Accompagnez les nouveaux cyclistes dans leurs déplacements urbains.",
    skills: ["Cyclisme urbain", "Patience"],
    schedule: "Flexible",
    requirements: "Bon niveau en vélo urbain"
  },
  {
    id: 4,
    title: "Technicien solaire",
    category: "Énergie",
    location: "Région Centre",
    commitment: "Régulier",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
    description: "Aidez à l'installation et à la maintenance des panneaux solaires.",
    skills: ["Technique", "Bricolage"],
    schedule: "En semaine, journée",
    requirements: "Formation technique appréciée"
  }
];

export default function Benevolat() {
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const handleApply = (opportunity) => {
    setSelectedOpportunity(opportunity);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Hero Section avec Parallax */}
      <section className="relative h-[60vh] overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{ y: backgroundY }}
        >
          <Image
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1600&h=900&fit=crop"
            alt="Bénévolat"
            width={1600}
            height={900}
            className="object-cover w-full h-full"
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-teal-600/80 to-blue-600/80"
            style={{ opacity }}
          />
        </motion.div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <motion.h1 
                className="text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Devenez bénévole
              </motion.h1>
              <motion.p 
                className="text-xl text-white/90 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Rejoignez notre communauté et participez à des projets qui ont du sens. 
                Votre engagement fait la différence !
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  href="#opportunities"
                  className="inline-flex items-center px-6 py-3 bg-white text-teal-600 rounded-full hover:bg-gray-50 transition-colors group"
                >
                  Voir les opportunités
                  <svg
                    className="ml-2 w-5 h-5 transform group-hover:translate-y-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Opportunités de bénévolat */}
      <section id="opportunities" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900">Opportunités de bénévolat</h2>
              <p className="mt-4 text-xl text-gray-600">
                Découvrez nos missions et trouvez celle qui vous correspond
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {opportunities.map((opportunity) => (
                <motion.div
                  key={opportunity.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={opportunity.image}
                      alt={opportunity.title}
                      width={800}
                      height={400}
                      className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <motion.span 
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-teal-600"
                        whileHover={{ scale: 1.05 }}
                      >
                        {opportunity.category}
                      </motion.span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{opportunity.title}</h3>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-teal-50 text-teal-600">
                        {opportunity.commitment}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{opportunity.description}</p>
                    <div className="space-y-4">
                      <div className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {opportunity.location}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {opportunity.schedule}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {opportunity.skills.map((skill, index) => (
                          <motion.span
                            key={index}
                            className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600"
                            whileHover={{ scale: 1.05 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    <motion.div 
                      className="mt-6"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <button
                        onClick={() => handleApply(opportunity)}
                        className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 transform transition-all duration-200"
                      >
                        Je postule
                        <svg
                          className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action avec animation au scroll */}
      <motion.section 
        className="bg-gradient-to-r from-teal-600 to-blue-600 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2 
              className="text-3xl font-bold text-white mb-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Vous ne trouvez pas la mission idéale ?
            </motion.h2>
            <motion.p 
              className="text-xl text-white/90 mb-8"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Contactez-nous pour discuter de vos envies et compétences.
              Nous trouverons ensemble la mission qui vous correspond !
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-teal-600 transition-all duration-300 group"
              >
                Contactez-nous
                <svg
                  className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Modal de candidature */}
      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        opportunity={selectedOpportunity}
      />
    </main>
  );
}
