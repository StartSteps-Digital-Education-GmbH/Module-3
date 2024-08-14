# Tina's Final Project: Social Network Management System

## Objective
The goal of this project is to help you build a basic social network management system where users can create profiles, set status messages, and view user information. By the end of this project, you will have a working web application that displays a login form and a list of users.

## Key Parts
In this project, you will:

1. **Create a User Interface (UI)**: Define the structure of user data.
2. **Build a Form**: Create a form that users will use to create their profiles.
3. **Set Up Pages**: Create a login page where the form will be rendered, and a home page to display users.
4. **Render User Information**: Display each user's data in a card format on the home page.

---

## Part 1: Project Setup

### Step 1: Initialize a New Next.js Project

1. Open your terminal in vscode and navigate to the folder where you want to create the project.

2. Run the following command to set up a new Next.js project with TypeScript:

   ```bash
   npx create-next-app@latest social-network --typescript
   ```

   **Explanation**: This command creates a new project called 'social-network' using Next.js with TypeScript, which adds types to your code, helping prevent errors.
    - The terminal will show you a couple of questions for setting up. You can use the default choices by just clicking enter for each of them. The default setup options are:
    
       1. **TypeScript: Yes**
          - **Explanation**: TypeScript is a superset of JavaScript that adds static typing to your code. This helps catch errors early during development and improves the maintainability of your project.
       
       2. **ESLint: Yes**
          - **Explanation**: ESLint is a tool that helps you find and fix problems in your JavaScript code. It's like a spell-checker for your code, ensuring that it follows best practices and coding standards.
       
       3. **Tailwind CSS: No**
          - **Explanation**: Tailwind CSS is a utility-first CSS framework for styling your application. Choosing "No" means you won't be using Tailwind CSS by default, allowing you to choose your preferred styling method later.
    
       4. **src/ directory: Yes**
          - **Explanation**: The `src/` directory is a common convention in many projects to separate source code from configuration and other project files. It helps keep your project organized.
    
       5. **App Router: Yes**
          - **Explanation**: Routing in web development refers to how an application navigates between different pages, e.g. a login page and a home page. The App Router in Next.js is a feature that helps manage this navigation. It allows you to define the structure of your application by specifying which URLs lead to which pages. Choosing "Yes" for the App Router makes it easier to create and manage these routes, especially as your application grows.

    
       6. **import alias: No**
          - **Explanation**: Import aliasing allows you to create shortcuts for your import paths. Choosing "No" means you will use relative paths for your imports, which is simpler for small projects.


4. Navigate into your new project folder by running:
   ```bash
   cd social-network
   ```
   
5. Run the development server to make sure everything is set up correctly:
   ```bash
   npm run dev
   ```

   **What is happening here?**: This starts a local server on your computer, allowing you to view your project in a web browser.
   - Once you see the following message, it indicates that your development server is running successfully:
   ```bash
    ▲ Next.js 14.2.5
    - Local: http://localhost:3000
    
    ✔ Starting...
    ✔ Ready in 3.2s
    ```
   - Now, you can visit the website at http://localhost:3000 by either copying and pasting the URL into your browser or simply pressing Ctrl and clicking on the link in your terminal.
   - You will see that the page is not empty; this is because Next.js provides some default content that acts as a placeholder. This content confirms that your project has been set up correctly and is running. You'll replace this content with your own as you build your application.

6. Go to http://localhost:3000 in your browser to see if it was set up succesfully!

Good job, you set up your first nextjs project!! :hugs: :1st_place_medal:

Milestone 1 completed!
