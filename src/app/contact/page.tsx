"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Calendar, Send, MessageCircle, Navigation as NavigationIcon, Users } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { fadeInUp, staggerContainer } from '@/lib/utils'
import Navigation from '@/components/Navigation'
import Image from 'next/image'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    serviceType: '',
    preferredContact: 'email'
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      primary: "+1 (780) 234-3339",
      secondary: "Available 24/7",
      description: "Call us anytime for immediate assistance",
      color: "green"
    },
    {
      icon: Mail,
      title: "Email",
      primary: "info@pitchandplay.ca",
      secondary: "Response within 2 hours",
      description: "Send us a detailed message",
      color: "blue"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      primary: "+1 (780) 234-3339",
      secondary: "Quick messages",
      description: "Chat with us instantly",
      color: "green"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "8227 Roper Road, NW",
      secondary: "Edmonton, Alberta T6E 6S4",
      description: "Come see our facilities",
      color: "purple"
    }
  ]

  const operatingHours = [
    { day: "Monday", hours: "4:00 PM - 12:00 AM", type: "regular" },
    { day: "Tuesday", hours: "4:00 PM - 12:00 AM", type: "regular" },
    { day: "Wednesday", hours: "4:00 PM - 12:00 AM", type: "regular" },
    { day: "Thursday", hours: "4:00 PM - 12:00 AM", type: "regular" },
    { day: "Friday", hours: "4:00 PM - 12:00 AM", type: "regular" },
    { day: "Saturday", hours: "9:00 AM - 12:00 AM", type: "weekend" },
    { day: "Sunday", hours: "9:00 AM - 12:00 AM", type: "weekend" }
  ]

  const quickActions = [
    {
      icon: Calendar,
      title: "Book a Lane",
      description: "Reserve your cricket lane",
      action: "Book Now",
      color: "blue"
    },
    {
      icon: Users,
      title: "Schedule Coaching",
      description: "Book a session with our coaches",
      action: "Schedule",
      color: "green"
    },
    {
      icon: NavigationIcon,
      title: "Get Directions",
      description: "Navigate to our facility",
      action: "Directions",
      color: "purple"
    }
  ]

  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600", 
    purple: "from-purple-500 to-purple-600",
    red: "from-red-500 to-red-600"
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-blue-50 pt-24 pb-8 lg:pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-100 rounded-full opacity-50 blur-3xl"></div>
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
              <motion.div variants={fadeInUp} className="space-y-4">
                <motion.span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  📞 Get In Touch
                </motion.span>
                
                <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                  Contact
                  <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    Pitch &amp; Play
                  </span>
                </motion.h1>
                
                <motion.p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Ready to start your cricket journey? Get in touch with us today. We&apos;re here to help you 
                  with bookings, coaching, equipment, and any questions you might have.
                </motion.p>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-3 lg:gap-4">
                <div className="text-center p-3 lg:p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-xl lg:text-2xl font-bold text-green-600">24/7</p>
                  <p className="text-xs lg:text-sm text-gray-600">Available</p>
                </div>
                <div className="text-center p-3 lg:p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-xl lg:text-2xl font-bold text-blue-600">2hr</p>
                  <p className="text-xs lg:text-sm text-gray-600">Response Time</p>
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
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
              >
                <Image 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=500&fit=crop&crop=center" 
                  alt="Contact Pitch & Play"
                  width={600}
                  height={500}
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6 text-white">
                  <p className="text-lg lg:text-xl font-semibold mb-2">Visit Our Modern Facility</p>
                  <div className="flex flex-wrap items-center gap-2 lg:gap-4 text-sm">
                    <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" />Edmonton, Alberta</span>
                    <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />Open Daily</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
              How to Reach Us
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Choose your preferred way to get in touch. We&apos;re always ready to help!
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <motion.div key={method.title} variants={fadeInUp} custom={index}>
                  <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-white h-full">
                    <CardContent className="p-6 lg:p-8">
                      <motion.div
                        className={`w-14 lg:w-16 h-14 lg:h-16 bg-gradient-to-br ${colorClasses[method.color as keyof typeof colorClasses]} rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <IconComponent className="w-6 lg:w-8 h-6 lg:h-8 text-white" />
                      </motion.div>
                      
                      <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                      <p className="text-base lg:text-lg font-semibold text-blue-600 mb-1">{method.primary}</p>
                      <p className="text-sm text-green-600 font-medium mb-2">{method.secondary}</p>
                      <p className="text-gray-600 text-sm mb-4">{method.description}</p>
                      
                      <Button className={`w-full bg-gradient-to-r ${colorClasses[method.color as keyof typeof colorClasses]} hover:shadow-lg transition-all duration-300`}>
                        Contact
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-xl">
                <CardHeader className="pb-6 lg:pb-8">
                  <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900 flex items-center">
                    <Send className="w-6 lg:w-8 h-6 lg:h-8 mr-3 text-blue-600" />
                    Send us a Message
                  </CardTitle>
                  <CardDescription className="text-base lg:text-lg text-gray-600">
                    Fill out the form below and we&apos;ll get back to you within 2 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base"
                          placeholder="+1 (780) 234-3339"
                        />
                      </div>
                      <div>
                        <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                          Service Interest
                        </label>
                        <select
                          id="serviceType"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base"
                        >
                          <option value="">Select a service</option>
                          <option value="lane-rental">Lane Rental</option>
                          <option value="coaching">Cricket Coaching</option>
                          <option value="junior-academy">Junior Academy</option>
                          <option value="equipment">Equipment Purchase</option>
                          <option value="bat-services">Bat Services</option>
                          <option value="corporate">Corporate Events</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base"
                        placeholder="What would you like to discuss?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-base"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Preferred Contact Method
                      </label>
                      <div className="flex flex-wrap gap-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="email"
                            checked={formData.preferredContact === 'email'}
                            onChange={handleInputChange}
                            className="mr-2 w-4 h-4"
                          />
                          <span className="text-base">Email</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="phone"
                            checked={formData.preferredContact === 'phone'}
                            onChange={handleInputChange}
                            className="mr-2 w-4 h-4"
                          />
                          <span className="text-base">Phone</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="whatsapp"
                            checked={formData.preferredContact === 'whatsapp'}
                            onChange={handleInputChange}
                            className="mr-2 w-4 h-4"
                          />
                          <span className="text-base">WhatsApp</span>
                        </label>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-base lg:text-lg py-4 h-auto"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Business Info */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-6 lg:space-y-8"
            >
              {/* Operating Hours */}
              <motion.div variants={fadeInUp}>
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl lg:text-2xl font-bold text-gray-900 flex items-center">
                      <Clock className="w-5 lg:w-6 h-5 lg:h-6 mr-3 text-green-600" />
                      Operating Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 lg:space-y-4">
                    {operatingHours.map((schedule, index) => (
                      <motion.div
                        key={schedule.day}
                        className={`flex justify-between items-center p-3 lg:p-4 rounded-lg ${
                          schedule.type === 'weekend' ? 'bg-green-50 border border-green-200' : 'bg-gray-50'
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className="font-medium text-gray-900 text-sm lg:text-base">{schedule.day}</span>
                        <span className={`font-semibold text-sm lg:text-base ${schedule.type === 'weekend' ? 'text-green-600' : 'text-blue-600'}`}>
                          {schedule.hours}
                        </span>
                      </motion.div>
                    ))}
                    <div className="mt-4 lg:mt-6 p-3 lg:p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200">
                      <p className="text-sm text-gray-700">
                        <strong>24/7 Availability:</strong> We offer round-the-clock access by appointment. 
                        Call us anytime to schedule your session!
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Quick Actions */}
              <motion.div variants={fadeInUp}>
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl lg:text-2xl font-bold text-gray-900">
                      Quick Actions
                    </CardTitle>
                    <CardDescription>
                      Common requests - get started immediately
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 lg:space-y-4">
                    {quickActions.map((action, index) => {
                      const IconComponent = action.icon
                      return (
                        <motion.div
                          key={action.title}
                          className="flex items-center justify-between p-3 lg:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                          whileHover={{ scale: 1.02 }}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="flex items-center space-x-3 lg:space-x-4">
                            <div className={`w-10 lg:w-12 h-10 lg:h-12 bg-gradient-to-br ${colorClasses[action.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center`}>
                              <IconComponent className="w-5 lg:w-6 h-5 lg:h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 text-sm lg:text-base">{action.title}</h4>
                              <p className="text-xs lg:text-sm text-gray-600">{action.description}</p>
                            </div>
                          </div>
                          <Button size="sm" className={`bg-gradient-to-r ${colorClasses[action.color as keyof typeof colorClasses]} text-xs lg:text-sm`}>
                            {action.action}
                          </Button>
                        </motion.div>
                      )
                    })}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Location Map Placeholder */}
              <motion.div variants={fadeInUp}>
                <Card className="border-0 shadow-lg overflow-hidden">
                  <div className="h-48 lg:h-64 bg-gradient-to-br from-green-500 via-blue-500 to-green-600 relative">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center px-4">
                        <MapPin className="w-12 lg:w-16 h-12 lg:h-16 mx-auto mb-3 lg:mb-4" />
                        <p className="text-lg lg:text-xl font-semibold">Find Us Here</p>
                        <p className="text-blue-100 text-sm lg:text-base">8227 Roper Road, NW</p>
                        <p className="text-blue-100 text-sm lg:text-base">Edmonton, Alberta T6E 6S4</p>
                        <Button className="mt-3 lg:mt-4 bg-white text-blue-600 hover:bg-gray-100 text-sm lg:text-base">
                          <NavigationIcon className="w-4 h-4 mr-2" />
                          Get Directions
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage 