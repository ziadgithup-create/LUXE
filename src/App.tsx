import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, ShoppingBag, Search, User, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '/' },
    { name: 'المتجر', href: '/shop' },
    { name: 'المجموعات', href: '/#collections' },
    { name: 'من نحن', href: '/about' },
    { name: 'تواصل معنا', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path.startsWith('/#')) {
      return location.pathname === '/' && location.hash === path.substring(1);
    }
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || location.pathname !== '/'
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#d4af37]/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gradient-gold font-['Playfair_Display']">
              LUXE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors duration-300 relative group ${
                  isActive(link.href)
                    ? 'text-[#d4af37]'
                    : 'text-[#f5f0e8]/80 hover:text-[#d4af37]'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#d4af37] transition-all duration-300 ${
                  isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-[#f5f0e8]/80 hover:text-[#d4af37] hover:bg-[#d4af37]/10"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-[#f5f0e8]/80 hover:text-[#d4af37] hover:bg-[#d4af37]/10"
            >
              <Heart className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-[#f5f0e8]/80 hover:text-[#d4af37] hover:bg-[#d4af37]/10"
            >
              <User className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-[#f5f0e8]/80 hover:text-[#d4af37] hover:bg-[#d4af37]/10 relative"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#d4af37] text-[#0a0a0a] text-xs rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-[#f5f0e8] hover:text-[#d4af37] hover:bg-[#d4af37]/10"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-80 bg-[#0a0a0a] border-l border-[#d4af37]/20"
            >
              <div className="flex flex-col h-full pt-8">
                <div className="flex items-center justify-between mb-12">
                  <span className="text-2xl font-bold text-gradient-gold font-['Playfair_Display']">
                    LUXE
                  </span>
                </div>
                <div className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-lg font-medium transition-colors duration-300 ${
                        isActive(link.href) ? 'text-[#d4af37]' : 'text-[#f5f0e8]/80 hover:text-[#d4af37]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-auto pb-8">
                  <div className="flex items-center gap-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-[#f5f0e8]/80 hover:text-[#d4af37] hover:bg-[#d4af37]/10"
                    >
                      <Search className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-[#f5f0e8]/80 hover:text-[#d4af37] hover:bg-[#d4af37]/10"
                    >
                      <Heart className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-[#f5f0e8]/80 hover:text-[#d4af37] hover:bg-[#d4af37]/10"
                    >
                      <User className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-[#f5f0e8]/80 hover:text-[#d4af37] hover:bg-[#d4af37]/10 relative"
                    >
                      <ShoppingBag className="h-5 w-5" />
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#d4af37] text-[#0a0a0a] text-xs rounded-full flex items-center justify-center font-bold">
                        0
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

// Footer Component
const Footer = () => {
  const footerLinks = {
    shop: [
      { name: 'ملابس نسائية', href: '/shop' },
      { name: 'ملابس رجالية', href: '/shop' },
      { name: 'إكسسوارات', href: '/shop' },
      { name: 'أحذية', href: '/shop' },
      { name: 'حقائب', href: '/shop' },
    ],
    company: [
      { name: 'من نحن', href: '/about' },
      { name: 'فريقنا', href: '/about' },
      { name: 'الوظائف', href: '/contact' },
      { name: 'الصحافة', href: '/contact' },
      { name: 'الشراكات', href: '/contact' },
    ],
    support: [
      { name: 'مركز المساعدة', href: '/contact' },
      { name: 'الشحن والتوصيل', href: '/contact' },
      { name: 'الإرجاع والاستبدال', href: '/contact' },
      { name: 'حجم الملابس', href: '/contact' },
      { name: 'الأسئلة الشائعة', href: '/contact' },
    ],
  };

  return (
    <footer className="bg-[#050505] border-t border-[#d4af37]/10">
      {/* Features Bar */}
      <div className="border-b border-[#d4af37]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center">
                <svg className="h-6 w-6 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <div>
                <h4 className="text-[#f5f0e8] font-semibold">شحن مجاني</h4>
                <p className="text-[#f5f0e8]/60 text-sm">للطلبات فوق 500 ر.س</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center">
                <svg className="h-6 w-6 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="text-[#f5f0e8] font-semibold">دفع آمن</h4>
                <p className="text-[#f5f0e8]/60 text-sm">100% حماية مشترياتك</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center">
                <svg className="h-6 w-6 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div>
                <h4 className="text-[#f5f0e8] font-semibold">إرجاع سهل</h4>
                <p className="text-[#f5f0e8]/60 text-sm">خلال 30 يوماً</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="text-3xl font-bold text-gradient-gold font-['Playfair_Display']">
                LUXE
              </span>
            </Link>
            <p className="text-[#f5f0e8]/60 mb-6 leading-relaxed max-w-sm">
              وجهتك الأولى للأناقة الفاخرة. نقدم تشكيلة حصرية من الملابس والإكسسوارات
              المصممة بأدق التفاصيل.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-[#f5f0e8]/60">
                <svg className="h-5 w-5 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">الرياض، المملكة العربية السعودية</span>
              </div>
              <div className="flex items-center gap-3 text-[#f5f0e8]/60">
                <svg className="h-5 w-5 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm">+966 50 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-[#f5f0e8]/60">
                <svg className="h-5 w-5 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">info@luxe-fashion.com</span>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-[#f5f0e8] font-semibold mb-6">المتجر</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-[#f5f0e8]/60 hover:text-[#d4af37] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-[#f5f0e8] font-semibold mb-6">الشركة</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-[#f5f0e8]/60 hover:text-[#d4af37] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-[#f5f0e8] font-semibold mb-6">الدعم</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-[#f5f0e8]/60 hover:text-[#d4af37] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#d4af37]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#f5f0e8]/40 text-sm text-center sm:text-right">
              © 2025 LUXE Fashion. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-4">
              <Link to="#" className="text-[#f5f0e8]/40 hover:text-[#d4af37] text-sm transition-colors">
                سياسة الخصوصية
              </Link>
              <Link to="#" className="text-[#f5f0e8]/40 hover:text-[#d4af37] text-sm transition-colors">
                الشروط والأحكام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0a] text-[#f5f0e8]">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
