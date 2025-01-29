'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="pt-16 overflow-hidden">
      {/* Section Hero avec fond animé */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 to-blue-50">
        {/* Formes animées en arrière-plan */}
        <div className="absolute inset-0">
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
        </div>

        {/* Contenu Hero */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
              Notre Histoire
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Découvrez comment ADODD s'engage à créer un impact positif pour un avenir durable
          </motion.p>
        </div>
      </section>

      {/* Section Mission et Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
                  Notre Mission
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  ADODD s'engage à promouvoir le développement durable à travers des actions concrètes et innovantes. 
                  Nous travaillons en étroite collaboration avec les communautés locales pour créer un impact positif 
                  et durable sur l'environnement et la société.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-500 rounded-2xl transform -rotate-3"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
                  Notre Vision
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Nous aspirons à un monde où le développement durable est au cœur de chaque décision. 
                  Notre vision est de créer un avenir où l'équilibre entre progrès économique, bien-être social 
                  et protection environnementale est une réalité pour tous.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Valeurs */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
              x: [-50, 50, -50]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/3 left-1/4 w-48 h-48 opacity-5 bg-purple-500"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident nos actions et notre engagement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "Nous recherchons constamment des solutions créatives et innovantes pour relever les défis du développement durable.",
                icon: "🚀",
                color: "from-green-400 to-green-600"
              },
              {
                title: "Collaboration",
                description: "Nous croyons en la force du partenariat et du travail d'équipe pour atteindre nos objectifs communs.",
                icon: "🤝",
                color: "from-blue-400 to-blue-600"
              },
              {
                title: "Impact",
                description: "Chacune de nos actions est mesurée par son impact positif sur l'environnement et la société.",
                icon: "🎯",
                color: "from-purple-400 to-purple-600"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center text-3xl mb-6 mx-auto`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Timeline */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-teal-900 via-emerald-800 to-blue-900">
        {/* Effet de particules en arrière-plan */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, 1000],
                x: [0, Math.sin(i) * 200],
                opacity: [0.5, 0],
                scale: [1, 0.5]
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "linear"
              }}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: -8
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-teal-50">
              Notre Histoire
            </h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Un parcours dédié au développement durable
            </p>
          </motion.div>

          <div className="relative">
            {/* Ligne verticale avec effet lumineux */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1">
              <div className="h-full w-full bg-gradient-to-b from-teal-400 via-emerald-400 to-blue-400 rounded-full blur-sm"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white opacity-50"></div>
            </div>

            {[
              {
                year: "2018",
                title: "Création d'ADODD",
                description: "Lancement de notre organisation avec une vision claire pour un avenir durable.",
                align: "left",
                icon: "🌱"
              },
              {
                year: "2019",
                title: "Premier Projet Majeur",
                description: "Mise en œuvre de notre première initiative d'envergure pour la protection de l'environnement.",
                align: "right",
                icon: "🌍"
              },
              {
                year: "2020",
                title: "Extension Internationale",
                description: "Développement de nos activités à l'échelle internationale et création de nouveaux partenariats.",
                align: "left",
                icon: "🤝"
              },
              {
                year: "2021",
                title: "Innovation Technologique",
                description: "Intégration de solutions technologiques innovantes dans nos projets de développement durable.",
                align: "right",
                icon: "💡"
              },
              {
                year: "2023",
                title: "Impact Croissant",
                description: "Atteinte de jalons importants dans nos objectifs de développement durable.",
                align: "left",
                icon: "📈"
              }
            ].map((item, index) => (
              <motion.div
                key={item.year}
                variants={{
                  hidden: { 
                    opacity: 0,
                    x: item.align === "left" ? -50 : 50,
                    y: 20
                  },
                  visible: { 
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: {
                      duration: 0.7,
                      delay: index * 0.2,
                      ease: "easeOut"
                    }
                  }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`relative flex items-center justify-${item.align === "left" ? "start" : "end"} mb-16 w-full group`}
              >
                <div className={`w-1/2 ${item.align === "right" ? "ml-auto pl-8" : "pr-8"} flex ${item.align === "right" ? "justify-start" : "justify-end"}`}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 max-w-md border border-white border-opacity-20 group-hover:border-opacity-30"
                  >
                    <div className="flex items-center mb-4 gap-4">
                      <span className="text-3xl">{item.icon}</span>
                      <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-emerald-200 to-blue-200">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-teal-200 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-teal-100 text-opacity-90 group-hover:text-opacity-100 transition-opacity duration-300">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
                {/* Point sur la timeline avec effet de pulse */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-white shadow-md shadow-teal-500/30 z-10 relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-blue-400 animate-ping opacity-20"></div>
                  </div>
                  {/* Ligne de connexion */}
                  <div 
                    className={`absolute w-8 h-0.5 bg-gradient-to-${item.align === "left" ? "r" : "l"} from-white to-transparent ${
                      item.align === "left" ? "-left-8" : "-right-8"
                    }`}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Effet de vague en bas */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Section Témoignages */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50 relative overflow-hidden">
        {/* Formes décoratives en arrière-plan */}
        <div className="absolute inset-0">
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
            className="absolute top-1/4 left-1/4 w-64 h-64 opacity-5 bg-teal-500"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
            }}
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [180, 360, 180],
              x: [0, -100, 0],
              y: [0, -50, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 right-1/4 w-48 h-48 opacity-5 bg-blue-500"
            style={{
              clipPath: 'circle(50% at 50% 50%)'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600">
              Témoignages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ce que disent nos partenaires et bénéficiaires
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Pierre Dubois",
                role: "Partenaire Local",
                quote: "ADODD a transformé notre approche du développement durable. Leur expertise et leur engagement sont remarquables.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
                gradient: "from-teal-400 to-blue-400"
              },
              {
                name: "Marie Lambert",
                role: "Bénéficiaire",
                quote: "Grâce à ADODD, notre communauté a pu mettre en place des solutions durables qui ont un impact réel sur notre quotidien.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
                gradient: "from-blue-400 to-teal-400"
              },
              {
                name: "Jean Moreau",
                role: "Volontaire",
                quote: "Participer aux projets d'ADODD a été une expérience enrichissante qui m'a permis de contribuer à un changement positif.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
                gradient: "from-teal-400 via-blue-400 to-teal-400"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={{
                  hidden: { 
                    opacity: 0,
                    y: 20
                  },
                  visible: { 
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.2
                    }
                  }
                }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group"
              >
                {/* Guillemets décoratifs */}
                <div className="absolute top-4 right-4 text-6xl text-teal-100 opacity-50 transform group-hover:scale-110 transition-transform duration-300">"</div>
                
                <div className="relative z-10">
                  {/* Avatar avec bordure dégradée */}
                  <div className="mb-6 relative">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${testimonial.gradient} p-1`}>
                      <div className="w-full h-full rounded-full overflow-hidden bg-white">
                        {/* Image de l'avatar */}
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    {/* Effet de halo */}
                    <div className={`absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-r ${testimonial.gradient} opacity-30 blur-lg -z-10 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  </div>

                  <p className="text-gray-600 mb-6 italic relative z-10">"{testimonial.quote}"</p>
                  
                  <div className="flex items-center">
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Équipe */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600">
              Notre Équipe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des professionnels passionnés par le développement durable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              {
                name: "Alexandre Martin",
                role: "Directeur",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
                gradient: "from-teal-400 to-blue-400"
              },
              {
                name: "Sophie Bernard",
                role: "Responsable Projets",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
                gradient: "from-blue-400 to-teal-400"
              },
              {
                name: "Thomas Petit",
                role: "Expert Technique",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
                gradient: "from-teal-400 via-blue-400 to-teal-400"
              },
              {
                name: "Julie Dubois",
                role: "Chargée de Communication",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
                gradient: "from-blue-400 via-teal-400 to-blue-400"
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                variants={{
                  hidden: { 
                    opacity: 0,
                    y: 20
                  },
                  visible: { 
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.1
                    }
                  }
                }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                {/* Photo avec bordure dégradée */}
                <div className="relative mb-4">
                  <div className={`w-full aspect-square rounded-xl bg-gradient-to-r ${member.gradient} p-1`}>
                    <div className="w-full h-full rounded-xl overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  {/* Effet de halo */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl`}></div>
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Call-to-Action */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative py-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-900"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-extrabold text-white sm:text-4xl mb-8"
          >
            Rejoignez-nous dans cette aventure
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-green-100 mb-8 max-w-3xl mx-auto"
          >
            Ensemble, nous pouvons faire la différence. Devenez membre de notre communauté 
            et participez à la création d'un avenir durable.
          </motion.p>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a
              href="/volunteer"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-green-700 bg-white hover:bg-green-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Devenir bénévole
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-medium rounded-full text-white hover:bg-white hover:text-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Nous contacter
            </a>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
};

export default AboutPage;
