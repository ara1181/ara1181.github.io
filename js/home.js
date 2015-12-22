function hello() {
	alert('HELLO!');
	return false
}

function changeColor(section) {
	console.log('CHANGE COLOR: '+section);

	var color = '';
	if (section == 'div1') {
		color = '#000'
	}
	else {
		color = '#777';
	} 

	document.getElementById(section).style.backgroundColor = color;
	return false;
}

//} else
//	document.getElementById(section).style.backgroundColor = '#777';
//}