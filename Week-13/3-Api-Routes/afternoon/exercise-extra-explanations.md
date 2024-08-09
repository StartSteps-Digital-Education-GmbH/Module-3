# Next.js APIs and TypeScript - Beginner Guide and Exercise

## Introduction to Next.js

> **What is Next.js?**
> Next.js is a framework built on top of React. A framework is like a set of tools and guidelines that help you build applications more efficiently. Next.js makes it easier to build modern web applications by providing features like server-side rendering, static site generation, and API routes.

> **Why Use Next.js?**
> - **File-based routing:** This means you can create new pages just by adding files in the `pages` directory.
> - **Server-side rendering (SSR):** This improves performance and SEO (search engine optimization) by generating HTML on the server.
> - **Static site generation (SSG):** This pre-generates HTML pages at build time, making the site faster.
> - **API routes:** Allows you to build backend APIs within your Next.js app.

## Setting Up the Project

### Initialize a Next.js Project
1. **Open your terminal** (this is a tool where you can type commands to control your computer).
2. **Run the following command** to create a new Next.js project with TypeScript:
    ```sh
    npx create-next-app@latest my-nextjs-app --typescript
    ```

    > **Explanation:**
    > - `npx create-next-app@latest`: This initializes a new Next.js project.
    > - `my-nextjs-app`: This is the name of your project folder.
    > - `--typescript`: This sets up TypeScript in your project, which adds type safety to your code. Type safety helps catch errors early.

3. **Navigate into your project directory**:
    ```sh
    cd my-nextjs-app
    ```

4. **Run the development server**:
    ```sh
    npm run dev
    ```

    > **Explanation:**
    > - `npm run dev`: This starts the development server. Open your browser and go to `http://localhost:3000` to see your new Next.js app running.

## Understanding TypeScript

> **What is TypeScript?**
> TypeScript is a programming language that builds on JavaScript by adding static types. Static types help catch errors during development instead of when you run your program.

> **Why Use TypeScript?**
> - **Type Safety:** Helps you catch errors while you're writing the code.
> - **Better Documentation:** Types serve as documentation for your code.
> - **Enhanced IDE Support:** Improves code completion, navigation, and refactoring in code editors.

### Basic TypeScript Syntax
1. **Variables:**
    ```typescript
    let message: string = "Hello, TypeScript!";
    let count: number = 42;
    let isDone: boolean = true;
    ```

    > **Explanation:**
    > - `message` is a string variable, `count` is a number, and `isDone` is a boolean (true or false).

2. **Functions:**
    ```typescript
    function add(a: number, b: number): number {
      return a + b;
    }
    ```

    > **Explanation:**
    > - This function takes two numbers as parameters (`a` and `b`) and returns a number which is the sum of `a` and `b`.

3. **Interfaces:**
    ```typescript
    interface Person {
      name: string;
      age: number;
    }

    let john: Person = { name: 'John', age: 30 };
    ```

    > **Explanation:**
    > - An interface defines the shape of an object. Here, the `Person` interface ensures that any object of type `Person` has a `name` which is a string and an `age` which is a number.

## Project Structure

