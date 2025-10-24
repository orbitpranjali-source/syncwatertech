import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo2 from '../assets/logo-2.png';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (projectsRef.current && !projectsRef.current.contains(e.target as Node)) {
        setProjectsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { label: 'Home', page: 'home' },
    { label: 'Projects', page: 'projects' },
    { label: 'About', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Products', page: 'products' },
    { label: 'FAQ', page: 'faq' },
    { label: 'Team', page: 'team' },
    { label: 'Contact', page: 'contact' },
  ];

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

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.label === 'Projects' ? (
                <div
                  key={item.page}
                  className="relative"
                  ref={projectsRef}
                  onMouseEnter={() => setProjectsOpen(true)}
                  onMouseLeave={() => setProjectsOpen(false)}
                >
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setProjectsOpen((open) => !open);
                    }}
                    className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${
                      currentPage === item.page ? 'text-[#0073bc]' : 'text-gray-700 hover:text-[#0073bc]'
                    }`}
                    aria-haspopup="menu"
                    aria-expanded={projectsOpen}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div
                    className={`absolute left-0 mt-2 w-56 rounded-lg border border-gray-100 bg-white shadow-lg transition-all duration-200 ease-out ${
                      projectsOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'
                    }`}
                  >
                    <div className="py-2">
                      <button
                        onClick={() => onNavigate('projects:all')}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:text-[#0073bc] hover:bg-gray-50 hover:underline underline-offset-4 transition-all duration-200"
                      >
                        All Projects
                      </button>
                      <button
                        onClick={() => onNavigate('projects:completed')}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:text-[#0073bc] hover:bg-gray-50 hover:underline underline-offset-4 transition-all duration-200"
                      >
                        Completed
                      </button>
                      <button
                        onClick={() => onNavigate('projects:ongoing')}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:text-[#0073bc] hover:bg-gray-50 hover:underline underline-offset-4 transition-all duration-200"
                      >
                        Ongoing
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  key={item.page}
                  onClick={() => onNavigate(item.page)}
                  className={`text-sm font-medium transition-colors ${
                    currentPage === item.page ? 'text-[#0073bc]' : 'text-gray-700 hover:text-[#0073bc]'
                  }`}
                >
                  {item.label}
                </button>
              )
            ))}
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
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              item.label === 'Projects' ? (
                <div key={item.page} className="space-y-2">
                  <button
                    onClick={() => {
                      onNavigate('projects');
                      setMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium ${
                      currentPage === item.page ? 'bg-[#0073bc] text-white' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Projects
                  </button>
                  <div className="pl-4">
                    <button
                      onClick={() => {
                        onNavigate('projects:all');
                        setMobileMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50"
                    >
                      All Projects
                    </button>
                    <button
                      onClick={() => {
                        onNavigate('projects:completed');
                        setMobileMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Completed
                    </button>
                    <button
                      onClick={() => {
                        onNavigate('projects:ongoing');
                        setMobileMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Ongoing
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  key={item.page}
                  onClick={() => {
                    onNavigate(item.page);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium ${
                    currentPage === item.page ? 'bg-[#0073bc] text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
