import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Collection {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  itemCount: number;
}

const collections: Collection[] = [
  {
    id: 1,
    title: 'سهرة وفخامة',
    subtitle: 'Evening Collection',
    description: 'تشكيلة راقية للمناسبات الخاصة والسهرات',
    image: '/images/collection-evening.jpg',
    itemCount: 48,
  },
  {
    id: 2,
    title: 'كاجوال أنيق',
    subtitle: 'Casual Elegance',
    description: 'أناقة يومية بأسلوب عصري مريح',
    image: '/images/collection-casual.jpg',
    itemCount: 72,
  },
  {
    id: 3,
    title: 'إكسسوارات',
    subtitle: 'Accessories',
    description: 'لمسات نهائية تكمل إطلالتك',
    image: '/images/collection-accessories.jpg',
    itemCount: 35,
  },
];

const Collections = () => {
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
    <div ref={sectionRef} className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-block text-[#d4af37] text-sm font-medium tracking-wider uppercase mb-4"
          >
            المجموعات الحصرية
          </span>
          <h2
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 text-4xl sm:text-5xl font-bold text-[#f5f0e8] mb-6 font-['Playfair_Display']"
          >
            اكتشف أسلوبك
          </h2>
          <p
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-[#f5f0e8]/60 max-w-2xl mx-auto"
          >
            مجموعاتنا المتنوعة تلبي جميع الأذواق والمناسبات، من الأناقة الكلاسيكية إلى العصرية
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              className={`animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-${(index + 3) * 100} group cursor-pointer`}
            >
              <div className="relative h-[500px] rounded-xl overflow-hidden">
                {/* Background Image */}
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  {/* Item Count Badge */}
                  <div className="absolute top-6 right-6 px-3 py-1 bg-[#d4af37]/20 backdrop-blur-sm border border-[#d4af37]/30 rounded-full">
                    <span className="text-sm text-[#d4af37] font-medium">
                      {collection.itemCount} قطعة
                    </span>
                  </div>

                  {/* Arrow Icon */}
                  <div className="absolute top-6 left-6 w-12 h-12 bg-[#d4af37]/0 border border-[#d4af37]/30 rounded-full flex items-center justify-center group-hover:bg-[#d4af37] transition-all duration-500">
                    <ArrowUpRight className="h-5 w-5 text-[#d4af37] group-hover:text-[#0a0a0a] transition-colors" />
                  </div>

                  {/* Text Content */}
                  <div>
                    <span className="text-[#d4af37]/80 text-sm uppercase tracking-wider">
                      {collection.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#f5f0e8] mt-2 mb-3 font-['Playfair_Display'] group-hover:text-[#d4af37] transition-colors">
                      {collection.title}
                    </h3>
                    <p className="text-[#f5f0e8]/60 text-sm mb-4">
                      {collection.description}
                    </p>
                    
                    {/* Explore Link */}
                    <div className="flex items-center gap-2 text-[#d4af37] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <span className="text-sm font-medium">استكشف المجموعة</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                {/* Border Effect */}
                <div className="absolute inset-0 border border-[#d4af37]/0 group-hover:border-[#d4af37]/30 rounded-xl transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-600 mt-16 text-center"
        >
          <p className="text-[#f5f0e8]/60 mb-4">
            هل تبحث عن شيء محدد؟
          </p>
          <a
            href="#shop"
            className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#f5f0e8] transition-colors group"
          >
            <span className="font-medium">تصفح جميع المجموعات</span>
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
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

export default Collections;
