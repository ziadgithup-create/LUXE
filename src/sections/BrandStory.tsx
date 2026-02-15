import { useEffect, useRef } from 'react';
import { Award, Gem, HeartHandshake, Leaf } from 'lucide-react';

const features = [
  {
    icon: Gem,
    title: 'جودة فائقة',
    description: 'نختار أفضل الأقمشة والمواد لضمان منتجات تدوم',
  },
  {
    icon: Award,
    title: 'تصميم حصري',
    description: 'كل قطعة مصممة بعناية لتكون فريدة من نوعها',
  },
  {
    icon: HeartHandshake,
    title: 'خدمة متميزة',
    description: 'فريق متخصص لمساعدتك في اختيار الأنسب لك',
  },
  {
    icon: Leaf,
    title: 'استدامة',
    description: 'نلتزم بممارسات صديقة للبيئة في إنتاجنا',
  },
];

const BrandStory = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={sectionRef} className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-block text-[#d4af37] text-sm font-medium tracking-wider uppercase mb-4"
            >
              قصتنا
            </span>
            <h2
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 text-4xl sm:text-5xl font-bold text-[#f5f0e8] mb-6 font-['Playfair_Display'] leading-tight"
            >
              فن الأناقة
              <br />
              <span className="text-gradient-gold">منذ عام 2010</span>
            </h2>
            <div
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 space-y-4 text-[#f5f0e8]/70 leading-relaxed"
            >
              <p>
                بدأت رحلتنا برؤية واضحة: إعادة تعريف الأناقة العصرية بأسلوب يجمع بين
                الفخامة والبساطة. منذ ذلك الحين، نسعى جاهدين لتقديم تجربة تسوق فريدة
                تجمع بين الجودة العالية والتصميم الاستثنائي.
              </p>
              <p>
                نؤمن بأن الأناقة ليست مجرد ملابس، بل هي تعبير عن الشخصية والهوية.
                لذلك، نختار كل قطعة بعناية فائقة، من sourcing أفضل المواد إلى التصميم
                النهائي، لنضمن لك منتجاً يعكس ذوقك الرفيع.
              </p>
              <p>
                اليوم، نفخر بأننا وجهة الملايين الذين يبحثون عن التميز، ونستمر في
                ابتكار مجموعات جديدة تلبي تطلعات عملائنا الكرام.
              </p>
            </div>

            {/* Signature */}
            <div
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 mt-8 pt-8 border-t border-[#d4af37]/20"
            >
              <p className="text-[#d4af37] font-['Playfair_Display'] text-xl italic">
                "الأناقة هي الجمال الذي لا يفنى"
              </p>
              <p className="text-[#f5f0e8]/60 text-sm mt-2">
                — مؤسسو LUXE
              </p>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-${(index + 4) * 100} group`}
              >
                <div className="bg-[#111] border border-[#d4af37]/10 rounded-xl p-6 h-full hover:border-[#d4af37]/30 hover:bg-[#111]/80 transition-all duration-500">
                  <div className="w-14 h-14 bg-[#d4af37]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#d4af37]/20 transition-colors">
                    <feature.icon className="h-7 w-7 text-[#d4af37]" />
                  </div>
                  <h3 className="text-[#f5f0e8] font-semibold text-lg mb-2 group-hover:text-[#d4af37] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-[#f5f0e8]/60 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Banner */}
        <div
          className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-700 mt-20"
        >
          <div className="bg-gradient-to-r from-[#d4af37]/10 via-[#d4af37]/5 to-[#d4af37]/10 border border-[#d4af37]/20 rounded-2xl p-8 sm:p-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-[#d4af37] font-['Playfair_Display'] mb-2">
                  15+
                </div>
                <div className="text-[#f5f0e8]/60 text-sm">عام من الخبرة</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-[#d4af37] font-['Playfair_Display'] mb-2">
                  50K+
                </div>
                <div className="text-[#f5f0e8]/60 text-sm">عميل سعيد</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-[#d4af37] font-['Playfair_Display'] mb-2">
                  200+
                </div>
                <div className="text-[#f5f0e8]/60 text-sm">تصميم حصري</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-[#d4af37] font-['Playfair_Display'] mb-2">
                  25+
                </div>
                <div className="text-[#f5f0e8]/60 text-sm">دولة نخدمها</div>
              </div>
            </div>
          </div>
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

export default BrandStory;
