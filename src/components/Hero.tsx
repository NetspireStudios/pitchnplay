"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Star, Users } from 'lucide-react'
import { Button } from './ui/button'
import { fadeInUp, staggerContainer } from '@/lib/utils'

const Hero = () => {
  const stats = [
    { icon: Users, label: "Active Members", value: "500+" },
    { icon: Star, label: "Average Rating", value: "4.9" }
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 pt-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <motion.span className="inline-block px-6 py-3 bg-blue-100 text-blue-700 rounded-full text-sm font-medium shadow-lg">
                🏏 Edmonton&apos;s Premier Cricket Academy
              </motion.span>
              
              <motion.h1 className="text-5xl lg:text-8xl font-bold text-gray-900 leading-tight">
                Master Your
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                  Cricket Game
                </span>
              </motion.h1>
              
              <motion.p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                Join Edmonton&apos;s most advanced cricket training facility. Professional coaching, 
                state-of-the-art equipment, and a community passionate about cricket excellence.
              </motion.p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 h-auto">
                Start Training Today
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto border-2">
                <Play className="mr-2 w-6 h-6" />
                Watch Facility Tour
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-6 pt-8">
              {stats.map((stat) => {
                const IconComponent = stat.icon
                return (
                  <motion.div 
                    key={stat.label}
                    className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/20"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <IconComponent className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                    <p className="text-2xl lg:text-3xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Right Content - Placeholder for Hero Image */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="relative"
          >
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500 via-green-500 to-purple-500 h-[600px]"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Modern Cricket Facility</h3>
                  <p className="text-blue-100 mb-6">Professional equipment & expert coaching</p>
                  <Button className="bg-white text-blue-600 hover:bg-gray-100">
                    Take Virtual Tour
                  </Button>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-900">Open Now</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Professional Training</h4>
                    <p className="text-gray-600 text-sm">Expert coaches available 24/7</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-900">4.9</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 