import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Heart, Search, Star, Filter, ChevronDown } from "lucide-react";

const categories = [
  "All Products",
  "Electronics",
  "Clothing",
  "Home & Garden",
  "Sports",
  "Beauty",
];

const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    category: "Electronics",
    badge: "Sale",
  },
  {
    id: 2,
    name: "Premium Cotton T-Shirt",
    price: 29.99,
    originalPrice: null,
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    category: "Clothing",
    badge: "New",
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.6,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    category: "Electronics",
    badge: "Bestseller",
  },
  {
    id: 4,
    name: "Minimalist Desk Lamp",
    price: 45.99,
    originalPrice: null,
    rating: 4.3,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    category: "Home & Garden",
    badge: null,
  },
  {
    id: 5,
    name: "Running Shoes Pro",
    price: 119.99,
    originalPrice: 159.99,
    rating: 4.7,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    category: "Sports",
    badge: "Sale",
  },
  {
    id: 6,
    name: "Organic Face Serum",
    price: 34.99,
    originalPrice: null,
    rating: 4.9,
    reviews: 198,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
    category: "Beauty",
    badge: "Popular",
  },
  {
    id: 7,
    name: "Leather Crossbody Bag",
    price: 89.99,
    originalPrice: 120.00,
    rating: 4.4,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
    category: "Clothing",
    badge: null,
  },
  {
    id: 8,
    name: "Portable Bluetooth Speaker",
    price: 59.99,
    originalPrice: null,
    rating: 4.2,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    category: "Electronics",
    badge: "New",
  },
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All Products" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getBadgeVariant = (badge: string | null) => {
    switch (badge) {
      case "Sale":
        return "destructive";
      case "New":
        return "default";
      case "Bestseller":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-primary/90 to-primary pt-20 md:pt-24">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
          <div className="text-center text-primary-foreground">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Discover Amazing Products
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Shop the latest trends with unbeatable prices. Free shipping on orders over $50.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Deals
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="sticky top-16 md:top-20 z-30 bg-background border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredProducts.length}</span> products
          </p>
          <Button variant="ghost" size="sm" className="gap-2">
            <Filter className="h-4 w-4" />
            Sort by
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <Badge
                    variant={getBadgeVariant(product.badge)}
                    className="absolute top-2 left-2"
                  >
                    {product.badge}
                  </Badge>
                )}
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              <CardContent className="p-3 md:p-4">
                <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                <h3 className="font-medium text-sm md:text-base line-clamp-2 mb-2 min-h-[2.5rem]">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mb-2">
                  <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-xs text-muted-foreground">({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
                <Button className="w-full mt-3 gap-2" size="sm">
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
            <Button variant="link" onClick={() => { setSelectedCategory("All Products"); setSearchQuery(""); }}>
              Clear filters
            </Button>
          </div>
        )}
      </div>

      {/* Promo Banner */}
      <div className="bg-muted">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <ShoppingCart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">On orders over $50</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Easy Returns</h3>
              <p className="text-sm text-muted-foreground">30-day return policy</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Quality Guaranteed</h3>
              <p className="text-sm text-muted-foreground">100% authentic products</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
