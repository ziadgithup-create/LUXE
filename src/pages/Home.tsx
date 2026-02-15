import Hero from '../sections/Hero';
import FeaturedProducts from '../sections/FeaturedProducts';
import Collections from '../sections/Collections';
import BrandStory from '../sections/BrandStory';
import Testimonials from '../sections/Testimonials';
import Newsletter from '../sections/Newsletter';

const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Collections />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  );
};

export default Home;
