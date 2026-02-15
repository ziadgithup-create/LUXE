import { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-main.jpg"
          alt="Luxe Fashion"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/30" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-[#d4af37]/20 rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-48 h-48 border border-[#d4af37]/10 rounded-full animate-pulse delay-700" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#d4af37] rounded-full animate-ping" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 inline-flex items-center gap-2 px-4 py-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full mb-8"
          >
            <Sparkles className="h-4 w-4 text-[#d4af37]" />
            <span className="text-sm text-[#d4af37] font-medium">
              مجموعة جديدة 2025
            </span>
          </div>

          {/* Title */}
          <h1
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 font-['Playfair_Display']"
          >
            <span className="text-[#f5f0e8]">أناقة لا تُضاهى</span>
            <br />
            <span className="text-gradient-gold">فخامة تدوم</span>
          </h1>

          {/* Description */}
          <p
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 text-lg sm:text-xl text-[#f5f0e8]/70 mb-10 leading-relaxed max-w-lg"
          >
            اكتشف تشكيلتنا الحصرية من الملابس الفاخرة المصممة بأدق التفاصيل.
            كل قطعة تحكي قصة من الأناقة والرقي.
          </p>

          {/* CTA Buttons */}
          <div
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-400 flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="bg-[#d4af37] hover:bg-[#c4a030] text-[#0a0a0a] font-semibold px-8 py-6 text-base group"
            >
              تسوق الآن
              <ArrowRight className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#d4af37]/50 text-[#f5f0e8] hover:bg-[#d4af37]/10 hover:border-[#d4af37] px-8 py-6 text-base"
            >
              اكتشف المجموعات
            </Button>
          </div>

          {/* Stats */}
          <div
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-500 mt-16 pt-8 border-t border-[#f5f0e8]/10"
          >
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-[#d4af37] font-['Playfair_Display']">
                  15K+
                </div>
                <div className="text-sm text-[#f5f0e8]/60 mt-1">عميل سعيد</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-[#d4af37] font-['Playfair_Display']">
                  500+
                </div>
                <div className="text-sm text-[#f5f0e8]/60 mt-1">تصميم حصري</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-[#d4af37] font-['Playfair_Display']">
                  50+
                </div>
                <div className="text-sm text-[#f5f0e8]/60 mt-1">براند عالمي</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#d4af37]/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#d4af37] rounded-full animate-pulse" />
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

export default Hero;
