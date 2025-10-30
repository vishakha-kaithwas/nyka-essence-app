import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

const Home = () => {
  const products = [
    {
      id: "1",
      name: "Matte Finish Lipstick - Ruby Red",
      brand: "Glam Beauty",
      price: 599,
      originalPrice: 999,
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop",
      rating: 4.5,
    },
    {
      id: "2",
      name: "Vitamin C Serum",
      brand: "SkinGlow",
      price: 1299,
      originalPrice: 1799,
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
      rating: 4.8,
    },
    {
      id: "3",
      name: "Hydrating Face Cream",
      brand: "PureBliss",
      price: 899,
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop",
      rating: 4.3,
    },
    {
      id: "4",
      name: "Eyeshadow Palette - Nude Collection",
      brand: "ColorPop",
      price: 1499,
      originalPrice: 2199,
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop",
      rating: 4.7,
    },
    {
      id: "5",
      name: "Floral Perfume 50ml",
      brand: "Essence",
      price: 2499,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
      rating: 4.6,
    },
    {
      id: "6",
      name: "Hair Growth Oil",
      brand: "NatureCare",
      price: 699,
      originalPrice: 999,
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop",
      rating: 4.4,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-primary/20 to-accent">
        <div className="container h-full flex items-center">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold mb-4">Discover Your Beauty</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Explore curated collections of makeup, skincare, and haircare products from top brands
            </p>
            <Button size="lg" className="text-base">
              Shop Now
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Trending Products</h2>
          <Button variant="link">View All</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="container py-12">
        <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Makeup", "Skincare", "Haircare", "Fragrance"].map((category) => (
            <div
              key={category}
              className="relative h-[200px] rounded-lg overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <div className="absolute inset-0 bg-secondary group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute bottom-4 left-4 z-20">
                <h3 className="text-white text-xl font-semibold">{category}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
