import React from 'react';
import ParallaxHeader from '../components/Parallaxheader';

const courseList = [

  {

    name: "Master Chess Program",
    description: "From beginner to advanced strategies in one comprehensive course",
    image: "/images/course/homebasic.jpg",
    duration: "2 Hours / Session",
    modules: 12,
    rating: 4.9,
    reviews: 128,
    href: "/courses/beginner",
    features: [
      "Personalized coaching",
      "Interactive lessons",
      "Tournament preparation",
      "Certificate of mastery"
    ],
    instructor: {
      name: "GM Kalyan Anna",
      title: "International Grandmaster",
      experience: "15+ years coaching"
    }
  },
  // {
  //   name: "Intermediate Chess Course",
  //   level: "Intermediate",
  //   image: "/images/course/homeintermediate.jpg",
  //   duration: "2 Hours / Meeting",
  //   certification: true,
  //   rating: 4.9,
  //   href: "/courses/intermediate",
  //   theme: "dark",
  // },
  // {
  //   name: "Advanced Chess Course",
  //   level: "Advanced",
  //   image: "/images/course/homeexpert.jpg",
  //   duration: "2 Hours / Meeting",
  //   certification: true,
  //   rating: 5.0,
  //   href: "/courses/advanced",
  //   theme: "light",
  // },
];

const Courses = () => {
  return (
    <>
      <ParallaxHeader
        title="Explore our courses"
        breadcrumbs={[{ title: 'Courses', path: '/courses' }]}
        backgroundImage="/images/aboutheader.jpg"
        overlayColor="rgba(0, 0, 0, 0.7)"
      />
      <section className="py-20 bg-gradient-to-b from-[#f8f5ed] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Comprehensive Chess Training
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight" data-aos="fade-up">
              The Ultimate Chess Mastery Program
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Carefully crafted curriculum that takes you from chess fundamentals to advanced competitive strategies
            </p>
          </div>
          
          {/* Premium Course Card */}
          <div className="max-w-5xl mx-auto">
            {courseList.map((course, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] text-white"
                data-aos="zoom-in"
              >
                {/* Premium Badge */}
                <div className="absolute top-6 right-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-full font-bold z-10 shadow-lg">
                  Most Popular
                </div>
                
                <div className="flex flex-col md:flex-row">
                  {/* Course Image */}
                  <div className="md:w-2/5 relative">
                    <img 
                      src={course.image} 
                      alt={course.name}
                      className="w-full h-full object-cover min-h-[300px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <h3 className="text-3xl font-bold font-serif">{course.name}</h3>
                      <p className="text-amber-300 mt-1">{course.description}</p>
                    </div>
                  </div>
                  
                  {/* Course Details */}
                  <div className="md:w-3/5 p-8">
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="flex items-center">
                        <div className="bg-gray-800 rounded-lg p-3 mr-4">
                          <svg xmlns="" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Duration</p>
                          <p className="font-medium">{course.duration}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="bg-gray-800 rounded-lg p-3 mr-4">
                          <svg xmlns="" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Modules</p>
                          <p className="font-medium">{course.modules} Learning Units</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="bg-gray-800 rounded-lg p-3 mr-4">
                          <svg xmlns="" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Certification</p>
                          <p className="font-medium">Mastery Certificate</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="bg-gray-800 rounded-lg p-3 mr-4">
                          <svg xmlns="" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Community</p>
                          <p className="font-medium">Private Student Group</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Course Features */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold mb-4">What You'll Master</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {course.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Instructor */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold mb-4">Your Instructor</h4>
                      <div className="flex items-center">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mr-4" />
                        <div>
                          <p className="font-bold">{course.instructor.name}</p>
                          <p className="text-gray-400">{course.instructor.title} • {course.instructor.experience}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Rating and CTA */}
                    <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-gray-800">
                      <div className="flex items-center mb-4 sm:mb-0">
                        <div className="flex text-amber-400 mr-2">
                        </div>
                        <div>
                          <p className="font-bold">{course.rating}/5</p>
                          <p className="text-sm text-gray-400">{course.reviews} student reviews</p>
                        </div>
                      </div>
                      
                      <a
                        href="https://forms.gle/Eb9hNVZwcVxEF7Yp8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl shadow-lg shadow-amber-500/20 flex items-center"
                      >
                        Enroll Today
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;