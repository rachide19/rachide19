const menu = document.querySelector('.menu');

menu.classList.add('active');
menu.classList.remove('azul');
//menu.classList.toggle('azul');

if (menu.classList.contains('azul')) {
  menu.classList.add('possui azul');
} else {
  menu.classList.remove('não possui azul');
}


console.log(menu.className)