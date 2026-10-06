import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      organisation,
      city,
      contact,
      session_type,
      message,
    } = body;

    // Basic server-side validation
    if (!name?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Name is required.",
        },
        { status: 400 }
      );
    }

    if (!contact?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Email or phone is required.",
        },
        { status: 400 }
      );
    }

    if (!session_type?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Please select a session type.",
        },
        { status: 400 }
      );
    }

    if (!message?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Message is required.",
        },
        { status: 400 }
      );
    }

    /**
     * Send form data to WordPress
     */
    const wordpressGraphQLUrl =
    process.env.WORDPRESS_GRAPHQL_URL;

    if (!wordpressGraphQLUrl) {
    return NextResponse.json(
        {
        success: false,
        message: "WordPress GraphQL URL is not configured.",
        },
        { status: 500 }
    );
    }

    // Remove /graphql from the existing GraphQL URL
    const wordpressUrl = wordpressGraphQLUrl.replace(/\/graphql\/?$/, "");



    const wordpressResponse = await fetch(
      `${wordpressUrl}/wp-json/form-enquiry/v1/submit`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          organisation,
          city,
          contact,
          session_type,
          message,
        }),
        cache: "no-store",
      }
    );

    const contentType =
      wordpressResponse.headers.get("content-type") || "";

    let wordpressData;

    if (contentType.includes("application/json")) {
      wordpressData = await wordpressResponse.json();
    } else {
      const text = await wordpressResponse.text();

      console.error(
        "WordPress returned non-JSON response:",
        wordpressResponse.status,
        text.substring(0, 500)
      );

      return NextResponse.json(
        {
          success: false,
          message: `WordPress returned an unexpected response (${wordpressResponse.status}).`,
        },
        { status: wordpressResponse.status }
      );
    }

    /**
     * WordPress API error
     */
    if (!wordpressResponse.ok) {
      return NextResponse.json(
        {
          success: false,
          message:
            wordpressData?.message ||
            "Unable to submit enquiry.",
        },
        {
          status: wordpressResponse.status,
        }
      );
    }

    /**
     * Success
     */
    return NextResponse.json(
      {
        success: true,
        message:
          wordpressData?.message ||
          "Your enquiry has been submitted successfully.",
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}