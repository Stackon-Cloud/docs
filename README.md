# Stack on Cloud: A Developer-Friendly BaaS Platform

Stack on Cloud is a robust and scalable backend as a service (BaaS) platform designed to simplify the development
process for developers, startups, and small to medium-sized businesses. With Stack on Cloud, you can focus on building
your application's front-end while we handle the backend infrastructure, including managed PostgreSQL databases,
auto-generated RESTful APIs, and secure authentication.

## Key Features

- **Managed PostgreSQL Databases:** Fully hosted, scalable SQL databases with robust data integrity and complex querying
  capabilities, perfect for real-world workloads.
- **Auto-Generated RESTful APIs:** Instant creation of REST endpoints for your data models, complete with OpenAPI
  documentation for easy integration.
- **Built-In Authentication:** Secure API key management and JWT authentication, ensuring your app is secure from day
  one.
- **Usage-Based Pricing:** Start with a free tier and scale up affordably as your application grows, ideal for startups
  and small businesses.
- **Easy Integration:** Seamlessly integrate with your front-end applications using our auto-generated APIs and
  comprehensive documentation.

## Getting Started

### 1. Creating Your First Project

Start by creating a new project from the dashboard:

- Navigate to the Dashboard
- Click the "Create Project" button
- Enter a project name and optional description
- Your new project will appear in the sidebar under "Projects"

### 2. Setting Up Your Database

Create a new database instance within your project:

- Expand your project in the sidebar
- Click on "Databases"
- Click "Create Database"
- Enter a name for your database
- Your new database will appear in the sidebar under your project

### 3. Creating Tables

Define your data structure by creating tables:

- Click on your database in the sidebar
- Click "Create Table"
- Define your table schema by adding fields
- For each field, specify the name, data type, and constraints (nullable, unique, etc.)
- Add a primary key field to properly identify your records
- Your tables will appear in the sidebar under your database

### 4. Managing API Keys

Create and manage API keys for authentication:

- Click "API Keys" in your project's sidebar section
- Click "Generate New Key"
- Save your API key securely - it won't be shown again
- Use this key in the X-API-Key header of your API requests

### 5. Accessing Your API

View and test your auto-generated API:

- Navigate to your database page
- Click "View OpenAPI" to open the API documentation
- Test your endpoints directly in the OpenAPI viewer
- Click "Download JSON" to get the OpenAPI specification file

### 6. Using the API

Always include your API key in the X-API-Key header with every request.

### 7. Generating API Clients

After downloading your OpenAPI specification, you can generate client libraries:

- [OpenAPI Generator (Official)](https://github.com/OpenAPITools/openapi-generator)
- [Swagger Codegen](https://github.com/swagger-api/swagger-codegen)
- [NSwag](https://github.com/RicoSuter/NSwag)

Example: Generating a TypeScript client

```bash
# Install OpenAPI Generator
npm install @openapitools/openapi-generator-cli -g

# Generate TypeScript client
openapi-generator-cli generate \
  -i openapi.json \
  -g typescript-fetch \
  -o ./generated-client
```

### 8. Usage Monitoring

Monitor your database and API usage:

- Navigate to your project dashboard
- View usage metrics for database requests, storage, and authentication
- Monitor your usage against your current tier limits
- Upgrade your tier if you're approaching limits

## Additional Resources

- Blog: [Stack on Cloud Blog](https://stackon.cloud/blog)
- GitHub: [Stack on Cloud GitHub](https://github.com/Stackon-Cloud)
- Documentation: [https://stackon.cloud/documentation](https://stackon.cloud/documentation)

## License

This project is licensed under the MIT License