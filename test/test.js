import { calculateTotal } from '../src/calculate.js';
// Структура файла тестов
// функция test(description, work)
// тоесть идет описание функции и что в ней должно производится
test('basic test', () => {
  // здесь мы должны сравнить результат с тем который должен быть, как в палате мер и весов
  const result = 4;
  expect(result).toBe(4); // функция для сравнения переменной с тем что должно быть
});

test('calculateTotal sum', () => {
  const list = [
    {
      id: 456,
      name: 'Война и мир',
      count: 3,
      price: 400,
    },
    {
      id: 77,
      name: 'JavaScript',
      count: 1,
      price: 1300,
    }
  ];

  const result = calculateTotal(list);
  expect(result).toBe(2500);
});
