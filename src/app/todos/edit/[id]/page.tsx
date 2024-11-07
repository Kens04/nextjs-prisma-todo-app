"use client";

import { EditTodo, getTodoById } from "@/components/action";
import React, { useEffect, useRef } from "react";
import { Button, Container, Textarea, TextInput } from "@mantine/core";
import { useRouter } from "next/navigation";

const TodoEdit = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const titleRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    getTodoById(params.id)
      .then((data) => {
        if (titleRef.current && descriptionRef.current) {
          titleRef.current.value = data.title;
          descriptionRef.current.value = data.description;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await EditTodo(
        titleRef.current?.value,
        descriptionRef.current?.value,
        params.id
      );
      router.push("/todos");
      router.refresh();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container fluid bg="var(--mantine-color-gray-light)">
      <form
        onSubmit={handleEdit}
        className="flex flex-col gap-3 max-w-[800px] mx-auto py-12"
      >
        <TextInput
          ref={titleRef}
          withAsterisk
          label="タイトル"
          placeholder="TODOタイトル"
        />
        <Textarea
          ref={descriptionRef}
          withAsterisk
          label="内容"
          placeholder="TODO内容"
        />
        <Button type="submit">編集</Button>
      </form>
    </Container>
  );
};

export default TodoEdit;
