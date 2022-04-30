let a, b, first, second, result;

function input(){//ввод чисел
a = prompt('Первое число?',''); 
b = prompt('Второе число?','');
}
function calcAddition(){               //сумма
    input();
    return (Number(a) + Number(b));
}
function calcSubtraction(){        //разность   
    input();
    return (Number(a) - Number(b));
}
function calcMultiplication(){     //произведение
    input();
    return (Number(a) * Number(b));
}
function calcDivision(){           //деление
    input();
    return (Number(a) / Number(b));
} 

