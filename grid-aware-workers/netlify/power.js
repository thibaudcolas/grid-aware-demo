export default async () => new Response("Hello, world!")

export const config = {
  path: "/power-breakdown",
  excludedPath: ["/static/*"],
}
