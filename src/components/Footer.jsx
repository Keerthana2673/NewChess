import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer itemScope itemType="https://schema.org/WPFooter" className="bg-black text-white pt-12">
            {/* Footer Top Section */}
            <div className="footer-top pb-10">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Column 1 - Logo and Contact Info */}
                        <div className="px-2 md:col-span-2 lg:col-span-1">
                            <Link to="/" className="flex items-start space-x-3 mb-6">
                                <img
                                    src="/logofooter.png"
                                    alt="Thirumal Chess Academy Logo"
                                    className="h-12 w-auto"
                                />
                                <span className="text-lg font-semibold text-white leading-snug font-serif">
                                    Thirumal Chess Academy
                                </span>
                            </Link>

                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <FontAwesomeIcon icon={faPhoneAlt} className="mt-1 mr-3 w-4 flex-shrink-0" style={{ color: 'rgb(206, 168, 42)' }} />
                                    <span className="hover:text-[rgb(206,168,42)] transition-colors">(+91) 99943 71589</span>
                                </li>
                                <li className="flex items-start">
                                    <FontAwesomeIcon icon={faEnvelope} className="mt-1 mr-3 w-4 flex-shrink-0" style={{ color: 'rgb(206, 168, 42)' }} />
                                    <span className="hover:text-[rgb(206,168,42)] transition-colors text-sm md:text-base break-all">
                                        kalyanraghavanchess@gmail.com
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mt-1 mr-3 w-4 flex-shrink-0" style={{ color: 'rgb(206, 168, 42)' }} />
                                    <span className="hover:text-[rgb(206,168,42)] transition-colors text-sm md:text-base">
                                        No. 61, 4th Cross St, Madanapuram, Shanthi Nagar, Tambaram, Ch-48
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Column 2 - Quick Links */}
                        <div className="px-2">
                            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                            <ul className="space-y-3">
                                <li><a href="/" className="hover:text-[rgb(206,168,42)] transition-colors">Home</a></li>
                                <li><a href="/about" className="hover:text-[rgb(206,168,42)] transition-colors">About Us</a></li>
                                <li><a href="/courses" className="hover:text-[rgb(206,168,42)] transition-colors">Courses</a></li>
                                <li>
                                    <Link to="/about#coaches" className="hover:text-[rgb(206,168,42)] transition-colors">
                                        Coach
                                    </Link>
                                </li>
                                <li><a href="/contact" className="hover:text-[rgb(206,168,42)] transition-colors">Contact</a></li>
                            </ul>
                        </div>

                        {/* Column 3 - Useful Links */}
                        <div className="px-2">
                            <h4 className="text-lg font-semibold mb-6">Useful Links</h4>
                            <ul className="space-y-3">
                                <li><a href="/privacy-policy" className="hover:text-[rgb(206,168,42)] transition-colors">Privacy Policy</a></li>
                                <li><a href="/terms-and-conditions" className="hover:text-[rgb(206,168,42)] transition-colors">Terms and Conditions</a></li>
                                <li><a href="/disclaimer" className="hover:text-[rgb(206,168,42)] transition-colors">Disclaimer</a></li>
                                <li><a href="/support" className="hover:text-[rgb(206,168,42)] transition-colors">Support</a></li>
                                <li><a href="/faq" className="hover:text-[rgb(206,168,42)] transition-colors">FAQ</a></li>
                            </ul>
                        </div>

                        {/* Column 4 - Social Media and Newsletter */}
                        <div className="px-2">
                            <h4 className="text-lg font-semibold mb-6">Our Social Media</h4>
                            <div className="flex gap-4 mb-8">
                                {[
                                    { href: "https://www.facebook.com/people/Thirumal-Chess-Academy/100054581404119/", icon: faFacebookF },
                                    { href: "https://x.com/?lang=en", icon: faTwitter },
                                    { href: "https://www.instagram.com/thirumalchess/", icon: faInstagram },
                                    { href: "https://www.youtube.com/", icon: faYoutube },
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                                        style={{
                                            backgroundColor: "rgb(206,168,42)",
                                            color: "black",
                                            boxShadow: "0 0 0 transparent",
                                        }}
                                    >
                                        <FontAwesomeIcon icon={social.icon} />
                                    </a>
                                ))}
                            </div>

                            <h4 className="text-lg font-semibold mb-6">Subscribe or Newsletter</h4>
                            <form>
                                <div className="flex">
                                    <input
                                        type="email"
                                        placeholder="Your Email Address"
                                        className="flex-1 px-4 py-3 border-none bg-[#2b2b2b] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[rgb(206,168,42)]"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="px-4 py-3 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                                        style={{ backgroundColor: "rgb(206,168,42)", color: "black" }}
                                    >
                                        <FontAwesomeIcon icon={faPaperPlane} />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;