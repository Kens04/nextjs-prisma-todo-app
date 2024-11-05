import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: Request, res: Response) {
  try {
    const todos = await prisma.todo.findMany();
    return NextResponse.json(todos, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: err });
  }
}

export async function POST(req: Request, res: Response) {
  const {title, description} = await req.json();
  try {
    const todo = await prisma.todo.create({
      data: {
        title: title,
        description: description
      }
    });
    return NextResponse.json(todo, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: err });
  }
}