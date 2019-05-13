var n = prompt('Введите число от 0 до 999');
var n2 = [];
n1={};
if (Number(n)>999) {
    console.log('ошибка');
}else{ i = 0;
    while (i<3) {
        n2[i] = (n % 10);
        n = (n - n % 10) / 10;
        i++;
    }
    n1['Единицы'] = n2[0];
    n1['Десятки'] = n2[1];
    n1['Сотни'] = n2[2];
}
console.log(n1);