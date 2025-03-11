import CategoryList from '@/components/CategoryList';
import ProductList from '@/components/ProductList';
import Slider from '@/components/Slider';

const HomePage = () => {
  return (
    <div className="">
      {/* Slider */}
      <Slider />
      {/* Product List */}
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-26 2xl:px-64 ">
        <h1 className="text-2xl font-semibold">Featured Product</h1>
        <ProductList />
      </div>
      {/* Categories */}
      <div className="mt-24 ">
        <h1 className="text-2xl font-semibold  px-4 md:px-8 lg:px-16 xl:px-26 2xl:px-64 mb-12">Categories</h1>
        <CategoryList />
      </div>
      {/* New Products */}
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-26 2xl:px-64 ">
        <h1 className="text-2xl font-semibold">New Product</h1>
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;
