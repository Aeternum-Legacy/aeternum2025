import { GraphQLClient } from "graphql-request";

// Prefer the public URL (exposed to the browser) but fall back to a server-only
// env var if available. Use a placeholder for build time if not configured.
const endpoint =
  process.env.NEXT_PUBLIC_WP_GRAPHQL_URL ||
  process.env.WP_GRAPHQL_URL ||
  "https://placeholder.wordpress.com/graphql";

// Warn if endpoint is not configured (but don't throw during build)
if (!process.env.NEXT_PUBLIC_WP_GRAPHQL_URL && !process.env.WP_GRAPHQL_URL) {
  console.warn(
    "WP GraphQL endpoint is not configured. Set NEXT_PUBLIC_WP_GRAPHQL_URL or WP_GRAPHQL_URL in your environment. Using placeholder."
  );
}

// Optional: allow local/dev usage with self-signed certs by opting in to an
// explicit environment flag. This sets the Node TLS behaviour globally which
// is NOT recommended for production. Use only to debug local servers that
// serve a self-signed certificate.
// Set WP_GRAPHQL_ALLOW_INSECURE=true (or 1) in your env to enable.
if (
  (process.env.WP_GRAPHQL_ALLOW_INSECURE === "true" ||
    process.env.WP_GRAPHQL_ALLOW_INSECURE === "1") &&
  typeof process !== "undefined"
) {
  // eslint-disable-next-line no-console
  console.warn(
    "WP_GRAPHQL_ALLOW_INSECURE is set. TLS certificate verification will be disabled for outgoing requests. Do not use this in production."
  );
  // Disable Node certificate verification for outgoing TLS connections. This
  // affects the entire Node process.
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: NODE_TLS_REJECT_UNAUTHORIZED is a runtime-only env var
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

export const graphQLClient = new GraphQLClient(endpoint);
