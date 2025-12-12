import React from 'react';
import ParallaxHeader from '../components/Parallaxheader';
import { motion } from 'framer-motion';
import {ChevronRight} from 'lucide-react';
{/*{ useState } from 'react';*/}
{/*import { Calendar, Clock, MapPin, Users, Trophy, Award, CheckCircle, Star, Zap } from 'lucide-react';*/}

const Tournament = () => {
  {/*const [activeTab, setActiveTab] = useState('upcoming');*/}

  {/*
  const tournaments = {
    upcoming: [
      {
        id: 1,
        title: "Royal Chess Championship 2024",
        date: "December 15-20, 2024",
        location: "Grand Chess Hall, London",
        format: "Swiss System",
        prize: "$10,000",
        level: "Advanced",
        players: 64,
        deadline: "December 10, 2024",
        status: "open",
        featured: true,
        rating: 4.9,
        reviews: 42
      },
      {
        id: 2,
        title: "Winter Blitz Tournament",
        date: "December 22, 2024",
        location: "Online",
        format: "Round Robin",
        prize: "$2,500",
        level: "All Levels",
        players: 32,
        deadline: "December 20, 2024",
        status: "open",
        rating: 4.9,
        reviews: 42
      },
      {
        id: 3,
        title: "New Year's Rapid Chess Open",
        date: "January 5-7, 2025",
        location: "Chess Federation, Paris",
        format: "Rapid",
        prize: "$5,000",
        level: "Intermediate+",
        players: 48,
        deadline: "December 28, 2024",
        status: "open",
        rating: 4.9,
        reviews: 42
      }
    ],
    ongoing: [
      {
        id: 4,
        title: "Autumn Open 2024",
        date: "November 20 - December 5, 2024",
        location: "International Chess Center, New York",
        format: "Knockout",
        prize: "$15,000",
        level: "Advanced",
        players: 48,
        status: "live",
        featured: true,
        currentRound: "Round 3/4"
      }
    ],
    past: [
      {
        id: 5,
        title: "Summer Masters 2024",
        date: "August 10-15, 2024",
        location: "Dubai Chess Club",
        winner: "GM Magnus Carlsen",
        runnerUp: "GM Hikaru Nakamura",
        prize: "$25,000",
        participants: 128,
        featured: true,
        highlight: "Record Prize Pool"
      },
      {
        id: 6,
        title: "Spring Classic 2024",
        date: "April 5-10, 2024",
        location: "Tokyo Chess Arena",
        winner: "GM Ding Liren",
        runnerUp: "GM Ian Nepomniachtchi",
        prize: "$12,000",
        participants: 96
      }
    ]
  };

  // Stats for the top section
  const stats = [
    { label: "Total Tournaments", value: "24", icon: <Trophy className="w-5 h-5" /> },
    { label: "Active Players", value: "1,200+", icon: <Users className="w-5 h-5" /> },
    { label: "Prize Money", value: "$250K+", icon: <Award className="w-5 h-5" /> },
    { label: "Countries", value: "45", icon: <MapPin className="w-5 h-5" /> }
  ];
  */}

  const handleRegister = (tournamentId) => {
    // Replace with your actual Google Form URL
    window.open(
      'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform',
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

      {/* Main Content */}
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
              <a
                href="#faq"
                className="border border-gray-300 hover:border-amber-500 text-gray-700 hover:text-amber-700 font-medium py-3 px-8 rounded-xl transition-all duration-300 hover:-translate-y-1"
              >
                Learn More
              </a>
            </motion.div>
          </div>

          {/* Stats Section - MOVED HERE: Between CTA and Tab Navigation */}
          {/*
          <div className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 text-center border border-amber-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <div className="text-amber-600">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>*/}

          {/* Tab Navigation */}
          {/*
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg bg-white border border-gray-200 p-1 shadow-sm">
              {['upcoming', 'ongoing', 'past'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${activeTab === tab
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-amber-700 hover:bg-amber-50'
                    }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)} Tournaments
                </button>
              ))}
            </div>
          </div> */}

          {/* Tournament Cards Grid */}
          {/*
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {tournaments[activeTab].map((tournament, index) => (
              <motion.div
                key={tournament.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl overflow-hidden shadow-2xl border border-gray-800 group hover:shadow-2xl transition-all duration-300 ${tournament.featured ? 'ring-2 ring-amber-500/30' : ''
                  }`}
              >

                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${activeTab === 'ongoing'
                        ? 'bg-red-500/10 text-red-300 border-red-500/30'
                        : activeTab === 'past'
                          ? 'bg-gray-800/50 text-gray-400 border-gray-700'
                          : 'bg-green-500/10 text-green-300 border-green-500/30'
                      }`}>
                      {activeTab === 'ongoing' ? (
                        <span className="flex items-center">
                          <Zap className="w-3 h-3 mr-1" />
                          LIVE NOW
                        </span>
                      ) : activeTab === 'past' ? 'COMPLETED' : 'REGISTERING'}
                    </span>
                    {tournament.prize && (
                      <div className="text-amber-400 font-bold text-lg">
                        {tournament.prize}
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-300 transition-colors">
                    {tournament.title}
                  </h3>

                  {tournament.rating && (
                    <div className="flex items-center mb-4">
                      <div className="flex text-amber-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-gray-400 text-sm">
                        {tournament.rating} ({tournament.reviews} reviews)
                      </span>
                    </div>
                  )}

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 mr-3 text-amber-500" />
                      <span className="text-sm">{tournament.date}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin className="w-4 h-4 mr-3 text-amber-500" />
                      <span className="text-sm">{tournament.location}</span>
                    </div>
                    {activeTab !== 'past' && (
                      <div className="flex items-center text-gray-400">
                        <Users className="w-4 h-4 mr-3 text-amber-500" />
                        <span className="text-sm">{tournament.players} Players • {tournament.level}</span>
                      </div>
                    )}
                  </div>

                  <div className="mb-6">
                    <span className="inline-block bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-lg">
                      {tournament.format}
                    </span>
                  </div>

                  {activeTab === 'upcoming' ? (
                    <>
                      <div className="flex items-center text-gray-400 text-sm mb-4">
                        <Clock className="w-4 h-4 mr-2 text-amber-500" />
                        <span>Registration closes: <span className="text-red-400">{tournament.deadline}</span></span>
                      </div>
                      <button
                        onClick={() => handleRegister(tournament.id)}
                        className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl shadow-lg shadow-amber-500/20"
                      >
                        Register Now
                      </button>
                    </>
                  ) : activeTab === 'past' ? (
                    <div className="pt-6 border-t border-gray-800">
                      <div className="flex items-center mb-3">
                        <Trophy className="w-5 h-5 text-amber-500 mr-3" />
                        <div>
                          <div className="text-gray-400 text-sm mb-1">Champion</div>
                          <div className="text-white font-bold">{tournament.winner}</div>
                        </div>
                      </div>
                      <div className="text-gray-400 text-sm">
                        Runner-up: {tournament.runnerUp}
                      </div>
                      {tournament.highlight && (
                        <div className="mt-3 text-amber-300 text-sm">
                          <CheckCircle className="w-4 h-4 inline mr-1" />
                          {tournament.highlight}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="pt-6 border-t border-gray-800">
                      <div className="text-gray-400 text-sm mb-2">Current Status</div>
                      <div className="flex items-center justify-between">
                        <div className="text-green-400 text-sm font-medium">
                          <Zap className="w-4 h-4 inline mr-1" />
                          {tournament.currentRound}
                        </div>
                        <a
                          href="#"
                          className="text-amber-400 hover:text-amber-300 text-sm font-medium flex items-center group"
                        >
                          View Live
                          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>*/}

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
                          step: "1",
                          title: "Fill Registration Form",
                          description: "Provide your details, chess rating, and tournament preferences through our secure Google Form",
                          icon: "📝"
                        },
                        {
                          step: "2",
                          title: "Payment Processing",
                          description: "Complete secure payment through our integrated system with multiple payment options",
                          icon: "💳"
                        },
                        {
                          step: "3",
                          title: "Confirmation & Details",
                          description: "Receive tournament schedule, player guide, and access details via email within 24 hours",
                          icon: "📧"
                        }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start group">
                          <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mr-4 group-hover:bg-amber-500/20 transition-colors">
                            <span className="text-2xl">{item.icon}</span>
                          </div>
                          <div>
                            <div className="text-amber-400 font-bold text-sm mb-1">STEP {item.step}</div>
                            <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
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

          {/* FAQ Section */}
          <div id="faq" className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Common Questions
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find answers to the most common questions about our tournaments
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "How do I register for a tournament?",
                  a: "Click any 'Register Now' button on this page to access our Google Form. Fill out all required fields including your personal information, chess rating, and tournament preferences. Submit the form and you'll receive a confirmation email within 24 hours."
                },
                {
                  q: "What payment methods are accepted?",
                  a: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for international players. All payments are processed securely through our payment gateway."
                },
                {
                  q: "Can beginners participate in tournaments?",
                  a: "Yes! We have tournaments for all skill levels. Look for tournaments marked 'All Levels' or 'Beginner Friendly'. We also offer separate divisions to ensure fair competition."
                },
                {
                  q: "What happens if I need to withdraw?",
                  a: "You can withdraw up to 7 days before the tournament for a full refund. Within 7 days, a 50% refund is available. No refunds are given on the day of the tournament."
                },
                {
                  q: "Are online tournaments available?",
                  a: "Yes, we host regular online tournaments. These are marked with 'Online' location and follow the same registration process. You'll receive platform access details after registration."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-amber-200 transition-colors shadow-sm hover:shadow-md"
                >
                  <h3 className="text-gray-900 font-bold text-lg mb-3 flex items-center">
                    <span className="text-amber-600 mr-3">Q{index + 1}.</span>
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 pl-9">{faq.a}</p>
                </motion.div>
              ))}
            </div>

            {/* Additional Help CTA */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-amber-50 to-white border border-amber-100 rounded-2xl p-8 inline-block">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Need More Help?</h3>
                <p className="text-gray-600 mb-4">Contact our tournament support team</p>
                <a
                  href="mailto:kalyanraghavanchess@gmail.com"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                >
                  <svg xmlns="" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  kalyanraghavanchess@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tournament;