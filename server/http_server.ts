const BASE_PATH = "../public";
const handler = async (req: Request) => {
  const filePath = BASE_PATH + new URL(req.url).pathname;
  return new Response(filePath);
};

Deno.serve(handler, { port: 8000 });
