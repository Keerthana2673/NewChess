import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <footer itemScope itemType="https://schema.org/WPFooter" className="bg-black text-white pt-12">
            {/* Footer Top Section */}
            <div className="footer-top pb-5">
                <div className="container mx-auto px-2 max-w-6xl">
                    <div className="flex flex-wrap gap-5">
                        {/* Column 1 - Logo and Contact Info */}
                        <div className="flex-1 min-w-[200px] px-2">
                            <Link to="/" className="flex items-start space-x-3">
                                <img
                                    src="/logochess.png"
                                    alt="Thirumal Chess Academy Logo"
                                    className="h-10 w-auto"
                                />
                                <span className="text-lg font-semibold text-white leading-snug break-words max-w-[180px]">
                                    Thirumal Chess Academy
                                </span>
                            </Link>

                            <ul className="list-none p-4">
                                <li className="mb-2 flex items-center">
                                    <FontAwesomeIcon icon={faPhoneAlt} className="mr-2 w-4" style={{ color: 'rgb(206, 168, 42)' }} />
                                    <span className="hover:text-[rgb(206,168,42)] transition-colors">(+62) 81 2345 1234</span>
                                </li>
                                <li className="mb-2 flex items-center">
                                    <FontAwesomeIcon icon={faEnvelope} className="mr-2 w-4" style={{ color: 'rgb(206, 168, 42)' }} />
                                    <span className="hover:text-[rgb(206,168,42)] transition-colors">topchess@domain.com</span>
                                </li>
                                <li className="mb-2 flex items-center">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 w-4" style={{ color: 'rgb(206, 168, 42)' }} />
                                    <span className="hover:text-[rgb(206,168,42)] transition-colors">Jl. Sunset Road No.99, Kuta</span>
                                </li>
                            </ul>
                        </div>

                        {/* Column 2 - Quick Links */}
                        <div className="flex-1 min-w-[200px] px-2">
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="list-none p-0">
                                <li className="mb-2"><a href="/" className="hover:text-[rgb(206,168,42)] transition-colors">Home</a></li>
                                <li className="mb-2"><a href="/about" className="hover:text-[rgb(206,168,42)] transition-colors">About Us</a></li>
                                <li className="mb-2"><a href="/courses" className="hover:text-[rgb(206,168,42)] transition-colors">Courses</a></li>
                                <li className="mb-2">
                                    <Link to="/about#coaches" className="hover:text-[rgb(206,168,42)] transition-colors">
                                        Coach
                                    </Link>
                                </li>
                                <li className="mb-2"><a href="/contact" className="hover:text-[rgb(206,168,42)] transition-colors">Contact</a></li>
                            </ul>
                        </div>

                        {/* Column 3 - Useful Links */}
                        <div className="flex-1 min-w-[200px] px-2">
                            <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
                            <ul className="list-none p-0">
                                <li className="mb-2"><a href="/privacy-policy" className="hover:text-[rgb(206,168,42)] transition-colors">Privacy Policy</a></li>
                                <li className="mb-2"><a href="/terms-and-conditions" className="hover:text-[rgb(206,168,42)] transition-colors">Terms and Conditions</a></li>
                                <li className="mb-2"><a href="/disclaimer" className="hover:text-[rgb(206,168,42)] transition-colors">Disclaimer</a></li>
                                <li className="mb-2"><a href="/support" className="hover:text-[rgb(206,168,42)] transition-colors">Support</a></li>
                                <li className="mb-2"><a href="/faq" className="hover:text-[rgb(206,168,42)] transition-colors">FAQ</a></li>
                            </ul>
                        </div>

                        {/* Column 4 - Social Media and Newsletter */}
                        <div className="flex-1 min-w-[200px] px-2">
                            <h4 className="text-heading font-heading text-lg font-semibold mb-4">Our Social Media</h4>
                            <div className="flex gap-2 mb-5">
                                {[
                                    { href: "https://www.facebook.com/", icon: faFacebookF },
                                    { href: "https://x.com/?lang=en", icon: faTwitter },
                                    { href: "https://www.instagram.com/.6.7_.3_/", icon: faInstagram },
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
                                            boxShadow: "0 0 0 transparent", // smooth start
                                        }}
                                    >
                                        <FontAwesomeIcon icon={social.icon} />
                                    </a>
                                ))}
                            </div>

                            <h4 className="text-heading font-heading text-lg font-semibold mb-4">Subscribe or Newsletter</h4>
                            <form className="mt-2">
                                <div className="flex">
                                    <input
                                        type="email"
                                        placeholder="Your Email Address"
                                        className="flex-1 px-5 py-3 border-none bg-[#2b2b2b] text-white placeholder:text-gray-400"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="px-5 py-3 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
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