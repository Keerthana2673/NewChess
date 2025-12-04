import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const handleClick = () => { window.open("https://forms.gle/K51TQJiHhUTWte1GA", "_blank"); };

  const navItems = [
    { name: 'Home', href: '/', exact: true },
    { name: 'About Us', href: '/about' },
    {
      name: 'Courses',
      href: '/courses',
      dropdown: [
        { name: 'Chess Basics', href: '/courses/basics' },
        { name: 'Advanced Strategies', href: '/courses/advanced' },
        { name: 'Tournament Preparation', href: '/courses/tournament' },
      ]
    },
    { name: 'Contact', href: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href, exact = false) => {
    if (exact) {
      return location.pathname === href;
    }
    return location.pathname.startsWith(href);
  };

  useEffect(() => {
    setOpenDropdown(null);
    setOpenMobileDropdown(null);
  }, [location.pathname]);

  return (
    <>
      <header className={`fixed w-full z-50 py-4 transition-all duration-300`}>
        <div className={`mx-auto w-full px-4 py-4 max-w-[90%] xl:max-w-[1200px] 2xl:max-w-[1400px] transition-all duration-300 ${scrolled ? 'bg-white/35' : 'bg-white/30'
          } backdrop-blur-md rounded-lg shadow-sm`}>

          <div className="flex items-center justify-between h-12">
            <div className="flex items-center space-x-2 flex-shrink-0">
              <Link to="/" className="flex items-center space-x-3">
                <img
                  src="/logochess.png"
                  alt="Thirumal Chess Academy Logo"
                  className="h-10 w-auto"
                />
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-thin text-black tracking-wide whitespace-nowrap font-serif">
                  Thirumal Chess Academy
                </span>
              </Link>
            </div>

            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      className="relative"
                    >
                      <Link
                        to={item.href}
                        className={`flex items-center gap-x-1 text-[15px] font-medium ${isActive(item.href) ? 'text-black font-semibold' : 'text-gray-700 hover:text-black'
                          }`}
                      >
                        {item.name}
                      </Link>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`text-[15px] font-medium ${isActive(item.href, item.exact)
                        ? 'text-black font-semibold'
                        : 'text-gray-700 hover:text-black'
                        }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <button
                onClick={handleClick}
                className="ml-4 bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-md text-[15px] font-medium transition-all duration-300 shadow-md hover:shadow-gray-400/30 focus:outline-none focus:ring-2 focus:ring-gray-400">

                Join Now
              </button>
            </nav>

            <div className="flex lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-black focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div >
      </header >

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-24 z-40 bg-white backdrop-blur-md lg:hidden shadow-lg mx-auto w-[92%] xl:w-[1200px] 2xl:w-[1400px] rounded-b-lg overflow-hidden"
          >
            <div className="px-6 py-4">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-gray-200 last:border-0">
                  {item.dropdown ? (
                    <div className="w-full">
                      <Link
                        to={item.href}
                        className={`flex justify-between items-center py-3 text-[15px] font-medium ${isActive(item.href) ? 'text-black font-semibold' : 'text-gray-700'}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block py-3 text-[15px] font-medium ${isActive(item.href, item.exact)
                        ? 'text-black font-semibold'
                        : 'text-gray-700'}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <button
                onClick={handleClick}
                className="w-full bg-black hover:bg-gray-800 text-white px-4 py-3 rounded-md text-[15px] font-medium mt-4 shadow-md"
              >
                Join Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;