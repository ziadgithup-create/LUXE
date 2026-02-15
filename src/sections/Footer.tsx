import { 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Twitter, 
  Facebook, 
  Youtube,
  CreditCard,
  ShieldCheck,
  Truck
} from 'lucide-react';

const footerLinks = {
  shop: [
    { name: 'ملابس نسائية', href: '#shop' },
    { name: 'ملابس رجالية', href: '#shop' },
    { name: 'إكسسوارات', href: '#shop' },
    { name: 'أحذية', href: '#shop' },
    { name: 'حقائب', href: '#shop' },
  ],
  company: [
    { name: 'من نحن', href: '#about' },
    { name: 'فريقنا', href: '#about' },
    { name: 'الوظائف', href: '#contact' },
    { name: 'الصحافة', href: '#contact' },
    { name: 'الشراكات', href: '#contact' },
  ],
  support: [
    { name: 'مركز المساعدة', href: '#contact' },
    { name: 'الشحن والتوصيل', href: '#contact' },
    { name: 'الإرجاع والاستبدال', href: '#contact' },
    { name: 'حجم الملابس', href: '#contact' },
    { name: 'الأسئلة الشائعة', href: '#contact' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'Youtube' },
];

const paymentMethods = [
  'Visa', 'Mastercard', 'PayPal', 'Apple Pay'
];

const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-[#d4af37]/10">
      {/* Features Bar */}
      <div className="border-b border-[#d4af37]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center">
                <Truck className="h-6 w-6 text-[#d4af37]" />
              </div>
              <div>
                <h4 className="text-[#f5f0e8] font-semibold">شحن مجاني</h4>
                <p className="text-[#f5f0e8]/60 text-sm">للطلبات فوق 500 ر.س</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center">
                <ShieldCheck className="h-6 w-6 text-[#d4af37]" />
              </div>
              <div>
                <h4 className="text-[#f5f0e8] font-semibold">دفع آمن</h4>
                <p className="text-[#f5f0e8]/60 text-sm">100% حماية مشترياتك</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center">
                <CreditCard className="h-6 w-6 text-[#d4af37]" />
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
            <a href="#home" className="inline-block mb-6">
              <span className="text-3xl font-bold text-gradient-gold font-['Playfair_Display']">
                LUXE
              </span>
            </a>
            <p className="text-[#f5f0e8]/60 mb-6 leading-relaxed max-w-sm">
              وجهتك الأولى للأناقة الفاخرة. نقدم تشكيلة حصرية من الملابس والإكسسوارات
              المصممة بأدق التفاصيل.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-[#f5f0e8]/60">
                <MapPin className="h-5 w-5 text-[#d4af37]" />
                <span className="text-sm">الرياض، المملكة العربية السعودية</span>
              </div>
              <div className="flex items-center gap-3 text-[#f5f0e8]/60">
                <Phone className="h-5 w-5 text-[#d4af37]" />
                <span className="text-sm">+966 50 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-[#f5f0e8]/60">
                <Mail className="h-5 w-5 text-[#d4af37]" />
                <span className="text-sm">info@luxe-fashion.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-[#111] border border-[#d4af37]/20 rounded-lg flex items-center justify-center text-[#f5f0e8]/60 hover:bg-[#d4af37] hover:text-[#0a0a0a] hover:border-[#d4af37] transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-[#f5f0e8] font-semibold mb-6">المتجر</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#f5f0e8]/60 hover:text-[#d4af37] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
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
                  <a
                    href={link.href}
                    className="text-[#f5f0e8]/60 hover:text-[#d4af37] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
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
                  <a
                    href={link.href}
                    className="text-[#f5f0e8]/60 hover:text-[#d4af37] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
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
            {/* Copyright */}
            <p className="text-[#f5f0e8]/40 text-sm text-center sm:text-right">
              © 2025 LUXE Fashion. جميع الحقوق محفوظة.
            </p>

            {/* Payment Methods */}
            <div className="flex items-center gap-4">
              <span className="text-[#f5f0e8]/40 text-sm">طرق الدفع:</span>
              <div className="flex gap-2">
                {paymentMethods.map((method) => (
                  <div
                    key={method}
                    className="px-3 py-1 bg-[#111] border border-[#d4af37]/20 rounded text-xs text-[#f5f0e8]/60"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex gap-4">
              <a href="#" className="text-[#f5f0e8]/40 hover:text-[#d4af37] text-sm transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-[#f5f0e8]/40 hover:text-[#d4af37] text-sm transition-colors">
                الشروط والأحكام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
