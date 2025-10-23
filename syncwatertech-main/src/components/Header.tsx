import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo2 from '../assets/logo-2.png';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileProductsDropdownOpen, setMobileProductsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: 'Home', page: 'home' },
    { label: 'Projects', page: 'projects' },
    { label: 'About', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'FAQ', page: 'faq' },
    { label: 'Team', page: 'team' },
    { label: 'Contact', page: 'contact' },
  ];

  const productCategories = [
    { label: 'Flow Meters', page: 'product-info:flow-meters' },
    { label: 'Analyzers & Transmitters', page: 'product-info:analyzers' },
    { label: 'Valves & Piping', page: 'product-info:valves' },
    { label: 'Automation (IoT / PLC / RTU / SCADA)', page: 'product-info:automation' },
    { label: 'Cameras & Vision', page: 'product-info:cameras' },
    { label: 'Jointing Machines', page: 'product-info:jointing' },
    { label: 'Rosemount 3051S Series Coplanar Pressure Transmitter', page: 'product-info:rosemount' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-sm">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            className="flex items-center cursor-pointer group"
            onClick={() => onNavigate('home')}
            aria-label="Go to home"
          >
            <img src={logo2} alt="Sync Water Tech Logo" className="h-10 w-auto mr-3 transition-transform duration-300 group-hover:scale-105" />
            <span className="text-3xl font-bold tracking-tight text-[#0073bc]">SyncWaterTech</span>
          </button>

          {/* Modern Pill-Style Navigation */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center bg-gray-50/80 backdrop-blur-sm rounded-full px-2 py-2 shadow-sm border border-gray-100/50">
              {navItems.slice(0, 4).map((item) => {
                const isActive = currentPage === item.page;
                
                return (
                  <button
                    key={item.page}
                    onClick={() => onNavigate(item.page)}
                    className={`relative px-6 py-3 mx-1 rounded-full text-sm font-medium transition-all duration-300 ease-in-out transform ${
                      isActive
                        ? 'bg-[#005B9A] text-white shadow-lg scale-105'
                        : 'text-gray-700 hover:text-[#005B9A] hover:bg-blue-50 hover:scale-105'
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {isActive && (
                      <div className="absolute inset-0 bg-[#005B9A] rounded-full shadow-lg animate-pulse-slow"></div>
                    )}
                  </button>
                );
              })}
              
              {/* Products Dropdown with Pill-Style */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => {
                    setProductsDropdownOpen(!productsDropdownOpen);
                    if (!productsDropdownOpen) {
                      onNavigate('products');
                    }
                  }}
                  onMouseEnter={() => setProductsDropdownOpen(true)}
                  className={`relative px-6 py-3 mx-1 rounded-full text-sm font-medium transition-all duration-300 ease-in-out transform flex items-center space-x-1 ${
                    currentPage === 'products' || currentPage.startsWith('product-info')
                      ? 'bg-[#005B9A] text-white shadow-lg scale-105'
                      : 'text-gray-700 hover:text-[#005B9A] hover:bg-blue-50 hover:scale-105'
                  }`}
                >
                  <span className="relative z-10">Products</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    productsDropdownOpen ? 'rotate-180' : ''
                  }`} />
                  {(currentPage === 'products' || currentPage.startsWith('product-info')) && (
                    <div className="absolute inset-0 bg-[#005B9A] rounded-full shadow-lg animate-pulse-slow"></div>
                  )}
                </button>

                {productsDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg dropdown-shadow border border-gray-100 overflow-hidden animate-slide-up z-50"
                    onMouseLeave={() => setProductsDropdownOpen(false)}
                  >
                    <div className="py-2">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <button
                          onClick={() => {
                            onNavigate('products');
                            setProductsDropdownOpen(false);
                          }}
                          className="text-sm font-semibold text-[#005B9A] hover:text-[#005a94] transition-colors"
                        >
                          All Products
                        </button>
                      </div>
                      {productCategories.map((category) => (
                        <button
                          key={category.page}
                          onClick={() => {
                            onNavigate(category.page);
                            setProductsDropdownOpen(false);
                          }}
                          className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-[#005B9A] hover:text-white transition-all duration-300 rounded-lg mx-2 my-1"
                        >
                          {category.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {navItems.slice(4).map((item) => {
                const isActive = currentPage === item.page;
                
                return (
                  <button
                    key={item.page}
                    onClick={() => onNavigate(item.page)}
                    className={`relative px-6 py-3 mx-1 rounded-full text-sm font-medium transition-all duration-300 ease-in-out transform ${
                      isActive
                        ? 'bg-[#005B9A] text-white shadow-lg scale-105'
                        : 'text-gray-700 hover:text-[#005B9A] hover:bg-blue-50 hover:scale-105'
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {isActive && (
                      <div className="absolute inset-0 bg-[#005B9A] rounded-full shadow-lg animate-pulse-slow"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </nav>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-2">
            {navItems.slice(0, 4).map((item) => {
              const isActive = currentPage === item.page;
              
              return (
                <button
                  key={item.page}
                  onClick={() => {
                    onNavigate(item.page);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-[#005B9A] text-white shadow-lg'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-[#005B9A]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            
            {/* Mobile Products Dropdown */}
            <div className="space-y-2">
              <button
                onClick={() => setMobileProductsDropdownOpen(!mobileProductsDropdownOpen)}
                className={`flex items-center justify-between w-full text-left px-4 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  currentPage === 'products' || currentPage.startsWith('product-info')
                    ? 'bg-[#005B9A] text-white shadow-lg'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-[#005B9A]'
                }`}
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  mobileProductsDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              {mobileProductsDropdownOpen && (
                <div className="ml-4 space-y-1 animate-slide-up">
                  <button
                    onClick={() => {
                      onNavigate('products');
                      setMobileMenuOpen(false);
                      setMobileProductsDropdownOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      currentPage === 'products' ? 'bg-[#005B9A] text-white shadow-lg' : 'text-gray-600 hover:bg-blue-50 hover:text-[#005B9A]'
                    }`}
                  >
                    All Products
                  </button>
                  {productCategories.map((category) => (
                    <button
                      key={category.page}
                      onClick={() => {
                        onNavigate(category.page);
                        setMobileMenuOpen(false);
                        setMobileProductsDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                        currentPage === category.page ? 'bg-[#005B9A] text-white shadow-lg' : 'text-gray-600 hover:bg-blue-50 hover:text-[#005B9A]'
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {navItems.slice(4).map((item) => {
              const isActive = currentPage === item.page;
              
              return (
                <button
                  key={item.page}
                  onClick={() => {
                    onNavigate(item.page);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-[#005B9A] text-white shadow-lg'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-[#005B9A]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
