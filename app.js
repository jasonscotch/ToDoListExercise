
const form = document.querySelector('#add-item');
const input = document.querySelector('#new-item');
const todoList = document.querySelector('#todo-list');

// Local Storage lookup and creates new li's etc...

let todosArray = JSON.parse(localStorage.getItem('todo')) || [];

for(let i = 0; i<todosArray.length; i++){
	let j = todosArray[i];
	console.log(j);
	const newItem = document.createElement('li');
	const label = document.createElement('label');
	const checkBox = document.createElement('input');
	const span = document.createElement('span');
	const removeBtn = new Image(30,30);

	removeBtn.src = 'icons8-trash-can-64.png';
	checkBox.type = 'checkbox';
	
	span.innerText = ' ' + j + ' ';
	label.appendChild(checkBox);
	label.appendChild(span);
	
	
	newItem.appendChild(label);
	newItem.appendChild(removeBtn);
	todoList.appendChild(newItem);
};



//Add new to do items with enter or button click & adds item to localStorage

form.addEventListener('submit', function(e){
	e.preventDefault();
	console.log(input.value);
	const newItem = document.createElement('li');
	const label = document.createElement('label');
	const checkBox = document.createElement('input');
	const span = document.createElement('span');
	const removeBtn = new Image(30,30);

	removeBtn.src = 'icons8-trash-can-64.png';
	checkBox.type = 'checkbox';
	
	
	span.innerText = ' ' + input.value + ' ';
	label.appendChild(checkBox);
	label.appendChild(span);
	
	
	newItem.appendChild(label);
	newItem.appendChild(removeBtn);
	todoList.appendChild(newItem);
	input.value = '';
	// console.log(newItem.innerHTML);

	todosArray.push(newItem.innerText);
	console.log(todosArray);
	localStorage.setItem('todo', JSON.stringify(todosArray));

});

//Remove an item by clicking the trashcan icon


todoList.addEventListener('click', function(e){

	if(e.target.tagName === 'IMG'){
		const listItem = e.target.parentElement.innerText;
		e.target.parentElement.remove();
		console.log(listItem);
		for (let i = 0; i < todosArray.length; i++) {
			if (todosArray[i] == listItem) {
			  todosArray.splice(i, 1);
			  break;}
			};
	} localStorage.setItem('todo', JSON.stringify(todosArray));
	console.log(todosArray);
});

//Cross out an item by clicking or checkbox, adds a CSS class.

todoList.addEventListener('change', function(e){
	let clickedListItem = e.target;
	if(e.target.checked){
		console.log(e.target);
		e.target.parentElement.classList.add('crossed-out');
		//clickedListItem.checked = true;
		// localStorage.setItem('', true);
	}
	else {
		e.target.parentElement.classList.remove('crossed-out');
		//clickedListItem.checked = false;
		// localStorage.setItem('crossedOut', false);
	}
	// for(let i = 0; i < todosArray.length; i++){
	// 	if(todosArray[i].task === clickedListItem.innerText){
	// 		todosArray[i].checked = !todosArray[i].checked;
	// 		console.log(todosArray);
	// 		localStorage.setItem('todo', JSON.stringify(todosArray));
	// 	}
	// }
});

//Clears localStorage

local.addEventListener('click', function(e){
		localStorage.clear()
		window.location.reload();
	}
);








