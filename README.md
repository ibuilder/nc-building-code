# North Carolina Building Code Documentation

This project provides a comprehensive documentation of the North Carolina Building Code, Existing Building Code, and reference codes using Swagger UI. The documentation is structured to facilitate easy navigation and understanding of the codes.

## Project Structure

The project is organized as follows:

```
nc-building-code-docs
├── src
│   ├── index.html                # Main entry point for the documentation
│   ├── css
│   │   ├── main.css              # Custom styles for the documentation
│   │   └── swagger-ui.css        # Default CSS for Swagger UI
│   ├── js
│   │   ├── swagger-ui-bundle.js  # Bundled JavaScript for Swagger UI
│   │   └── swagger-initializer.js # Initializes Swagger UI with API documentation
│   ├── api
│   │   ├── building-code.yaml     # OpenAPI specification for the Building Code
│   │   ├── existing-building-code.yaml # OpenAPI specification for the Existing Building Code
│   │   └── reference-code.yaml    # OpenAPI specification for reference codes
│   └── pages
│       ├── building-code
│       │   ├── index.html        # Landing page for the Building Code section
│       │   ├── general-requirements.html # Documents general requirements of the Building Code
│       │   └── special-requirements.html # Documents special requirements of the Building Code
│       ├── existing-building-code
│       │   ├── index.html        # Landing page for the Existing Building Code section
│       │   └── compliance-methods.html # Documents compliance methods for the Existing Building Code
│       └── reference
│           └── index.html        # Landing page for the reference codes section
├── .gitignore                     # Specifies files and directories to ignore
└── README.md                      # Documentation for the project
```

## Setup Instructions

1. Clone the repository to your local machine.
2. Open the `index.html` file in a web browser to view the documentation.
3. Ensure that all necessary CSS and JavaScript files are included for proper rendering of the Swagger UI.

## Overview of Content

- **Building Code**: Detailed documentation of the North Carolina Building Code, including general and special requirements.
- **Existing Building Code**: Information on compliance methods and requirements for existing buildings.
- **Reference Codes**: Additional context and information related to building codes.

For more information, refer to the individual sections linked in the documentation.