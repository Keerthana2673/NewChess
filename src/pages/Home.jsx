import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';
import '../animations.min.css';
import { reviews } from '../data/review';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleClick = () => {
    window.open('https://www.google.com/maps/place/Thirumal+Chess+Academy,+Tambaram+Corporation/@12.91707,80.07425,17z/data=!4m8!3m7!1s0x3a52f5899cb25019:0xb401e6efaa80188!8m2!3d12.9170735!4d80.076828!9m1!1b1!16s%2Fg%2F11b8_knpx4?entry=ttu&g_ep=EgoyMDI1MDYxNi4wIKXMDSoASAFQAw%3D%3D', '_blank', 'noopener,noreferrer');
  };

  const backgrounds = [
    "/images/hero/hero1.jpg",
    "/images/hero/hero2.jpg",
    "/images/hero/hero3.jpg"
  ];

  const heroContent = {
    title: "Elevate Your Chess Game",
    subtitle: "Join our masterclass programs with professional instructors",
    cta: "Explore Courses"
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: true
    });

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] overflow-hidden">
        <div className="hero-gradient absolute inset-0 z-0"></div>
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={bg}
              alt="Chess Academy"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        ))}

        <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center max-w-[1200px]">
          <div data-aos="fadeInLeft" data-aos-delay="100">
            <div className="chess-board-border w-24 h-24 absolute top-10 left-10 opacity-10"></div>
            <div className="chess-board-border w-16 h-16 absolute bottom-20 right-10 opacity-10"></div>

            <h1 className="text-5xl font-serif sm:text-6xl md:text-[72px] font-bold text-white mb-6 leading-tight tracking-tight">
              {heroContent.title}
              <span className="block w-24 h-1.5 bg-[#c9b26d] mt-6" data-aos="fade-right" data-aos-delay="300"></span>
            </h1>
            <p className="text-xl text-white/90 mb-10 font-serif max-w-2xl leading-relaxed">
              {heroContent.subtitle}
            </p>
            <div className="flex flex-wrap gap-6" data-aos="fade-up" data-aos-delay="400">
              <Link
                to="/courses"
                className="chess-button-primary px-10 py-5 rounded-lg text-lg font-medium shadow-xl hover:shadow-[#3a7d44]/50"
              >
                {heroContent.cta}
              </Link>
              <Link
                to="/about"
                className="chess-button-secondary px-10 py-5 rounded-lg text-lg font-medium"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce w-8 h-14 rounded-full border-4 border-white/30 flex justify-center">
              <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="relative z-20 -mt-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {[
            {
              bg: "bg-[#0d1b0f]",
              icon: "fas fa-chess-king",
              title: "Master Strategy",
              desc: "Learn proven techniques used by grandmasters to outmaneuver your opponent.",
              delay: 100
            },
            {
              bg: "bg-[#1a2a1d]",
              icon: "fas fa-user-check",
              title: "Expert Coaching",
              desc: "Train with top-rated instructors who've played at the highest levels.",
              delay: 200
            },
            {
              bg: "bg-[#0d1b0f]",
              icon: "fas fa-trophy",
              title: "Tournaments & Practice",
              desc: "Apply your skills in regular competitions with real feedback.",
              delay: 300
            }
          ].map((card, index) => (
            <div
              key={index}
              className={`${card.bg} text-white p-10 rounded-xl text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-white/10 chess-card`}
              data-aos="fade-up"
              data-aos-delay={card.delay}
            >
              <div className="feature-icon-wrapper mb-6">
                <i className={`${card.icon} text-4xl text-[#c9b26d]`}></i>
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4">{card.title}</h3>
              <p className="text-gray-300">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-[#f8f5ec]">
        <div className="container max-w-6xl mx-auto px-6 md:flex md:items-center gap-16">
          <div className="md:w-1/2 mb-14 md:mb-0 relative" data-aos="fade-right">
            <div className="absolute -inset-4 bg-[#c9b26d] rounded-lg transform rotate-3 z-0"></div>
            <div className="relative z-10">
              <img
                src="/images/homeabout.jpg"
                alt="About Chess Club"
                className="rounded-lg shadow-2xl border-4 border-white"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg z-20">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0d1b0f]">15+</div>
                <div className="text-sm font-medium text-[#c9b26d]">YEARS EXPERIENCE</div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2" data-aos="fade-left">
            <span className="text-[#c9b26d] uppercase tracking-widest font-semibold text-sm mb-4 block">
              About Us
            </span>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Building Grandmasters <br />One Move at a Time
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              At Thirumal Chess Academy, we cultivate critical thinking and competitive strategy through professional chess training. Our coaching programs transform enthusiasts into champions.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Personalized training programs",
                "FIDE-certified instructors",
                "Tournament preparation",
                "Cognitive skill development"
              ].map((item, i) => (
                <li key={i} className="flex items-center">
                  <i className="fas fa-chess-pawn text-[#c9b26d] mr-3"></i>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="chess-button-primary inline-block px-8 py-4 rounded-lg text-lg"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              Discover Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Our Courses Section */}
      <section className="py-28 bg-gradient-to-b from-[#f8f5ec] to-[#e8e0c9] relative overflow-hidden">
        <div className="chess-pattern absolute inset-0 opacity-10 z-0"></div>
        <div className="container max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="max-w-2xl mx-auto">
            <span className="text-[#c9b26d] uppercase tracking-widest font-semibold text-sm mb-4 inline-block relative" data-aos="fade-down">
              Our Programs
              <span className="block w-16 h-0.5 bg-[#c9b26d] mx-auto mt-3"></span>
            </span>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6" data-aos="fade-up">
              Strategic Learning Paths
            </h2>

            <p className="text-gray-700 mb-12 leading-relaxed text-lg" data-aos="fade-up" data-aos-delay="100">
              Structured programs designed for all ages and skill levels, with expert coaching and real-game strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Beginner's Journey",
                desc: "Foundational skills and basic strategies",
                icon: "fas fa-chess-pawn"
              },
              {
                title: "Competitive Edge",
                desc: "Tournament preparation and advanced tactics",
                icon: "fas fa-chess-knight"
              },
              {
                title: "Master Class",
                desc: "Grandmaster-level strategy and analysis",
                icon: "fas fa-chess-queen"
              }
            ].map((course, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={i * 100 + 200}
              >
                <div className="w-16 h-16 rounded-full bg-[#f8f5ec] flex items-center justify-center mb-6 mx-auto">
                  <i className={`${course.icon} text-2xl text-[#c9b26d]`}></i>
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-4 text-gray-900">{course.title}</h3>
                <p className="text-gray-600 mb-6">{course.desc}</p>
                <Link
                  to="/courses"
                  className="text-[#0d1b0f] font-medium hover:text-[#c9b26d] transition-colors inline-flex items-center"
                >
                  View program <i className="fas fa-arrow-right ml-2 text-sm"></i>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16" data-aos="zoom-in" data-aos-delay="500">
            <Link
              to="/courses"
              className="chess-button-primary px-10 py-5 rounded-lg text-lg"
            >
              Explore All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <span className="text-[#c9b26d] uppercase font-semibold text-sm mb-3 block">
              Why Choose Us
            </span>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-8">
              Excellence in Chess Education
            </h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Our methodology combines traditional chess mastery with modern teaching techniques to develop strategic thinkers and champions.
            </p>

            <div className="space-y-8">
              {[
                {
                  title: "Grandmaster Mentors",
                  desc: "Learn from internationally ranked players",
                  icon: "fas fa-chess-board"
                },
                {
                  title: "Proven Curriculum",
                  desc: "Structured learning path with measurable progress",
                  icon: "fas fa-book-open"
                },
                {
                  title: "Tournament Support",
                  desc: "Preparation and guidance for competitive play",
                  icon: "fas fa-trophy"
                }
              ].map((item, i) => (
                <div key={i} className="flex items-start" data-aos="fade-right" data-aos-delay={i * 100 + 200}>
                  <div className="w-12 h-12 rounded-full bg-[#f8f5ec] flex items-center justify-center mr-6 flex-shrink-0">
                    <i className={`${item.icon} text-lg text-[#c9b26d]`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="chess-board-pattern absolute -inset-8 z-0 opacity-10"></div>
            <div className="relative z-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#f8f5ec] rounded-xl p-8 shadow-md" data-aos="fade-up" data-aos-delay="300">
                  <div className="text-5xl font-bold text-[#0d1b0f] mb-3">98%</div>
                  <div className="text-lg text-gray-700">Student Satisfaction</div>
                </div>
                <div className="bg-[#0d1b0f] rounded-xl p-8 shadow-md" data-aos="fade-up" data-aos-delay="400">
                  <div className="text-5xl font-bold text-[#c9b26d] mb-3">250+</div>
                  <div className="text-lg text-white">Tournament Wins</div>
                </div>
                <div className="bg-[#c9b26d] rounded-xl p-8 shadow-md" data-aos="fade-up" data-aos-delay="500">
                  <div className="text-5xl font-bold text-white mb-3">15</div>
                  <div className="text-lg text-white">Certified Coaches</div>
                </div>
                <div className="bg-[#f8f5ec] rounded-xl p-8 shadow-md" data-aos="fade-up" data-aos-delay="600">
                  <div className="text-5xl font-bold text-[#0d1b0f] mb-3">2000+</div>
                  <div className="text-lg text-gray-700">Students Trained</div>
                </div>
              </div>

              <div className="mt-12 bg-white border border-gray-200 rounded-xl p-8 shadow-lg" data-aos="fade-up" data-aos-delay="700">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Methodology</h3>
                <p className="text-gray-600 mb-6">
                  We focus on developing critical thinking and strategic planning skills through personalized training sessions and practical gameplay analysis.
                </p>
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-[#f8f5ec] flex items-center justify-center">
                      <i className="fas fa-brain text-[#c9b26d]"></i>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "Chess is not merely a game, but a tool for developing intellectual capabilities"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#0d1b0f] relative overflow-hidden">
        <div className="chess-board-pattern-large absolute inset-0 opacity-5 z-0"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <span className="text-[#c9b26d] text-lg font-medium mb-2 block" data-aos="fade-down">
              Testimonials
            </span>
            <h2 className="text-4xl font-serif font-bold text-white mb-6" data-aos="fade-up">
              Voices of Triumph
            </h2>
            <p className="text-gray-300 text-lg" data-aos="fade-up" data-aos-delay="100">
              Hear from students and parents about their journey to chess mastery
            </p>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 8000, disableOnInteraction: false }}
            loop={true}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet testimonial-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active testimonial-bullet-active'
            }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-16"
          >
            {reviews.map((review, index) => {
              const isExpanded = expandedIndex === index;
              const isLong = review.quote.length > 200;

              return (
                <SwiperSlide key={index}>
                  <div className="h-full">
                    <div className={`bg-white rounded-xl p-8 h-full flex flex-col ${isExpanded ? '' : 'overflow-hidden'}`}>
                      <div className="flex-1">
                        <div className="text-[#c9b26d] text-4xl mb-4">“</div>
                        <p className={`text-gray-700 mb-6 text-left ${!isExpanded && isLong ? 'line-clamp-4' : ''}`}>
                          {review.quote}
                        </p>
                        {isLong && (
                          <button
                            onClick={() => setExpandedIndex(isExpanded ? null : index)}
                            className="text-[#0d1b0f] font-medium hover:text-[#c9b26d] mb-6"
                          >
                            {isExpanded ? "Show Less" : "Read More"}
                          </button>
                        )}
                      </div>

                      <div className="flex items-center border-t border-gray-200 pt-6">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-14 h-14 rounded-full border-2 border-[#c9b26d] object-cover"
                        />
                        <div className="ml-4 text-left">
                          <div className="font-semibold text-gray-900">{review.name}</div>
                          <div className="flex mt-1">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-4 h-4 ${i < review.rating ? "text-[#c9b26d]" : "text-gray-300"}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.176c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.176a1 1 0 00.95-.69l1.286-3.967z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-xl text-white mb-6">Share Your Experience</h3>
            <button
              onClick={handleClick}
              className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden text-lg font-medium text-white rounded-lg group bg-gradient-to-br from-[#c9b26d] to-[#a1860a]"
            >
              <span className="relative z-10 flex items-center">
                Rate Us on Google
                <span className="ml-3 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.176c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.176a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                  ))}
                </span>
              </span>
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#a1860a] to-[#c9b26d] opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            </button>
          </div>
        </div>
      </section>

    <button
      onClick={() => window.open('https://forms.gle/ruymyCNpCQiURfFT9', '_blank')}
      className="group fixed bottom-8 right-8 bg-white/10 backdrop-blur-md text-white font-bold py-3 px-6 rounded-full shadow-2xl shadow-purple-500/20 flex items-center gap-2 transition-all duration-300 hover:scale-110 hover:shadow-purple-500/40 z-50 overflow-hidden"
      style={{
        border: '2px solid transparent',
        backgroundClip: 'padding-box',
        fontFamily: 'inherit', // Matches your website font
      }}
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-full p-[2px]">
        <div 
          className="absolute inset-0 rounded-full animate-border-rotate"
          style={{
            background: 'conic-gradient(from var(--angle), #ec4899 0%, #8b5cf6 25%, #ec4899 50%, #8b5cf6 75%, #ec4899 100%)',
            animation: 'borderRotate 3s linear infinite',
          }}
        ></div>
        <div className="absolute inset-[2px] rounded-full bg-transparent backdrop-blur-md"></div>
      </div>
      
      {/* Snake line effect */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="absolute -inset-10 animate-snake">
          <div className="relative h-full w-full">
            <div className="absolute h-[2px] w-20 bg-gradient-to-r from-transparent via-white to-transparent transform -rotate-45"></div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        <span className="hidden sm:inline">TOURNAMENT REGISTRATION</span>
        <span className="sm:hidden text-xs w-16 text-center leading-tight">TOURNAMENT REGISTRATION</span>
        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </span>

      {/* Add CSS animations */}
      <style jsx>{`
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        
        @keyframes borderRotate {
          0% {
            --angle: 0deg;
          }
          100% {
            --angle: 360deg;
          }
        }
        
        .animate-border-rotate {
          animation: borderRotate 3s linear infinite;
        }
        
        @keyframes snake {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
        }
        
        .animate-snake {
          animation: snake 3s ease-in-out infinite;
        }
      `}</style>
    </button>

    </div>
  );
};

export default Home;