const auth = require("json-server-auth");
const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 9000;

server.db = router.db;

server.use(middlewares);

const rules = auth.rewriter({});

server.use(rules);
server.use(auth);
server.use(router);

server.listen(port);
