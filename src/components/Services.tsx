"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Users, ShoppingBag, Wrench, Target, Award } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { fadeInUp, staggerContainer } from '@/lib/utils'

const Services = () => {
  const services = [
    {
      icon: Calendar,
      title: "Lane Rental",
      description: "Professional cricket lanes with full run-up spaces available 24/7. Two full lanes (30 yards) and two short lanes (25 yards).",
      features: ["30-yard full run-up lanes", "25-yard short lanes", "24/7 availability", "Professional grade equipment"],
      price: "From $50/hour",
      color: "blue"
    },
    {
      icon: Users,
      title: "Cricket Coaching", 
      description: "Expert coaching from international players including Tyson George Gordon and Ishwar Sohi.",
      features: ["International coaches", "Individual sessions", "Group training", "Technique analysis"],
      price: "From $75/session",
      color: "green"
    },
    {
      icon: ShoppingBag,
      title: "Retail Store",
      description: "Complete cricket equipment and gear from top brands. Everything you need for your cricket journey.",
      features: ["Premium cricket bats", "Protective gear", "Team uniforms", "Accessories"],
      price: "Competitive pricing",
      color: "purple"
    },
    {
      icon: Target,
      title: "Bowling Machine",
      description: "Professional grade BOLA bowling machines with automatic feeders for consistent practice.",
      features: ["BOLA professional machines", "Automatic feeders", "Variable speed settings", "Precise delivery"],
      price: "Included with lane rental",
      color: "orange"
    },
    {
      icon: Wrench,
      title: "Bat Repair",
      description: "Expert bat repair and maintenance services to keep your equipment in perfect condition.",
      features: ["Professional repair", "Handle replacement", "Blade restoration", "Quick turnaround"],
      price: "From $25",
      color: "red"
    },
    {
      icon: Award,
      title: "Bat Knocking",
      description: "Professional bat knocking services to prepare your new bat for optimal performance.",
      features: ["Traditional knocking", "Machine knocking", "Oil treatment", "Performance optimization"],
      price: "From $35",
      color: "indigo"
    }
  ]

  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600", 
    purple: "from-purple-500 to-purple-600",
    orange: "from-orange-500 to-orange-600",
    red: "from-red-500 to-red-600",
    indigo: "from-indigo-500 to-indigo-600"
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
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
            className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4"
          >
            Our Services
          </motion.span>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Everything You Need for 
            <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Cricket Excellence
            </span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From professional lane rentals to expert coaching, we provide comprehensive cricket services 
            to help you achieve your goals and elevate your game.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                custom={index}
              >
                <Card className="h-full group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[service.color as keyof typeof colorClasses]} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <CardHeader className="relative">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${colorClasses[service.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </CardTitle>
                    
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Features list */}
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${colorClasses[service.color as keyof typeof colorClasses]} rounded-full`}></div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Price and CTA */}
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-gray-900">{service.price}</span>
                        <Button 
                          size="sm" 
                          className={`bg-gradient-to-r ${colorClasses[service.color as keyof typeof colorClasses]} hover:shadow-lg transition-all duration-300`}
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
                Contact us today to book your lane, schedule coaching sessions, or learn more about our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Contact Us
                </Button>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 