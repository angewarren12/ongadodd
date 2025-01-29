'use client';

import { useEffect } from 'react';
import Hero from '@/components/Hero';
import SDGGrid from '@/components/SDGGrid';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8;
        if (isVisible) {
          el.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="pt-16">
      <Hero />
      <SDGGrid />
      
      {/* Section Impact avec animation */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
              Notre Impact
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Ensemble, nous faisons la différence pour un avenir durable
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl font-bold text-green-600 mb-2">1000+</div>
              <div className="text-lg font-medium text-gray-600">Bénévoles actifs</div>
              <p className="mt-2 text-gray-500">Engagés pour un changement positif</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-lg font-medium text-gray-600">Projets réalisés</div>
              <p className="mt-2 text-gray-500">Dans différentes régions du monde</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl font-bold text-purple-600 mb-2">10K+</div>
              <div className="text-lg font-medium text-gray-600">Personnes impactées</div>
              <p className="mt-2 text-gray-500">Vies transformées positivement</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Section Actualités */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600">
              Actualités
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez nos dernières actions et initiatives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Lancement du Programme Éco-Écoles",
                date: "15 Janvier 2025",
                description: "Notre nouveau programme vise à sensibiliser les jeunes au développement durable dès le plus jeune âge.",
                image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop",
                category: "Éducation"
              },
              {
                title: "Partenariat pour l'Énergie Propre",
                date: "10 Janvier 2025",
                description: "ADODD s'associe avec des acteurs locaux pour promouvoir les énergies renouvelables.",
                image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop",
                category: "Énergie"
              },
              {
                title: "Succès de notre Campagne de Recyclage",
                date: "5 Janvier 2025",
                description: "Plus de 1000 familles ont participé à notre dernière initiative de recyclage communautaire.",
                image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop",
                category: "Environnement"
              }
            ].map((news, index) => (
              <motion.div
                key={news.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={news.image}
                    alt={news.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-white bg-opacity-90 rounded-full text-sm font-semibold text-teal-600">
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                    {news.title}
                  </h3>
                  <p className="text-gray-600">{news.description}</p>
                  <div className="mt-4">
                    <Link href="#" className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium">
                      Lire la suite
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/actualites" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-300">
              Toutes les actualités
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action avec animation */}
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
            className="text-3xl font-extrabold text-white sm:text-4xl"
          >
            Rejoignez-nous dans cette mission
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-xl text-green-100"
          >
            Ensemble, nous pouvons faire la différence pour un avenir meilleur
          </motion.p>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link
              href="/volunteer"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-green-700 bg-white hover:bg-green-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Devenir bénévole
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-medium rounded-full text-white hover:bg-white hover:text-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Faire un don
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
