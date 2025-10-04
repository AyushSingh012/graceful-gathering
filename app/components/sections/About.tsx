const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Emily Johnson',
      role: 'Founder & Creative Director',
      description: 'With over 12 years in event planning, Emily brings creativity and precision to every event.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Operations Manager',
      description: 'Michael ensures flawless execution and manages our network of premium vendors.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 3,
      name: 'Sarah Martinez',
      role: 'Senior Event Planner',
      description: 'Sarah specializes in wedding planning and brings elegance to every celebration.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Corporate Events Specialist',
      description: 'David excels in creating impactful corporate events and brand experiences.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
  ];

  const values = [
    {
      icon: '✨',
      title: 'Creativity',
      description: 'We bring innovative ideas and unique touches to make each event memorable.'
    },
    {
      icon: '⚡',
      title: 'Excellence',
      description: 'We strive for perfection in every detail, ensuring flawless execution.'
    },
    {
      icon: '❤️',
      title: 'Passion',
      description: 'We genuinely love what we do and it shows in our work and dedication.'
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'We work closely with you to bring your vision to life, every step of the way.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
            Our Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over a decade, we've been turning visions into unforgettable experiences with passion, creativity, and attention to detail.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Story */}
          <div>
            <h3 className="text-3xl font-serif font-bold text-gray-800 mb-6">
              Creating Memories Since 2015
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Graceful Gathering was born from a simple belief: every celebration deserves to be extraordinary. 
                What started as a small passion project has grown into a premier event planning company trusted by hundreds of clients.
              </p>
              <p>
                Our journey began when our founder, Emily Johnson, noticed that many people were too stressed to enjoy 
                their own special moments. She set out to change that by creating a service that handles every detail, 
                allowing clients to truly be present and celebrate.
              </p>
              <p>
                Today, we're proud to have planned over 500 events, from intimate gatherings to grand celebrations, 
                each one as unique as the people we serve. Our team of dedicated professionals brings together years 
                of experience, creative vision, and meticulous planning to ensure your event is everything you dreamed of and more.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-rose-50 rounded-2xl p-6">
                <div className="text-3xl mb-4">🎯</div>
                <h4 className="font-semibold text-gray-800 mb-2">Our Mission</h4>
                <p className="text-gray-600 text-sm">
                  To create stress-free, unforgettable experiences that celebrate life's most precious moments with elegance and joy.
                </p>
              </div>
              <div className="bg-pink-50 rounded-2xl p-6">
                <div className="text-3xl mb-4">🌟</div>
                <h4 className="font-semibold text-gray-800 mb-2">Our Vision</h4>
                <p className="text-gray-600 text-sm">
                  To be the most trusted event planning partner, known for transforming visions into magical realities.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Image/Stats */}
          <div className="bg-gradient-to-br from-rose-50 to-pink-100 rounded-2xl p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">12+ Years of Experience</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">500+ Successful Events</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">50+ Premium Venue Partners</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">98% Client Satisfaction Rate</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Full-Service Planning</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-serif font-bold text-gray-800 text-center mb-12">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="font-semibold text-gray-800 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-3xl font-serif font-bold text-gray-800 text-center mb-12">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="text-center group"
              >
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-rose-200 to-pink-300 rounded-full flex items-center justify-center overflow-hidden">
                  <div className="w-28 h-28 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-xs">
                    Team Photo
                  </div>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-rose-600 transition-colors">
                  {member.name}
                </h4>
                <p className="text-rose-600 text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;