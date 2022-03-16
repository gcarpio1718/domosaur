messWithMe = document.querySelector('p.mess-with-me');

messWithMe.style.fontSize = '40px';
messWithMe.style.background = 'green';
messWithMe.addEventListener('click', function(){messWithMe.style.color = 'orange'});

dinoTwo = document.querySelector('#hide-me');

dinoTwo.style.visibility = 'hidden';

dinoOne = document.querySelector('#triceratops');

dinoOne.style.width = "324px";
dinoOne.addEventListener('click', function(){dinoOne.style.border = '5px solid red'});

dinoFour = document.querySelector('#feathers');

dinoFour.addEventListener('click', function(){dinoFour.style.opacity = '0.5'});

backGroundColor = document.querySelector('#toggle');

row = document.querySelector('#row');

backGroundColor.addEventListener('click', function(){row.style.background = 'lightgreen'});

dinoThree = document.querySelector('#biggify');

dinoThree.addEventListener('mouseover', function(){dinoThree.style.width = '200px'});

