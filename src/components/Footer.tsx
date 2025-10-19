import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-2xl font-bold font-heading gradient-pink bg-clip-text text-transparent">
              FITFUEL
            </Link>
            <p className="text-sm text-muted-foreground mt-4">
              Ты всегда будешь в курсе новинок и выгодных предложений!
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Разделы сайта</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Каталог
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Доставка
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Контактная информация</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                Телефон: +7 (940) 238-91-43
              </li>
              <li className="text-sm text-muted-foreground">
                E - mail: info@sportfuel.ru
              </li>
              <li className="text-sm text-muted-foreground">
                Мы в интернете
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <Icon name="MessageCircle" size={18} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Icon name="Instagram" size={18} />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Подпишись на нашу рассылку</h3>
            <div className="flex gap-2">
              <Input placeholder="Электронная почта" className="flex-1" />
              <Button className="gradient-pink">
                Подписаться
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            ©2025 SportFuel. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
