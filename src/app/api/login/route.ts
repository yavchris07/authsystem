
// import type { NextApiRequest, NextApiResponse } from "next";

// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "POST") {
//     const { email, password } = req.body;
//     if (email === "test@example.com" && password === "password123") {
//       res.status(200).json({ token: "mocked-jwt-token-12345" });
//     } else {
//       res.status(401).json({ message: "Invalid credentials" });
//     }
//   } else {
//     res.status(405).end();
    
//   }
// }

// ✅ src/app/api/login/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (email === "test@example.com" && password === "password123") {
    return NextResponse.json({ token: "mocked-jwt-token-12345" }, { status: 200 });
  }

  return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
}

