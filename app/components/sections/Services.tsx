'use client';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Wedding Planning',
      description: 'Complete wedding planning from venue selection to ceremony coordination. Your dream wedding, perfectly executed.',
      icon: '💍',
      features: ['Venue Selection', 'Vendor Coordination', 'Day-of Coordination', 'Budget Management']
    },
    {
      id: 2,
      title: 'Birthday Celebrations',
      description: 'Memorable birthday parties for all ages with creative themes and personalized touches.',
      icon: '🎂',
      features: ['Theme Design', 'Entertainment', 'Catering', 'Decor & Setup']
    },
    {
      id: 3,
      title: 'Corporate Events',
      description: 'Professional event planning for corporate gatherings, conferences, and team building activities.',
      icon: '💼',
      features: ['Conference Planning', 'Team Building', 'Product Launches', 'Award Ceremonies']
    },
    {
      id: 4,
      title: 'Entertainment Services',
      description: 'Complete entertainment solutions including DJs, performers, photographers, and interactive activities.',
      icon: '🎭',
      features: ['Live Music', 'Photo Booths', 'Performers', 'Audio-Visual Setup']
    }
  ];

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive event planning services tailored to make your occasion truly special and stress-free.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Service Icon */}
              <div className="relative h-48 bg-gradient-to-br from-rose-50 to-pink-100 flex items-center justify-center">
                <div className="text-6xl transform group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-rose-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 text-rose-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <button className="w-full bg-rose-50 text-rose-600 py-3 rounded-xl font-semibold hover:bg-rose-600 hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
  Learn More
  <svg className="w-4 h-4 transform hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
</button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Ready to Plan Your Perfect Event?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss your vision and create something extraordinary together.
            </p>
            <button 
              onClick={handleContactClick}
              className="bg-rose-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-rose-700 transition duration-300 shadow-lg hover:shadow-xl"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;