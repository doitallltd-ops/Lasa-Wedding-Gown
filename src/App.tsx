/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  Menu, 
  X, 
  ChevronRight, 
  Star, 
  Heart, 
  Sparkles,
  Scissors,
  Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Collections', href: '#collections' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const collections = [
    {
      title: 'Bridal Couture',
      image: 'https://images.unsplash.com/photo-1594553813413-2df789777837?q=80&w=800&auto=format&fit=crop',
      description: 'Handcrafted elegance for your special day.'
    },
    {
      title: 'Evening Wear',
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800&auto=format&fit=crop',
      description: 'Sophisticated gowns for every celebration.'
    },
    {
      title: 'Custom Tailoring',
      image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=800&auto=format&fit=crop',
      description: 'Perfectly fitted to your unique silhouette.'
    }
  ];

  const services = [
    {
      icon: <Scissors className="w-6 h-6" />,
      title: 'Custom Tailoring',
      description: 'Bespoke gown design and tailoring tailored to your exact measurements and style preferences.'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Bridal Consultation',
      description: 'Personalized sessions to help you find or design the dress of your dreams.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Alterations',
      description: 'Expert fitting and alteration services to ensure your gown fits like a second skin.'
    }
  ];

  const reviews = [
    {
      name: 'Ananya Sharma',
      text: 'The dress was absolutely beautiful and fit perfectly. The attention to detail at Lasa is unmatched.',
      rating: 5
    },
    {
      name: 'Priya Mehta',
      text: 'Found my dream wedding gown here! The staff is so helpful and the custom tailoring is top-notch.',
      rating: 5
    },
    {
      name: 'Sneha Kapoor',
      text: 'Elegant designs and such a warm atmosphere. Highly recommend for any bride-to-be in Mumbai.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-2xl font-serif font-bold tracking-widest text-brand-charcoal">
            LASA <span className="text-brand-gold">WEDDING GOWN</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium uppercase tracking-widest hover:text-brand-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-brand-charcoal text-white px-6 py-2 rounded-full text-sm font-medium uppercase tracking-widest hover:bg-brand-gold transition-all duration-300">
              Book Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-brand-charcoal" onClick={() => setIsMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-white flex flex-col p-8"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="w-8 h-8 text-brand-charcoal" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-grow space-y-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-serif hover:text-brand-gold"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-brand-charcoal text-white px-10 py-4 rounded-full text-lg font-medium uppercase tracking-widest">
                Book Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1546193430-c2d20e1ca977?q=80&w=2000&auto=format&fit=crop" 
              alt="Bridal Gown" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          
          <div className="relative z-10 text-center text-white px-6">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-sm uppercase tracking-[0.3em] mb-4"
            >
              Exquisite Bridal Couture
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-8xl font-serif mb-8 leading-tight"
            >
              Elegance for Your <br /> <span className="italic">Perfect Day</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <button className="bg-white text-brand-charcoal px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-white transition-all duration-300 shadow-xl">
                Explore Collections
              </button>
            </motion.div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-px h-12 bg-white/50"></div>
          </div>
        </section>

        {/* Collections */}
        <section id="collections" className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Collections</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Discover our curated selection of bridal and evening wear, designed to make every moment unforgettable.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {collections.map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[3/4] overflow-hidden mb-6">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white border border-white px-6 py-2 uppercase tracking-widest text-xs">View Details</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-brand-ivory">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop" 
                  alt="Boutique Interior" 
                  className="w-full h-full object-cover shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-brand-gold/10 -z-0 hidden md:block"></div>
            </div>
            
            <div>
              <span className="text-brand-gold font-medium uppercase tracking-widest text-sm mb-4 block">About Lasa</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">A Legacy of Beauty and Craftsmanship</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>Located in the heart of Bandra West, Mumbai, Lasa Wedding Gown has been a sanctuary for brides seeking elegance and perfection for years.</p>
                <p>As a women-owned business, we understand the emotional journey of finding the perfect gown. We pride ourselves on being an LGBTQ+ friendly space where everyone is celebrated and welcomed.</p>
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                      <Heart className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium">Women-Owned</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                      <Users className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium">LGBTQ+ Friendly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Services</h2>
              <p className="text-gray-500">Comprehensive bridal services to ensure your journey is as beautiful as your wedding day.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {services.map((service, idx) => (
                <div key={idx} className="text-center p-8 rounded-2xl hover:bg-brand-ivory transition-colors duration-300">
                  <div className="w-16 h-16 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-gold/20">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-serif mb-4">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-brand-charcoal text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Kind Words</h2>
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />)}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reviews.map((review, idx) => (
                <div key={idx} className="bg-white/5 p-8 border border-white/10 rounded-xl backdrop-blur-sm">
                  <p className="italic text-lg mb-6 text-gray-300">"{review.text}"</p>
                  <p className="font-medium text-brand-gold">— {review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Location */}
        <section id="contact" className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-8">Visit Our Boutique</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-brand-gold shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Location</h4>
                    <p className="text-gray-600">43, Hill Rd, Opposite Elco Market, Ranwar, Bandra West, Mumbai, Maharashtra 400050</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-brand-gold shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-gray-600">098205 88827</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-brand-gold shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Hours</h4>
                    <p className="text-gray-600">Monday - Sunday: 9:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-brand-ivory rounded-2xl">
                <h3 className="text-2xl font-serif mb-6">Book an Appointment</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-gold/50" />
                    <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-gold/50" />
                  </div>
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-gold/50" />
                  <textarea placeholder="Tell us about your dream gown..." rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-gold/50"></textarea>
                  <button className="w-full bg-brand-charcoal text-white py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-brand-gold transition-colors">Send Inquiry</button>
                </form>
              </div>
            </div>

            <div className="h-full min-h-[400px] bg-gray-100 rounded-2xl overflow-hidden relative">
              {/* Placeholder for Google Maps */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <MapPin className="w-12 h-12 text-brand-gold mb-4" />
                <h4 className="text-xl font-serif mb-2">Find Us in Bandra</h4>
                <p className="text-gray-500 mb-6">Opposite Elco Market, Hill Road</p>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Lasa+Wedding+Gown+Bandra+West+Mumbai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-brand-charcoal text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest"
                >
                  Open in Google Maps
                </a>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000&auto=format&fit=crop" 
                alt="Map Background" 
                className="w-full h-full object-cover opacity-20"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-ivory py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-2xl font-serif font-bold tracking-widest mb-6">LASA <span className="text-brand-gold">WEDDING GOWN</span></h2>
              <p className="text-gray-500 max-w-sm mb-8">Crafting dreams into reality since our inception. We specialize in custom bridal couture and evening wear that celebrates your unique beauty.</p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-charcoal hover:bg-brand-gold hover:text-white transition-all shadow-sm">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-charcoal hover:bg-brand-gold hover:text-white transition-all shadow-sm">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li><a href="#home" className="hover:text-brand-gold">Home</a></li>
                <li><a href="#collections" className="hover:text-brand-gold">Collections</a></li>
                <li><a href="#services" className="hover:text-brand-gold">Services</a></li>
                <li><a href="#about" className="hover:text-brand-gold">About Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Contact</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>098205 88827</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>hello@lasaweddinggown.com</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>Bandra West, Mumbai</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 uppercase tracking-widest">
            <p>© 2026 Lasa Wedding Gown. All Rights Reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-brand-gold">Privacy Policy</a>
              <a href="#" className="hover:text-brand-gold">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
