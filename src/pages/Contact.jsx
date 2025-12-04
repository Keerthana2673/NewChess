import ParallaxHeader from '../components/Parallaxheader';
import 'aos/dist/aos.css';
import './Contact.css';
import AOS from 'aos';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

// Replace with your Supabase function URL
const SUPABASE_FUNCTION_URL = 'https://cvmbdcimcmnqtksmjyle.supabase.co/functions/v1/send-contact-email';

const Contact = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    course: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (location.state?.courseName) {
      setFormData(prev => ({ ...prev, course: location.state.courseName }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(SUPABASE_FUNCTION_URL, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2bWJkY2ltY21ucXRrc21qeWxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzMDkwNzEsImV4cCI6MjA2Njg4NTA3MX0.5Jh5eHWS3l3qSnxSC3Nk8luguB2iXmv3CJ0rYGsAoWk'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      alert(result.message || 'Email sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: '',
        course: ''
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  return (
    <>
      <ParallaxHeader
        title="Contact Our Chess Club"
        breadcrumbs={[{ title: 'Contact Us', path: '/contact' }]}
        backgroundImage="/images/aboutheader.jpg"
      />

      <div className="contact-template-container">
        {/* Contact Info Section */}
        <div className="contact-info-section-template">
          <div className="contact-info-content-template">
            <h4 className="contact-subtitle-template">Contact Us</h4>
            <h2 className="contact-title-template">We’d Love to Hear from You</h2>
            <p className="contact-description-template">
              Whether you're a beginner or an advanced player, feel free to reach out for questions, coaching, or collaboration.
            </p>

            <div className="contact-details-template">
              <div className="contact-detail-item">
                <FontAwesomeIcon icon={faPhoneAlt} className="contact-icon" />
                <span>(+91) 99943 71589</span>
              </div>
              <div className="contact-detail-item">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                <span>kalyanraghavanchess@gmail.com</span>
              </div>
              <div className="contact-detail-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                <span>No. 61, 4th Cross St, Madanapuram, Shanthi Nagar, Tambaram, Ch-48</span>
              </div>
            </div>

            <div className="social-icons-template">
              <a href="https://www.facebook.com/people/Thirumal-Chess-Academy/100054581404119/" target="_blank" rel="noopener noreferrer" className="social-icon-template">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="social-icon-template">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.instagram.com/thirumalchess/" target="_blank" rel="noopener noreferrer" className="social-icon-template">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form-section-template">
          <form className="contact-form-template" onSubmit={handleSubmit}>
            <div className="form-group-template">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Your Name" 
                className='bg-[#FFF] text-gray-900' 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group-template">
              <label htmlFor="email">Email <span className="required">*</span></label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="you@company.com" 
                required 
                className='bg-[#FFF] text-gray-900' 
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group-template">
                <label htmlFor="course">Selected Course</label>
                <input
                  type="text"
                  id="course"
                  name="course"
                  className="bg-[#FFF] text-gray-900"
                  value={formData.course}
                  onChange={handleChange}
                  placeholder="(Optional) Type a course"
                />
            </div>

            <div className="form-group-template">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                className='bg-[#FFF] text-gray-900' 
                placeholder="Message" 
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="submit-button-template"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
      
      <div className="w-full h-[450px] mt-6 rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8544712912944!2d80.07425307489198!3d12.917073487393294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f5899cb25019%3A0xb401e6efaa80188!2sThirumal%20Chess%20Academy%2C%20Tambaram%20Corporation!5e0!3m2!1sen!2sca!4v1750307599000!5m2!1sen!2sca"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Thirumal Chess Academy Location"
          className="w-full h-full"
        />
      </div>

      <div className="contact-footer-template">
        <p>&copy; 2023 Top Chess Academy. All rights reserved.</p>
      </div>  
    </>
  );
};

export default Contact;