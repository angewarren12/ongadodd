'use client';

import { motion } from 'framer-motion';

const SDGs = [
  { id: 1, title: "Pas de pauvreté", color: "#E5243B" },
  { id: 2, title: "Faim « zéro »", color: "#DDA63A" },
  { id: 3, title: "Bonne santé et bien-être", color: "#4C9F38" },
  { id: 4, title: "Éducation de qualité", color: "#C5192D" },
  { id: 5, title: "Égalité entre les sexes", color: "#FF3A21" },
  { id: 6, title: "Eau propre et assainissement", color: "#26BDE2" },
  { id: 7, title: "Énergie propre et d'un coût abordable", color: "#FCC30B" },
  { id: 8, title: "Travail décent et croissance économique", color: "#A21942" },
  { id: 9, title: "Industrie, innovation et infrastructure", color: "#FD6925" },
  { id: 10, title: "Inégalités réduites", color: "#DD1367" },
  { id: 11, title: "Villes et communautés durables", color: "#FD9D24" },
  { id: 12, title: "Consommation et production responsables", color: "#BF8B2E" },
  { id: 13, title: "Mesures relatives à la lutte contre les changements climatiques", color: "#3F7E44" },
  { id: 14, title: "Vie aquatique", color: "#0A97D9" },
  { id: 15, title: "Vie terrestre", color: "#56C02B" },
  { id: 16, title: "Paix, justice et institutions efficaces", color: "#00689D" },
  { id: 17, title: "Partenariats pour la réalisation des objectifs", color: "#19486A" }
];

const SDGGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Formes animées en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 100, 0],
            y: [0, 50, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -left-20 w-40 h-40 opacity-5 bg-green-500"
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [180, 360, 180],
            x: [50, -50, 50],
            y: [0, 100, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 -right-20 w-60 h-60 opacity-5 bg-blue-500"
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [45, 225, 45],
            x: [-50, 50, -50],
            y: [50, -50, 50]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 left-1/3 w-48 h-48 opacity-5 bg-purple-500"
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
            Les Objectifs de Développement Durable
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Découvrez les 17 objectifs qui guident nos actions pour un monde meilleur et durable
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {SDGs.map((sdg) => (
            <motion.div
              key={sdg.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                rotate: 360,
                transition: { duration: 0.8, ease: "easeInOut" }
              }}
              className="aspect-square relative group"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="w-full h-full transform transition-all duration-500 shadow-lg group-hover:shadow-2xl"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    backgroundColor: sdg.color,
                    filter: 'brightness(1.1)'
                  }}
                >
                  {/* Effet de brillance */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)',
                      transform: 'translateX(-100%)',
                      animation: 'shine 1.5s infinite'
                    }}
                  />
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-white">
                    <motion.span 
                      className="font-bold text-lg sm:text-xl mb-1"
                      whileHover={{ scale: 1.1 }}
                    >
                      {sdg.id}
                    </motion.span>
                    <span className="text-xs sm:text-sm text-center leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                      {sdg.title}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SDGGrid;
