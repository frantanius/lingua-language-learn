import { NextResponse } from "next/server";

import db from "@/db/drizzle";
import { units } from "@/db/schema";
import { isAdminRole } from "@/lib/auth";

export const GET = async () => {
  if (!isAdminRole()) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const data = await db.query.units.findMany();

  return NextResponse.json(data);
};

export const POST = async (req: Request) => {
  if (!isAdminRole()) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const body = await req.json();

  const data = await db
    .insert(units)
    .values({
      ...body,
      // returning because we are gonna return it back to the frontend, without it just creates the data
    })
    .returning();

  return NextResponse.json(data[0]);
};
