var time = +prompt('Введите время: ')
if(time == 1){
    alert('час дня')
}else if(time <= 4){
    alert(time + ' часа дня')
}else if(time > 4 && time <=12){
    alert(time + ' часов дня')
}else if(time == 13){
    alert('час ночи')
}else if(time > 13 && time <= 16){
    alert((time - 12) + ' часа ночи')
}else if(time > 16 && time <= 24){
    alert((time - 12) + ' часов ночи')
}else{
    alert('Такое значение времени невозможно')
}