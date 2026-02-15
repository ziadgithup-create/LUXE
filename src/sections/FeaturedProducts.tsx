import { useEffect, useRef, useState } from 'react';
import { ShoppingBag, Heart, Eye, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  isNew?: boolean;
  isSale?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: 'بدلة كلاسيكية أنيقة',
    category: 'ملابس رجالية',
    price: 2499,
    originalPrice: 2999,
    image: '/images/product-suit.jpg',
    rating: 4.9,
    isNew: true,
  },
  {
    id: 2,
    name: 'حقيبة جلد فاخرة',
    category: 'إكسسوارات',
    price: 1899,
    image: '/images/product-bag.jpg',
    rating: 4.8,
    isSale: true,
  },
  {
    id: 3,
    name: 'بلوزة حريرية',
    category: 'ملابس نسائية',
    price: 1299,
    image: '/images/product-blouse.jpg',
    rating: 4.7,
  },
  {
    id: 4,
    name: 'حذاء كعب عالي',
    category: 'أحذية',
    price: 1599,
    originalPrice: 1999,
    image: '/images/product-shoes.jpg',
    rating: 4.9,
    isNew: true,
  },
];

const FeaturedProducts = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

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
    <div ref={sectionRef} className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-block text-[#d4af37] text-sm font-medium tracking-wider uppercase mb-4"
          >
            تشكيلة مميزة
          </span>
          <h2
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 text-4xl sm:text-5xl font-bold text-[#f5f0e8] mb-6 font-['Playfair_Display']"
          >
            وصل حديثاً
          </h2>
          <p
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-[#f5f0e8]/60 max-w-2xl mx-auto"
          >
            اكتشف أحدث الإضافات إلى مجموعتنا الفاخرة، مصممة بعناية فائقة لتلبية أذواقكم الرفيعة
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-${(index + 3) * 100} group`}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative bg-[#111] rounded-lg overflow-hidden border border-[#d4af37]/10 hover:border-[#d4af37]/30 transition-all duration-500 hover-lift">
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isNew && (
                      <Badge className="bg-[#d4af37] text-[#0a0a0a] font-semibold">
                        جديد
                      </Badge>
                    )}
                    {product.isSale && (
                      <Badge className="bg-red-500 text-white font-semibold">
                        خصم
                      </Badge>
                    )}
                  </div>

                  {/* Quick Actions */}
                  <div
                    className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${
                      hoveredProduct === product.id
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 translate-x-4'
                    }`}
                  >
                    <Button
                      size="icon"
                      variant="secondary"
                      className="w-10 h-10 bg-[#0a0a0a]/80 backdrop-blur-sm border border-[#d4af37]/30 text-[#f5f0e8] hover:bg-[#d4af37] hover:text-[#0a0a0a]"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="w-10 h-10 bg-[#0a0a0a]/80 backdrop-blur-sm border border-[#d4af37]/30 text-[#f5f0e8] hover:bg-[#d4af37] hover:text-[#0a0a0a]"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Add to Cart Button */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
                      hoveredProduct === product.id
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <Button
                      className="w-full bg-[#d4af37] hover:bg-[#c4a030] text-[#0a0a0a] font-semibold"
                    >
                      <ShoppingBag className="ml-2 h-4 w-4" />
                      أضف إلى السلة
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <span className="text-xs text-[#d4af37] uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="text-[#f5f0e8] font-semibold mt-1 mb-2 group-hover:text-[#d4af37] transition-colors">
                    {product.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="h-4 w-4 fill-[#d4af37] text-[#d4af37]" />
                    <span className="text-sm text-[#f5f0e8]/80">{product.rating}</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-[#d4af37]">
                      {product.price} ر.س
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-[#f5f0e8]/40 line-through">
                        {product.originalPrice} ر.س
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-[#d4af37]/50 text-[#f5f0e8] hover:bg-[#d4af37]/10 hover:border-[#d4af37] px-8"
          >
            عرض جميع المنتجات
          </Button>
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

export default FeaturedProducts;
