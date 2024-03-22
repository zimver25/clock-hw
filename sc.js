

var num = +prompt('укажите время: ')
console.log(typeof(num))
if(isNaN(num) || (0 > num || num > 24)){alert('вы указали не существующее время')}
else if(0 <= num && num<= 12){alert('its ' + num + ' am')}
else if (num >= 13 && num <=24){alert('its ' + (num - 12) + ' pm')}