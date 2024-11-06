"use client";

import { DeleteTodo } from "@/components/action";
import { useRouter } from "next/navigation";
import React from "react";

interface TodoDetailProps {
  todo: {
    title: string;
    description: string;
  };
  todoId: string;
}

const TodoDetail = ({ todo, todoId }: TodoDetailProps) => {
  const router = useRouter();
  const handleDelete = async () => {
    await DeleteTodo(todoId);
    router.push("/todos");
    router.refresh();
  };
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl">{todo.title}</h1>
      <p className="mt-4">{todo.description}</p>
      <button
        onClick={handleDelete}
        className="bg-red-500 p-2 rounded text-white"
      >
        削除
      </button>
    </div>
  );
};

export default TodoDetail;
