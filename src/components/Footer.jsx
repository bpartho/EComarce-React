import { Facebook, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info & Email Signup */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Fresh_Bazar</h3>
            <p className="text-green-100 text-sm mb-6 leading-relaxed">
              consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-transparent border border-green-400 rounded-full text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              />
              <button className="bg-secondary hover:bg-green-300 text-primary font-semibold px-6 py-3 rounded-full transition-colors duration-200 flex items-center gap-2">
                Submit
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-semibold mb-6">Navigation</h4>
            <nav className="space-y-3">
              <a
                href="#"
                className="block text-green-100 hover:text-white transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#"
                className="block text-green-100 hover:text-white transition-colors duration-200"
              >
                About Us
              </a>
              <a
                href="#"
                className="block text-green-100 hover:text-white transition-colors duration-200"
              >
                Service
              </a>
              <a
                href="#"
                className="block text-green-100 hover:text-white transition-colors duration-200"
              >
                Shop
              </a>
              <a
                href="#"
                className="block text-green-100 hover:text-white transition-colors duration-200"
              >
                Pages
              </a>
            </nav>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-semibold mb-6">Quick Link</h4>
            <nav className="space-y-3">
              <a
                href="#"
                className="block text-green-100 hover:text-white transition-colors duration-200"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="block text-green-100 hover:text-white transition-colors duration-200"
              >
                FAQ
              </a>
              <a
                href="#"
                className="block text-green-100 hover:text-white transition-colors duration-200"
              >
                Blog
              </a>
              <a
                href="#"
                className="block text-green-100 hover:text-white transition-colors duration-200"
              >
                Shop
              </a>
              <a
                href="#"
                className="block text-green-100 hover:text-white transition-colors duration-200"
              >
                Testimonial
              </a>
            </nav>
          </div>

          {/* Information */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-semibold mb-6">Information</h4>
            <div className="space-y-4">
              <p className="text-green-100 text-sm">(105) 115-2920</p>
              <p className="text-green-100 text-sm">
                201 Air Street, 3rd Floor
              </p>
              <p className="text-green-100 text-sm">support@ladangmart.com</p>

              {/* Social Media Icons */}
              <div className="flex gap-3 pt-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-secondary hover:bg-green-300 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <Facebook className="w-5 h-5 text-primary" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-secondary hover:bg-green-300 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-secondary hover:bg-green-300 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <Instagram className="w-5 h-5 text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
