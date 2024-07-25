
# Week 12: React Components with TypeScript

## 1. Continuation from Tuesday
Before starting today's exercises, please ensure you have completed the tutorials and exercises from Tuesday:
[Tutorials + Exercises](https://github.com/StartSteps-Digital-Education-GmbH/Module-3-TypeScript-Frontend-and-Object-Oriented-Programming-Concepts/blob/main/3%20-%20TypeScript%2C%20Frontend%20and%20Object-Oriented%20Programming%20Concepts/Week%2012/1%2C2%20NextJS%20introduction/Afternoon/Tutorials%2BExercises.md)

## 2. Setting Up a New Next.js Project for Today's Exercises

### Important Note

I realized the exercise was following the older 'pages' structure, rather than the more modern 'app' structure. If you were working on the old version and want to continue, go [here](https://github.com/StartSteps-Digital-Education-GmbH/Module-3-TypeScript-Frontend-and-Object-Oriented-Programming-Concepts/blob/main/3%20-%20TypeScript,%20Frontend%20and%20Object-Oriented%20Programming%20Concepts/Week%2012/3%20React%20Components%20with%20TypeScript/Afternoon/Components_exercise_Pages_structure.md). If you want to follow the 'app' structure, then continue with the exercises below.


### Using the `app` Directory (Newer Method)

1. **Create a new Next.js project using create-next-app:**
   ```sh
   npx create-next-app@latest react-components-ts --ts
   ```
   This will create a new Next.js project with TypeScript support and the `app` directory enabled.

2. **Navigate into the project directory:**
   ```sh
   cd react-components-ts
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```
   Your Next.js app should now be running at `http://localhost:3000`.

4. **Complete the exercises as per the following instructions:**

### Task 1: Create the SocialNetworkUser Interface
**Objective:** Define a TypeScript interface for a social network user.

**Instructions:**
- Create a new file called `interfaces.ts` in the `src/app` folder.
- Define a `SocialNetworkUser` interface with `name` (string), `lastName` (string), and `statusMessage` (string) properties.

### Task 2: Create an Array of Users
**Objective:** Create an array of 5 users, each with a different status message, using the `SocialNetworkUser` interface.

**Instructions:**
- Create a new file `data.ts` in the `src/app` folder.
- Define an array of 5 `SocialNetworkUser` objects, each with unique `name`, `lastName`, and `statusMessage` properties.

### Task 3: Create a UserCard Component
**Objective:** Create a `UserCard` component that takes a `SocialNetworkUser` object as a prop and displays the user's name and status message.

**Instructions:**
- Create a folder `components` in the `src/app` folder.
- Create a new file `UserCard.tsx` in the `src/app/components` folder.
- Define a functional component that takes a `SocialNetworkUser` object as a prop and displays the `name` and `statusMessage`.

### Task 4: Create a Feed Page to Display All Users
**Objective:** Create a `Feed` page that uses the `UserCard` component to display the list of users.

**Instructions:**
1. **Create a new file `Feed.tsx`:**
   - Inside the `src/app` folder, create a file named `Feed.tsx`.

2. **Import necessary components and data:**
   - Import the `UserCard` component.
   - Import the array of users from your data file.

3. **Render the UserCard components:**
   - Use the `map` function to iterate over the array of users.
   - For each user, render a `UserCard` component, passing the user object as a prop.
   - Ensure each `UserCard` has a unique key.

### Bonus Task: Incorporate React Class Components
**Objective:** Create a class component to display the user list, transitioning from functional components to class components.

**Instructions:**
1. **Create a new file `UserList.tsx` in the `src/app/components` folder.**
2. **Define the class component:**
   - Define a class component named `UserList` that extends `React.Component`.

3. **State Management:**
   - Initialize the component state in the constructor with the users array.

4. **Render Method:**
   - In the render method, map over the users array from the state.
   - For each user, render a `UserCard` component, passing the user object as a prop.
   - Ensure each `UserCard` has a unique key.

5. **Update the Feed Page to Use the UserList Component:**
   - Modify the `Feed` page to use the `UserList` component instead of rendering `UserCard` components directly.
