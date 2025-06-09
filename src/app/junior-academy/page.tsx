"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Users, Trophy, Target, Clock, Star, Calendar } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { fadeInUp, staggerContainer } from '@/lib/utils'
import Navigation from '@/components/Navigation'

const JuniorAcademyPage = () => {
  const programs = [
    {
      id: 1,
      name: "Future Stars (Ages 6-10)",
      description: "Fun introduction to cricket with basic skills development and teamwork",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
      features: ["Basic batting & bowling", "Fun games & activities", "Team building", "Safety first approach"],
      duration: "1 hour sessions",
      price: "$25/session",
      spots: "12 available"
    },
    {
      id: 2,
      name: "Rising Champions (Ages 11-15)",
      description: "Intermediate program focusing on technique refinement and competitive play",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
      features: ["Advanced techniques", "Match simulation", "Fitness training", "Mental preparation"],
      duration: "1.5 hour sessions",
      price: "$35/session",
      spots: "8 available"
    },
    {
      id: 3,
      name: "Elite Development (Ages 16-18)",
      description: "High-performance program for serious young cricketers with professional aspirations",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
      features: ["Professional coaching", "Video analysis", "Strength & conditioning", "Career guidance"],
      duration: "2 hour sessions",
      price: "$50/session",
      spots: "6 available"
    }
  ]

  const features = [
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Maximum 8 students per group for personalized attention"
    },
    {
      icon: Trophy,
      title: "Competition Ready",
      description: "Prepare for school and club cricket competitions"
    },
    {
      icon: Target,
      title: "Skill Development",
      description: "Focus on fundamentals and advanced techniques"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Multiple time slots available throughout the week"
    }
  ]

  const coaches = [
    {
      name: "Sarah Mitchell",
      role: "Youth Development Coach",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=200&h=200&fit=crop&crop=face",
      experience: "8 years",
      specialty: "Ages 6-12 development"
    },
    {
      name: "James Rodriguez",
      role: "Technical Skills Coach",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      experience: "12 years",
      specialty: "Advanced techniques"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 pt-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-100 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="space-y-8"
            >
              <motion.div variants={fadeInUp} className="space-y-4">
                <motion.span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  🏏 Junior Cricket Academy
                </motion.span>
                
                <motion.h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Future Cricket 
                  <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    Champions
                  </span>
                </motion.h1>
                
                <motion.p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  Nurture your child's cricket potential with our comprehensive junior development programs. 
                  From beginner basics to elite performance training.
                </motion.p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                  Enroll Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Watch Training Videos
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="relative"
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center" 
                  alt="Junior Cricket Training"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-xl font-semibold">Professional Junior Training</p>
                  <p className="text-green-200">Building Tomorrow's Stars</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Training Programs
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Age-appropriate programs designed to develop cricket skills progressively
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {programs.map((program, index) => (
              <motion.div key={program.id} variants={fadeInUp} custom={index}>
                <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group">
                  <div className="relative">
                    <img 
                      src={program.image}
                      alt={program.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-lg">
                      <span className="text-sm font-bold text-green-600">{program.spots}</span>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">{program.name}</CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {program.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <p className="text-lg font-bold text-gray-900">{program.price}</p>
                        <p className="text-sm text-gray-600">{program.duration}</p>
                      </div>
                      <Button className="bg-gradient-to-r from-green-500 to-blue-500">
                        Join Program
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div key={feature.title} variants={fadeInUp} custom={index}>
                  <Card className="text-center p-6 border-0 shadow-md hover:shadow-lg transition-all duration-300">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Junior Coaches
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized coaches with expertise in youth cricket development
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {coaches.map((coach, index) => (
              <motion.div key={coach.name} variants={fadeInUp} custom={index}>
                <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={coach.image}
                      alt={coach.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{coach.name}</h3>
                      <p className="text-green-600 font-medium">{coach.role}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                        <span>{coach.experience} experience</span>
                        <span>•</span>
                        <span>{coach.specialty}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-white"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Start Your Child's Cricket Journey?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join hundreds of young cricketers who have developed their skills with us. 
              Book a trial session today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <Calendar className="mr-2 w-5 h-5" />
                Book Trial Session
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600">
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default JuniorAcademyPage 