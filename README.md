# User API - Simple Structure

## Architecture

Clean 3-layer architecture:

- **Routes** → **Services** → **Repository**

## Endpoints

### GET /api/users

Get all users

### GET /api/users/:id

Get user by ID

### POST /api/users

Create a new user

```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe"
}
```

### PUT /api/users/:id

Update user

```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "firstName": "John",
  "lastName": "Doe"
}
```

### DELETE /api/users/:id

Delete user

## Files

- `src/routes/userRoutes.js` - Route definitions
- `src/services/userService.js` - Business logic
- `src/repository/userRepository.js` - Database operations
- `src/middleware/validators/userValidators.js` - Input validation
