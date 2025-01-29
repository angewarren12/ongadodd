'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Données des projets (à déplacer dans un fichier séparé plus tard)
const projects = [
  {
    id: "energie-solaire",
    title: "Énergie Solaire pour Tous",
    category: "Énergie Renouvelable",
    description: "Installation de panneaux solaires dans les zones rurales pour fournir de l'électricité propre et durable aux communautés.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
    progress: 60,
    location: "Région Subsaharienne",
    impact: "500 foyers équipés",
    status: "En cours",
    startDate: "2024-01-01",
    endDate: "2025-12-31",
    budget: "200 000 €",
    partners: ["SolarTech", "ONG Locales", "Gouvernements Régionaux"],
    objectives: [
      "Équiper 1000 foyers en panneaux solaires",
      "Former 50 techniciens locaux",
      "Réduire les émissions de CO2 de 500 tonnes"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&h=600&fit=crop"
    ],
    longDescription: `Notre projet d'énergie solaire vise à apporter une solution durable aux problèmes d'accès à l'électricité dans les zones rurales. En installant des panneaux solaires et en formant des techniciens locaux, nous créons une solution pérenne qui améliore la qualité de vie des communautés tout en respectant l'environnement.

    Les avantages du projet incluent :
    - Accès à une électricité propre et fiable
    - Création d'emplois locaux
    - Réduction de la dépendance aux énergies fossiles
    - Amélioration des conditions d'étude pour les enfants
    - Développement d'activités économiques locales

    Notre approche implique fortement les communautés locales pour assurer la durabilité du projet à long terme.`
  },
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
    ],
    longDescription: `Notre projet de reforestation urbaine vise à transformer les espaces urbains en créant des îlots de verdure qui amélioreront la qualité de vie des habitants. En collaboration avec la Ville de Paris et diverses associations locales, nous plantons des arbres adaptés au climat urbain et créons des espaces verts accessibles à tous.

    Les arbres jouent un rôle crucial dans la lutte contre le changement climatique et l'amélioration de la qualité de l'air en ville. Chaque arbre planté contribue à :
    - Réduire les émissions de CO2
    - Créer des zones d'ombre naturelles
    - Favoriser la biodiversité
    - Améliorer le bien-être des habitants

    Notre approche implique activement la communauté locale, avec des programmes de formation et de sensibilisation pour assurer la pérennité du projet.`
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
      "https://images.unsplash.com/photo-1503676382389-4809596d5290?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop"
    ],
    longDescription: `Notre programme d'éducation environnementale vise à sensibiliser la nouvelle génération aux enjeux écologiques cruciaux de notre temps. En collaborant avec les écoles et les enseignants, nous créons un impact durable sur la conscience environnementale des jeunes.

    Notre programme comprend :
    - Des ateliers pratiques sur le recyclage et le compostage
    - Des sorties nature pour découvrir la biodiversité locale
    - Des projets participatifs de jardinage
    - Des interventions d'experts en environnement
    - Des challenges écologiques inter-écoles

    Nous mettons l'accent sur l'apprentissage par l'action et l'engagement direct des élèves dans des projets concrets.`
  },
  {
    id: "mobilite-douce",
    title: "Mobilité Douce",
    category: "Transport",
    description: "Développement de pistes cyclables et promotion des modes de transport écologiques.",
    image: "https://images.unsplash.com/photo-1556316384-12c35d30afa4?w=800&h=600&fit=crop",
    progress: 45,
    location: "Lyon Métropole",
    impact: "15km de pistes cyclables créées",
    status: "En cours",
    startDate: "2024-04-01",
    endDate: "2025-12-31",
    budget: "300 000 €",
    partners: ["Métropole de Lyon", "Associations cyclistes", "Entreprises locales"],
    objectives: [
      "Créer 50km de pistes cyclables",
      "Installer 100 stations de vélos en libre-service",
      "Réduire le trafic automobile de 20%"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=600&fit=crop"
    ],
    longDescription: `Notre projet de mobilité douce transforme la ville pour la rendre plus accessible aux cyclistes et aux piétons. En créant un réseau de pistes cyclables sécurisées et en promouvant les modes de transport écologiques, nous contribuons à réduire l'empreinte carbone de notre ville.

    Le projet comprend :
    - La création de pistes cyclables sécurisées
    - L'installation de stations de vélos en libre-service
    - La mise en place de zones à faible émission
    - L'organisation d'événements de promotion du vélo
    - La formation à la sécurité routière

    Notre objectif est de faire de la ville un espace plus agréable à vivre, moins pollué et plus adapté aux mobilités douces.`
  }
];

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Projet non trouvé</h1>
          <Link href="/projets" className="text-teal-600 hover:text-teal-700">
            Retour aux projets
          </Link>
        </div>
      </div>
    );
  }

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            width={1600}
            height={900}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/80 to-blue-600/80" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-white/90 text-teal-600 text-sm font-semibold mb-4">
                {project.category}
              </span>
              <h1 className="text-5xl font-bold text-white mb-4">{project.title}</h1>
              <p className="text-xl text-white/90">{project.description}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contenu Principal */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Colonne principale */}
            <div className="lg:col-span-2">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-12"
              >
                {/* Description détaillée */}
                <motion.div variants={itemVariants} className="prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">À propos du projet</h2>
                  {project.longDescription.split('\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-600 mb-4">
                      {paragraph.trim()}
                    </p>
                  ))}
                </motion.div>

                {/* Objectifs */}
                <motion.div variants={itemVariants}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Objectifs</h2>
                  <div className="grid gap-4">
                    {project.objectives.map((objective, index) => (
                      <div
                        key={index}
                        className="flex items-center p-4 bg-white rounded-lg shadow-sm"
                      >
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-teal-100 rounded-full">
                          <svg
                            className="w-6 h-6 text-teal-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="ml-4 text-lg text-gray-700">{objective}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Galerie */}
                <motion.div variants={itemVariants}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Galerie</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.gallery.map((image, index) => (
                      <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                        <Image
                          src={image}
                          alt={`${project.title} - Image ${index + 1}`}
                          width={800}
                          height={600}
                          className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Barre latérale */}
            <div className="lg:col-span-1">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="sticky top-24 space-y-8"
              >
                {/* État du projet */}
                <motion.div
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-sm p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">État du projet</h3>
                  <div className="space-y-4">
                    <div>
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
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm text-gray-500">Début</span>
                        <p className="font-medium">{new Date(project.startDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Fin prévue</span>
                        <p className="font-medium">{new Date(project.endDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Informations clés */}
                <motion.div
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-sm p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Informations clés</h3>
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm text-gray-500">Lieu</span>
                      <p className="font-medium">{project.location}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Budget</span>
                      <p className="font-medium">{project.budget}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Impact</span>
                      <p className="font-medium">{project.impact}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Partenaires */}
                <motion.div
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-sm p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Partenaires</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.partners.map((partner, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700"
                      >
                        {partner}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                  variants={itemVariants}
                  className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-xl shadow-sm p-6 text-white"
                >
                  <h3 className="text-xl font-semibold mb-4">Participez au projet</h3>
                  <p className="mb-6 text-white/90">
                    Rejoignez-nous dans cette initiative et contribuez à un avenir plus durable.
                  </p>
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-3 bg-white text-teal-600 rounded-full font-medium hover:bg-gray-100 transition-colors"
                  >
                    Nous contacter
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Projets Similaires */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Projets similaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects
              .filter(p => p.category === project.category && p.id !== project.id)
              .slice(0, 3)
              .map((similarProject) => (
                <Link
                  key={similarProject.id}
                  href={`/projets/${similarProject.id}`}
                  className="block group"
                >
                  <motion.div
                    variants={itemVariants}
                    className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-48">
                      <Image
                        src={similarProject.image}
                        alt={similarProject.title}
                        width={800}
                        height={600}
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                        {similarProject.title}
                      </h3>
                      <p className="mt-2 text-gray-600 line-clamp-2">{similarProject.description}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
