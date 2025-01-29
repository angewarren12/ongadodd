'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const donationAmounts = [
  { amount: 5000, description: "Aide à financer nos activités quotidiennes" },
  { amount: 10000, description: "Contribue à l'organisation d'un événement" },
  { amount: 25000, description: "Soutient un projet communautaire" },
  { amount: 50000, description: "Finance une initiative majeure" }
];

export default function DonPage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isRecurring, setIsRecurring] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
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
            Faites un don pour soutenir notre cause
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl"
          >
            Votre générosité nous permet de continuer notre mission et d'avoir un impact positif sur notre communauté.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Section de don */}
          <div className="md:col-span-2 space-y-8">
            <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Choisissez votre montant</h2>
              
              {/* Options de montant prédéfinies */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {donationAmounts.map(({ amount, description }) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount('');
                    }}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedAmount === amount
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-purple-200'
                    }`}
                  >
                    <div className="text-2xl font-bold text-gray-900 mb-1">{amount.toLocaleString()} FCFA</div>
                    <div className="text-sm text-gray-600">{description}</div>
                  </button>
                ))}
              </div>

              {/* Montant personnalisé */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ou entrez un montant personnalisé
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Montant"
                  />
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">FCFA</span>
                  </div>
                </div>
              </div>

              {/* Option don récurrent */}
              <div className="mb-8">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isRecurring}
                    onChange={(e) => setIsRecurring(e.target.checked)}
                    className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                  />
                  <span className="text-gray-700">Faire un don mensuel récurrent</span>
                </label>
              </div>

              {/* Bouton de don */}
              <button
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                Faire un don {selectedAmount || customAmount ? `de ${Number(selectedAmount || customAmount).toLocaleString()} FCFA` : ''}
                {isRecurring ? ' par mois' : ''}
              </button>
            </motion.div>

            {/* Section avantages fiscaux */}
            <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Avantages fiscaux</h3>
              <p className="text-gray-600 mb-4">
                En tant qu'association reconnue d'utilité publique, vos dons sont déductibles de vos impôts à hauteur de :
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">66% pour les particuliers, dans la limite de 20% du revenu imposable</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">60% pour les entreprises, dans la limite de 0,5% du chiffre d'affaires</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Section impact */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Votre impact</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">100+ Projets</h4>
                    <p className="text-sm text-gray-600">Financés grâce à vos dons</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">1000+ Bénéficiaires</h4>
                    <p className="text-sm text-gray-600">Aidés directement</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Impact Global</h4>
                    <p className="text-sm text-gray-600">Dans toute la région</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mt-6">
                  <blockquote className="text-gray-600 italic">
                    "Chaque don compte et contribue à faire une différence réelle dans la vie des gens."
                  </blockquote>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
