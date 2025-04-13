const ui = SwaggerUIBundle({
  url: "api/building-code.yaml",
  dom_id: '#swagger-ui',
  presets: [
    SwaggerUIBundle.presets.apis,
    SwaggerUIStandalonePreset
  ],
  layout: "StandaloneLayout"
});

window.onload = function() {
  // Build a system
  ui.initOAuth({
    clientId: "your-client-id",
    clientSecret: "your-client-secret",
    realm: "your-realm",
    appName: "Swagger UI",
    scopeSeparator: ",",
    additionalQueryStringParams: {}
  });
};