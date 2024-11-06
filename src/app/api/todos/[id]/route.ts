import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: Request, {params}: {params: {id: string}}) {
  try {
    const todo = await prisma.todo.findUnique({
      where: { id: params.id },
    });
    if (!todo) {
      return NextResponse.json({ message: "Todo not found" }, { status: 404 });
    }
    return NextResponse.json(todo, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err });
  }
}

export async function DELETE(req: Request, {params}: {params: {id: string}}) {
  try {
    const todo = await prisma.todo.delete({
      where: { id: params.id },
    });
    if (!todo) {
      return NextResponse.json({ message: "Todo not found" }, { status: 404 });
    }
    return NextResponse.json(todo, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err });
  }
}
