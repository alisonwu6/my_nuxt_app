export default function (context) {
  console.log("[Middleware] check-auth");
  // context.req should be null on client-side.
  context.store.dispatch("initAuth", context.req);
}
