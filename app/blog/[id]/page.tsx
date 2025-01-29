'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import BlogImage from '@/components/BlogImage';

// Types
interface BlogPost {
  id: number;
  title: string;
  content: string;
  category: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  date: string;
  readTime: string;
}

// Exemple d'article complet
const blogPost: BlogPost = {
  id: 1,
  title: "Lancement du Programme Éco-Écoles",
  content: `
    <p>Notre nouveau programme vise à sensibiliser les jeunes au développement durable dès le plus jeune âge. Cette initiative s'inscrit dans notre engagement pour l'éducation environnementale et le développement durable.</p>

    <h2>Objectifs du Programme</h2>
    <p>Le Programme Éco-Écoles vise plusieurs objectifs clés :</p>
    <ul>
      <li>Sensibiliser les élèves aux enjeux environnementaux</li>
      <li>Développer des comportements éco-responsables</li>
      <li>Impliquer la communauté scolaire dans des projets durables</li>
      <li>Créer des liens entre l'école et son territoire</li>
    </ul>

    <h2>Actions Concrètes</h2>
    <p>Le programme se décline en plusieurs actions concrètes :</p>
    <ul>
      <li>Mise en place de jardins pédagogiques</li>
      <li>Ateliers de sensibilisation au tri des déchets</li>
      <li>Projets d'économies d'énergie</li>
      <li>Création de clubs environnement</li>
    </ul>

    <h2>Impact Attendu</h2>
    <p>À travers ce programme, nous espérons toucher plus de 1000 élèves dans 10 écoles pilotes d'Abidjan. L'objectif est d'étendre progressivement le programme à d'autres régions de la Côte d'Ivoire.</p>

    <h2>Partenariats</h2>
    <p>Ce programme est rendu possible grâce à la collaboration de plusieurs acteurs :</p>
    <ul>
      <li>Ministère de l'Éducation Nationale</li>
      <li>Collectivités locales</li>
      <li>Associations environnementales</li>
      <li>Entreprises engagées</li>
    </ul>
  `,
  category: "Éducation",
  image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop",
  author: {
    name: "Sarah Diallo",
    avatar: "/images/blog/defaults/avatar.jpg",
    bio: "Coordinatrice des programmes éducatifs chez ADODD. Passionnée par l'éducation environnementale et le développement durable."
  },
  date: "15 Janvier 2025",
  readTime: "5 min"
};

export default function BlogPostPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <BlogImage
            src={blogPost.image}
            alt={blogPost.title}
            category={blogPost.category}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative h-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour aux articles
            </Link>
            
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white mb-4">
              {blogPost.category}
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {blogPost.title}
            </h1>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <BlogImage
                  src={blogPost.author.avatar}
                  alt={blogPost.author.name}
                  type="avatar"
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
                <div>
                  <p className="text-white font-medium">{blogPost.author.name}</p>
                  <p className="text-white/80 text-sm">{blogPost.date}</p>
                </div>
              </div>
              <span className="text-white/80">·</span>
              <span className="text-white/80">{blogPost.readTime} de lecture</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contenu de l'article */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />

          {/* Auteur */}
          <div className="mt-12 pt-12 border-t border-gray-200">
            <div className="flex items-start space-x-4">
              <BlogImage
                src={blogPost.author.avatar}
                alt={blogPost.author.name}
                type="avatar"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{blogPost.author.name}</h3>
                <p className="text-gray-600 mt-1">{blogPost.author.bio}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-white rounded-xl shadow-lg text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour à la liste des articles
          </Link>
        </div>
      </div>
    </div>
  );
}
