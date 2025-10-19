import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background via-card to-background p-4">
      <Link to="/" className="mb-8">
        <div className="text-3xl font-bold font-heading gradient-pink bg-clip-text text-transparent">
          FITFUEL
        </div>
      </Link>

      <Card className="w-full max-w-md animate-scale-in">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-heading">Добро пожаловать</CardTitle>
          <CardDescription>Войдите или создайте новый аккаунт</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Вход</TabsTrigger>
              <TabsTrigger value="register">Регистрация</TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Пароль</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full gradient-pink"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Icon name="Loader2" className="animate-spin" size={20} />
                  ) : (
                    'Войти'
                  )}
                </Button>
                <Button type="button" variant="link" className="w-full text-sm">
                  Забыли пароль?
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="register" className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="reg-name">Имя</Label>
                  <Input
                    id="reg-name"
                    type="text"
                    placeholder="Ваше имя"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reg-email">Email</Label>
                  <Input
                    id="reg-email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reg-password">Пароль</Label>
                  <Input
                    id="reg-password"
                    type="password"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reg-password-confirm">Подтвердите пароль</Label>
                  <Input
                    id="reg-password-confirm"
                    type="password"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full gradient-orange"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Icon name="Loader2" className="animate-spin" size={20} />
                  ) : (
                    'Зарегистрироваться'
                  )}
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">или войти через</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <Button variant="outline" type="button">
                <Icon name="Mail" size={18} className="mr-2" />
                Google
              </Button>
              <Button variant="outline" type="button">
                <Icon name="MessageCircle" size={18} className="mr-2" />
                VK
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Link to="/" className="mt-6 text-sm text-muted-foreground hover:text-primary transition-colors">
        ← Вернуться на главную
      </Link>
    </div>
  );
};

export default Auth;
