"use server";

export async function DeleteTodo(id: string) {
  await fetch(`http://localhost:3000/api/todos/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
}

export async function EditTodo(
  title: string | undefined,
  description: string | undefined,
  id: string,
) {
  const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description }),
  });
  return res.json();
}

export const getTodoById = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/todos/${id}`);
  return res.json();
};
