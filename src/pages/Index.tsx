import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const categories = [
  {
    title: 'НАБЕРИ МЫШЕЧНУЮ МАССУ БЫСТРЕЕ',
    emoji: '💪',
    gradient: 'gradient-pink',
  },
  {
    title: 'ИЗБАВЬСЯ ОТ ЛИШНЕГО И ОБРЕТИ ФОРМУ',
    emoji: '🔥',
    gradient: 'gradient-orange',
  },
  {
    title: 'УКРЕПИ СВОЙ ИММУНИТЕТ НА ДОЛГИЕ ГОДЫ',
    emoji: '🛡️',
    gradient: 'gradient-gold',
  },
  {
    title: 'МАКСИМУМ ЭНЕРГИИ ДЛЯ ТВОИХ ЦЕЛЕЙ',
    emoji: '⚡',
    gradient: 'gradient-pink',
  },
];

const products = [
  {
    id: 1,
    name: 'BCAA BEST',
    brand: 'BPS',
    price: '15 $',
    rating: 4.9,
    reviews: 14,
    image: 'https://cdn.poehali.dev/projects/d275f2d4-c350-4b6c-8fcd-99a83c196a73/files/945c891f-00b9-4b47-949a-9f5b33bb10a0.jpg',
    badge: 'Новинка',
  },
  {
    id: 2,
    name: 'BCAA 2-1-1',
    brand: 'FITMAX',
    price: '12 $',
    rating: 4.7,
    reviews: 8,
    image: 'https://cdn.poehali.dev/projects/d275f2d4-c350-4b6c-8fcd-99a83c196a73/files/945c891f-00b9-4b47-949a-9f5b33bb10a0.jpg',
    badge: 'Новинка',
  },
  {
    id: 3,
    name: 'CREATINE PRO-X',
    brand: 'OPTIMUM',
    price: '18 $',
    rating: 4.8,
    reviews: 12,
    image: 'https://cdn.poehali.dev/projects/d275f2d4-c350-4b6c-8fcd-99a83c196a73/files/945c891f-00b9-4b47-949a-9f5b33bb10a0.jpg',
    badge: 'Новинка',
  },
  {
    id: 4,
    name: '100% CASEIN',
    brand: 'OPTIMUM',
    price: '22 $',
    rating: 4.9,
    reviews: 16,
    image: 'https://cdn.poehali.dev/projects/d275f2d4-c350-4b6c-8fcd-99a83c196a73/files/945c891f-00b9-4b47-949a-9f5b33bb10a0.jpg',
    badge: 'Новинка',
  },
];

const reviews = [
  {
    id: 1,
    name: 'Александр М.',
    text: 'Отличный магазин! Быстрая доставка, качественная продукция. Результаты заметны уже после первого месяца приема. Рекомендую!',
    rating: 5,
    image: 'https://cdn.poehali.dev/projects/d275f2d4-c350-4b6c-8fcd-99a83c196a73/files/e4cb2274-ff4d-4b1b-9e7b-378709e15456.jpg',
  },
  {
    id: 2,
    name: 'Мария К.',
    text: 'Заказываю здесь постоянно. Цены адекватные, ассортимент большой. Менеджеры помогли подобрать программу питания под мои цели.',
    rating: 5,
    image: 'https://cdn.poehali.dev/projects/d275f2d4-c350-4b6c-8fcd-99a83c196a73/files/e4cb2274-ff4d-4b1b-9e7b-378709e15456.jpg',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-card to-background">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
                  МОТИВИРУЙТЕ НА ЗДОРОВЫЙ ОБРАЗ ЖИЗНИ! СЕРТИФИКАТ ДЛЯ ЛЮБИТЕЛЕЙ ФИТНЕСА
                </h1>
                <p className="text-lg text-muted-foreground">
                  Подарите силу, энергию и возможность достичь новых вершин
                </p>
                <Button size="lg" className="gradient-pink text-lg px-8 py-6 h-auto">
                  Дарить просто
                </Button>
              </div>
              <div className="relative animate-scale-in">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
                <img
                  src="https://cdn.poehali.dev/projects/d275f2d4-c350-4b6c-8fcd-99a83c196a73/files/b2005105-d43b-43d9-95f3-ee980ce0f5c9.jpg"
                  alt="Gift Certificate"
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="hover:scale-105 transition-transform cursor-pointer overflow-hidden group"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{category.emoji}</div>
                  <h3 className="font-heading font-semibold text-sm leading-tight">
                    {category.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Новинки</h2>
            <Button variant="ghost" className="text-primary">
              Смотреть все
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
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
                      <span className="text-muted-foreground">({product.reviews} отзывов)</span>
                    </div>
                    <h3 className="font-heading font-semibold">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.brand}</p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-2xl font-bold">{product.price}</span>
                      <Button size="sm" className="gradient-orange">
                        <Icon name="ShoppingCart" size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-card py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center">
              Отзывы
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(review.rating)].map((_, i) => (
                            <Icon
                              key={i}
                              name="Star"
                              size={16}
                              className="fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                        <h4 className="font-heading font-semibold mb-2">{review.name}</h4>
                        <p className="text-sm text-muted-foreground">{review.text}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Все отзывы
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
