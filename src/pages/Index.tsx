import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-secondary">АВТО ВЫКУП</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#main" className="text-secondary hover:text-primary transition-colors">Главная</a>
            <a href="#advantages" className="text-secondary hover:text-primary transition-colors">Преимущества</a>
            <a href="#pricing" className="text-secondary hover:text-primary transition-colors">Оценка</a>
            <a href="#reviews" className="text-secondary hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-secondary hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            <Icon name="Phone" size={16} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="main" className="relative pt-20 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary animate-gradient-shift bg-400%" />
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in">
              <Badge className="mb-4 bg-accent text-secondary">Быстрая оценка</Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                ВЫКУП АВТО
                <span className="block text-accent">В ДЕНЬ ОБРАЩЕНИЯ</span>
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Моментальная оценка, честная цена, быстрая сделка. 
                Получите деньги за свой автомобиль уже сегодня!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent text-secondary hover:bg-accent/90 text-lg px-8 py-4">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Оценить авто
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary text-lg px-8 py-4">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (999) 123-45-67
                </Button>
              </div>
              
              <div className="mt-12 grid grid-cols-3 gap-6 text-center">
                <div className="animate-scale-in" style={{animationDelay: '0.2s'}}>
                  <div className="text-3xl font-bold text-accent">15 мин</div>
                  <div className="text-sm text-gray-200">оценка авто</div>
                </div>
                <div className="animate-scale-in" style={{animationDelay: '0.4s'}}>
                  <div className="text-3xl font-bold text-accent">24/7</div>
                  <div className="text-sm text-gray-200">работаем</div>
                </div>
                <div className="animate-scale-in" style={{animationDelay: '0.6s'}}>
                  <div className="text-3xl font-bold text-accent">1000+</div>
                  <div className="text-sm text-gray-200">довольных клиентов</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/img/0e2f6862-d283-441c-a858-0df99a568dd5.jpg" 
                alt="Автомобиль" 
                className="w-full h-auto rounded-lg shadow-2xl animate-scale-in"
                style={{animationDelay: '0.3s'}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-white">Наши преимущества</Badge>
            <h2 className="text-4xl font-bold text-secondary mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы делаем процесс продажи автомобиля максимально быстрым и выгодным
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in border-0 bg-white">
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">Быстрая оценка</h3>
                <p className="text-gray-600">Оценим ваш автомобиль за 15 минут. Без скрытых комиссий и дополнительных условий.</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in border-0 bg-white" style={{animationDelay: '0.2s'}}>
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="BadgeCheck" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">Честная цена</h3>
                <p className="text-gray-600">Предлагаем рыночную стоимость. Никаких занижений и скрытых вычетов.</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in border-0 bg-white" style={{animationDelay: '0.4s'}}>
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">Выкуп в день обращения</h3>
                <p className="text-gray-600">Оформляем сделку и выдаем деньги в тот же день. Без долгих ожиданий.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent text-secondary">Оценка автомобиля</Badge>
            <h2 className="text-4xl font-bold text-secondary mb-4">Узнайте стоимость своего авто</h2>
          </div>

          <Card className="max-w-lg mx-auto p-8 shadow-xl animate-scale-in">
            <CardContent>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Марка и модель</label>
                  <input 
                    type="text" 
                    placeholder="Toyota Camry" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Год выпуска</label>
                  <input 
                    type="number" 
                    placeholder="2020" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Пробег (км)</label>
                  <input 
                    type="number" 
                    placeholder="50000" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Состояние</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>Отличное</option>
                    <option>Хорошее</option>
                    <option>Удовлетворительное</option>
                    <option>Требует ремонта</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    placeholder="+7 (999) 123-45-67" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Получить оценку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-white">Отзывы клиентов</Badge>
            <h2 className="text-4xl font-bold text-secondary mb-4">Что говорят наши клиенты</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 animate-fade-in border-0 bg-white">
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"Продал свою машину за один день! Оценка была честной, деньги получил сразу. Рекомендую!"</p>
                <div className="font-semibold text-secondary">Алексей М.</div>
              </CardContent>
            </Card>

            <Card className="p-6 animate-fade-in border-0 bg-white" style={{animationDelay: '0.2s'}}>
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"Очень быстро и профессионально. Никаких лишних вопросов, все четко по делу."</p>
                <div className="font-semibold text-secondary">Мария К.</div>
              </CardContent>
            </Card>

            <Card className="p-6 animate-fade-in border-0 bg-white" style={{animationDelay: '0.4s'}}>
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"Цена оказалась даже выше, чем я ожидал. Сделка прошла быстро и без проблем."</p>
                <div className="font-semibold text-secondary">Дмитрий С.</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent text-secondary">Контакты</Badge>
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-300">Готовы ответить на все вопросы и оценить ваш автомобиль</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Телефон</h3>
              <p className="text-gray-300">+7 (999) 123-45-67</p>
              <p className="text-gray-300">Работаем 24/7</p>
            </div>

            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Адрес</h3>
              <p className="text-gray-300">ул. Автомобильная, 15</p>
              <p className="text-gray-300">г. Москва</p>
            </div>

            <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-300">info@avtovykup.ru</p>
              <p className="text-gray-300">Ответим в течение часа</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-secondary text-lg px-8 py-4">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-4">АВТО ВЫКУП</div>
          <p className="text-gray-400">© 2024 Все права защищены. Быстрый и честный выкуп автомобилей.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;