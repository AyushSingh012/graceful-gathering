'use client';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-rose-50 via-white to-pink-50 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-white/50"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-6 h-6 bg-rose-200 rounded-full opacity-60 animate-bounce"></div>
      <div className="absolute top-40 right-20 w-8 h-8 bg-pink-200 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-10 h-10 bg-rose-100 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge - Added margin-top */}
          <div className="inline-flex items-center px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-medium mb-8 mt-10">
            ✨ Creating Unforgettable Moments Since 2015
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            We Plan,{' '}
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              You Celebrate
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your vision into reality with our expert event planning services. 
            From intimate gatherings to grand celebrations, we handle every detail so you can enjoy every moment.
          </p>
          
          {/* CTA Buttons */}
<div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
  <button 
    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
    className="group bg-rose-600 text-white px-10 py-5 rounded-2xl text-lg font-semibold hover:bg-rose-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3"
  >
    <span>Book Your Event</span>
    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  </button>
  <button 
    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
    className="group border-2 border-rose-600 text-rose-600 px-10 py-5 rounded-2xl text-lg font-semibold hover:bg-rose-600 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
  >
    <span>Explore Services</span>
    <svg className="w-5 h-5 group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </button>
</div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto mb-20">
            <div className="text-center">
              <div className="text-4xl font-bold text-rose-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Events Planned</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-rose-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-rose-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Venue Partners</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator - Moved to be below the stats section */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce">
  <div className="flex flex-col items-center gap-2">
    <span className="text-gray-600 text-sm font-medium">Scroll to explore</span>
    <div className="w-6 h-10 border-2 border-rose-600 rounded-full flex justify-center">
      <div className="w-1 h-3 bg-rose-600 rounded-full mt-2 animate-pulse"></div>
    </div>
  </div>
</div>
    </section>
  );
};

export default Hero;