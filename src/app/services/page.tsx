"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Users, ShoppingBag, Wrench, Target, Clock, MapPin, Phone, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { fadeInUp, staggerContainer } from '@/lib/utils'
import Navigation from '@/components/Navigation'
import Image from 'next/image'

const ServicesPage = () => {
  const detailedServices = [
    {
      id: 'lane-rental',
      icon: Calendar,
      title: "Lane Rental",
      subtitle: "Professional Cricket Lanes",
      description: "State-of-the-art cricket lanes available 24/7 for individual practice, team training, and corporate events.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center",
      features: [
        "Two full run-up lanes (30 yards)",
        "Two short practice lanes (25 yards)", 
        "Professional grade equipment included",
        "Climate controlled environment",
        "24/7 availability by appointment",
        "Video recording capabilities"
      ],
      pricing: [
        { duration: "1 Hour", price: "$50", popular: false },
        { duration: "3 Hours", price: "$135", popular: true },
        { duration: "Full Day", price: "$400", popular: false }
      ],
      color: "blue"
    },
    {
      id: 'coaching',
      icon: Users,
      title: "Cricket Coaching",
      subtitle: "International Standard Training",
      description: "Expert coaching from international players including personalized training programs and technical analysis.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center",
      features: [
        "Individual coaching sessions",
        "Group training programs",
        "Video analysis technology",
        "Fitness and conditioning",
        "Mental preparation coaching",
        "Tournament preparation"
      ],
      pricing: [
        { duration: "1-on-1 Session", price: "$75", popular: false },
        { duration: "Group Session", price: "$45", popular: true },
        { duration: "Monthly Package", price: "$280", popular: false }
      ],
      color: "green"
    },
    {
      id: 'equipment',
      icon: ShoppingBag,
      title: "Equipment & Retail",
      subtitle: "Premium Cricket Gear",
      description: "Complete range of cricket equipment from top brands, with expert fitting and customization services.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center",
      features: [
        "Premium cricket bats",
        "Protective gear and pads",
        "Team uniforms and apparel",
        "Custom equipment fitting",
        "Equipment maintenance",
        "Trade-in programs"
      ],
      pricing: [
        { duration: "Starter Kit", price: "$199", popular: false },
        { duration: "Pro Kit", price: "$499", popular: true },
        { duration: "Elite Kit", price: "$899", popular: false }
      ],
      color: "purple"
    },
    {
      id: 'bowling-machine',
      icon: Target,
      title: "Bowling Machine Training",
      subtitle: "BOLA Professional Machines",
      description: "Advanced bowling machine sessions with automatic feeders for consistent and varied practice.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center",
      features: [
        "BOLA professional grade machines",
        "Automatic ball feeding system",
        "Variable speed and swing settings",
        "Different ball types available",
        "Lane rental included",
        "Technical support provided"
      ],
      pricing: [
        { duration: "30 Minutes", price: "Included", popular: false },
        { duration: "1 Hour", price: "Included", popular: true },
        { duration: "Extended Session", price: "Included", popular: false }
      ],
      color: "orange"
    },
    {
      id: 'bat-services',
      icon: Wrench,
      title: "Bat Services",
      subtitle: "Repair & Maintenance",
      description: "Professional bat repair, knocking, and maintenance services to keep your equipment in perfect condition.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center",
      features: [
        "Expert bat repair services",
        "Handle replacement",
        "Blade restoration and refinishing",
        "Professional bat knocking",
        "Oil treatment and conditioning",
        "Performance optimization"
      ],
      pricing: [
        { duration: "Basic Repair", price: "$25", popular: false },
        { duration: "Full Service", price: "$45", popular: true },
        { duration: "Premium Restore", price: "$75", popular: false }
      ],
      color: "red"
    }
  ]

  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600", 
    purple: "from-purple-500 to-purple-600",
    orange: "from-orange-500 to-orange-600",
    red: "from-red-500 to-red-600"
  }

  const facilities = [
    {
      name: "Professional Cricket Lanes",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
      description: "4 lanes with full run-up space"
    },
    {
      name: "Modern Equipment Room",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
      description: "Latest BOLA bowling machines"
    },
    {
      name: "Retail Showroom",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
      description: "Premium cricket equipment"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 pt-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-100 rounded-full opacity-30 blur-3xl"></div>
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
                <motion.span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  🏏 Professional Cricket Services
                </motion.span>
                
                <motion.h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Complete Cricket
                  <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    Solutions
                  </span>
                </motion.h1>
                
                <motion.p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  From professional lane rentals to expert coaching and equipment services. 
                  Everything you need to excel in cricket under one roof.
                </motion.p>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-2xl font-bold text-blue-600">5+</p>
                  <p className="text-sm text-gray-600">Services Offered</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-2xl font-bold text-green-600">24/7</p>
                  <p className="text-sm text-gray-600">Availability</p>
                </div>
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
              >
                <Image 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=500&fit=crop&crop=center" 
                  alt="Cricket Services"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xl font-semibold mb-2">Professional Cricket Facility</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" />Edmonton, AB</span>
                    <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />24/7 Access</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
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
              Our Services
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cricket services designed to support players at every level
            </motion.p>
          </motion.div>

          <div className="space-y-20">
            {detailedServices.map((service, index) => {
              const IconComponent = service.icon
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}
                >
                  <div className={`${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${colorClasses[service.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                          <p className="text-lg text-gray-600">{service.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-gray-700 text-lg leading-relaxed">{service.description}</p>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">Features Include:</h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <div className={`w-2 h-2 bg-gradient-to-r ${colorClasses[service.color as keyof typeof colorClasses]} rounded-full`}></div>
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        {service.pricing.map((price, priceIndex) => (
                          <div 
                            key={priceIndex} 
                            className={`p-4 rounded-lg border-2 text-center ${
                              price.popular 
                                ? 'border-blue-500 bg-blue-50' 
                                : 'border-gray-200 bg-white'
                            }`}
                          >
                            <p className="font-semibold text-gray-900">{price.duration}</p>
                            <p className={`text-lg font-bold ${price.popular ? 'text-blue-600' : 'text-gray-900'}`}>
                              {price.price}
                            </p>
                            {price.popular && (
                              <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">Popular</span>
                            )}
                          </div>
                        ))}
                      </div>

                      <Button className={`bg-gradient-to-r ${colorClasses[service.color as keyof typeof colorClasses]} text-white`}>
                        Book {service.title}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className={`${!isEven ? 'lg:col-start-1' : ''}`}>
                    <motion.div
                      className="relative rounded-2xl overflow-hidden shadow-xl"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image 
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Facilities Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Facilities
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art facilities designed for optimal cricket training and practice
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {facilities.map((facility, index) => (
              <motion.div key={facility.name} variants={fadeInUp} custom={index}>
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image 
                      src={facility.image}
                      alt={facility.name}
                      width={400}
                      height={192}
                      className="w-full h-48 object-cover"
                    />
                  </motion.div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{facility.name}</h3>
                    <p className="text-gray-600">{facility.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-white"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Book Our Services?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today to discuss your cricket training needs and book your preferred services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Phone className="mr-2 w-5 h-5" />
                Call +1 (780) 234-3339
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                Book Online
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage 