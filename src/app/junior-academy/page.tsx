"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Users, Target, CheckCircle, ArrowRight, Calendar, Star, Trophy, Heart } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { fadeInUp, staggerContainer } from '@/lib/utils'
import Navigation from '@/components/Navigation'
import Image from 'next/image'

const JuniorAcademyPage = () => {
  const ageGroups = [
    {
      title: "Little Cricketers",
      age: "5-8 years",
      description: "Introduction to cricket fundamentals through fun games and activities",
      features: ["Basic ball handling", "Simple batting", "Fun team games", "Motor skill development"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      color: "blue",
      price: "$80/month"
    },
    {
      title: "Young Champions", 
      age: "9-12 years",
      description: "Structured coaching focusing on technique and game understanding",
      features: ["Proper batting technique", "Bowling basics", "Fielding positions", "Match situations"],
      image: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=400&h=300&fit=crop",
      color: "green",
      price: "$100/month"
    },
    {
      title: "Teen Elite",
      age: "13-17 years", 
      description: "Advanced training preparing for competitive cricket",
      features: ["Advanced techniques", "Strategy & tactics", "Fitness training", "Match preparation"],
      image: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=400&h=300&fit=crop",
      color: "purple",
      price: "$120/month"
    }
  ]

  const benefits = [
    {
      icon: Heart,
      title: "Character Building",
      description: "Develop sportsmanship, teamwork, and leadership skills"
    },
    {
      icon: Trophy,
      title: "Skill Development", 
      description: "Master cricket fundamentals with professional coaching"
    },
    {
      icon: Users,
      title: "Social Skills",
      description: "Make friends and learn to work as part of a team"
    },
    {
      icon: Target,
      title: "Goal Achievement",
      description: "Set and accomplish personal and team objectives"
    }
  ]

  const features = [
    { icon: CheckCircle, text: "Professional certified coaches" },
    { icon: CheckCircle, text: "Age-appropriate equipment provided" },
    { icon: CheckCircle, text: "Small group sizes (max 8 players)" },
    { icon: CheckCircle, text: "Indoor climate-controlled facility" },
    { icon: CheckCircle, text: "Weekly progress reports" },
    { icon: CheckCircle, text: "Monthly parent updates" },
    { icon: CheckCircle, text: "End-of-season tournaments" },
    { icon: CheckCircle, text: "Flexible scheduling options" }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent of Emma (Age 10)",
      content: "Emma has grown so much in confidence since joining. The coaches are amazing with kids!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=80&h=80&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Michael Chen", 
      role: "Parent of Alex (Age 14)",
      content: "The structured approach really helped Alex develop proper technique. Highly recommend!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Lisa Kumar",
      role: "Parent of Raj (Age 7)",
      content: "Perfect introduction to cricket. Raj loves coming to practice every week!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      rating: 5
    }
  ]

  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    purple: "from-purple-500 to-purple-600"
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-24 pb-8 lg:pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-100 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-20">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="space-y-6 lg:space-y-8 text-center lg:text-left"
            >
              <motion.div variants={fadeInUp} className="space-y-4 lg:space-y-6">
                <motion.span className="inline-block px-4 lg:px-6 py-2 lg:py-3 bg-purple-100 text-purple-700 rounded-full text-xs lg:text-sm font-medium shadow-lg">
                  🏏 Junior Cricket Academy
                </motion.span>
                
                <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Future Cricket
                  <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Champions
                  </span>
                </motion.h1>
                
                <motion.p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Nurture your child&apos;s cricket passion with professional coaching, age-appropriate training, 
                  and a fun, supportive environment designed for young athletes.
                </motion.p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 h-auto">
                  Enroll Today
                  <ArrowRight className="ml-2 w-5 lg:w-6 h-5 lg:h-6" />
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 h-auto border-2">
                  <Calendar className="mr-2 w-5 lg:w-6 h-5 lg:h-6" />
                  Schedule Trial
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-3 lg:gap-6 pt-6 lg:pt-8">
                <div className="text-center p-3 lg:p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-600">5+</p>
                  <p className="text-xs lg:text-sm text-gray-600 font-medium">Age Groups</p>
                </div>
                <div className="text-center p-3 lg:p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">150+</p>
                  <p className="text-xs lg:text-sm text-gray-600 font-medium">Young Players</p>
                </div>
                <div className="text-center p-3 lg:p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-600">98%</p>
                  <p className="text-xs lg:text-sm text-gray-600 font-medium">Parent Satisfaction</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="relative order-first lg:order-last"
            >
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <Image 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&h=600&fit=crop" 
                  alt="Junior Cricket Training"
                  width={700}
                  height={600}
                  className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                <motion.div
                  className="absolute top-4 lg:top-6 right-4 lg:right-6 bg-white/90 backdrop-blur-sm rounded-xl p-3 lg:p-4 shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs lg:text-sm font-medium text-gray-900">Active Training</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 lg:p-6 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">Professional Youth Coaching</h3>
                  <p className="text-gray-600 mb-3 text-sm lg:text-base">Age-appropriate training for all skill levels</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">4.9/5</span>
                    </div>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-xs lg:text-sm">
                      Join Now
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Age Groups Section */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 lg:mb-6">
              Age-Specific Programs
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Tailored cricket programs designed specifically for each age group&apos;s developmental needs
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {ageGroups.map((group, index) => (
              <motion.div key={group.title} variants={fadeInUp} custom={index}>
                <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group bg-white h-full">
                  <div className="relative">
                    <Image 
                      src={group.image}
                      alt={group.title}
                      width={400}
                      height={256}
                      className="w-full h-48 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <Badge className={`bg-gradient-to-r ${colorClasses[group.color as keyof typeof colorClasses]} text-white text-xs lg:text-sm px-3 py-1`}>
                        {group.age}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg lg:text-xl font-bold text-white mb-2">{group.title}</h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-green-400 font-semibold text-sm lg:text-base">{group.price}</span>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-4 lg:p-6 flex-1 flex flex-col">
                    <p className="text-gray-600 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base flex-1">{group.description}</p>
                    
                    <div className="space-y-2 lg:space-y-3 mb-4 lg:mb-6">
                      <h4 className="font-semibold text-gray-900 text-sm lg:text-base">What they&apos;ll learn:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {group.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-xs lg:text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button className={`w-full bg-gradient-to-r ${colorClasses[group.color as keyof typeof colorClasses]} hover:shadow-lg transition-all duration-300 text-sm lg:text-base`}>
                      Enroll Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
              Why Choose Our Junior Academy?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              More than just cricket skills - we develop well-rounded young athletes
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <motion.div key={benefit.title} variants={fadeInUp} custom={index}>
                  <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-gradient-to-br from-white to-gray-50 h-full">
                    <CardContent className="p-6 lg:p-8">
                      <motion.div
                        className="w-14 lg:w-16 h-14 lg:h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <IconComponent className="w-6 lg:w-8 h-6 lg:h-8 text-white" />
                      </motion.div>
                      
                      <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-6 lg:space-y-8"
            >
              <div className="space-y-4 lg:space-y-6">
                <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  ✨ Program Features
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                  Everything Your Child Needs to Excel
                </h2>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Our comprehensive program includes professional coaching, equipment, 
                  and ongoing support to ensure every child reaches their potential.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 p-3 lg:p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-5 lg:w-6 h-5 lg:h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm lg:text-base font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 h-auto">
                Learn More About Our Program
                <ArrowRight className="ml-2 w-5 lg:w-6 h-5 lg:h-6" />
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="relative order-first lg:order-last"
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
              >
                <Image 
                  src="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=600&h=500&fit=crop" 
                  alt="Junior Academy Features"
                  width={600}
                  height={500}
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/40 to-transparent"></div>
                <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6 text-white">
                  <p className="text-lg lg:text-xl font-semibold mb-2">Professional Training Environment</p>
                  <p className="text-purple-100 text-sm lg:text-base">Safe, modern facilities designed for young athletes</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
              What Parents Say
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Hear from families whose children have thrived in our junior academy
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={testimonial.name} variants={fadeInUp} custom={index}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-purple-50 h-full">
                  <CardContent className="p-6 lg:p-8">
                    <div className="space-y-4">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 lg:w-5 h-4 lg:h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-6 italic leading-relaxed text-sm lg:text-base">&ldquo;{testimonial.content}&rdquo;</p>
                      <div className="flex items-center space-x-4">
                        <Image 
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="w-10 lg:w-12 h-10 lg:h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm lg:text-base">{testimonial.name}</h4>
                          <p className="text-xs lg:text-sm text-purple-600">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-white"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6">
              Start Your Child&apos;s Cricket Journey Today
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-purple-100 mb-8 lg:mb-10 leading-relaxed px-4">
              Give your child the opportunity to learn cricket in a fun, safe, and professional environment. 
              Book a free trial session today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center max-w-md sm:max-w-none mx-auto">
              <Button size="lg" className="w-full sm:w-auto bg-white text-purple-600 hover:bg-gray-100 text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 h-auto shadow-xl">
                Book Free Trial
                <ArrowRight className="ml-2 w-5 lg:w-6 h-5 lg:h-6" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-purple-600 text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 h-auto">
                <Calendar className="mr-2 w-5 lg:w-6 h-5 lg:h-6" />
                View Schedule
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default JuniorAcademyPage 