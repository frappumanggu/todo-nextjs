import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//There is an operation that needs internet
//In promise we use "async await"\
//It means data fetching must finish first after that render the data and render the UI
//Data fetching
//Render Data
//Render UI
export async function GET() {
  const todos = await prisma.todo.findMany();
  return NextResponse.json(todos);

  // export async function POST() {
  //   return NextResponse.json(fakeData);
  // }
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const todo = await prisma.todo.create({
    data: {
      title: body.title,
    },
  });
  return NextResponse.json(todo);
}
