import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ParallaxHeader from '../components/Parallaxheader';
import { Mail, Phone, MessageSquare, Clock, CheckCircle, ChevronDown, ChevronUp, HelpCircle, BookOpen, Trophy, CreditCard, Users, Shield, FileText } from 'lucide-react';
// import { Mail, Phone, HelpCircle, BookOpen, Trophy, CreditCard } from 'lucide-react';

const LegalPages = () => {
  const { page } = useParams(); // Get the page parameter from URL

  if (page === 'support') {

    return <Navigate to="/contact" replace />;

  }
  // Content for each page
  const pageContent = {
    'privacy-policy': {
      title: 'Privacy Policy',
      breadcrumb: 'Privacy Policy',
      content: (
        <div className="prose prose-lg max-w-none">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-3">
                At Thirumal Chess Academy, we collect information to provide better services to our students and tournament participants.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Personal Information:</strong> Name, email, phone number, address when you register for courses or tournaments</li>
                <li><strong>Student Information:</strong> Age, grade level, chess rating, progress reports</li>
                <li><strong>Payment Information:</strong> Transaction details (processed securely through third-party payment gateways)</li>
                <li><strong>Technical Information:</strong> IP address, browser type, device information for website analytics</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>To provide and maintain our chess coaching services</li>
                <li>To process tournament registrations and payments</li>
                <li>To communicate important updates, schedule changes, and announcements</li>
                <li>To improve our teaching methods and curriculum</li>
                <li>To comply with legal obligations under Indian law</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Protection</h2>
              <p className="text-gray-600 mb-3">
                We implement appropriate security measures to protect your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Secure SSL encryption for all data transmission</li>
                <li>Restricted access to personal data for authorized personnel only</li>
                <li>Regular security audits and updates</li>
                <li>Compliance with the Information Technology Act, 2000 and its amendments</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Your Rights</h2>
              <p className="text-gray-600 mb-3">
                Under applicable laws, you have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data (subject to legal requirements)</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Contact Information</h2>
              <p className="text-gray-600">
                For privacy-related questions or requests, contact our Data Protection Officer at:
                <br />
                <strong>Email:</strong> kalyanraghavanchess@gmail.com
                <br />
                <strong>Phone:</strong> +91-99943 71589
                <br />
                <strong>Address:</strong> Thirumal Chess Academy, Tambaram, Chennai, Tamil Nadu
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">

              <h3 className="text-lg font-bold text-blue-900 mb-3">Policy Updates</h3>

              <p className="text-blue-800 text-sm">

                This privacy policy was last updated on {new Date().toLocaleDateString('en-IN', {

                  day: 'numeric',

                  month: 'long',

                  year: 'numeric'

                })}. We may update this policy periodically.

              </p>

            </div>
          </div>
        </div>
      )
    },
    'terms-and-conditions': {
      title: 'Terms and Conditions',
      breadcrumb: 'Terms and Conditions',
      content: (
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing or using Thirumal Chess Academy's services, you agree to be bound by these Terms and Conditions.
              If you do not agree with any part of these terms, you may not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Description</h2>
            <p className="text-gray-600 mb-3">
              Thirumal Chess Academy provides:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Chess coaching and training programs</li>
              <li>Tournament organization and participation</li>
              <li>Online and offline chess instruction</li>
              <li>Chess-related workshops and events</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Registration and Accounts</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>You must be at least 18 years old to create an account, or have parental consent if under 18</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials</li>
              <li>You must provide accurate and complete information during registration</li>
              <li>We reserve the right to suspend or terminate accounts that violate these terms</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Fees and Payments</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Course fees must be paid in advance as per the specified payment schedule</li>
              <li>Tournament registration fees are non-refundable except in cases of event cancellation by the academy</li>
              <li>We accept payments through secure third-party gateways (Razorpay, PayPal, bank transfer)</li>
              <li>All fees are in Indian Rupees (INR) unless otherwise specified</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Governing Law</h2>
            <p className="text-gray-600">
              These terms shall be governed by and construed in accordance with the laws of India.
              Any disputes shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">

            <h3 className="text-lg font-bold text-gray-900 mb-3">Contact for Queries</h3>

            <p className="text-gray-700">

              For questions about these Terms and Conditions, please contact:

              <br />

              <strong>Email:</strong> kalyanraghavanchess@gmail.com

              <br />

              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-IN')}

            </p>

          </div>
        </div>
      )
    },
    'faq': {
      title: 'Frequently Asked Questions',
      breadcrumb: 'FAQ',
      content: (
        <>
          {/* FAQ Categories */}
          <div className="space-y-8">
            {/* General Questions */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold">General Questions</h2>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="px-6 py-4">
                      <h3 className="font-bold text-gray-900 mb-2">What age groups do you teach?</h3>
                      <p className="text-gray-700">We teach students from 5 years to adult learners. Our curriculum is tailored to different age groups.</p>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="px-6 py-4">
                      <h3 className="font-bold text-gray-900 mb-2">Do I need to know chess to join?</h3>
                      <p className="text-gray-700">No, we welcome complete beginners! Our courses start from the very basics.</p>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="px-6 py-4">
                      <h3 className="font-bold text-gray-900 mb-2">What are your operating hours?</h3>
                      <p className="text-gray-700">We operate Monday to Saturday from 10 AM to 8 PM. Sunday timings vary for special workshops.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Questions */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold">Courses & Coaching</h2>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="px-6 py-4">
                      <h3 className="font-bold text-gray-900 mb-2">What coaching programs do you offer?</h3>
                      <p className="text-gray-700">We offer Beginner, Intermediate, Advanced, and Tournament Preparation programs with different levels.</p>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">

                    <h3 className="font-bold text-gray-900 mb-2">How are classes conducted?</h3>

                    <p className="text-gray-700">Classes are conducted in small groups (max 8 students) for personalized attention.</p>

                  </div>



                  <div className="border border-gray-200 rounded-lg p-6">

                    <h3 className="font-bold text-gray-900 mb-2">Do you provide study materials?</h3>

                    <p className="text-gray-700">Yes, we provide comprehensive study materials, workbooks, and online resources included in the course fee.</p>

                  </div>

                </div>

              </div>

            </div>



            {/* Tournament Questions */}

            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">

              <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6 text-white">

                <div className="flex items-center gap-4">

                  <div className="bg-white/20 p-3 rounded-lg">

                    <Trophy className="w-6 h-6" />

                  </div>

                  <h2 className="text-2xl font-bold">Tournaments</h2>

                </div>

              </div>



              <div className="p-6">

                <div className="space-y-4">

                  <div className="border border-gray-200 rounded-lg p-6">

                    <h3 className="font-bold text-gray-900 mb-2">How often do you conduct tournaments?</h3>

                    <p className="text-gray-700">We conduct monthly internal tournaments and help students participate in external AICF and FIDE-rated tournaments.</p>

                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">

                    <h3 className="font-bold text-gray-900 mb-2">Can beginners participate in tournaments?</h3>

                    <p className="text-gray-700">Yes! We have beginner-friendly tournaments with separate categories for experience.</p>

                  </div>

                </div>

              </div>

            </div>

            {/* Payment Questions */}

            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">

              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 text-white">

                <div className="flex items-center gap-4">

                  <div className="bg-white/20 p-3 rounded-lg">

                    <CreditCard className="w-6 h-6" />

                  </div>

                  <h2 className="text-2xl font-bold">Payments & Policies</h2>

                </div>

              </div>

              <div className="p-6">

                <div className="space-y-4">

                  <div className="border border-gray-200 rounded-lg p-6">

                    <h3 className="font-bold text-gray-900 mb-2">What payment methods do you accept?</h3>

                    <p className="text-gray-700">We accept cash, bank transfer, UPI, and online payments through Razorpay. International payments via PayPal.</p>

                  </div>

                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="px-6 py-4">
                      <h3 className="font-bold text-gray-900 mb-2">How are classes conducted?</h3>
                      <p className="text-gray-700">Classes are conducted in small groups (max 8 students) for personalized attention.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Support */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-gray-700 mb-6">
              Can't find what you're looking for? Our support team is ready to help you.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Contact Support
            </a>
          </div>
        </>
      )
    }
  };

  // Get the current page content or show 404
  const currentPage = pageContent[page];

  if (!currentPage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
          <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
          <a href="/" className="text-blue-600 hover:text-blue-800 font-medium">
            Return to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <ParallaxHeader
        title={currentPage.title}
        breadcrumbs={[{ title: currentPage.breadcrumb, path: `/${page}` }]}
        backgroundImage="/images/aboutheader.jpg"
        overlayColor="rgba(0, 0, 0, 0.7)"
      />

      <section className="py-20 bg-gradient-to-b from-white to-[#f8f5ed]">
        <div className={`max-w-${page === 'faq' || page === 'support' ? '6xl' : '4xl'} mx-auto px-4 sm:px-6 lg:px-8`}>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {currentPage.content}
          </div>
        </div>
      </section>
    </>
  );
};

export default LegalPages;