'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

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

const projects = [
  {
    id: "reforestation-urbaine",
    title: "Reforestation Urbaine",
    category: "Environnement",
    description: "Un projet ambitieux de plantation d'arbres en milieu urbain pour améliorer la qualité de l'air et créer des espaces verts.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
    progress: 75,
    location: "Paris, France",
    impact: "5000 arbres plantés",
    status: "En cours",
    startDate: "2024-06-01",
    endDate: "2025-12-31",
    budget: "150 000 €",
    partners: ["Ville de Paris", "Association des Jardiniers", "Écoles locales"],
    objectives: [
      "Planter 10 000 arbres d'ici 2025",
      "Créer 20 nouveaux espaces verts",
      "Former 100 éco-volontaires"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578241561880-0a1d5db3cb8a?w=800&h=600&fit=crop"
    ]
  },
  {
    id: "energie-solaire",
    title: "Énergie Solaire pour Tous",
    category: "Énergie",
    description: "Installation de panneaux solaires dans les zones rurales pour fournir une énergie propre et accessible.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
    progress: 60,
    location: "Région Centre",
    impact: "200 foyers équipés",
    status: "En cours",
    startDate: "2024-03-15",
    endDate: "2025-09-30",
    budget: "280 000 €",
    partners: ["EDF", "Région Centre-Val de Loire", "Artisans locaux"],
    objectives: [
      "Équiper 500 foyers en panneaux solaires",
      "Réduire les émissions de CO2 de 1000 tonnes",
      "Créer 20 emplois locaux"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559302995-f1d7e0750f98?w=800&h=600&fit=crop"
    ]
  },
  {
    id: "education-environnementale",
    title: "Éducation Environnementale",
    category: "Éducation",
    description: "Programme de sensibilisation dans les écoles pour former les jeunes aux enjeux du développement durable.",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop",
    progress: 90,
    location: "National",
    impact: "10000 élèves sensibilisés",
    status: "En cours",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    budget: "120 000 €",
    partners: ["Ministère de l'Éducation", "Associations environnementales", "Écoles primaires"],
    objectives: [
      "Sensibiliser 20 000 élèves",
      "Former 500 enseignants",
      "Créer 50 clubs environnement"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop"
    ]
  },
  {
    id: "recyclage-communautaire",
    title: "Recyclage Communautaire",
    category: "Déchets",
    description: "Mise en place de points de collecte et de tri des déchets dans les quartiers prioritaires.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop",
    progress: 40,
    location: "Lyon",
    impact: "50 tonnes de déchets recyclés",
    status: "En cours",
    startDate: "2024-04-01",
    endDate: "2025-03-31",
    budget: "90 000 €",
    partners: ["Ville de Lyon", "Entreprises de recyclage", "Associations de quartier"],
    objectives: [
      "Installer 100 points de collecte",
      "Recycler 200 tonnes de déchets",
      "Créer 10 emplois locaux"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1526951521990-620dc14c214b?w=800&h=600&fit=crop"
    ]
  },
  {
    id: "agriculture-urbaine",
    title: "Agriculture Urbaine",
    category: "Alimentation",
    description: "Création de jardins partagés et formation aux techniques de culture biologique en ville.",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&h=600&fit=crop",
    progress: 85,
    location: "Marseille",
    impact: "20 jardins créés",
    status: "En cours",
    startDate: "2024-02-15",
    endDate: "2025-02-14",
    budget: "175 000 €",
    partners: ["Ville de Marseille", "Agriculteurs bio", "Écoles d'horticulture"],
    objectives: [
      "Créer 50 jardins partagés",
      "Former 1000 habitants",
      "Produire 20 tonnes de légumes bio"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1593179241557-bce1eb92e47e?w=800&h=600&fit=crop"
    ]
  },
  {
    id: "mobilite-douce",
    title: "Mobilité Douce",
    category: "Transport",
    description: "Développement de pistes cyclables et promotion des modes de transport écologiques.",
    image: "https://images.unsplash.com/photo-1476994230281-1448088947db?w=800&h=600&fit=crop",
    progress: 30,
    location: "Bordeaux",
    impact: "15km de pistes créées",
    status: "En cours",
    startDate: "2024-05-01",
    endDate: "2025-04-30",
    budget: "320 000 €",
    partners: ["Métropole de Bordeaux", "Associations cyclistes", "Entreprises de mobilité"],
    objectives: [
      "Créer 50km de pistes cyclables",
      "Installer 100 stations vélos",
      "Réduire le trafic de 20%"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=600&fit=crop"
    ]
  },
  {
    id: "biodiversite-marine",
    title: "Protection Marine",
    category: "Environnement",
    description: "Programme de protection des écosystèmes marins et sensibilisation à la pollution plastique.",
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop",
    progress: 55,
    location: "Côte Méditerranéenne",
    impact: "100km de côtes protégées",
    status: "En cours",
    startDate: "2024-03-01",
    endDate: "2025-02-28",
    budget: "250 000 €",
    partners: ["Conservatoire du littoral", "Associations de plongeurs", "Instituts marins"],
    objectives: [
      "Nettoyer 200km de côtes",
      "Protéger 5 zones marines",
      "Former 2000 éco-citoyens"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop"
    ]
  },
  {
    id: "zero-dechet",
    title: "Zéro Déchet",
    category: "Déchets",
    description: "Initiative pour accompagner les commerces et les habitants dans une démarche zéro déchet.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop",
    progress: 70,
    location: "Toulouse",
    impact: "500 commerces engagés",
    status: "En cours",
    startDate: "2024-01-15",
    endDate: "2024-12-31",
    budget: "140 000 €",
    partners: ["Ville de Toulouse", "Commerces locaux", "Experts zéro déchet"],
    objectives: [
      "Convertir 1000 commerces",
      "Réduire les déchets de 50%",
      "Créer 5 épiceries vrac"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1605600659908-0ef719419d41?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1605600659892-0ef719419d41?w=800&h=600&fit=crop"
    ]
  }
];

