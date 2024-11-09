"use client"

import { Button, Container, Textarea, TextInput } from "@mantine/core";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const TodoCreate = () => {
  const { data: session } = useSession();
  const [TitleTodo, setTitleTodo] = useState("");
  const [DescriptionTodo, setDescriptionTodo] = useState("");

  const handleClick = async () => {
    if (!session?.user) return;
    await fetch("http://localhost:3000/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: TitleTodo,
        description: DescriptionTodo,
        userId: session.user.id,
      }),
    });
  };

  if (!session) {
    return (
      <div className="text-center mt-12">
        <p>TODOを作成するにはログインが必要です</p>
        <Link href="/signin" className="text-blue-500 hover:underline">
          ログインする
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-12">
      <Container fluid bg="var(--mantine-color-gray-light)">
        <form className="flex flex-col gap-3 max-w-[800px] mx-auto py-12">
          <TextInput
            value={TitleTodo}
            onChange={(e) => setTitleTodo(e.target.value)}
            withAsterisk
            label="タイトル"
            placeholder="TODOタイトル"
          />
          <Textarea
            value={DescriptionTodo}
            onChange={(e) => setDescriptionTodo(e.target.value)}
            withAsterisk
            label="内容"
            placeholder="TODO内容"
          />
          <Button onClick={handleClick} type="submit">
            TODO作成
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default TodoCreate;
