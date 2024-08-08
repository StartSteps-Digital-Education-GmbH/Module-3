# NextJS APIs

## Full-Stack Media Tech Program
### Week 13, Exercise Materials

---

## Task 1: Set Up the Project Structure

### Objective:
Initialize a Next.js project and organize the file structure for better code management.

### Instructions:

1. **Initialize the Next.js Project:**
   - Open the terminal application on your computer.
   - Run the following command to create a new Next.js project.
   - This command sets up a new Next.js application in a folder and changes the current directory to that folder.

> **Explanation:** 
> - **Utility Functions:** Utility functions are helper functions that perform a specific task and can be reused across different parts of your application. In this case, the utility function `fetchWeather` handles the API request to get weather data.
> - Initializing the project sets up the basic structure and dependencies needed for your Next.js application.

2. **Organize the File Structure:**
   - Inside the project directory, create the following folder structure:
     ```
     my-nextjs-app/
     ├── app/
     │   ├── api/
     │   ├── weather/
     │   │   └── page.tsx
     │   ├── time/
     │   │   └── page.tsx
     │   ├── third-api/
     │   │   └── page.tsx
     ├── components/
     │   ├── WeatherComponent.tsx
     │   ├── TimeComponent.tsx
     │   └── ThirdAPIComponent.tsx
     ├── public/
     ├── styles/
     ├── utils/
     │   └── api.ts
     ├── next.config.js
     ├── package.json
     └── tsconfig.json
     ```

> **Explanation:** 
> - `app/`: This folder contains the main pages of your application. Each sub-folder here represents a route.
> - `components/`: This folder contains reusable React components.
> - `public/`: This folder is used to store static files like images, which are accessible via the `/public` URL path.
> - `styles/`: This folder can hold your CSS files.
> - `utils/`: This folder contains utility functions for API requests.
> - `next.config.js`: This is the configuration file for Next.js.
> - `package.json`: This file holds the metadata for your project, including dependencies and scripts.
> - `tsconfig.json`: This is the TypeScript configuration file.

---

## Task 2: Weather API

### Objective:
Use Weather API and set up the utility functions to fetch data from is API.

### Instructions:

1. **Weather API:**

   - **Create API Fetching Utility:**
     1. In the `utils` folder, create a new file named `api.ts`.
     2. Define a function named `fetchWeather`.
     3. Add the code to handle API requests to the OpenWeatherMap API inside this function.

> **Explanation:** 
> - Creating a separate file for API requests keeps the code organized and reusable.

2. **Create Weather Component:**
   1. In the `components` folder, create a new file named `WeatherComponent.tsx`.
   2. Inside `WeatherComponent.tsx`, import the React library and necessary hooks.
   3. Import the `fetchWeather` function from the `api.ts` file.
   4. Define the `WeatherComponent` functional component.
   5. Use the `useState` hook to create state variables for weather data and loading status.
   6. Use the `useEffect` hook to fetch weather data when the component mounts.
   7. Display loading text while the data is being fetched.
   8. Display the fetched weather data.

> **Explanation:** 
> - Using components helps in creating reusable and modular code.
> - The `useState` hook is used to manage state within the component.
> - The `useEffect` hook is used to perform side effects in the component, such as fetching data.

3. **Create Weather Page:**
   1. In the `app/weather` folder, create a new file named `page.tsx`.
   2. Import the `WeatherComponent` from the `components` folder.
   3. Define a functional component for the weather page.
   4. Render the `WeatherComponent` inside this functional component.

> **Explanation:** 
> - Pages in Next.js are associated with routes. Creating a page component makes the weather data accessible via a URL.

---

## Task 3: Implement Time API

### Objective:
Fetch and display the current time for a specific timezone in Europe using the WorldTimeAPI.

### Instructions:

1. **Create Time API Fetching Utility:**
   1. In the `utils/api.ts` file, define a function named `fetchTime`.
   2. Add the code to make a GET request to the WorldTimeAPI.

> **Explanation:** 
> - This function makes a GET request to the WorldTimeAPI to fetch the current time for a specific timezone.

2. **Create Time Component:**
   1. In the `components` folder, create a new file named `TimeComponent.tsx`.
   2. Inside `TimeComponent.tsx`, import the React library and necessary hooks.
   3. Import the `fetchTime` function from the `api.ts` file.
   4. Define the `TimeComponent` functional component.
   5. Use the `useState` hook to create state variables for time data and loading status.
   6. Use the `useEffect` hook to fetch time data when the component mounts.
   7. Display loading text while the data is being fetched.
   8. Display the fetched time data.

> **Explanation:** 
> - The component uses state to manage the fetched data and loading status.

3. **Create Time Page:**
   1. In the `app/time` folder, create a new file named `page.tsx`.
   2. Import the `TimeComponent` from the `components` folder.
   3. Define a functional component for the time page.
   4. Render the `TimeComponent` inside this functional component.

> **Explanation:** 
> - This page component makes the time data accessible via a URL.

---

## Task 4: Implement Third API (Joke API)

### Objective:
Fetch and display a random joke using the JokeAPI.

### Instructions:

1. **Create Joke API Fetching Utility:**
   1. In the `utils/api.ts` file, define a function named `fetchJoke`.
   2. Add the code to make a GET request to the JokeAPI.

> **Explanation:** 
> - This function makes a GET request to the JokeAPI to fetch a random joke.

2. **Create Joke Component:**
   1. In the `components` folder, create a new file named `ThirdAPIComponent.tsx`.
   2. Inside `ThirdAPIComponent.tsx`, import the React library and necessary hooks.
   3. Import the `fetchJoke` function from the `api.ts` file.
   4. Define the `ThirdAPIComponent` functional component.
   5. Use the `useState` hook to create state variables for joke data and loading status.
   6. Use the `useEffect` hook to fetch joke data when the component mounts.
   7. Display loading text while the data is being fetched.
   8. Display the fetched joke data.

> **Explanation:** 
> - The component uses state to manage the fetched data and loading status.

3. **Create Joke Page:**
   1. In the `app/third-api` folder, create a new file named `page.tsx`.
   2. Import the `ThirdAPIComponent` from the `components` folder.
   3. Define a functional component for the joke page.
   4. Render the `ThirdAPIComponent` inside this functional component.

> **Explanation:** 
> - This page component makes the joke data accessible via a URL.

---
