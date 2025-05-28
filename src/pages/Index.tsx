import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Установка кондиционеров",
      description:
        "Профессиональная установка всех типов кондиционеров с гарантией качества",
      icon: "Snowflake",
    },
    {
      title: "Обслуживание и чистка",
      description:
        "Регулярное техническое обслуживание для продления срока службы",
      icon: "Wrench",
    },
    {
      title: "Ремонт и диагностика",
      description:
        "Быстрый ремонт любой сложности и полная диагностика оборудования",
      icon: "Settings",
    },
  ];

  const advantages = [
    "Гарантия 3 года",
    "Работаем 24/7",
    "500+ довольных клиентов",
    "Бесплатный выезд мастера",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Icon name="Snowflake" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              КлиматСервис
            </span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#services"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Услуги
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              О нас
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Контакты
            </a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Вызвать мастера
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Установка кондиционеров
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              в Москве и области
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Профессиональная установка, обслуживание и ремонт кондиционеров.
            Работаем с оборудованием всех марок. Гарантия качества и доступные
            цены.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
            >
              <Icon name="Phone" size={20} />
              Заказать установку
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              <Icon name="Calculator" size={20} />
              Рассчитать стоимость
            </Button>
          </div>
          <div className="mt-12 flex justify-center items-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} />
              <span>Быстрая установка</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} />
              <span>Гарантия 3 года</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Star" size={16} />
              <span>Рейтинг 4.9/5</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг по кондиционированию воздуха для дома и офиса
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 group"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon
                      name={service.icon}
                      size={28}
                      className="text-blue-600"
                    />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 bg-gradient-to-r from-blue-50 to-cyan-50"
      >
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Почему выбирают нас
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Мы — команда сертифицированных специалистов с многолетним опытом
                в области климатического оборудования. Работаем только с
                проверенными брендами и используем качественные материалы.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon
                      name="CheckCircle"
                      size={20}
                      className="text-green-500"
                    />
                    <span className="text-gray-700">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl shadow-2xl flex items-center justify-center">
                <Icon name="Wind" size={80} className="text-white opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Заказать установку
            </h2>
            <p className="text-xl text-gray-600">
              Оставьте заявку и наш мастер бесплатно приедет для замера и
              консультации
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Icon name="MapPin" size={24} className="text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Зона обслуживания
                  </h3>
                  <p className="text-gray-600">Москва и Московская область</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Icon name="Phone" size={24} className="text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Телефон</h3>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Icon name="Clock" size={24} className="text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Режим работы</h3>
                  <p className="text-gray-600">Ежедневно с 8:00 до 22:00</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Icon name="Mail" size={24} className="text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">info@klimatservice.ru</p>
                </div>
              </div>
            </div>
            <Card className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                    placeholder="Как к вам обращаться?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Тип услуги
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors">
                    <option>Установка кондиционера</option>
                    <option>Обслуживание</option>
                    <option>Ремонт</option>
                    <option>Консультация</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Комментарий
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors resize-none"
                    placeholder="Опишите ваши пожелания..."
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 py-3">
                  <Icon name="Send" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Icon name="Snowflake" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold">КлиматСервис</span>
              </div>
              <p className="text-gray-400 text-sm">
                Профессиональная установка и обслуживание кондиционеров в
                Москве.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Установка кондиционеров</li>
                <li>Техническое обслуживание</li>
                <li>Ремонт и диагностика</li>
                <li>Заправка фреоном</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Бренды</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Daikin</li>
                <li>Mitsubishi</li>
                <li>LG</li>
                <li>Samsung</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@klimatservice.ru</p>
                <p>Работаем 24/7</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 КлиматСервис. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
