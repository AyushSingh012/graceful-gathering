const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah & James Wilson',
      event: 'Wedding Celebration',
      rating: 5,
      text: 'Graceful Gathering made our wedding day absolutely magical! Every detail was perfect, and we could actually enjoy our day stress-free. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 2,
      name: 'Michael Thompson',
      event: 'Corporate Gala',
      rating: 5,
      text: 'Professional, organized, and incredibly creative. Our annual corporate gala was the talk of the industry thanks to the Graceful Gathering team.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      event: 'Birthday Party',
      rating: 5,
      text: 'My daughter\'s 10th birthday was beyond expectations! The team handled everything from decorations to entertainment. So grateful for their amazing work!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 4,
      name: 'Robert Chen',
      event: 'Product Launch',
      rating: 5,
      text: 'Outstanding attention to detail and flawless execution. Our product launch was a huge success, and it\'s all thanks to Graceful Gathering.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex justify-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-8"
            >
              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-600 mb-6 leading-relaxed text-lg">
                "{testimonial.text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-200 to-pink-300 flex items-center justify-center overflow-hidden mr-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-xs">
                    Photo
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-rose-600">{testimonial.event}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-rose-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Events Planned</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-rose-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-rose-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Venue Partners</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-rose-600 mb-2">12</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to Create Your Perfect Event?
            </h3>
            <p className="text-rose-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trusted us with their special moments.
            </p>
            <button className="bg-white text-rose-600 px-8 py-4 rounded-xl font-semibold hover:bg-rose-50 transition duration-300 transform hover:scale-105">
              Start Planning Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;