### Organizing Your Files
- **components/**: This folder will contain reusable pieces of the UI, called components.
- **app/**: This folder will contain the main pages and API routes of your application.
- **public/**: This folder is used to store static files like images.
- **styles/**: This folder can hold your CSS files.
- **next.config.js**: This is the configuration file for Next.js.
- **package.json**: This file holds the metadata for your project, including dependencies (libraries your project needs) and scripts.
- **tsconfig.json**: This is the TypeScript configuration file.

### Creating the Folder Structure
1. Inside the `src` directory, create the following folder structure:
    ```
    src/
    ├── app/
    │   ├── api/
    │   ├── components/
    │   │   ├── WeatherComponent.tsx
    │   │   ├── TimeComponent.tsx
    │   │   └── ThirdAPIComponent.tsx
    │   ├── weather/
    │   │   └── page.tsx
    │   ├── time/
    │   │   └── page.tsx
    │   └── third-api/
    │       └── page.tsx
    ├── public/
    ├── styles/
    ├── next.config.js
    ├── package.json
    └── tsconfig.json
    ```

## Using APIs

> **What is an API?**
> API stands for Application Programming Interface. It's a way for different software applications to communicate with each other. For example, a weather API can provide weather data to your application.

> **Fetch API**
> The Fetch API is a built-in browser API that allows you to make network requests. It is used to fetch resources like data from a server.

## Creating Components

### Task 2 Weather API

1. **Sign Up for OpenWeatherMap API Key:**
   - Visit the [OpenWeatherMap website](https://openweathermap.org/api) and sign up for a free API key.
   - After signing up, go to the API keys section of your account and copy your API key.
   - Save your API key for later use.

   > **Explanation:**
   > - **API Key:** A unique key provided by OpenWeatherMap to authenticate your requests. This is needed to ensure that only authorized users can access the data.

2. **Install Axios Library:**
   > **Explanation:** Axios is a promise-based HTTP client for JavaScript, which makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations. It is often used to fetch data from APIs.
  - in your terminal run: `npm install axios`

3. **Create API Fetching Utility:**
   - Inside the `src/app` folder, create a file named `api.ts` to handle API requests.
   - Add a function to handle API requests to the OpenWeatherMap API:
         1. In the `utils` folder, create a new file named `api.ts`.
         2. Define a function named `fetchWeather`.
         3. Add the code to handle API requests to the OpenWeatherMap API using the Fetch API.
         4. Include your API key and the city parameter in the request URL.

          > **Explanation:** 
          > - **Utility Functions:** Utility functions are helper functions that perform a specific task and can be reused across different parts of your application. In this case, the utility function `fetchWeather` handles the API request to get weather data.
          > - Creating a separate file for API requests keeps the code organized and reusable.


3. ***Create Weather Component:**
   1. In the `components` folder, create a new file named `WeatherComponent.tsx`.
   2. Inside `WeatherComponent.tsx`, import the React library and necessary hooks.
   3. Import the `fetchWeather` function from the `api.ts` file.
   4. Define the `WeatherComponent` functional component.
   5. Use the `useState` hook to create state variables for weather data and loading status.
   6. Use the `useEffect` hook to fetch weather data when the component mounts.
   7. Display loading text while the data is being fetched.
   8. Display the fetched weather data.


     > **Explanation:**
     > - **Component:** A reusable piece of the UI that can have its own state and logic. ->  - Using components helps in creating reusable and modular code.
     > - **State:** An object that holds the component's data and can be updated.
     > - **useState Hook:** The `useState` hook is used to manage state within the component. It allows you to add state to functional components.
     >  - **useEffect:** A React hook that runs side effects (like fetching data) in a functional component.

4. **Create Weather Page:**
   1. In the `app/weather` folder, create a new file named `page.tsx`.
   2. Import the `WeatherComponent` from the `components` folder.
   3. Define a functional component for the weather page.
   4. Render the `WeatherComponent` inside this functional component.

> **Explanation:** 
> - Pages in Next.js are associated with routes. Creating a page component makes the weather data accessible via a URL.

## Task 3: Implement Time API

### Objective:
Fetch and display the current time for a specific timezone in Europe using the WorldTimeAPI.

### Instructions:

1. **Create Time API Fetching Utility:**
   1. In the `utils/api.ts` file, define a function named `fetchTime`.
   2. Add the code to make a GET request to the WorldTimeAPI using the Fetch API.

> **Explanation:** 
> - The WorldTimeAPI does not require an API key, making it simpler to access the time data. This function makes a GET request to the WorldTimeAPI to fetch the current time for a specific timezone.

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
   2. Add the code to make a GET request to the JokeAPI using the Fetch API.

> **Explanation:** 
> - The JokeAPI does not require an API key, allowing you to easily access joke data. This function makes a GET request to the JokeAPI to fetch a random joke.

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


## Final Integration

### Putting It All Together
1. **Run Your Project:**
   - Ensure your development server is running by executing `npm run dev` in the terminal.
   - Open your browser and navigate to the following URLs to see your components in action:
     - `http://localhost:3000/weather`: Displays the weather information.
     - `http://localhost:3000/time`: Displays the current time.
     - `http://localhost:3000/third-api`: Displays a random joke.

