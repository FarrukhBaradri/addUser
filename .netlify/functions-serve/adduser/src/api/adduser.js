var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// api/adduser.js
__export(exports, {
  handler: () => handler
});
async function handler(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ userid: 25 })
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=adduser.js.map
