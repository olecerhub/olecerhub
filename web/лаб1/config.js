var name = "Олег Харук";

//Завдання 1

alert("№1 Створіть пусту HTML-сторінку. Виведіть з допомогою alert() власне ім’я. Винесіть скрипт в окремий файл. Оголосіть змінну name, збережіть в ній власне ім’я та виведіть з допомогою alert().");

alert(name);

//Завдання 2

alert("#2  Створіть змінні a = (ваш номер по списку) і b = (номер місяця вашого народження. Відніміть від a змінну b і результат надайте змінної c. Потім створіть змінну d, надайте їй значення 7. Складіть змінні c і d, а результат запишіть в змінну result. Виведіть на екран значення змінної result.");
var a,b,c,d,result;

a = 12;

b = 6;

d = 7;

c = a-b;

result = c+d;

alert(result);

//Завдання 3

alert("№3  Введіть з допомогою prompt номер вашого варіанту. Якщо змінна більше або дорівнює 7, то виведіть 'Вірно', інакше виведіть 'Невірно'. Якщо змінна a ділиться на 2, то додайте до неї 7, інакше відніміть 3. Виведіть нове значення змінної на екран. Перевірте роботу скрипта при a, що дорівнює 5, 0, -3, 2.");

var variant = prompt("Введіть номер вашого варіанту");

if (variant >=7){

  alert("Вірно");
}
else {

  alert("Невірно");
}

if (variant%2==0) {

  variant+=7;

  alert(variant);

  variant-=7;

}

else {

  variant-=3;

  alert(variant);

  variant+=3;

}

//Завдання 4

  alert("№4 В стовпчик виведіть квадрати чисел від від 1 до (номеру вашого варіанту +10).");
  z=12+10;
  for (var i = 1; i<z; i++)
  alert(i*i);

//Завдання 5

alert("№5 Виведіть всі прості числа в діапазоні від 2 до (номеру вашого варіанту +10).");
  
var chisl = true;

for (var i = 2; i<z; i++) {

  for (var j = 2; j < i; j++)

    if (i%j == 0)

      chisl = false;

  if (chisl == true)

    alert(i);

  chisl = true;

}
