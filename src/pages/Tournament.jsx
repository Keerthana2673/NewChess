import React from 'react';
import ParallaxHeader from '../components/Parallaxheader';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Tournament = () => {
  const handleRegister = () => {
    window.open(
      'https://forms.gle/ruymyCNpCQiURfFT9',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <>
      <ParallaxHeader
        title="Chess Tournaments"
        breadcrumbs={[{ title: 'Tournaments', path: '/tournament' }]}
        backgroundImage="/images/aboutheader.jpg"
        overlayColor="rgba(0, 0, 0, 0.7)"
      />

      <section className="py-20 bg-gradient-to-b from-white to-[#f8f5ed]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Elite Competitive Chess
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              Compete in Prestigious Chess Tournaments
            </h1>

            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Join our carefully curated chess tournaments designed for players at every level.
              From local enthusiasts to international competitors, find your perfect challenge.
            </p>

            {/* Registration CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 inline-flex flex-col sm:flex-row gap-4 items-center justify-center"
            >
              <button
                onClick={handleRegister}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl shadow-lg shadow-amber-500/20 flex items-center group"
              >
                Register for Tournament
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Registration Process Section */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl shadow-2xl overflow-hidden border border-gray-800">
              <div className="p-8 md:p-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
                    Tournament Registration Process
                  </h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Register for any tournament in just a few simple steps through our official Google Form
                  </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                  <div className="lg:w-1/2">
                    <div className="space-y-6">
                      {[
                        {
                          step: '1',
                          title: 'Fill Registration Form',
                          description:
                            'Provide your details, chess rating, and tournament preferences through our secure Google Form',
                          icon: '📝',
                        },
                        {
                          step: '2',
                          title: 'Payment Processing',
                          description:
                            'Complete secure payment through our integrated system with multiple payment options',
                          icon: '💳',
                        },
                        {
                          step: '3',
                          title: 'Confirmation & Details',
                          description:
                            'Receive tournament schedule, player guide, and access details via email within 24 hours',
                          icon: '📧',
                        },
                      ].map((item, index) => (
                        <div key={index} className="flex items-start group">
                          <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mr-4 group-hover:bg-amber-500/20 transition-colors">
                            <span className="text-2xl">{item.icon}</span>
                          </div>
                          <div>
                            <div className="text-amber-400 font-bold text-sm mb-1">
                              STEP {item.step}
                            </div>
                            <h4 className="text-white font-bold text-lg mb-2">
                              {item.title}
                            </h4>
                            <p className="text-gray-400">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:w-1/2">
                    <div className="bg-gray-800/30 border border-gray-700 rounded-2xl p-8 text-center">
                      <div className="text-6xl mb-6">🏆</div>
                      <h3 className="text-2xl font-bold text-white mb-4 font-serif">
                        Ready to Compete?
                      </h3>
                      <p className="text-gray-400 mb-8">
                        Access our official tournament registration form to begin your journey
                      </p>
                      <button
                        onClick={handleRegister}
                        className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl shadow-lg shadow-amber-500/20 flex items-center justify-center group"
                      >
                        <span>Open Registration Form</span>
                        <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <p className="text-gray-500 text-sm mt-4">
                        You'll be redirected to Google Forms
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tournament;