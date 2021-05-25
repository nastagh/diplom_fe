var jamElements = document.getElementsByClassName('jam_element');
//достали все элементы массива
console.log(jamElements);
var displayLength = 3;
// указали количество видимых эоементов

for (var i=0; i<displayLength; i++) {
    jamElements[i].style.display='block';
    //итому элементу массива меняем стиль на видимый
}

var leftArrow = document.getElementById('left_arrow');
var rightArrow = document.getElementById('right_arrow');
// работаем со стрелочками. берем элементы по id
var index = displayLength-1;

function rightClickHandler() {
    if (index < jamElements.length - 1 ) {
        index++; 
        jamElements[index].style.display='block';
        // сделали след элемент вилимым при нажатии
        jamElements[index-displayLength].style.display='none';
        // скрыли лишний левый элемент
        if (index==jamElements.length-1) {
            rightArrow.style.display='none';
        // если открыли все элементы то стрелка пропадает
        }   
        leftArrow.style.display='block'; 
    }
}

function leftClickHandler() {
    if (index > displayLength-1 ) {
        jamElements[index].style.display='none';
        jamElements[index-displayLength].style.display='block';
        index--;
        rightArrow.style.display='block';
        if (index==displayLength-1) {
            leftArrow.style.display='none';
        }    
    }
}

leftArrow.onclick  = leftClickHandler;
rightArrow.onclick = rightClickHandler;
// связали функцию по нажатию с левой и правлй стрелкой


