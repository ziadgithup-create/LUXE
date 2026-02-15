import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactInfo = [
  {
    icon: MapPin,
    title: 'العنوان',
    content: 'الرياض، المملكة العربية السعودية',
    subContent: 'طريق الملك فهد، برج المملكة',
  },
  {
    icon: Phone,
    title: 'الهاتف',
    content: '+966 50 123 4567',
    subContent: '+966 11 234 5678',
  },
  {
    icon: Mail,
    title: 'البريد الإلكتروني',
    content: 'info@luxe-fashion.com',
    subContent: 'support@luxe-fashion.com',
  },
  {
    icon: Clock,
    title: 'ساعات العمل',
    content: 'السبت - الخميس: 9 ص - 10 م',
    subContent: 'الجمعة: 4 م - 10 م',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16">
      {/* Hero */}
      <div className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#d4af37] text-sm font-medium tracking-wider uppercase mb-4 block">
              تواصل معنا
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold text-[#f5f0e8] mb-6 font-['Playfair_Display']">
              نحن هنا <span className="text-gradient-gold">لمساعدتك</span>
            </h1>
            <p className="text-xl text-[#f5f0e8]/70 leading-relaxed">
              فريقنا جاهز للإجابة على جميع استفساراتك. تواصل معنا عبر أي من القنوات التالية
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="bg-[#111] border border-[#d4af37]/10 rounded-xl p-6 text-center hover:border-[#d4af37]/30 transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-[#d4af37]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#d4af37]/20 transition-colors">
                  <info.icon className="h-8 w-8 text-[#d4af37]" />
                </div>
                <h3 className="text-[#f5f0e8] font-semibold text-lg mb-2">{info.title}</h3>
                <p className="text-[#d4af37]">{info.content}</p>
                <p className="text-[#f5f0e8]/60 text-sm">{info.subContent}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="py-16 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#f5f0e8] mb-6 font-['Playfair_Display']">
                أرسل لنا رسالة
              </h2>
              <p className="text-[#f5f0e8]/60 mb-8">
                املأ النموذج أدناه وسنقوم بالرد عليك في أقرب وقت ممكن
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#f5f0e8] mb-2 text-sm">الاسم الكامل</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="أدخل اسمك"
                      className="bg-[#111] border-[#d4af37]/30 text-[#f5f0e8] placeholder:text-[#f5f0e8]/40 focus:border-[#d4af37]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[#f5f0e8] mb-2 text-sm">البريد الإلكتروني</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="bg-[#111] border-[#d4af37]/30 text-[#f5f0e8] placeholder:text-[#f5f0e8]/40 focus:border-[#d4af37]"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#f5f0e8] mb-2 text-sm">رقم الهاتف</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+966 50 123 4567"
                      className="bg-[#111] border-[#d4af37]/30 text-[#f5f0e8] placeholder:text-[#f5f0e8]/40 focus:border-[#d4af37]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#f5f0e8] mb-2 text-sm">الموضوع</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="موضوع الرسالة"
                      className="bg-[#111] border-[#d4af37]/30 text-[#f5f0e8] placeholder:text-[#f5f0e8]/40 focus:border-[#d4af37]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#f5f0e8] mb-2 text-sm">الرسالة</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="اكتب رسالتك هنا..."
                    rows={6}
                    className="bg-[#111] border-[#d4af37]/30 text-[#f5f0e8] placeholder:text-[#f5f0e8]/40 focus:border-[#d4af37] resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full h-14 bg-[#d4af37] hover:bg-[#c4a030] text-[#0a0a0a] font-semibold text-lg disabled:opacity-70"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="ml-2 h-5 w-5" />
                      تم إرسال الرسالة!
                    </>
                  ) : (
                    <>
                      <Send className="ml-2 h-5 w-5" />
                      إرسال الرسالة
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className="bg-[#111] border border-[#d4af37]/10 rounded-xl overflow-hidden">
              <div className="h-full min-h-[400px] flex items-center justify-center bg-gradient-to-br from-[#111] to-[#0a0a0a]">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-[#d4af37] mx-auto mb-4" />
                  <h3 className="text-[#f5f0e8] font-semibold text-xl mb-2">موقعنا</h3>
                  <p className="text-[#f5f0e8]/60">الرياض، المملكة العربية السعودية</p>
                  <p className="text-[#d4af37] mt-2">طريق الملك فهد، برج المملكة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#f5f0e8] font-['Playfair_Display']">
              الأسئلة الشائعة
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'ما هي مدة الشحن والتوصيل؟',
                a: 'نقدم شحن مجاني للطلبات فوق 500 ر.س. مدة التوصيل 2-5 أيام عمل داخل المملكة، و5-10 أيام للدول الأخرى.',
              },
              {
                q: 'هل يمكنني إرجاع أو استبدال المنتج؟',
                a: 'نعم، يمكنك إرجاع أو استبدال المنتج خلال 30 يوماً من تاريخ الشراء، شريطة أن يكون في حالته الأصلية.',
              },
              {
                q: 'ما هي طرق الدفع المتاحة؟',
                a: 'نقبل الدفع عبر Visa، Mastercard، PayPal، Apple Pay، والدفع عند الاستلام داخل المملكة.',
              },
              {
                q: 'كيف يمكنني معرفة مقاسي المناسب؟',
                a: 'نوفر دليل مقاسات مفصل لكل منتج. يمكنك أيضاً التواصل مع فريق خدمة العملاء للمساعدة.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-[#111] border border-[#d4af37]/10 rounded-xl p-6 hover:border-[#d4af37]/30 transition-all"
              >
                <h4 className="text-[#f5f0e8] font-semibold mb-2">{faq.q}</h4>
                <p className="text-[#f5f0e8]/60">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
