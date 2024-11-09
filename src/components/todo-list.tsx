import { todo } from "@/types/type";
import { Card, Container, Group, Text, Title } from "@mantine/core";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";

const TodoList = async () => {
  const data = await fetch("http://localhost:3000/api/todos", {
    cache: "no-store",
  });
  const todos = await data.json();
  const session = await getServerSession();
  const user = session?.user;

  return (
    <Container size="lg" py="xl">
      <Title order={2} mb="lg">
        TODOリスト
      </Title>
      {session ? <div>{session?.user.name}</div> : null}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {todos?.map((todo: todo) => (
          <Link key={todo.id} href={`todos/${todo.id}`}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Group justify="space-between" mb="xs">
                <Title order={3} size="h4">
                  {todo.title}
                </Title>
              </Group>
              <Text size="sm" c="dimmed">
                {todo.description}
              </Text>
              <Text size="xs" c="dimmed" mt="md">
                作成日: {new Date(todo.createdAt).toLocaleDateString("ja-JP")}
              </Text>
              {user ? (
                <Link
                  href={`todos/edit/${todo.id}`}
                  className="bg-yellow-500 p-2 rounded text-white"
                >編集</Link>
              ) : null}
            </Card>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default TodoList;
