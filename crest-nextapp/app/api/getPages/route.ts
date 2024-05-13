import { getPageDetailForBotPress } from "@/sanity/sanity-utils";
import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  if (request.method === "GET") {
    const requestHeaders = new Headers(request.headers);
    const API_Key = process.env.API_key;
    const apiKey = request.headers.get("authorization")?.split(" ")[1];
    if (apiKey !== API_Key) {
      return NextResponse.json({ message: "Invalid API key" }, { status: 401 });
    }

    const parameter = request.nextUrl.searchParams.get("page");
    const pageDetails = await getPageDetailForBotPress(parameter?.toString());

    const domainName = "http://" + request.headers.get("host");

    // Construct the response array in the desired format
    const formattedPages = pageDetails[0].pages.map(
      (page: { text: any; _type: any; _key: any }) => ({
        PageTitle: page.text,
        url: `${domainName}/${parameter}/${page._type}/${page._key}`,
      })
    );

    return NextResponse.json({ pages: formattedPages }, { status: 200 });
  }
}
