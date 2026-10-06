/**
 * WordPress GraphQL helper.
 */
export async function fetchGraphQL<T>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<T> {
  const endpoint = process.env.WORDPRESS_GRAPHQL_URL;

  if (!endpoint) {
    throw new Error("WORDPRESS_GRAPHQL_URL is not configured.");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!response.ok) {
    throw new Error(
      `WordPress GraphQL request failed: ${response.status}`
    );
  }

  const result = (await response.json()) as {
    data?: T;
    errors?: Array<{ message: string }>;
  };

  if (result.errors?.length) {
    throw new Error(
      result.errors.map((error) => error.message).join(", ")
    );
  }

  if (!result.data) {
    throw new Error(
      "WordPress GraphQL response did not contain data."
    );
  }

  return result.data;
}