# E-Commerce API

This project is an example of an Express.js server that fetches data from the [randomuser.me API](https://randomuser.me/) and manipulates it before sending it back to the client. It retrieves 10 random user profiles, manipulates the data, and sends it in a specific format.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoint](#api-endpoint)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [License](#license)

## Installation

### 1. Clone Reposity
Follow these steps to set up the project locally:
```bash
    https://github.com/hawary-id/express-api.git
```    

### 2. Navigate to the project directory:
```bash
    cd express-api
```

### 3. Install Dependencies:
```bash
    mpm install
```

### 6.Install nodemon (optional, if not globally installed):
```bash
    npm install nodemon --save-dev
```

### 7. Start the server:
```bash
    npm run dev
```

### 8. If you want to run the server without auto-restart, use:
```bash
    npm start
```
## Usage
Once the server is running, you can access the API by visiting the following URL in your browser or Postman:
```bash
    http://localhost:3000/manipulate-data
```

### Example
This will return a list of 10 random users with the data manipulated as described below:
```bash
    [
      {
        "name": "Ms, Emma Hakola",
        "location": "9208, Nordenskiöldinkatu, Lieksa, Åland, Finland",
        "email": "emma.hakola@example.com",
        "age": 21,
        "phone": "08-761-811",
        "cell": "048-075-31-27",
        "picture": [
          "https://randomuser.me/api/portraits/women/86.jpg",
          "https://randomuser.me/api/portraits/med/women/86.jpg",
          "https://randomuser.me/api/portraits/thumb/women/86.jpg"
        ]
      }
    ]
```

## API Endpoint
### `manipulate-data`

- **Method**: GET
- **Description**: Fetches 10 random users from [randomuser.me API](https://randomuser.me/), manipulates the data, and returns the following fields:
  - `name`: The title, first name, and last name concatenated.
  - `location`: The full address, including street number, name, city, state, and country.
  - `email`: The user's email address.
  - `age`: The user's age based on their registration date.
  - `phone`: The user's phone number.
  - `cell`: The user's mobile number.
  - `picture`: An array containing URLs of the user's pictures in different sizes (large, medium, and thumbnail).

## Project Structure
```bash
   express-api-project/
    │
    ├── node_modules/          # Dependencies
    ├── package.json           # Project metadata and scripts
    ├── app.js                 # Main application file
    ├── README.md              # Documentation (this file)
    └── .gitignore             # Ignored files and folders

```
## License

This project is licensed under the MIT License. [MIT license](https://opensource.org/licenses/MIT).