export default function Projets() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");
  const categories = ["Tous", "Environnement", "Énergie", "Éducation", "Déchets", "Alimentation", "Transport"];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "Tous" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Hero Section avec Parallax */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&h=900&fit=crop"
            alt="Projects Hero"
            width={1600}
            height={900}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/80 to-blue-600/80" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-full flex items-center justify-center text-center"
        >
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl font-bold text-white mb-6">
              Nos Projets pour un Avenir Durable
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Découvrez nos initiatives innovantes et rejoignez-nous dans notre mission pour un monde meilleur
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center space-x-4"
            >
              <a
                href="#projects"
                className="px-8 py-3 bg-white text-teal-600 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Découvrir nos projets
              </a>
              <Link
                href="/contact"
                className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                Nous rejoindre
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Barre de recherche et filtres */}
      <section className="py-8 bg-white shadow-lg sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-1 max-w-lg">
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-teal-600 text-white shadow-lg scale-105"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Liste des Projets */}
      <section id="projects" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchQuery}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-4 py-2 bg-white bg-opacity-90 rounded-full text-sm font-semibold text-teal-600">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === "En cours" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    {/* Barre de progression */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-500 mb-1">
                        <span>Progression</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${project.progress}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-teal-500 to-blue-500"
                        />
                      </div>
                    </div>

                    {/* Détails du projet */}
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-gray-500">Lieu</span>
                        <p className="font-medium text-gray-900">{project.location}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Impact</span>
                        <p className="font-medium text-gray-900">{project.impact}</p>
                      </div>
                    </div>

                    {/* Partenaires */}
                    <div className="mb-4">
                      <span className="text-sm text-gray-500">Partenaires</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {project.partners.map((partner, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600"
                          >
                            {partner}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={`/projets/${project.id}`}
                      className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors group/link"
                    >
                      En savoir plus
                      <svg
                        className="ml-2 w-5 h-5 transform group-hover/link:translate-x-1 transition-transform"
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
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Envie de participer à nos projets ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Rejoignez-nous dans notre mission pour un avenir plus durable. Chaque action compte !
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-lg font-medium rounded-full text-white hover:bg-white hover:text-teal-600 transition-colors duration-300"
            >
              Contactez-nous
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
