'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BlogImage from '@/components/BlogImage';

// Types
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
}

// Données de démonstration
const categories = [
  "Tous",
  "Éducation",
  "Énergie",
  "Environnement"
];

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Lancement du Programme Éco-Écoles",
    excerpt: "Notre nouveau programme vise à sensibiliser les jeunes au développement durable dès le plus jeune âge. Une initiative qui s'inscrit dans notre engagement pour l'éducation environnementale.",
    category: "Éducation",
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop",
    author: {
      name: "Sarah Diallo",
      avatar: "/images/blog/defaults/avatar.jpg"
    },
    date: "15 Janvier 2025",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "Partenariat pour l'Énergie Propre",
    excerpt: "ADODD s'associe avec des acteurs locaux pour promouvoir les énergies renouvelables. Un pas important vers la transition énergétique en Côte d'Ivoire.",
    category: "Énergie",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop",
    author: {
      name: "Paul Séka",
      avatar: "/images/blog/defaults/avatar.jpg"
    },
    date: "10 Janvier 2025",
    readTime: "8 min"
  },
  {
    id: 3,
    title: "Succès de notre Campagne de Recyclage",
    excerpt: "Plus de 1000 familles ont participé à notre dernière initiative de recyclage communautaire. Un véritable succès qui démontre l'engagement de la communauté.",
    category: "Environnement",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop",
    author: {
      name: "Marie Koné",
      avatar: "/images/blog/defaults/avatar.jpg"
    },
    date: "5 Janvier 2025",
    readTime: "6 min"
  }
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filtrage des articles
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "Tous" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Changement de page
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset de la pagination lors du changement de filtres
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

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
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Notre Blog
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl"
          >
            Découvrez nos actualités, événements et histoires inspirantes
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filtres et recherche */}
        <div className="mb-12 space-y-6">
          {/* Barre de recherche */}
          <div className="relative max-w-md">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un article..."
              className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
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

          {/* Catégories */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Résumé des filtres */}
          <div className="text-sm text-gray-500">
            {filteredPosts.length} article{filteredPosts.length > 1 ? 's' : ''} trouvé{filteredPosts.length > 1 ? 's' : ''}
            {selectedCategory !== "Tous" && ` dans la catégorie "${selectedCategory}"`}
            {searchQuery && ` contenant "${searchQuery}"`}
          </div>
        </div>

        {/* Grille d'articles */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <BlogImage
                  src={post.image}
                  alt={post.title}
                  category={post.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 left-4 z-20 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">
                  {post.category}
                </span>
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <BlogImage
                      src={post.author.avatar}
                      alt={post.author.name}
                      type="avatar"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{post.readTime} de lecture</span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center space-x-2">
            {/* Bouton précédent */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg ${
                currentPage === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Numéros de page */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === pageNumber
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {pageNumber}
              </button>
            ))}

            {/* Bouton suivant */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg ${
                currentPage === totalPages
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* Message si aucun résultat */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">Aucun article trouvé</h3>
            <p className="mt-1 text-sm text-gray-500">
              Essayez de modifier vos critères de recherche.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
