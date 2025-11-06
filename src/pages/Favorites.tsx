import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

interface FavoriteItem {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const Favorites = () => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold font-heading mb-8">Избранное</h1>
          
          {favorites.length === 0 ? (
            <Card className="p-12 text-center">
              <div className="flex flex-col items-center gap-4">
                <Icon name="Heart" size={64} className="text-muted-foreground" />
                <h2 className="text-2xl font-semibold">Список избранного пуст</h2>
                <p className="text-muted-foreground">
                  Добавляйте товары в избранное, чтобы не потерять их
                </p>
                <Link to="/catalog">
                  <Button className="mt-4">
                    Перейти в каталог
                  </Button>
                </Link>
              </div>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="aspect-square bg-muted">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                    <h3 className="font-semibold mb-2">{item.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold">{item.price} ₽</span>
                      <div className="flex gap-2">
                        <Button size="sm">
                          <Icon name="ShoppingCart" size={16} className="mr-2" />
                          В корзину
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => removeFavorite(item.id)}
                        >
                          <Icon name="Trash2" size={16} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Favorites;
