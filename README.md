# WorldWise

WorldWise is a React application built using Vite, json-server, and CSS modules. The app allows the user to track their travels. This project was created for learning purposes to understand various React concepts.

## Features

- **City Listing**: Add and fetch cities on the list through a form.
- **Map Integration**: Integrated with `react-leaflet` to display a map.
  - **Geolocation**: Get the user's current location on the map using a custom geolocation hook.
  - **Reverse Geocoding**: Detect the exact location clicked on the map using an API from BigDataCloud.
- **React Concepts**:
  - **React Router**: Dynamic routes with URL params and programmatic navigation using `useNavigate`.
  - **useReducer**: State management using the `useReducer` hook.
  - **Context API**: State management using `createContext` and `useContext`.
  - **Custom Context Provider and Hook**: Custom context provider and hook for managing global state.
- **Authentication**: Fake authentication login.
- **Form Validation**: Validate form inputs.
- **Protected Routes**: Protect certain routes based on authentication status.
- **Date Picker**: Use `react-datepicker` for selecting dates.
- **CRUD Operations**: Create and delete city functionality.
- **Performance Optimization**: Improve performance with code splitting and lazy loading.

## Learning Objectives

- Understand and implement dynamic routes with React Router.
- Manage state using `useReducer` and Context API.
- Create custom context providers and hooks.
- Implement form validation and protected routes.
- Integrate maps and geolocation features in a React app.
- Optimize performance with code splitting and lazy loading.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/worldwise.git
   cd worldwise

   ```

2. Install dependencies:

   ```bash
   npm install

   ```

3. Start the development server:

   ```bash
   npm run dev

   ```

4. Start the json-server:
   ```bash
   npm run server
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Log in using the fake authentication.
3. Add cities by clicking on the map and filling out the form.
4. View the list of cities you have added.

## API Key

To use the reverse geocoding feature, you need an API key from BigDataCloud. Add your API key to the `.env` file:

```bash
VITE_API_KEY=your_api_key_here
```

## Technologies used
- Vite
- json-server
- CSS Modules
- React Router
- react-leaflet
- BigDataCloud
- react-datepicker
  
## Acknowledgements
This app was developed as part of the [Udemy course](https://www.udemy.com/course/the-ultimate-react-course/) by Jonas Schmedtmann. Special thanks to Jonas for being an excellent instructor throughout the course.
