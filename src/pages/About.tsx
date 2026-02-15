import { TrendingUp, Target, Heart } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'رؤيتنا',
    description: 'أن نكون الوجهة الأولى للأناقة الفاخرة في المنطقة، ونقدم تجربة تسوق استثنائية تجمع بين الجودة والتصميم الراقي.',
  },
  {
    icon: Heart,
    title: 'رسالتنا',
    description: 'تمكين كل فرد من التعبير عن أسلوبه الفريد من خلال تشكيلة متنوعة من الملابس والإكسسوارات الفاخرة.',
  },
  {
    icon: TrendingUp,
    title: 'أهدافنا',
    description: 'التوسع عالمياً والوصول إلى عملاء في أكثر من 50 دولة، مع الحفاظ على جودة الخدمة والمنتجات.',
  },
];

const milestones = [
  { year: '2010', title: 'البداية', description: 'افتتاح أول متجر في الرياض' },
  { year: '2015', title: 'التوسع', description: 'وصولنا إلى 10 متاجر في المملكة' },
  { year: '2018', title: 'الرقمية', description: 'إطلاق متجرنا الإلكتروني' },
  { year: '2020', title: 'العالمية', description: 'الشحن الدولي إلى 25 دولة' },
  { year: '2023', title: 'التميز', description: 'فوزنا بجائزة أفضل براند فاخر' },
  { year: '2025', title: 'المستقبل', description: 'خطط التوسع في الخليج والعالم' },
];

const team = [
  {
    name: 'أحمد العلي',
    role: 'المؤسس والرئيس التنفيذي',
    image: '/images/testimonial-2.jpg',
  },
  {
    name: 'سارة الأحمد',
    role: 'مديرة التصميم',
    image: '/images/testimonial-1.jpg',
  },
  {
    name: 'نورا الخالد',
    role: 'مديرة التسويق',
    image: '/images/testimonial-3.jpg',
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#d4af37] text-sm font-medium tracking-wider uppercase mb-4 block">
              من نحن
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold text-[#f5f0e8] mb-6 font-['Playfair_Display']">
              قصة <span className="text-gradient-gold">LUXE</span>
            </h1>
            <p className="text-xl text-[#f5f0e8]/70 leading-relaxed">
              منذ عام 2010، نسعى لإعادة تعريف الأناقة العصرية بأسلوب يجمع بين الفخامة والبساطة.
              رحلتنا بدأت برؤية واضحة: تقديم تجربة تسوق فريدة تجمع بين الجودة العالية والتصميم الاستثنائي.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-16 border-y border-[#d4af37]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-[#d4af37] font-['Playfair_Display'] mb-2">
                15+
              </div>
              <div className="text-[#f5f0e8]/60">عام من الخبرة</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-[#d4af37] font-['Playfair_Display'] mb-2">
                50K+
              </div>
              <div className="text-[#f5f0e8]/60">عميل سعيد</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-[#d4af37] font-['Playfair_Display'] mb-2">
                25+
              </div>
              <div className="text-[#f5f0e8]/60">دولة نخدمها</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-[#d4af37] font-['Playfair_Display'] mb-2">
                200+
              </div>
              <div className="text-[#f5f0e8]/60">تصميم حصري</div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-[#111] border border-[#d4af37]/10 rounded-xl p-8 hover:border-[#d4af37]/30 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-[#d4af37]/10 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="h-8 w-8 text-[#d4af37]" />
                </div>
                <h3 className="text-2xl font-bold text-[#f5f0e8] mb-4 font-['Playfair_Display']">
                  {value.title}
                </h3>
                <p className="text-[#f5f0e8]/60 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#d4af37] text-sm font-medium tracking-wider uppercase mb-4 block">
              رحلتنا
            </span>
            <h2 className="text-4xl font-bold text-[#f5f0e8] font-['Playfair_Display']">
              محطات في تاريخنا
            </h2>
          </div>

          <div className="relative">
            {/* Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-[#d4af37]/30 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <div
                  key={milestone.year}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 text-center ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="bg-[#111] border border-[#d4af37]/10 rounded-xl p-6 inline-block">
                      <span className="text-[#d4af37] font-bold text-xl mb-2 block">
                        {milestone.year}
                      </span>
                      <h4 className="text-[#f5f0e8] font-semibold mb-2">{milestone.title}</h4>
                      <p className="text-[#f5f0e8]/60 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-[#d4af37] rounded-full border-4 border-[#0a0a0a] z-10 hidden md:block" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#d4af37] text-sm font-medium tracking-wider uppercase mb-4 block">
              فريقنا
            </span>
            <h2 className="text-4xl font-bold text-[#f5f0e8] font-['Playfair_Display']">
              قادة النجاح
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="absolute inset-0 bg-[#d4af37]/20 rounded-full transform rotate-6 group-hover:rotate-12 transition-transform" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full border-2 border-[#d4af37]/30"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#f5f0e8] mb-2">{member.name}</h3>
                <p className="text-[#d4af37]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
