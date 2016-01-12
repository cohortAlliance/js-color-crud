//------- COLOR ARRAY -------
var color_array = new Array;

//------- INPUT ---------

var create_input = document.querySelector("form input:nth-of-type(1)");
var read_input = document.querySelector("form input:nth-of-type(2)");
var update_input = document.querySelector("form input:nth-of-type(3)");
var delete_input = document.querySelector("form input:nth-of-type(4)");

//-------- BUTTON -------
var create_button = document.querySelector("form div input:nth-of-type(1)");
var read_button = document.querySelector("form div input:nth-of-type(2)");
var update_button = document.querySelector("form div input:nth-of-type(3)");
var delete_button = document.querySelector("form div input:nth-of-type(4)");

//-------- <UL> ----------
var order_list = document.querySelector("main ul");
var list;
var number_of_list;

create_button.addEventListener('click', function(){

	list = document.createElement('li');

	if(create_input.value === '' || create_input.value === null){
		alert("type in color");
		return '';
	} else {
		list.textContent = create_input.value;
		color_array.push(list);
		list.style.backgroundColor = list.textContent;
		order_list.appendChild(list);
		create_input.value = '';
	}

});

read_button.addEventListener('click', function(){

	if(read_input.value === '' || read_input.value === null){
		alert("type in color");
		return '';
	} else {
		color_array = read_input.value.split(', ');
		for(var i = 0; i < color_array.length; i++){
			list = document.createElement('li');
			list.textContent = color_array[i];
			list.style.backgroundColor = list.textContent;
			order_list.appendChild(list);
		}
		read_input.value = '';
	}

});

update_button.addEventListener('click', function(){

	var replace_word;

	if(update_input.value === '' || update_input.value === null){
		alert("type in color");
		return '';
	} else {
		for(var i = 0; i < color_array.length; i++){
			replace_word = update_input.value.replace("update_input.value[0]", "update_input.value[1]");
			console.log(replace_word);
		}
		update_input.value = '';
	}

});

delete_button.addEventListener('click', function(){
	number_of_list = document.getElementById('ul').getElementsByTagName('li');
	for(var i = 0; i < number_of_list.length; i++){
		if(delete_input.value === number_of_list[i].innerText){
			number_of_list[i].remove(number_of_list);
			delete_input.value = '';
		}
	}

});