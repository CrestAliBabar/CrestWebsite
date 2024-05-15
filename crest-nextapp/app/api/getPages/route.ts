import { getPageDetailForBotPress } from "@/sanity/sanity-utils";
import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  if (request.method === "GET") {
    
    const API_Key = process.env.API_key;
    const apiKey = request.headers.get("authorization")?.split(" ")[1];
    if (apiKey !== API_Key) {
      return NextResponse.json({ message: "Invalid API key" }, { status: 401 });
    }

    const parameter = request.nextUrl.searchParams.get("page");
    const pageDetails = await getPageDetailForBotPress(parameter?.toString());

    if (!pageDetails || pageDetails.length === 0) {
      // Return a "Not Found" response if page details are empty
      return NextResponse.json({ message: "Page not found" }, { status: 404 });
    }

    // Extract protocol from request URL
    const protocol = request.nextUrl.protocol.replace(":", "");
    const domainName = `${protocol}://${request.headers.get("host")}`;

    const PageContent = "PageContent";

    // Construct the response array in the desired format
    const formattedPages = pageDetails[0].pages.map(
      (page: { text: any; _type: any; _key: any }) => ({
        PageTitle: page.text,
        url: `${domainName}/${parameter}/${PageContent}/${page._key}`,
      })
    );

    return NextResponse.json({ pages: formattedPages }, { status: 200 });
  }
}
