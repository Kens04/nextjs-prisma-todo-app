import TodoDetail from "@/components/todo-detail";
import React from "react";

const TodoDetailPage = async ({ params }: { params: { id: string } }) => {
  const param = await params;
  const data = await fetch(`http://localhost:3000/api/todos/${param.id}`);
  const todo = await data.json();

  return <TodoDetail todo={todo} todoId={params.id}  />;
};

export default TodoDetailPage;
