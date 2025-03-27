'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Shield, CheckCircle } from 'lucide-react';

export default function WelcomePage() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      title: 'Personal Information',
      icon: <User className="w-6 h-6" />,
      description: 'Provide your basic information to get started'
    },
    {
      title: 'Identity Verification',
      icon: <Shield className="w-6 h-6" />,
      description: 'Verify your identity with official documents'
    },
    {
      title: 'DID Creation',
      icon: <CheckCircle className="w-6 h-6" />,
      description: 'Create your Decentralized Identity'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-4xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Decentralized Identity
          </h1>
          <p className="text-gray-600 text-lg">
            Complete your verification process to get started with your digital identity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`p-6 rounded-lg ${
                currentStep === index + 1
                  ? 'bg-white shadow-lg ring-2 ring-blue-500'
                  : 'bg-white/80 shadow'
              }`}
            >
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-full ${
                  currentStep === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-500'
                }`}>
                  {step.icon}
                </div>
                <span className="ml-3 font-semibold text-gray-800">{step.title}</span>
              </div>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>
          )}

          <div className="flex justify-end mt-8">
            <button
              onClick={() => setCurrentStep(prev => Math.min(prev + 1, 3))}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              {currentStep === 3 ? 'Complete' : 'Continue'}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}