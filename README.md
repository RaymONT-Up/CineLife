# Cinelife

Cinelife - веб-приложение для любителей кино, разработанное с использованием React, Redux Toolkit, TypeScript, React-router-dom и т.д.

## Технологии

- **React**: Основная библиотека для создания пользовательского интерфейса.
- **React-router-dom**: Роутинг реакт приложения. 
- **Redux Toolkit**: Инструменты для управления состоянием приложения.
- **TypeScript**: Статически типизированный язык программирования для повышения безопасности и читаемости кода.
- **Webpack**: Средство для сборки и упаковки проекта.
- **Jest и React Testing Library**: Для юнит-тестирования приложения.
- **Storybook и Loki**: Инструмент для разработки компонентов пользовательского интерфейса в изоляции.
- **Feature-sliced-design**: Как архитектура Frontend приложения.
- **Firebase**: База данных и аунтификация пользователя.
- **Eslint, stylelint**: Линтеры для проекта.
- **Webpack**: Сборщик проекта.

## Команды для управления проектом

- `npm start`: Запускает приложение в режиме разработки на порту 3000.
- `npm run build:prod`: Собирает продуктовую версию приложения.
- `npm run build:dev`: Собирает dev версию приложения.
- `npm run lint:ts`: Eslint проверяет Typescript файлы на ошибки.
- `npm run lint:ts:fix`: Eslint автоматическое исправление ошибок Typescript.
- `npm run lint:scss`: Stylelint проверяет scss файлы на ошибки.
- `npm run lint:scss:fix`: Stylelint автоматическое исправление ошибок scss.
- `npm run test:unit`: Запускает юнит-тесты для приложения.
- `npm run test:ui`: Запускает тестирование пользовательского интерфейса с использованием Loki.
- `npm run test:ui:ok`: Подтверждает результаты тестирования пользовательского интерфейса.
- `npm run test:ui:ci`: Запускает тестирование пользовательского интерфейса в CI-среде.
- `npm run test:ui:report`: Генерирует отчет о результатах тестирования пользовательского интерфейса.
- `npm run storybook`: Запускает Storybook для разработки компонентов.
- `npm run storybook:build`: Собирает Storybook для развертывания.
- `npm run deploy`: Собирает продуктовую версию приложения и разворачивает ее с использованием Firebase.

## Todo

- + Главная страница.
- + Каталог. Фильтрация по жанрам, странам, типам(сериал,фильм etc), сортировка. Подгрузка по скролу.
- + Страница фильма. Блок с информацией, описание, изображения + галерея, данные о бюджете, факты, команда.
- + Страница актера. Информация, факты, фильмы по ролям(режисер, актер, актер озвучки etc).
- + Избранное пользователя. Добавления фильма в любимое/смотрю/буду-смотреть/брошенно.
- +- Смена темы(возможно).
- Подборки фильмов. Подборки фильмов по типу "100 Лучших фильмов" и т.д.
- Рецензии на фильм.
- Рефакторинг кода. Поиск ошибок, декомпозиция и улучшения читаемости кода и его структуры используя принципы архитектуры FSD.
- Оптимизация перерисовок компонентов. UseMemo, memo, useCallback etc.
- +- Оптимизация размеров bundle -> поделить приложение на асинхронные lazy компоненты.
   Пример - залогиненому пользователю не нужен slice и компонент Auth, в то время, как гостю не нужен профиль.
   Тем самым мы можем уменьшить размер первоначальной загрузки главного bundle.
- Оптимизация webpack. Добавить сжатие картинок и css prefix для лучшей кроссбраузерности.
- Более глубокое покрытие тестами приложения на jest/react-testing-lib.
- +- Написать Stories для компонентов на storybook.
- Настройка CD.
- Добавить еще одну важную задачу)

Email: raymontwebdev@gmail.com
telegram: @Raym0NT 

