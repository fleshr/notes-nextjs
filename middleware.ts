import { updateSession } from "@/4_features/auth/lib/session";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export const middleware = async (request: NextRequest) => {
  if (request.method === "GET") {
    await updateSession();
  }

  return NextResponse.next();
};
