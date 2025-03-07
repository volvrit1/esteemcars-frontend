import path from "path";
import axios from "axios";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url") as string;

  if (!url)
    return NextResponse.json({ error: "URL is required" }, { status: 400 });

  try {
    // Try to fetch the external image
    const response: unknown | any = await axios.get(url, {
      responseType: "arraybuffer",
    });

    const headers = new Headers();
    headers.set("Content-Type", response.headers["content-type"]);

    return new NextResponse(response.data, {
      headers,
      status: 200,
    });
  } catch (error) {
    console.log(error);
    try {
      const imagePath = path.join(
        process.cwd(),
        "public",
        "assets/common/placeholder.avif"
      );
      const imageBuffer = await fs.readFile(imagePath);

      const headers = new Headers();
      headers.set("Content-Type", "image/jpeg");

      return new NextResponse(imageBuffer, {
        headers,
        status: 200,
      });
    } catch (fileError) {
      return NextResponse.json(
        { error: "Failed to fetch image and fallback image", fileError },
        { status: 500 }
      );
    }
  }
}
