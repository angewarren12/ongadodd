import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Opportunity {
  id: number;
  title: string;
  category: string;
  location: string;
  commitment: string;
  description: string;
  skills: string[];
}

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  opportunity: Opportunity | null;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 50
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 50
  }
};

const formFieldVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

export default function ApplicationModal({ isOpen, onClose, opportunity }: ApplicationModalProps) {
  const [[page, direction], setPage] = useState([0, 0]);
  
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  if (!opportunity) return null;

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={e => e.stopPropagation()}
          >
            {/* Header avec gradient et progression */}
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10"></div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent"></div>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute top-4 left-4 flex space-x-2">
                <div className={`w-3 h-3 rounded-full ${page === 0 ? 'bg-white' : 'bg-white/50'}`}></div>
                <div className={`w-3 h-3 rounded-full ${page === 1 ? 'bg-white' : 'bg-white/50'}`}></div>
                <div className={`w-3 h-3 rounded-full ${page === 2 ? 'bg-white' : 'bg-white/50'}`}></div>
              </div>
              <div className="absolute bottom-8 px-8">
                <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-sm mb-2">
                  {opportunity.category}
                </span>
                <h3 className="text-3xl font-bold text-white">{opportunity.title}</h3>
                <div className="flex items-center text-white/90 mt-2 space-x-4">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {opportunity.location}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {opportunity.commitment}
                  </span>
                </div>
              </div>
            </div>

            {/* Contenu avec animation de slide */}
            <div className="overflow-hidden">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={page}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);

                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                >
                  {page === 0 ? (
                    // Première étape : Description de la mission
                    <div className="px-8 py-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Description de la mission</h4>
                      <p className="text-gray-600 mb-6">{opportunity.description}</p>
                      
                      <h5 className="font-medium text-gray-900 mb-3">Compétences recherchées</h5>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {opportunity.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 rounded-full text-sm bg-purple-50 text-purple-600 border border-purple-100"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="flex justify-end">
                        <button
                          onClick={() => paginate(1)}
                          className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center"
                        >
                          Suivant
                          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ) : page === 1 ? (
                    // Deuxième étape : Informations personnelles
                    <div className="px-8 py-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-6">Informations personnelles</h4>
                      <form className="space-y-6">
                        <motion.div
                          variants={formFieldVariants}
                          className="grid grid-cols-2 gap-4"
                        >
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Prénom
                            </label>
                            <input
                              type="text"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow"
                              placeholder="Votre prénom"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Nom
                            </label>
                            <input
                              type="text"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow"
                              placeholder="Votre nom"
                            />
                          </div>
                        </motion.div>

                        <motion.div variants={formFieldVariants}>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                          </label>
                          <input
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow"
                            placeholder="votre.email@exemple.com"
                          />
                        </motion.div>

                        <motion.div variants={formFieldVariants}>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Téléphone
                          </label>
                          <input
                            type="tel"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow"
                            placeholder="Votre numéro de téléphone"
                          />
                        </motion.div>

                        <motion.div variants={formFieldVariants}>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Adresse
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow mb-2"
                            placeholder="Numéro et nom de rue"
                          />
                          <div className="grid grid-cols-2 gap-4">
                            <input
                              type="text"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow"
                              placeholder="Code postal"
                            />
                            <input
                              type="text"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow"
                              placeholder="Ville"
                            />
                          </div>
                        </motion.div>

                        <motion.div
                          variants={formFieldVariants}
                          className="flex items-center justify-between space-x-4"
                        >
                          <button
                            type="button"
                            onClick={() => paginate(-1)}
                            className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors flex items-center"
                          >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Retour
                          </button>
                          <button
                            type="button"
                            onClick={() => paginate(1)}
                            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center"
                          >
                            Suivant
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </motion.div>
                      </form>
                    </div>
                  ) : (
                    // Troisième étape : Disponibilités et motivation
                    <div className="px-8 py-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-6">Disponibilités et motivation</h4>
                      <form className="space-y-6">
                        <motion.div variants={formFieldVariants}>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Disponibilités
                          </label>
                          <div className="grid grid-cols-3 gap-4">
                            <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                              <input
                                type="radio"
                                name="availability"
                                value="matin"
                                className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                              />
                              <span className="ml-2 text-gray-700">Matin</span>
                            </label>
                            <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                              <input
                                type="radio"
                                name="availability"
                                value="soir"
                                className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                              />
                              <span className="ml-2 text-gray-700">Soir</span>
                            </label>
                            <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                              <input
                                type="radio"
                                name="availability"
                                value="les_deux"
                                className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                              />
                              <span className="ml-2 text-gray-700">Les deux</span>
                            </label>
                          </div>
                        </motion.div>

                        <motion.div variants={formFieldVariants}>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Expérience (optionnel)
                          </label>
                          <textarea
                            rows={3}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow"
                            placeholder="Décrivez brièvement votre expérience dans ce domaine..."
                          />
                        </motion.div>

                        <motion.div variants={formFieldVariants}>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Message
                          </label>
                          <textarea
                            rows={4}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow"
                            placeholder="Parlez-nous de votre motivation..."
                          />
                        </motion.div>

                        <motion.div
                          variants={formFieldVariants}
                          className="flex items-center justify-between space-x-4"
                        >
                          <button
                            type="button"
                            onClick={() => paginate(-1)}
                            className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors flex items-center"
                          >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Retour
                          </button>
                          <button
                            type="submit"
                            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                          >
                            Envoyer ma candidature
                          </button>
                        </motion.div>
                      </form>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
