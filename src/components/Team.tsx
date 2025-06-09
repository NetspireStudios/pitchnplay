"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Award, Users, Globe } from 'lucide-react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Button } from './ui/button'
import { fadeInUp, staggerContainer } from '@/lib/utils'

const Team = () => {
  const coaches = [
    {
      name: "Tyson George Gordon",
      role: "International Fast-Medium Bowler",
      country: "Canada",
      image: "🏏", // Placeholder - in real app would be image URL
      bio: "Currently playing international cricket for Canada. Born in Saint Mary, Jamaica, Gordon brings world-class experience to our academy.",
      achievements: [
        "International Cricket Player for Canada",
        "Scored 70 runs vs South Africa (2005)",
        "Former Jamaica List A Player",
        "Dismissed by Shaun Pollock"
      ],
      specialties: ["Fast bowling", "Batting technique", "Match strategy"],
      experience: "15+ years",
      rating: 4.9
    },
    {
      name: "Ishwar Sohi",
      role: "Fast Bowling All-Rounder",
      country: "Canada",
      image: "🇨🇦", // Placeholder - in real app would be image URL
      bio: "Our esteemed coach from Edmonton, embodying the spirit of fast bowling all-rounder, currently showcasing talent with the Canadian national team.",
      achievements: [
        "Canadian National Team Player",
        "Fast Bowling All-Rounder Specialist",
        "Edmonton Cricket Ambassador",
        "Youth Development Expert"
      ],
      specialties: ["All-round skills", "Youth coaching", "Fitness training"],
      experience: "12+ years",
      rating: 4.8
    }
  ]

  const stats = [
    { icon: Users, label: "Students Trained", value: "500+" },
    { icon: Award, label: "Years Combined Experience", value: "27+" },
    { icon: Globe, label: "International Experience", value: "Yes" },
    { icon: Star, label: "Average Rating", value: "4.9" }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span 
            variants={fadeInUp}
            className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4"
          >
            Our Expert Team
          </motion.span>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Meet Our 
            <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              International Coaches
            </span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Learn from the best! Our internationally experienced coaches bring world-class expertise 
            and proven techniques to help you excel in cricket.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                custom={index}
                className="text-center p-6 bg-gray-50 rounded-xl"
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>
                <motion.p 
                  className="text-2xl font-bold text-gray-900 mb-1"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Coaches Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          {coaches.map((coach, index) => (
            <motion.div
              key={coach.name}
              variants={fadeInUp}
              custom={index}
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group">
                <div className="relative">
                  {/* Coach Image/Avatar */}
                  <div className="h-64 bg-gradient-to-br from-green-500 via-blue-500 to-green-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-8xl mb-4">{coach.image}</div>
                        <div className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
                          <span className="text-sm font-medium">🏏 {coach.country} Cricket</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Rating Badge */}
                  <motion.div
                    className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-lg"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-bold text-gray-900">{coach.rating}</span>
                    </div>
                  </motion.div>
                </div>

                <CardHeader className="pb-4">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{coach.name}</h3>
                    <p className="text-green-600 font-medium mb-2">{coach.role}</p>
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Award className="w-4 h-4 mr-1" />
                        {coach.experience}
                      </span>
                      <span className="flex items-center">
                        <Globe className="w-4 h-4 mr-1" />
                        {coach.country}
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">{coach.bio}</p>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                    <div className="space-y-2">
                      {coach.achievements.map((achievement, achievementIndex) => (
                        <motion.div
                          key={achievementIndex}
                          className="flex items-start space-x-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + achievementIndex * 0.05 }}
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Specialties */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {coach.specialties.map((specialty, specialtyIndex) => (
                        <motion.span
                          key={specialtyIndex}
                          className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + specialtyIndex * 0.1 }}
                        >
                          {specialty}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                    Book Session with {coach.name.split(' ')[0]}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Train with International Champions
            </h3>
            <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
              Get personalized coaching from players who have competed at the highest levels. 
              Book your session today and take your game to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg">
                View All Programs
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Team 