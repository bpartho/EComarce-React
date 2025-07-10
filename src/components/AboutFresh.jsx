const AboutFresh = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="/about.png"
                alt="Fresh produce vendor with vegetables"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-200 rounded-full opacity-15 animate-pulse delay-1000"></div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Bringing{" "}
                <span className="text-green-600 relative">
                  Freshness
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-green-200 rounded-full"></div>
                </span>
                <br />
                to Your Door
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus ac leo a lacus posuere tincidunt id nec nisl.
                Pellentesque sed semper lacus.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">
                  12+
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Happy Customers
                </div>
              </div>

              <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">
                  4.5
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Market Rating
                </div>
              </div>

              <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">
                  350+
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Happy Customers
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                size="lg"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFresh;
