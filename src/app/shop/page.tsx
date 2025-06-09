"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, Star, Filter, Grid, List, ArrowRight, Heart, Eye } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { fadeInUp, staggerContainer } from '@/lib/utils'
import Navigation from '@/components/Navigation'
import Image from 'next/image'

const ShopPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Products', count: 24 },
    { id: 'bats', name: 'Cricket Bats', count: 8 },
    { id: 'protective', name: 'Protective Gear', count: 6 },
    { id: 'apparel', name: 'Apparel', count: 5 },
    { id: 'accessories', name: 'Accessories', count: 5 }
  ]

  const products = [
    {
      id: 1,
      name: "Professional English Willow Bat",
      brand: "Gray-Nicolls",
      price: 299.99,
      originalPrice: 349.99,
      rating: 4.8,
      reviews: 45,
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=300&fit=crop&crop=center",
      category: "bats",
      featured: true,
      inStock: true,
      description: "Premium English willow cricket bat with perfect balance and exceptional performance."
    },
    {
      id: 2,
      name: "Professional Batting Pads",
      brand: "Kookaburra",
      price: 149.99,
      originalPrice: null,
      rating: 4.6,
      reviews: 32,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=center",
      category: "protective",
      featured: false,
      inStock: true,
      description: "Lightweight yet durable batting pads with excellent protection and comfort."
    },
    {
      id: 3,
      name: "Cricket Training Jersey",
      brand: "Adidas",
      price: 59.99,
      originalPrice: 79.99,
      rating: 4.5,
      reviews: 28,
      image: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=300&h=300&fit=crop&crop=center",
      category: "apparel",
      featured: false,
      inStock: true,
      description: "Moisture-wicking training jersey perfect for practice sessions."
    },
    {
      id: 4,
      name: "Professional Batting Gloves",
      brand: "New Balance",
      price: 89.99,
      originalPrice: null,
      rating: 4.7,
      reviews: 41,
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=300&h=300&fit=crop&crop=center",
      category: "protective",
      featured: true,
      inStock: true,
      description: "High-quality batting gloves with superior grip and protection."
    },
    {
      id: 5,
      name: "Cricket Ball Set (6 Pack)",
      brand: "Dukes",
      price: 79.99,
      originalPrice: null,
      rating: 4.9,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=300&h=300&fit=crop&crop=center",
      category: "accessories",
      featured: false,
      inStock: true,
      description: "Professional grade cricket balls perfect for training and matches."
    },
    {
      id: 6,
      name: "Wicket Keeping Gloves",
      brand: "SS",
      price: 129.99,
      originalPrice: 159.99,
      rating: 4.4,
      reviews: 23,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=center",
      category: "protective",
      featured: false,
      inStock: false,
      description: "Professional wicket keeping gloves with excellent catching surface."
    },
    {
      id: 7,
      name: "Cricket Helmet",
      brand: "Masuri",
      price: 199.99,
      originalPrice: null,
      rating: 4.8,
      reviews: 35,
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=300&h=300&fit=crop&crop=center",
      category: "protective",
      featured: true,
      inStock: true,
      description: "Titanium grille cricket helmet with superior protection and comfort."
    },
    {
      id: 8,
      name: "Cricket Kit Bag",
      brand: "Gray-Nicolls",
      price: 119.99,
      originalPrice: 149.99,
      rating: 4.6,
      reviews: 29,
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=300&fit=crop&crop=center",
      category: "accessories",
      featured: false,
      inStock: true,
      description: "Spacious cricket kit bag with multiple compartments and wheels."
    }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  const featuredProducts = products.filter(product => product.featured)

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-100 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="space-y-8"
            >
              <motion.div variants={fadeInUp} className="space-y-4">
                <motion.span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  🛒 Cricket Equipment Store
                </motion.span>
                
                <motion.h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Premium Cricket
                  <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Equipment
                  </span>
                </motion.h1>
                
                <motion.p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  Discover our extensive collection of professional cricket equipment from world-renowned brands. 
                  Everything you need to elevate your game.
                </motion.p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg">
                  View Catalog
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-600">50+</p>
                  <p className="text-sm text-gray-600">Products Available</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">4.8★</p>
                  <p className="text-sm text-gray-600">Average Rating</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">24h</p>
                  <p className="text-sm text-gray-600">Fast Shipping</p>
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
                  src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=500&fit=crop&crop=center" 
                  alt="Cricket Equipment"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xl font-semibold mb-2">Professional Grade Equipment</p>
                  <p className="text-purple-200">From world-class brands</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600">
              Hand-picked premium equipment from top brands
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredProducts.map((product, index) => (
              <motion.div key={product.id} variants={fadeInUp} custom={index}>
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="relative">
                    <Image 
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={256}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                      Featured
                    </div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors">
                        <Heart className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-purple-600 font-medium">{product.brand}</p>
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                          {product.name}
                        </h3>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">({product.reviews})</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                          )}
                        </div>
                        <Button 
                          size="sm" 
                          className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                        >
                          <ShoppingCart className="w-4 h-4 mr-1" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* All Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-1/4">
              <Card className="p-6 border-0 shadow-md sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Categories
                </h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-purple-100 text-purple-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{category.name}</span>
                        <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">{category.count}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </Card>
            </div>

            {/* Products Grid */}
            <div className="lg:w-3/4">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">All Products</h2>
                  <p className="text-gray-600">{filteredProducts.length} products found</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex border rounded-lg">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-purple-100 text-purple-600' : 'text-gray-600'}`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-purple-100 text-purple-600' : 'text-gray-600'}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className={`grid gap-6 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}
              >
                {filteredProducts.map((product, index) => (
                  <motion.div key={product.id} variants={fadeInUp} custom={index}>
                    <Card className={`group overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 ${viewMode === 'list' ? 'flex-row flex' : ''}`}>
                      <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                        <Image 
                          src={product.image}
                          alt={product.name}
                          width={viewMode === 'list' ? 192 : 300}
                          height={viewMode === 'list' ? 192 : 192}
                          className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                            viewMode === 'list' ? 'w-full h-full' : 'w-full h-48'
                          }`}
                        />
                        {!product.inStock && (
                          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span className="text-white font-semibold">Out of Stock</span>
                          </div>
                        )}
                      </div>
                      
                      <CardContent className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm text-purple-600 font-medium">{product.brand}</p>
                            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                            {viewMode === 'list' && (
                              <p className="text-gray-600 text-sm mt-2">{product.description}</p>
                            )}
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600">({product.reviews})</span>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="text-xl font-bold text-gray-900">${product.price}</span>
                              {product.originalPrice && (
                                <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                              )}
                            </div>
                            <Button 
                              size="sm" 
                              disabled={!product.inStock}
                              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 disabled:opacity-50"
                            >
                              <ShoppingCart className="w-4 h-4 mr-1" />
                              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-white"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Need Help Choosing Equipment?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Our cricket experts are here to help you find the perfect equipment for your playing style and level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Get Expert Advice
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600">
                Visit Our Store
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ShopPage 