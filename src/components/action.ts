"use server";

export async function DeleteTodo(id: string) {
  await fetch(`http://localhost:3000/api/todos/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
}

export async function EditTodo(id: string) {
  await fetch(`http://localhost:3000/api/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
  });
}