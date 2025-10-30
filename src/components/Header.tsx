import { Link } from "react-router-dom";
import { Search, ShoppingBag, User, Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">BeautyStore</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/categories/makeup" className="text-sm font-medium hover:text-primary transition-colors">
            Makeup
          </Link>
          <Link to="/categories/skincare" className="text-sm font-medium hover:text-primary transition-colors">
            Skincare
          </Link>
          <Link to="/categories/haircare" className="text-sm font-medium hover:text-primary transition-colors">
            Haircare
          </Link>
          <Link to="/categories/fragrance" className="text-sm font-medium hover:text-primary transition-colors">
            Fragrance
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search products..." className="pl-8 w-[300px]" />
            </div>
          </div>

          <Button variant="ghost" size="icon" asChild>
            <Link to="/wishlist">
              <Heart className="h-5 w-5" />
            </Link>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <Link to="/cart">
              <ShoppingBag className="h-5 w-5" />
            </Link>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <Link to="/auth">
              <User className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
