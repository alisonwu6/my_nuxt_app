export default function (context) {
  console.log("[Middleware] check-auth", "initAuth");
  context.store.dispatch("initAuth", context.req);
  // context.req should be null on client-side.
}
