"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, MapPin } from 'lucide-react'
import { Button } from './ui/button'
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from '@/lib/utils'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 pt-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-50 to-green-50 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <motion.span 
                variants={slideInLeft}
                className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
              >
                🏏 Edmonton's Premier Cricket Facility
              </motion.span>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight"
              >
                Unleash Your
                <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Cricket Passion
                </span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-gray-600 leading-relaxed max-w-xl"
              >
                Step into Edmonton's Premier Indoor Cricket Facility, where dreams take flight and champions are born. 
                Elevate your play with our state-of-the-art lanes and professional coaching.
              </motion.p>
            </motion.div>

            {/* Features */}
            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <Clock className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-900">Open 24/7</p>
                  <p className="text-sm text-gray-600">By Appointment</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <MapPin className="w-6 h-6 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-900">Prime Location</p>
                  <p className="text-sm text-gray-600">Edmonton, Alberta</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                Book Your Lane
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Virtual Tour
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <motion.p 
                  className="text-3xl font-bold text-blue-600"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  4
                </motion.p>
                <p className="text-sm text-gray-600">Professional Lanes</p>
              </div>
              <div className="text-center">
                <motion.p 
                  className="text-3xl font-bold text-green-600"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  1000+
                </motion.p>
                <p className="text-sm text-gray-600">Happy Players</p>
              </div>
              <div className="text-center">
                <motion.p 
                  className="text-3xl font-bold text-purple-600"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                >
                  10+
                </motion.p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Hero Image */}
          <motion.div
            variants={slideInRight}
            initial="initial"
            animate="animate"
            className="relative"
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Cricket facility placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-500 via-green-500 to-blue-600 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-6xl">🏏</span>
                    </div>
                    <p className="text-xl font-semibold">State-of-the-Art Cricket Facility</p>
                    <p className="text-blue-100">Professional Training Environment</p>
                  </div>
                </div>
              </div>
              
              {/* Floating stats card */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">⭐</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">4.9/5 Rating</p>
                    <p className="text-sm text-gray-600">From 200+ Reviews</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero 