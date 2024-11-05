import React from "react";

const TodoDetail = async ({ params }: { params: { id: string } }) => {
  const param = await params;
  const data = await fetch(`http://localhost:3000/api/todos/${param.id}`);
  const todo = await data.json();
  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
    </div>
  );
};

export default TodoDetail;
