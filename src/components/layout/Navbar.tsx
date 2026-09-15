import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ALL_PAGES_INDEX, NAV_DROPDOWNS } from '../../data/sitemap';
import { ChevronDown, Menu, Search, X, Sparkles, Utensils } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedGroup, setMobileExpandedGroup] = useState<string | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setSearchModalOpen(false);
  }, [location.pathname]);

  // Keyboard shortcut Ctrl+K or / for quick search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setSearchModalOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredPages = searchQuery.trim()
    ? ALL_PAGES_INDEX.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.section.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : ALL_PAGES_INDEX.slice(0, 8);

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#0E1B14] text-white border-b border-white/10 shadow-sm backdrop-blur-md bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo & Title */}
            <Link
              to="/"
              id="header-brand-logo"
              className="flex items-center space-x-3 group text-left focus:outline-none focus:ring-2 focus:ring-[#6FCF97] rounded-lg p-1"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[#1F6F4B] to-[#3BAA75] flex items-center justify-center text-white shadow-md shadow-[#1F6F4B]/30 group-hover:scale-105 transition-transform">
                <Utensils className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-sm sm:text-base tracking-tight text-white group-hover:text-[#6FCF97] transition-colors">
                  Smart Meal &amp; Activity
                </span>
                <span className="text-[10px] sm:text-xs text-stone-400 font-medium tracking-wide">
                  Eat Smart • Stay Active • Live Healthy
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
              <Link
                to="/"
                id="nav-link-home"
                className={`px-3 py-2 rounded-lg text-xs font-semibold tracking-wide transition-colors ${
                  location.pathname === '/' ? 'text-[#6FCF97] bg-white/10' : 'text-stone-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Home
              </Link>

              {NAV_DROPDOWNS.map((group) => {
                const isOpen = activeDropdown === group.label;
                const isCurrentSection = group.items.some((item) => item.href === location.pathname);

                return (
                  <div
                    key={group.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(group.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      id={`nav-dropdown-btn-${group.label.toLowerCase().replace(/\s+/g, '-')}`}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-xs font-semibold tracking-wide transition-colors ${
                        isOpen || isCurrentSection
                          ? 'text-[#6FCF97] bg-white/10'
                          : 'text-stone-300 hover:text-white hover:bg-white/5'
                      }`}
                      aria-expanded={isOpen}
                    >
                      <span>{group.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180 text-[#6FCF97]' : 'text-stone-400'}`} />
                    </button>

                    {/* Dropdown Menu */}
                    {isOpen && (
                      <div className="absolute left-0 mt-1 w-72 bg-[#0B1610] border border-white/15 rounded-2xl shadow-xl shadow-black/50 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="text-[10px] font-bold text-stone-400 px-3 py-1.5 uppercase tracking-wider border-b border-white/10 mb-1">
                          {group.label} Index ({group.items.length} Pages)
                        </div>
                        <div className="space-y-0.5">
                          {group.items.map((item) => {
                            const isItemActive = location.pathname === item.href;
                            return (
                              <Link
                                key={item.href}
                                to={item.href}
                                id={`dropdown-item-${item.href.replace(/[^a-zA-Z0-9]/g, '-')}`}
                                className={`block px-3 py-2 rounded-xl text-left transition-colors ${
                                  isItemActive
                                    ? 'bg-[#1F6F4B] text-white font-bold'
                                    : 'text-stone-300 hover:bg-white/10 hover:text-white'
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-semibold leading-tight">{item.name}</span>
                                  {item.badge && (
                                    <span className="text-[9px] bg-[#3BAA75]/30 text-[#6FCF97] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                                {item.description && (
                                  <p className="text-[10px] text-stone-400 mt-0.5 line-clamp-1">
                                    {item.description}
                                  </p>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              <Link
                to="/about"
                id="nav-link-about"
                className={`px-3 py-2 rounded-lg text-xs font-semibold tracking-wide transition-colors ${
                  location.pathname === '/about' ? 'text-[#6FCF97] bg-white/10' : 'text-stone-300 hover:text-white hover:bg-white/5'
                }`}
              >
                About
              </Link>

              <Link
                to="/contact"
                id="nav-link-contact"
                className={`px-3 py-2 rounded-lg text-xs font-semibold tracking-wide transition-colors ${
                  location.pathname === '/contact' ? 'text-[#6FCF97] bg-white/10' : 'text-stone-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Action buttons */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Quick Search Trigger */}
              <button
                id="search-palette-trigger"
                onClick={() => setSearchModalOpen(true)}
                className="flex items-center space-x-2 text-xs text-stone-400 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-2 rounded-xl border border-white/10 transition-colors"
                title="Search all 42 pages (Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-[#6FCF97]" />
                <span className="hidden sm:inline">Search site...</span>
                <kbd className="hidden sm:inline bg-black/40 text-[9px] px-1.5 py-0.5 rounded text-stone-400 border border-white/10">
                  ⌘K
                </kbd>
              </button>

              {/* Primary Interactive Demo CTA */}
              <Link
                to="/tools/portion-recommender"
                id="header-cta-recommender"
                className="hidden md:inline-flex items-center space-x-1.5 bg-[#6FCF97] hover:bg-[#5bbd84] text-[#0E1B14] px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm active:scale-95"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Try Demo</span>
              </Link>

              {/* Mobile menu trigger */}
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-stone-300 hover:text-white hover:bg-white/10 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0E1B14] border-t border-white/10 max-h-[85vh] overflow-y-auto px-4 py-4 space-y-3">
            <div className="flex items-center space-x-2 pb-2">
              <Link
                to="/tools/portion-recommender"
                className="w-full bg-[#6FCF97] text-[#0E1B14] text-center font-bold text-sm py-2.5 rounded-xl block"
              >
                Launch Portion Recommender Demo
              </Link>
            </div>

            <div className="space-y-1">
              <Link
                to="/"
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-white hover:bg-white/10"
              >
                Home
              </Link>

              {NAV_DROPDOWNS.map((group) => {
                const isGroupExpanded = mobileExpandedGroup === group.label;
                return (
                  <div key={group.label} className="border-b border-white/10 pb-1">
                    <button
                      onClick={() => setMobileExpandedGroup(isGroupExpanded ? null : group.label)}
                      className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-stone-200 hover:text-[#6FCF97]"
                    >
                      <span>{group.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${isGroupExpanded ? 'rotate-180 text-[#6FCF97]' : 'text-stone-400'}`}
                      />
                    </button>

                    {isGroupExpanded && (
                      <div className="pl-4 pr-1 py-1 space-y-1 bg-white/5 rounded-xl my-1">
                        {group.items.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="block py-2 px-2 text-xs text-stone-300 hover:text-white hover:bg-white/10 rounded-lg"
                          >
                            <div className="font-semibold">{item.name}</div>
                            {item.description && (
                              <div className="text-[10px] text-stone-400 mt-0.5">{item.description}</div>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <Link
                to="/about"
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-white hover:bg-white/10"
              >
                About the Project
              </Link>
              <Link
                to="/get-involved"
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-white hover:bg-white/10"
              >
                Join the Pilot
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-white hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Quick Search / Command Palette Modal */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-[#0B1610] border border-white/20 rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden">
            <div className="p-4 border-b border-white/10 flex items-center space-x-3">
              <Search className="w-5 h-5 text-[#6FCF97]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search all 42 pages (e.g. Five Whys, BMI, Mifflin, CNN, Waste)..."
                className="w-full bg-transparent text-white text-sm focus:outline-none placeholder-stone-500"
                autoFocus
              />
              <button
                onClick={() => setSearchModalOpen(false)}
                className="p-1 text-stone-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto p-2 space-y-1">
              {filteredPages.length === 0 ? (
                <div className="p-6 text-center text-sm text-stone-400">
                  No matching pages found for "{searchQuery}".
                </div>
              ) : (
                filteredPages.map((page) => (
                  <Link
                    key={page.href}
                    to={page.href}
                    onClick={() => setSearchModalOpen(false)}
                    className="block p-3 rounded-xl hover:bg-white/10 transition-colors text-left group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-white group-hover:text-[#6FCF97]">
                        {page.title}
                      </span>
                      <span className="text-[10px] bg-white/10 text-stone-400 px-2 py-0.5 rounded-full uppercase">
                        {page.section}
                      </span>
                    </div>
                    <p className="text-xs text-stone-400 mt-1 line-clamp-1">{page.desc}</p>
                  </Link>
                ))
              )}
            </div>

            <div className="p-3 bg-white/5 border-t border-white/10 flex items-center justify-between text-[11px] text-stone-400">
              <span>{ALL_PAGES_INDEX.length} pages indexed across research, tech, &amp; tools</span>
              <span>ESC to close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
