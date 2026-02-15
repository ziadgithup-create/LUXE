import { useState } from 'react';
import { Filter, Grid3X3, LayoutList, ShoppingBag, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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

const allProducts: Product[] = [
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
  {
    id: 5,
    name: 'فستان سهرة',
    category: 'ملابس نسائية',
    price: 3299,
    image: '/images/hero-main.jpg',
    rating: 4.8,
    isNew: true,
  },
  {
    id: 6,
    name: 'بدلة كاجوال',
    category: 'ملابس رجالية',
    price: 1899,
    originalPrice: 2299,
    image: '/images/collection-casual.jpg',
    rating: 4.6,
    isSale: true,
  },
  {
    id: 7,
    name: 'إكسسوارات متنوعة',
    category: 'إكسسوارات',
    price: 599,
    image: '/images/collection-accessories.jpg',
    rating: 4.5,
  },
  {
    id: 8,
    name: 'فستان مخملي',
    category: 'ملابس نسائية',
    price: 2899,
    image: '/images/collection-evening.jpg',
    rating: 4.9,
    isNew: true,
  },
];

const categories = ['الكل', 'ملابس نسائية', 'ملابس رجالية', 'إكسسوارات', 'أحذية'];

const Shop = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [sortBy, setSortBy] = useState('newest');

  const filteredProducts = selectedCategory === 'الكل'
    ? allProducts
    : allProducts.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#f5f0e8] mb-4 font-['Playfair_Display']">
            المتجر
          </h1>
          <p className="text-[#f5f0e8]/60 max-w-2xl mx-auto">
            اكتشف تشكيلتنا الواسعة من الملابس والإكسسوارات الفاخرة
          </p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 p-4 bg-[#111] rounded-xl border border-[#d4af37]/10">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            <Filter className="h-5 w-5 text-[#d4af37] ml-2" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#d4af37] text-[#0a0a0a] font-semibold'
                    : 'text-[#f5f0e8]/70 hover:text-[#d4af37] hover:bg-[#d4af37]/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort & View */}
          <div className="flex items-center gap-4">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40 bg-[#0a0a0a] border-[#d4af37]/30 text-[#f5f0e8]">
                <SelectValue placeholder="ترتيب حسب" />
              </SelectTrigger>
              <SelectContent className="bg-[#111] border-[#d4af37]/30">
                <SelectItem value="newest" className="text-[#f5f0e8]">الأحدث</SelectItem>
                <SelectItem value="price-low" className="text-[#f5f0e8]">السعر: من低到高</SelectItem>
                <SelectItem value="price-high" className="text-[#f5f0e8]">السعر: من高到低</SelectItem>
                <SelectItem value="rating" className="text-[#f5f0e8]">الأعلى تقييماً</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center gap-1 border border-[#d4af37]/30 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${
                  viewMode === 'grid'
                    ? 'bg-[#d4af37] text-[#0a0a0a]'
                    : 'text-[#f5f0e8]/60 hover:text-[#d4af37]'
                }`}
              >
                <Grid3X3 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${
                  viewMode === 'list'
                    ? 'bg-[#d4af37] text-[#0a0a0a]'
                    : 'text-[#f5f0e8]/60 hover:text-[#d4af37]'
                }`}
              >
                <LayoutList className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-[#f5f0e8]/60 mb-6">
          عرض {filteredProducts.length} منتج
        </p>

        {/* Products Grid */}
        <div className={`grid ${
          viewMode === 'grid'
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
            : 'grid-cols-1'
        } gap-6`}>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`group ${
                viewMode === 'list' ? 'flex gap-6 bg-[#111] rounded-xl p-4' : ''
              }`}
            >
              <div className={`relative ${
                viewMode === 'list' ? 'w-48 h-48 flex-shrink-0' : ''
              }`}>
                <div className={`bg-[#111] rounded-lg overflow-hidden border border-[#d4af37]/10 hover:border-[#d4af37]/30 transition-all duration-500 ${
                  viewMode === 'grid' ? 'hover-lift' : ''
                }`}>
                  <div className={`relative overflow-hidden ${
                    viewMode === 'grid' ? 'aspect-[3/4]' : 'w-full h-full'
                  }`}>
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
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="w-10 h-10 bg-[#0a0a0a]/80 backdrop-blur-sm border border-[#d4af37]/30 text-[#f5f0e8] hover:bg-[#d4af37] hover:text-[#0a0a0a]"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Add to Cart */}
                    {viewMode === 'grid' && (
                      <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                        <Button className="w-full bg-[#d4af37] hover:bg-[#c4a030] text-[#0a0a0a] font-semibold">
                          <ShoppingBag className="ml-2 h-4 w-4" />
                          أضف إلى السلة
                        </Button>
                      </div>
                    )}
                  </div>

                  {viewMode === 'grid' && (
                    <div className="p-4">
                      <span className="text-xs text-[#d4af37] uppercase tracking-wider">
                        {product.category}
                      </span>
                      <h3 className="text-[#f5f0e8] font-semibold mt-1 mb-2 group-hover:text-[#d4af37] transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1 mb-3">
                        <Star className="h-4 w-4 fill-[#d4af37] text-[#d4af37]" />
                        <span className="text-sm text-[#f5f0e8]/80">{product.rating}</span>
                      </div>
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
                  )}
                </div>
              </div>

              {viewMode === 'list' && (
                <div className="flex flex-col justify-center">
                  <span className="text-sm text-[#d4af37] uppercase tracking-wider mb-2">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-semibold text-[#f5f0e8] mb-2 group-hover:text-[#d4af37] transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="h-4 w-4 fill-[#d4af37] text-[#d4af37]" />
                    <span className="text-sm text-[#f5f0e8]/80">{product.rating}</span>
                  </div>
                  <p className="text-[#f5f0e8]/60 mb-4 text-sm leading-relaxed">
                    منتج فاخر بتصميم عصري وأنيق، مصنوع من أجود المواد لضمان أعلى مستويات الجودة والراحة.
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-2xl font-bold text-[#d4af37]">
                      {product.price} ر.س
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-[#f5f0e8]/40 line-through">
                        {product.originalPrice} ر.س
                      </span>
                    )}
                  </div>
                  <Button className="w-fit bg-[#d4af37] hover:bg-[#c4a030] text-[#0a0a0a] font-semibold">
                    <ShoppingBag className="ml-2 h-4 w-4" />
                    أضف إلى السلة
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
