import { useEffect, useRef, useState } from 'react';
import { Mail, Send, CheckCircle, Gift, Percent, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const benefits = [
  { icon: Gift, text: 'خصم 15% على أول طلب' },
  { icon: Percent, text: 'عروض حصرية للمشتركين' },
  { icon: Bell, text: 'تنبيهات للتشكيلات الجديدة' },
];

const Newsletter = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <div ref={sectionRef} className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #d4af37 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-flex items-center justify-center w-20 h-20 bg-[#d4af37]/10 rounded-full mb-8"
          >
            <Mail className="h-10 w-10 text-[#d4af37]" />
          </div>

          {/* Title */}
          <h2
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 text-4xl sm:text-5xl font-bold text-[#f5f0e8] mb-6 font-['Playfair_Display']"
          >
            انضم إلى نادينا الحصري
          </h2>

          {/* Description */}
          <p
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-[#f5f0e8]/60 text-lg mb-10"
          >
            اشترك في نشرتنا الإخبارية واحصل على آخر الأخبار والعروض الحصرية مباشرة إلى بريدك
          </p>

          {/* Benefits */}
          <div
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 flex flex-wrap justify-center gap-6 mb-10"
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-[#f5f0e8]/70"
              >
                <benefit.icon className="h-5 w-5 text-[#d4af37]" />
                <span className="text-sm">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-400"
          >
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#f5f0e8]/40" />
                <Input
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-14 pr-12 pl-4 bg-[#111] border-[#d4af37]/30 text-[#f5f0e8] placeholder:text-[#f5f0e8]/40 focus:border-[#d4af37] focus:ring-[#d4af37]/20 rounded-lg"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitted}
                className="h-14 px-8 bg-[#d4af37] hover:bg-[#c4a030] text-[#0a0a0a] font-semibold rounded-lg transition-all duration-300 disabled:opacity-70"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="ml-2 h-5 w-5" />
                    تم الاشتراك!
                  </>
                ) : (
                  <>
                    <Send className="ml-2 h-5 w-5" />
                    اشترك الآن
                  </>
                )}
              </Button>
            </div>
          </form>

          {/* Privacy Note */}
          <p
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-500 text-[#f5f0e8]/40 text-sm mt-6"
          >
            بالاشتراك، أنت توافق على سياسة الخصوصية الخاصة بنا. لن نشارك بريدك مع أي طرف ثالث.
          </p>
        </div>
      </div>

      <style>{`
        .animate-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
};

export default Newsletter;
