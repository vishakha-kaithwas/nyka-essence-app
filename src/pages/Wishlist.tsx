import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";

const Wishlist = () => {
  const wishlistItems = [
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
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">Your wishlist is empty</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlistItems.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
