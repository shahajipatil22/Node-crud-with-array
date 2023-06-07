let todos = [];

exports.getTodos = (req, res) => {
    res.render('index', { todos });
};

exports.createTodo = (req, res) => {
  const { title } = req.body;
  const newTodo = { id: Date.now(), title };
  todos.push(newTodo);
  res.render('index', { todos });
};

exports.getTodo = (req, res) => {
  const { id } = req.params;
  const todo = todos.find((todo) => todo.id === parseInt(id));
  if (todo) {
    res.render('index', { todos : todo });
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
};

exports.updateTodo = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const todo = todos.find((todo) => todo.id === parseInt(id));
  if (todo) {
    todo.title = title;
    res.render('index', { todos : todo });
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
};

exports.deleteTodo = (req, res) => {
  const { id } = req.params;
  todos = todos.filter((todo) => todo.id !== parseInt(id));
  res.render('index', { todos });
};
