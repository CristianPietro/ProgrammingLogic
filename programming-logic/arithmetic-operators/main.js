var userGrade1 = prompt('Digite sua nota 1°');
userGrade1 = parseFloat(userGrade1);

var userGrade2 = prompt('Digite sua nota 2°');
userGrade2 = parseFloat(userGrade2);

var userGrade3 = prompt('Digite sua nota 3°');
userGrade3 = parseFloat(userGrade3);

var userMedia = (userGrade1 + userGrade2 + userGrade3) / 3;

alert('Tu ficou com a média ' + userMedia)