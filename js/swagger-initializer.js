const ui = SwaggerUIBundle({
  url: "api/building-code.yaml",
  dom_id: '#swagger-ui',
  presets: [
    SwaggerUIBundle.presets.apis,
    SwaggerUIStandalonePreset
  ],
  layout: "StandaloneLayout"
});

const existingUi = SwaggerUIBundle({
  url: "api/existing-building-code.yaml",
  dom_id: '#existing-swagger-ui',
  presets: [
    SwaggerUIBundle.presets.apis,
    SwaggerUIStandalonePreset
  ],
  layout: "StandaloneLayout"
});

const referenceUi = SwaggerUIBundle({
  url: "api/reference-code.yaml",
  dom_id: '#reference-swagger-ui',
  presets: [
    SwaggerUIBundle.presets.apis,
    SwaggerUIStandalonePreset
  ],
  layout: "StandaloneLayout"
});