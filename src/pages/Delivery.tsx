import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const deliveryMethods = [
  {
    icon: 'Truck',
    title: 'Курьерская доставка',
    description: 'Доставка по Москве и МО в течение 1-2 дней',
    price: 'От 300 ₽',
    gradient: 'gradient-pink',
  },
  {
    icon: 'MapPin',
    title: 'Пункты выдачи',
    description: 'Более 500 пунктов выдачи по всей России',
    price: 'От 200 ₽',
    gradient: 'gradient-orange',
  },
  {
    icon: 'Package',
    title: 'Почта России',
    description: 'Доставка в любой регион страны',
    price: 'От 250 ₽',
    gradient: 'gradient-gold',
  },
];

const features = [
  {
    icon: 'Shield',
    title: 'Гарантия качества',
    description: 'Все товары сертифицированы',
  },
  {
    icon: 'Clock',
    title: 'Быстрая обработка',
    description: 'Отправка заказов в день оформления',
  },
  {
    icon: 'Gift',
    title: 'Подарки',
    description: 'Бонусы к каждому заказу',
  },
  {
    icon: 'CreditCard',
    title: 'Оплата при получении',
    description: 'Наличными или картой курьеру',
  },
];

const Delivery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-background via-card to-background py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
              Доставка и оплата
            </h1>
            <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto">
              Мы предлагаем удобные способы доставки и оплаты для вашего комфорта
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">Способы доставки</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {deliveryMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex p-4 rounded-full ${method.gradient} mb-4`}>
                    <Icon name={method.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">{method.title}</h3>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  <p className="text-2xl font-bold">{method.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card/50 backdrop-blur">
            <CardContent className="p-8">
              <h3 className="font-heading font-semibold text-xl mb-4">Условия доставки</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span>Бесплатная доставка при заказе от 3000 ₽</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span>Экспресс-доставка в пределах МКАД — 500 ₽</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span>Отслеживание заказа в личном кабинете</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span>Доставка в регионы — от 3 до 7 рабочих дней</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="bg-card py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">Способы оплаты</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex p-3 rounded-full bg-muted mb-4">
                    <Icon name={feature.icon as any} size={24} />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">Частые вопросы</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  Как долго обрабатывается заказ?
                </AccordionTrigger>
                <AccordionContent>
                  Заказы, оформленные до 15:00, отправляются в тот же день. Заказы после 15:00 
                  отправляются на следующий рабочий день.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  Можно ли изменить адрес доставки после оформления?
                </AccordionTrigger>
                <AccordionContent>
                  Да, вы можете изменить адрес доставки, связавшись с нашей службой поддержки 
                  до момента отправки заказа.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Что делать, если товар не подошёл?
                </AccordionTrigger>
                <AccordionContent>
                  У вас есть 14 дней на возврат товара надлежащего качества. Товар должен 
                  быть в оригинальной упаковке и не иметь следов использования.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  Как отследить мой заказ?
                </AccordionTrigger>
                <AccordionContent>
                  После отправки заказа вы получите трек-номер на email. Также вы можете 
                  отслеживать статус заказа в личном кабинете.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Delivery;
