import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const contactInfo = [
  {
    icon: 'Phone',
    title: 'Телефон',
    value: '+7 (940) 238-91-43',
    gradient: 'gradient-pink',
  },
  {
    icon: 'Mail',
    title: 'Email',
    value: 'info@sportfuel.ru',
    gradient: 'gradient-orange',
  },
  {
    icon: 'MapPin',
    title: 'Адрес',
    value: 'Москва, ул. Примерная, д. 123',
    gradient: 'gradient-gold',
  },
  {
    icon: 'Clock',
    title: 'Режим работы',
    value: 'Пн-Вс: 9:00 - 21:00',
    gradient: 'gradient-pink',
  },
];

const socialLinks = [
  { icon: 'MessageCircle', name: 'Telegram', url: '#' },
  { icon: 'Instagram', name: 'Instagram', url: '#' },
  { icon: 'Send', name: 'VK', url: '#' },
  { icon: 'Youtube', name: 'YouTube', url: '#' },
];

const Contacts = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-background via-card to-background py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
              Контакты
            </h1>
            <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto">
              Свяжитесь с нами любым удобным способом — мы всегда на связи!
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex p-3 rounded-full ${info.gradient} mb-4`}>
                    <Icon name={info.icon as any} size={24} className="text-white" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{info.title}</h3>
                  <p className="text-muted-foreground">{info.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">Напишите нам</h2>
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input id="name" placeholder="Иван Иванов" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Сообщение</Label>
                      <Textarea
                        id="message"
                        placeholder="Расскажите, чем мы можем помочь..."
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full gradient-pink">
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">Мы в социальных сетях</h2>
              <Card className="mb-6">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6">
                    Подписывайтесь на наши социальные сети, чтобы быть в курсе акций, 
                    новинок и получать полезные советы по тренировкам и питанию!
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="justify-start"
                        asChild
                      >
                        <a href={social.url} target="_blank" rel="noopener noreferrer">
                          <Icon name={social.icon as any} size={20} className="mr-2" />
                          {social.name}
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl mb-4">
                    Остались вопросы?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Наши менеджеры помогут подобрать спортивное питание под ваши цели 
                    и ответят на все вопросы.
                  </p>
                  <Button className="w-full gradient-orange">
                    <Icon name="Phone" size={18} className="mr-2" />
                    Заказать звонок
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-card py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold mb-6 text-center">Где нас найти</h2>
            <div className="bg-muted rounded-lg overflow-hidden" style={{ height: '400px' }}>
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <Icon name="MapPin" size={48} className="mx-auto mb-4" />
                  <p>Карта загружается...</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contacts;
