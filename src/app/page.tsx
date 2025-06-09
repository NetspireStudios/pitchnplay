"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Users, Clock, Trophy, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { fadeInUp, staggerContainer } from '@/lib/utils'
import Navigation from '@/components/Navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  const stats = [
    { icon: Users, label: "Active Members", value: "500+", color: "blue" },
    { icon: Trophy, label: "Championships Won", value: "15", color: "yellow" },
    { icon: Clock, label: "Years Experience", value: "10+", color: "green" },
    { icon: Star, label: "Average Rating", value: "4.9", color: "purple" }
  ]

  const features = [
    {
      title: "Professional Coaching",
      description: "Learn from international players with years of professional experience",
      image: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=400&h=300&fit=crop&crop=center",
      link: "/services#coaching"
    },
    {
      title: "Modern Facilities",
      description: "State-of-the-art cricket lanes with professional equipment and climate control",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=300&fit=crop&crop=center",
      link: "/services#lane-rental"
    },
    {
      title: "Youth Development",
      description: "Comprehensive junior programs designed to nurture young cricket talent",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
      link: "/junior-academy"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Junior Player Parent",
      content: "My daughter has improved tremendously since joining Pitch & Play. The coaches are amazing!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=80&h=80&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Mike Thompson",
      role: "Senior League Player",
      content: "Best cricket facility in Edmonton. Professional equipment and excellent coaching staff.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "David Kumar",
      role: "Team Captain",
      content: "Our team trains here regularly. The bowling machines and lane quality are top-notch.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 pt-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full opacity-40 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-100 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-12 lg:py-20">
            {/* Left Content */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="space-y-6 lg:space-y-8 text-center lg:text-left"
            >
              <motion.div variants={fadeInUp} className="space-y-4 lg:space-y-6">
                <motion.span className="inline-block px-4 lg:px-6 py-2 lg:py-3 bg-blue-100 text-blue-700 rounded-full text-xs lg:text-sm font-medium shadow-lg">
                  🏏 Edmonton&apos;s Premier Cricket Academy
                </motion.span>
                
                <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-tight">
                  Master Your
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                    Cricket Game
                  </span>
                </motion.h1>
                
                <motion.p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Join Edmonton&apos;s most advanced cricket training facility. Professional coaching, 
                  state-of-the-art equipment, and a community passionate about cricket excellence.
                </motion.p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 h-auto">
                    Start Training Today
                    <ArrowRight className="ml-2 w-5 lg:w-6 h-5 lg:h-6" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 h-auto border-2">
                  <Play className="mr-2 w-5 lg:w-6 h-5 lg:h-6" />
                  Watch Facility Tour
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div variants={fadeInUp} className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 pt-6 lg:pt-8">
                {stats.map((stat) => {
                  const IconComponent = stat.icon
                  return (
                    <motion.div 
                      key={stat.label}
                      className="text-center p-3 lg:p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/20"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <IconComponent className={`w-6 lg:w-8 h-6 lg:h-8 mx-auto mb-2 ${
                        stat.color === 'blue' ? 'text-blue-600' :
                        stat.color === 'yellow' ? 'text-yellow-500' :
                        stat.color === 'green' ? 'text-green-600' :
                        'text-purple-600'
                      }`} />
                      <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-xs lg:text-sm text-gray-600 font-medium">{stat.label}</p>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>

            {/* Right Content - Hero Image */}
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
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=700&h=600&fit=crop&crop=center" 
                  alt="Cricket Training at Pitch & Play"
                  width={700}
                  height={600}
                  className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute top-4 lg:top-6 right-4 lg:right-6 bg-white/90 backdrop-blur-sm rounded-xl p-3 lg:p-4 shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs lg:text-sm font-medium text-gray-900">Live Training</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 lg:p-6 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">Professional Training</h3>
                  <p className="text-gray-600 mb-3 text-sm lg:text-base">State-of-the-art facilities with expert coaching</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">4.9/5</span>
                    </div>
                    <Link href="/contact">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-xs lg:text-sm">
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Why Choose Pitch &amp; Play?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Experience cricket training like never before with our world-class facilities and expert coaching
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={feature.title} variants={fadeInUp} custom={index}>
                <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group bg-white h-full">
                  <div className="relative">
                    <Image 
                      src={feature.image}
                      alt={feature.title}
                      width={400}
                      height={256}
                      className="w-full h-48 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg lg:text-xl font-bold text-white mb-2">{feature.title}</h3>
                    </div>
                  </div>
                  
                  <CardContent className="p-4 lg:p-6">
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm lg:text-base">{feature.description}</p>
                    <Link href={feature.link}>
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-sm lg:text-base">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
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
              What Our Members Say
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Join hundreds of satisfied cricketers who have transformed their game with us
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
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 h-full">
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
                          <p className="text-xs lg:text-sm text-gray-600">{testimonial.role}</p>
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
      <section className="py-12 lg:py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 relative overflow-hidden">
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
              Ready to Start Your Cricket Journey?
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-8 lg:mb-10 leading-relaxed px-4">
              Join Edmonton&apos;s premier cricket academy today. Professional training, 
              modern facilities, and a community that shares your passion for cricket.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center max-w-md sm:max-w-none mx-auto">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 h-auto shadow-xl">
                  Book Your First Session
                  <ArrowRight className="ml-2 w-5 lg:w-6 h-5 lg:h-6" />
                </Button>
              </Link>
              <Link href="/junior-academy">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-600 text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 h-auto">
                  Explore Junior Academy
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
