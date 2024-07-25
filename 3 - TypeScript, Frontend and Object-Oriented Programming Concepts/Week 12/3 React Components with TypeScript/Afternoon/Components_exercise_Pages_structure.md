
## 2. Today's Exercises: Building a Dashboard with React Components and TypeScript
After completing Tuesday's exercises, continue with the following exercises.

## Older method using 'pages' structure instead of App

### Task 1: Create the SocialNetworkUser Interface
**Objective:** Define a TypeScript interface for a social network user.

**Instructions:**
- Create a new file called `interfaces.ts`.
- Define a `SocialNetworkUser` interface with `name` (string), `lastName` (string), and `statusMessage` (string) properties.

### Task 2: Create an Array of Users
**Objective:** Create an array of 5 users, each with a different status message, using the `SocialNetworkUser` interface.

**Instructions:**
- Create a new file `data.ts` in the `src` folder.
- Define an array of 5 `SocialNetworkUser` objects, each with unique `name`, `lastName`, and `statusMessage` properties.

### Task 3: Create a UserCard Component
**Objective:** Create a `UserCard` component that takes a `SocialNetworkUser` object as a prop and displays the user's name and status message.

**Instructions:**
- Create a folder `components` in the `src` folder.
- Create a new file `UserCard.tsx` in the `src/components` folder.
- Define a functional component that takes a `SocialNetworkUser` object as a prop and displays the `name` and `statusMessage`.

### Task 4: Create a Feed Page to Display All Users
**Objective:** Create a `Feed` page that uses the `UserCard` component to display the list of users.

**Instructions:**
1. **Create a new file `Feed.tsx`:**
   - Inside the `src/pages` folder, create a file named `Feed.tsx`.

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
1. **Create a new file `UserList.tsx` in the `src/components` folder.**
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
