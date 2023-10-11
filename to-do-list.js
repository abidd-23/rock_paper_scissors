const todo = [{
  name: 'abid',
  dueDate: '2023-03-23'
}, {
  name: 'ali',
  dueDate: '2023-03-23'
}, {
  name: 'haha',
  dueDate: '2023-03-23'
}];
rendertodo();
function rendertodo() {
  let todoHtml = '';
  for (let i = 0; i < todo.length; i++) {
    const taskObject = todo[i];
    naam = taskObject.name;
    date = taskObject.dueDate;
    const html = `<div>${naam}</div><div>${date}</div><button onclick="
    todo.splice(${i}, 1);
    rendertodo();
    " class="del1">Delete</button>`;
    todoHtml += html;
  };
  console.log(todoHtml);

  document.querySelector('.js-todo-list')
    .innerHTML = todoHtml;
};
function addTo() {
  const inputEl = document.querySelector('.js-input');
  const name = inputEl.value;
  const dateInputEL = document.querySelector('.js-due-date');
  const dueDate = dateInputEL.value;

  todo.push({
    name: name,
    dueDate: dueDate,
  });
  console.log(todo);

  inputEl.value = '';

  rendertodo();
}