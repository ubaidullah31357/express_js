import express, { type Express, type Request, type Response } from "express";

const app: Express = express();
const port = 3000;

// 1. Named Parameters: These are parameters that are part of the URL path and are defined in the route using a colon (:) followed by the parameter name. For example, in the route /users/:id, id is a named parameter. When a request is made to this route, the value of id can be accessed using req.params.id.

app.get("/iphones/:model", (req: Request<{ model: string }>, res: Response) => {
  const model = req.params.model;
  console.log("iPhone Model:", model);
  console.log("Request Parameters:", req.params);
  res.send(`iPhone Model: ${model}`);
  // Add logic to fetch iPhone by model
});

app.get(
  "/products/:category/:id",
  (req: Request<{ category: string; id: string }>, res: Response) => {
    const { category, id } = req.params;
    console.log("Product Category:", category);
    console.log("Product ID:", id);
    console.log("Request Parameters:", req.params);
    res.send(`Product Category: ${category}, ID: ${id}`);
    // Add logic to fetch product by category and ID
  },
);

//
// 2. Wildcards: These are parameters that can match any value in the URL path. They are defined using an asterisk (*) in the route. For example, in the route /files/*, the wildcard parameter can match any path after /files/. The matched value can be accessed using req.params[0].

app.get(
  "/files/*filepath",
  (req: Request<{ filepath: string[] }>, res: Response) => {
    // GET /files/images/logo.png
    console.dir(req.params.filepath);
    // => [ 'images', 'logo.png' ]
    res.send(`File: ${req.params.filepath.join("/")}`);
  },
);

// To also match the root path, wrap the wildcard in braces:
// Matches / , /foo , /foo/bar , etc.
app.get("/{*splat}", (req: Request, res: Response) => {
  // GET / => req.params = {}, splat is omitted
  // GET /foo/bar => req.params.splat = [ 'foo', 'bar' ]
  res.send("ok");
});

//
// 3. Optional Segments: These are parameters that may or may not be present in the URL path. They are defined using braces in the route. For example, in the route /:file{.:ext}, the ext parameter is optional. When a request is made to this route, the value of ext can be accessed using req.params.ext if it is present.

app.get("/files/:file{.:ext}", (req: Request, res: Response) => {
  // GET files/image.png => req.params = { file: 'image', ext: 'png' }
  // GET files/image => req.params = { file: 'image' }
  res.send("ok");
});

app.get("/order{/:id}", (req: Request, res: Response) => {
  // GET /order/42 => req.params = { id: '42' }
  // GET /order => req.params = {}, the whole segment is optional
  res.send("ok");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
