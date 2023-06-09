# Установим и запустим пакет для тестирования проектов Jest

[![Build status](https://ci.appveyor.com/api/projects/status/jmv747272cbbyo4b?svg=true)](https://ci.appveyor.com/project/AndrewVenko/modulejest)

## Инициализация проекта
Как обычно npm init инициализируем прект.

## Установка пакета Jest
Установим пакет Jest: npm install --save-dev jest

## Установка Babel
Установим пакет bable для совместимости с старыми версиями: npm install --save-dev jest-babel

## Установим пакеты для работы с Bable
npm install --save-dev @babel/core @babel/cli @babel/preset-env

## Установка core.js
Установим core.js для того что бы распозновать какие части JS нужно транспилировать: npm install --save-dev core-js@3

## Настроим bable
Создаем файл .babelrc. В нем указываем настройки для babel:
{
    "presets": [
        ["@babel/preset-env", {
            "useBuiltIns": "usage",
            "corejs": 3
        }]
    ]
}

## Тесты
Создадим папку test в корне проекта и будем в ней писать все наши тесты.

## Файл test.js
Создадим файл test.js для проверки нашего кода
test('basic test', () => {
    let result = 1;
    expect(result).toBe(4);
});

## Команда test
Пропишем в скрипте package.json команду test:
"scripts": {
    "test": "jest"
}
Теперь запускаем npm test и видим результа работы теста

## Установим Eslint
Теперь естановим Eslint: npm install --save-dev eslint. Прописать конфигурации для файлов.

Так же нужно прописать в "env" параметр "jest": true.

## Тест на реальной задачи
Создадим функцию для расчета покупок в магазине.

## Покрытие файлов тестом
Можно проверить насколько тесты покрывают файлы проекта, для этого вводим команду: npm test -- --coverage

## Визуальный отчет о тестировании
В папке coverage/Icov-report есть файл index.html

## appveyor.com
Регестрируемся на данном сайте (входим через Git)

## Репозиторий и пуш
Создаем новый репозиторий на гите, связываем с нашим проектом и пушим туда

## Дадим право доступа appveyor.com к нашим репозиториям
Необходимо дать доступ для сайта appveyor.com к нашим репозиториям на гитхабе. Вводим пароль учетной записи и выбираем нужный репозиторий.

## Создание токена гитхаб
Переходим в нужном репозитории в настройки и создаем окружение settings > Environments. Нужно создать токен гитхаб и вставить их в созданное окружение.

## Настройка конфигурации AppVeyor
Создаем файл .appveyor.yml и прописываем в нем конфигурации:
image: Ubuntu1804 #Образ для сборки
stack: node 12 # Окружение
branches:
  only:
    - main # Ветка git
cache: node_modules # кеширование
install:
  - npm install # Команда установки зависимостей
build: off
test_script:
  - npm run lint && npm test # Скрипт сборки

## Коммитем и добавляем в репозиторий

## Переходим в appveyor
И видим что он провел сборку, на выдал кучу ошибок. Одна из них в том, что нужно установить плагин для eslint: npm install --save-dev eslint-plugin-import@latest. Устанавливаем и коммитем исправления и добавления.

## Добавим автоматическое исправление ошибок
Выполним команду: npm run lint -- --fix. Часть ошибок исчезнет.

## Добавим беджик
Сайт appveyor > проект > settings > третий бейджик

## Установим Husky
Установим husky - пакет для автоматического запуска других пакетов или команд. npm install --save-dev husky. Пропишем скрипт: "prepare": "husky install". Запускае скрипт: npm run prepare.

## Добавим запуск пр пуше теста и eslint
пропушем в hucky команду запуска тестов и eslint: npx husky add .husky\pre-commit "npm run lint && npm test"