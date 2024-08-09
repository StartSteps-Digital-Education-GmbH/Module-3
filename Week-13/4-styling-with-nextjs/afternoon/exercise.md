# Styling in Next.js

## Full-Stack Media Tech Program
### Week 13, Exercise Materials

---

## Introduction
In this set of exercises, you will learn how to enhance the visual appeal of your Next.js components using Tailwind CSS. Tailwind CSS is a utility-first CSS framework that makes it easy to style your application with minimal custom CSS. We will also incorporate icons and buttons to make the UI more interactive. Remember, creativity is key—feel free to experiment with different styles and make the components visually appealing.

Before continuing, please head over to the Tailwind website to see all the UI elements and components that you can use:
[https://tailwindui.com/components#product-application-ui](https://tailwindui.com/components#product-application-ui)

#### **Important Note:** If you didn't finish the WeatherComponent exercise from yesterday, you can access the solution directly from our GitHub repository. Follow the instructions at the end of this file to get the solution in your own VSCode and bootcamp repo.

---

## Task 1: Set Up Tailwind CSS
### Objective:
Install and configure Tailwind CSS in your Next.js project.

### Step-by-Step Instructions:

1. **Install Tailwind CSS:**
   - Run the following commands in your terminal to install Tailwind CSS and its dependencies:
     ```bash
     npm install -D tailwindcss postcss autoprefixer
     npx tailwindcss init -p
     ```

   > **Explanation:**  
   > - **Tailwind CSS** is a utility-first CSS framework that helps you style your web pages without writing a lot of custom CSS.
   > - **postcss** is a tool that helps transform CSS with JavaScript plugins.
   > - **autoprefixer** is a PostCSS plugin that adds vendor prefixes to CSS rules, ensuring compatibility with different browsers.

   > **What does this do?**  
   > - These commands will install the required dependencies and generate a `tailwind.config.js` and `postcss.config.js` file in your project.

2. **Configure Tailwind CSS:**
   - Open the `tailwind.config.js` file and configure it to remove unused styles in production:
     ```javascript
     module.exports = {
       content: [
         "./app/**/*.{js,ts,jsx,tsx}",
         "./components/**/*.{js,ts,jsx,tsx}",
       ],
       theme: {
         extend: {},
       },
       plugins: [],
     };
     ```

   > **Explanation:**  
   > - **content**: This tells Tailwind CSS which files to scan for class names, so it only includes the necessary styles in the final CSS file.
   > - **theme**: This is where you can customize Tailwind's default styles.
   > - **plugins**: You can add additional Tailwind plugins here if needed.

3. **Create Tailwind CSS File:**
   - In the `styles/` directory, create a `globals.css` file and add the following lines to import Tailwind's base, components, and utilities:
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

   > **Explanation:**  
   > - **@tailwind base**: This includes Tailwind's base styles (like normalize.css).
   > - **@tailwind components**: This includes pre-designed components.
   > - **@tailwind utilities**: This includes utility classes like `p-4` for padding.

4. **Import Tailwind CSS:**
   - Open the `app/layout.tsx` file and import the `globals.css` file at the top:
     ```typescript
     import '../styles/globals.css';
     ```

   > **Explanation:**  
   > - This step ensures that Tailwind's styles are applied globally to your Next.js application.

5. **Test Tailwind CSS:**
   - Start your development server and check if Tailwind is working by adding a simple Tailwind class to any component. For example, add `className="text-red-500"` to an element to make the text red.

   > **What should you see?**  
   > - If everything is set up correctly, the text with the class `text-red-500` should appear in red.

---

## Task 2: Style the Weather Component
### Objective:
Use Tailwind CSS to style the WeatherComponent, including adding icons and a button to fetch the weather data.

### Step-by-Step Instructions:

1. **Install Heroicons:**
   - Heroicons is a set of free, MIT-licensed high-quality SVG icons. Install it using npm:
     ```bash
     npm install @heroicons/react
     ```

   > **Explanation:**  
   > - Heroicons provide a wide range of icons that can be easily integrated into your React components.

2. **Update the Weather Component:**
   - If you haven't finished creating the `WeatherComponent` from yesterday's exercise, you can find the solution in the GitHub repository. [Click here for instructions into how to get the solution](#accessing-the-weathercomponent-solution).
   - Add Tailwind classes to style the `WeatherComponent`:
     - **Use utility classes for layout**: For example, use `max-w-sm mx-auto` to center the component and set a maximum width.
     - **Use Heroicons**: Import and use the `SunIcon` to add a weather-related icon.
     - **Add a button**: Use Tailwind classes to style a button that refreshes the weather data.

   > **Why do this?**  
   > - Tailwind CSS simplifies the process of styling your components by providing ready-to-use classes. This makes your components look polished with minimal effort.

---

## Task 3: Style the Time Component
### Objective:
Use Tailwind CSS to style the TimeComponent, including adding icons and a button to fetch the current time.

### Step-by-Step Instructions:

1. **Update the Time Component:**
   - Make sure you have the `TimeComponent.tsx` file from yesterday's exercises or the GitHub solution.
   - Add Tailwind classes to style the `TimeComponent`:
     - **Use utility classes for layout**: For example, use `max-w-sm mx-auto` to center the component and set a maximum width.
     - **Use Heroicons**: Import and use the `ClockIcon` to add a time-related icon.
     - **Add a button**: Use Tailwind classes to style a button that refreshes the current time.

   > **Why do this?**  
   > - Tailwind CSS allows you to quickly style your components without writing custom CSS, helping you focus more on the functionality of your app.

---

## Task 4: Style the Joke Component
### Objective:
Use Tailwind CSS to style the JokeComponent, including adding icons and a button to fetch a random joke.

### Step-by-Step Instructions:

1. **Update the Joke Component:**
   - Make sure you have the `JokeComponent.tsx` file from yesterday's exercises or the GitHub solution.
   - Add Tailwind classes to style the `JokeComponent`:
     - **Use utility classes for layout**: For example, use `max-w-sm mx-auto` to center the component and set a maximum width.
     - **Use Heroicons**: Import and use the `EmojiHappyIcon` to add a joke-related icon.
     - **Add a button**: Use Tailwind classes to style a button that fetches another joke.

   > **Why do this?**  
   > - Styling with Tailwind makes your components look visually appealing without writing custom CSS, saving you time and effort.

---

## **Accessing Yesterday's Solution**

If you didn't finish the **WeatherComponent** exercise from yesterday, follow these steps to access the solution in your own VSCode:

1. **Open Your Terminal in VSCode:**
   - Make sure you are in the root directory of your bootcamp repo.

2. **Navigate to the Appropriate Folder:**
   - Use the `cd` command to navigate to the `Week-13/1-React-Hooks/solution/` folder in your terminal.

3. **Pull the Latest Changes from GitHub:**
   - Run the following command to pull the latest changes from the GitHub repository:
     ```bash
     git pull origin main
     ```
   - This command will download the latest version of the files, including the solution for the **WeatherComponent**.

4. **Open the Solution in VSCode:**
   - Once the files are downloaded, you can find the solution in the `Week-13/1-React-Hooks/solution/` folder.
   - Open the relevant files in VSCode to review the code and make sure you understand how the solution works.

5. **Copy the Solution to Your Own Project:**
   - If you want to use the solution in your own project, simply copy the necessary files (like `WeatherComponent.tsx`) from the solution folder to your project folder.

6. **Ask for Help if Needed:**
   - If you're unsure about any of the steps or need further clarification, feel free to reach out for help during the session.

---

Happy coding! 🌟
