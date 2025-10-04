'use client';

import { useState } from 'react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      category: 'weddings',
      title: 'Elegant Garden Wedding',
      image: '/api/placeholder/400/300',
      description: 'Beautiful outdoor ceremony with floral arrangements'
    },
    {
      id: 2,
      category: 'weddings',
      title: 'Luxury Ballroom Reception',
      image: '/api/placeholder/400/300',
      description: 'Grand reception in a luxury hotel ballroom'
    },
    {
      id: 3,
      category: 'birthdays',
      title: 'Kids Birthday Party',
      image: '/api/placeholder/400/300',
      description: 'Colorful and fun birthday celebration'
    },
    {
      id: 4,
      category: 'birthdays',
      title: 'Milestone Birthday',
      image: '/api/placeholder/400/300',
      description: 'Elegant 50th birthday celebration'
    },
    {
      id: 5,
      category: 'corporate',
      title: 'Company Gala',
      image: '/api/placeholder/400/300',
      description: 'Annual corporate gala event'
    },
    {
      id: 6,
      category: 'corporate',
      title: 'Product Launch',
      image: '/api/placeholder/400/300',
      description: 'Exciting new product reveal event'
    },
    {
      id: 7,
      category: 'weddings',
      title: 'Beach Wedding',
      image: '/api/placeholder/400/300',
      description: 'Romantic sunset beach ceremony'
    },
    {
      id: 8,
      category: 'birthdays',
      title: 'Surprise Party',
      image: '/api/placeholder/400/300',
      description: 'Memorable surprise birthday celebration'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'weddings', name: 'Weddings' },
    { id: 'birthdays', name: 'Birthdays' },
    { id: 'corporate', name: 'Corporate' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
            Our Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse through our portfolio of beautifully executed events and celebrations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-rose-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-rose-50 hover:text-rose-600 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 bg-gradient-to-br from-rose-100 to-pink-200 overflow-hidden">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Event Image</span>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-rose-600 p-3 rounded-full shadow-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${
                    item.category === 'weddings' ? 'bg-rose-500 text-white' :
                    item.category === 'birthdays' ? 'bg-blue-500 text-white' :
                    'bg-green-500 text-white'
                  }`}>
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-rose-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-white text-rose-600 border-2 border-rose-600 px-8 py-4 rounded-xl font-semibold hover:bg-rose-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg">
            View More Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;