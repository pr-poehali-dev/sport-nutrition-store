import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const categories = [
  'Протеины',
  'BCAA',
  'Креатин',
  'Витамины',
  'Гейнеры',
  'Жиросжигатели',
];

const brands = [
  'Optimum Nutrition',
  'BPS',
  'FITMAX',
  'MyProtein',
  'Ultimate Nutrition',
];

const products = [
  {
    id: 1,
    name: 'BCAA BEST',
    brand: 'BPS',
    price: 15,
    rating: 4.9,
    reviews: 14,
    category: 'BCAA',
    image: 'https://cdn.poehali.dev/projects/d275f2d4-c350-4b6c-8fcd-99a83c196a73/files/945c891f-00b9-4b47-949a-9f5b33bb10a0.jpg',
    badge: 'Новинка',
  },
  {
    id: 2,
    name: 'BCAA 2-1-1',
    brand: 'FITMAX',
    price: 12,
    rating: 4.7,
    reviews: 8,
    category: 'BCAA',
    image: 'https://cdn.poehali.dev/projects/d275f2d4-c350-4b6c-8fcd-99a83c196a73/files/945c891f-00b9-4b47-949a-9f5b33bb10a0.jpg',
    badge: 'Новинка',
  },
  {
    id: 3,
    name: 'CREATINE PRO-X',
    brand: 'Optimum Nutrition',
    price: 18,
    rating: 4.8,
    reviews: 12,
    category: 'Креатин',
    image: 'https://cdn.poehali.dev/projects/d275f2d4-c350-4b6c-8fcd-99a83c196a73/files/945c891f-00b9-4b47-949a-9f5b33bb10a0.jpg',
  },
  {
    id: 4,
    name: '100% CASEIN',
    brand: 'Optimum Nutrition',
    price: 22,
    rating: 4.9,
    reviews: 16,
    category: 'Протеины',
    image: 'https://cdn.poehali.dev/projects/d275f2d4-c350-4b6c-8fcd-99a83c196a73/files/945c891f-00b9-4b47-949a-9f5b33bb10a0.jpg',
  },
  {
    id: 5,
    name: 'WHEY PROTEIN GOLD',
    brand: 'Optimum Nutrition',
    price: 28,
    rating: 5.0,
    reviews: 24,
    category: 'Протеины',
    image: 'https://cdn.poehali.dev/projects/d275f2d4-c350-4b6c-8fcd-99a83c196a73/files/945c891f-00b9-4b47-949a-9f5b33bb10a0.jpg',
    badge: 'Хит',
  },
  {
    id: 6,
    name: 'MULTIVITAMIN COMPLEX',
    brand: 'MyProtein',
    price: 10,
    rating: 4.6,
    reviews: 9,
    category: 'Витамины',
    image: 'https://cdn.poehali.dev/projects/d275f2d4-c350-4b6c-8fcd-99a83c196a73/files/945c891f-00b9-4b47-949a-9f5b33bb10a0.jpg',
  },
  {
    id: 7,
    name: 'SERIOUS MASS GAINER',
    brand: 'Optimum Nutrition',
    price: 32,
    rating: 4.8,
    reviews: 18,
    category: 'Гейнеры',
    image: 'https://cdn.poehali.dev/projects/d275f2d4-c350-4b6c-8fcd-99a83c196a73/files/945c891f-00b9-4b47-949a-9f5b33bb10a0.jpg',
  },
  {
    id: 8,
    name: 'FAT BURNER EXTREME',
    brand: 'Ultimate Nutrition',
    price: 25,
    rating: 4.5,
    reviews: 11,
    category: 'Жиросжигатели',
    image: 'https://cdn.poehali.dev/projects/d275f2d4-c350-4b6c-8fcd-99a83c196a73/files/945c891f-00b9-4b47-949a-9f5b33bb10a0.jpg',
  },
];

const Catalog = () => {
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const filteredProducts = products.filter((product) => {
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    return priceMatch && categoryMatch && brandMatch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-heading font-bold mb-8">Каталог товаров</h1>

        <div className="grid md:grid-cols-4 gap-8">
          <aside className="space-y-6">
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="font-heading font-semibold mb-4">Цена ($)</h3>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={50}
                    step={1}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading font-semibold mb-4">Категория</h3>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={category}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedCategories([...selectedCategories, category]);
                            } else {
                              setSelectedCategories(selectedCategories.filter((c) => c !== category));
                            }
                          }}
                        />
                        <Label
                          htmlFor={category}
                          className="text-sm font-normal cursor-pointer"
                        >
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-heading font-semibold mb-4">Бренд</h3>
                  <div className="space-y-3">
                    {brands.map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox
                          id={brand}
                          checked={selectedBrands.includes(brand)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedBrands([...selectedBrands, brand]);
                            } else {
                              setSelectedBrands(selectedBrands.filter((b) => b !== brand));
                            }
                          }}
                        />
                        <Label
                          htmlFor={brand}
                          className="text-sm font-normal cursor-pointer"
                        >
                          {brand}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setPriceRange([0, 50]);
                    setSelectedCategories([]);
                    setSelectedBrands([]);
                  }}
                >
                  Сбросить фильтры
                </Button>
              </CardContent>
            </Card>
          </aside>

          <div className="md:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Найдено товаров: <span className="font-semibold">{filteredProducts.length}</span>
              </p>
              <Button variant="outline" size="sm">
                <Icon name="SlidersHorizontal" size={16} className="mr-2" />
                Сортировка
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-xl transition-shadow">
                  <CardContent className="p-4">
                    {product.badge && (
                      <Badge className="mb-2 gradient-pink">{product.badge}</Badge>
                    )}
                    <div className="relative mb-4 aspect-square bg-muted rounded-lg overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 bg-background/80 backdrop-blur"
                      >
                        <Icon name="Heart" size={18} />
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-1 text-sm">
                        <Icon name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{product.rating}</span>
                        <span className="text-muted-foreground">({product.reviews})</span>
                      </div>
                      <h3 className="font-heading font-semibold">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">{product.brand}</p>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-2xl font-bold">${product.price}</span>
                        <Button size="sm" className="gradient-orange">
                          <Icon name="ShoppingCart" size={16} />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Catalog;
