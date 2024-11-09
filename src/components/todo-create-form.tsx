import React from "react";
import { Button, Container, Textarea, TextInput } from "@mantine/core";
import { getServerSession } from "next-auth";
import Link from "next/link";

const TodoCreateForm = async ({
  TitleTodo,
  DescriptionTodo,
  setTitleTodo,
  setDescriptionTodo,
  handleClick,
}: {
  TitleTodo: string;
  DescriptionTodo: string;
  setTitleTodo: (value: string) => void;
  setDescriptionTodo: (value: string) => void;
  handleClick: () => void;
}) => {
  const session = await getServerSession();
  const user = session?.user;

  return (
    <>
      {user ? (
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
      ) : (
        <Link href={"/signin"}>ログイン</Link>
      )}
    </>
  );
};

export default TodoCreateForm;
