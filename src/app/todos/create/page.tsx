"use client"

import { Button, Container, Textarea, TextInput } from "@mantine/core";
import { useState } from "react";

const TodoCreate = () => {
  const [TitleTodo, setTitleTodo] = useState("");
  const [DescriptionTodo, setDescriptionTodo] = useState("");

  const handleClick = async () => {
    await fetch("http://localhost:3000/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: TitleTodo,
        description: DescriptionTodo,
      }),
    });
  };
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
