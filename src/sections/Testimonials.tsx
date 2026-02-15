import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'سارة الأحمد',
    role: 'مصممة أزياء',
    image: '/images/testimonial-1.jpg',
    content: 'تجربة تسوق لا مثيل لها! جودة المنتجات فاقت توقعاتي، والتصاميم فريدة ومميزة. أصبحت وجهتي الأولى لكل مناسبة خاصة.',
    rating: 5,
  },
  {
    id: 2,
    name: 'محمد العلي',
    role: 'رجل أعمال',
    image: '/images/testimonial-2.jpg',
    content: 'خدمة عملاء متميزة ومنتجات بجودة عالمية. البدلة التي اشتريتها حصلت على إعجاب الجميع في المؤتمر الأخير.',
    rating: 5,
  },
  {
    id: 3,
    name: 'نورا الخالد',
    role: 'مدونة موضة',
    image: '/images/testimonial-3.jpg',
    content: 'أحب كيف يجمعون بين الأناقة والراحة. كل قطعة أشتريها تكون إضافة قيمة لخزانتي. أنصح بهم بشدة!',
    rating: 5,
  },
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div ref={sectionRef} className="py-24 bg-[#0d0d0d] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-block text-[#d4af37] text-sm font-medium tracking-wider uppercase mb-4"
          >
            آراء العملاء
          </span>
          <h2
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 text-4xl sm:text-5xl font-bold text-[#f5f0e8] mb-6 font-['Playfair_Display']"
          >
            ما يقولون عنا
          </h2>
          <p
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-[#f5f0e8]/60 max-w-2xl mx-auto"
          >
            نفخر بثقة آلاف العملاء الذين اختارونا وجعلونا جزءاً من رحلتهم في عالم الأناقة
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div
          className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 relative max-w-4xl mx-auto"
        >
          {/* Quote Icon */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#d4af37]/10 rounded-full flex items-center justify-center">
            <Quote className="h-8 w-8 text-[#d4af37]" />
          </div>

          {/* Main Content */}
          <div className="bg-[#111] border border-[#d4af37]/10 rounded-2xl p-8 sm:p-12 pt-16">
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#d4af37] text-[#d4af37]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl sm:text-2xl text-[#f5f0e8] leading-relaxed mb-8 font-['Playfair_Display']">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Author */}
              <div className="flex flex-col items-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-[#d4af37]/30 mb-4"
                />
                <h4 className="text-[#f5f0e8] font-semibold text-lg">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-[#d4af37] text-sm">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="w-12 h-12 border-[#d4af37]/30 text-[#f5f0e8] hover:bg-[#d4af37]/10 hover:border-[#d4af37]"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-[#d4af37] w-8'
                      : 'bg-[#d4af37]/30 hover:bg-[#d4af37]/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="w-12 h-12 border-[#d4af37]/30 text-[#f5f0e8] hover:bg-[#d4af37]/10 hover:border-[#d4af37]"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Trust Badges */}
        <div
          className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-500 mt-16"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-50">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#f5f0e8]/40 font-['Playfair_Display']">Vogue</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#f5f0e8]/40 font-['Playfair_Display']">Elle</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#f5f0e8]/40 font-['Playfair_Display']">Harper's</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#f5f0e8]/40 font-['Playfair_Display']">GQ</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#f5f0e8]/40 font-['Playfair_Display']">Forbes</div>
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

export default Testimonials;
