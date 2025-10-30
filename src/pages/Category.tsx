import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

const Category = () => {
  const { category } = useParams();

  const products = [
    {
      id: "1",
      name: "Matte Finish Lipstick",
      brand: "Glam Beauty",
      price: 599,
      originalPrice: 999,
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop",
      rating: 4.5,
    },
    {
      id: "2",
      name: "Hydrating Foundation",
      brand: "ColorPop",
      price: 1299,
      image: "https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=400&h=400&fit=crop",
      rating: 4.3,
    },
    {
      id: "3",
      name: "Eyeshadow Palette",
      brand: "GlamGlow",
      price: 1499,
      originalPrice: 2199,
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop",
      rating: 4.7,
    },
    {
      id: "4",
      name: "Setting Spray",
      brand: "PureBliss",
      price: 799,
      image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop",
      rating: 4.4,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold capitalize mb-2">{category}</h1>
          <p className="text-muted-foreground">
            Discover our curated collection of {category} products
          </p>
        </div>

        <div className="flex gap-8">
          <aside className="hidden lg:block w-64 space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Price Range</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Under ₹500</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">₹500 - ₹1000</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Above ₹1000</span>
                </label>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Brand</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Glam Beauty</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">ColorPop</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">PureBliss</span>
                </label>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">{products.length} products found</p>
              <Button variant="outline" size="sm">
                Sort by: Popular
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
