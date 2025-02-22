# Stack on Cloud API Client Example

This project demonstrates how to use the Stack on Cloud API client generated from the OpenAPI specification.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- An API key from Stack on Cloud

## Setup

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Create a `.env` file from the example:

```bash
cp .env.example .env
```

3. Add your API key to the `.env` file:

```
API_KEY=your_api_key_here
```

## Generating the API Client

The API client is generated using the OpenAPI Generator CLI. The generator configuration is in `openapi-config.yaml`.

To regenerate the client:

```bash
npm run api:generate-client
```

This will generate the TypeScript client in `src/lib/api/` based on the OpenAPI specification in `openapi.spec.json`.

## Running the Example

The example demonstrates basic CRUD operations using the generated client:

- Creating a profile
- Listing profiles with pagination
- Getting a profile by ID
- Updating a profile
- Deleting a profile

To run the example:

1. Build the TypeScript code:

```bash
npm run build
```

2. Run the example:

```bash
npm start
```

## Project Structure

- `src/example.ts` - Example usage of the API client
- `src/lib/api/` - Generated API client code
- `openapi.spec.json` - OpenAPI specification
- `openapi-config.yaml` - OpenAPI generator configuration
- `.env` - Environment variables (API key)

## API Client Features

The generated client provides:

- Type-safe API calls
- Promise-based async methods
- Automatic request/response handling
- Error handling with TypeScript types
- Configuration options (base URL, headers, etc.)

## Error Handling

The example includes proper error handling for:

- API errors (4xx, 5xx responses)
- Network errors
- Missing or invalid configuration
- Type validation errors

## Generated Client Methods

The ProfileApi class provides the following methods:

- `createProfile(profile: ApiProfile)`
- `listProfile(page?: number, size?: number, sort?: string)`
- `getProfileById(id: string)`
- `updateProfile(id: string, profile: ApiProfile)`
- `deleteProfile(id: string)`

Each method returns a Promise that resolves with the API response.