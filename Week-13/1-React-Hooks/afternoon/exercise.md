# Week 13: React Hooks - Continued

## Today's plan
Before the free week, Ahmad covered 3 hooks (useState, useEffect and useContext) for which we uploaded exercises. These are repeated below in 1-4. If you already finished these exercises you can continue with the bonus exercises.


## Task 1: Create the Task Interface and Basic Task List Component
### Objective:
Define a TypeScript interface for a task and create a component that displays a list of tasks.

### Instructions:

**Create the Task Interface:**
1. Create a new file `interfaces.ts` in the `src` folder.
2. Define a `Task` interface with the following properties:
   - `id: number`
   - `title: string`
   - `completed: boolean`

**Create the Task List Component:**
1. Create a new file `TaskList.tsx` in the `src/components` folder.
2. In TaskList.tsx, define a functional component named TaskList.
   a. This component should accept an array of Task objects as a prop.
   b. The component will map over the array and display each task's title and completion status.
**Learning Objective:** This will help you understand how to pass and display data using props.

## Task 2: Use useState to Manage Task State
### Objective:
Use the `useState` hook to manage the state of the task list in the `page` component.

### Instructions:

**Create the page Component:**
1. Create or update the `page.tsx` file (in `src/app`).
2. Use the `useState` hook to manage the list of tasks.
   - Import the `useState` hook from React at the top of your file.
   - Inside your component, initialize the tasks state with an array of three dummy tasks using `useState`.
   - This will allow you to manage and update the list of tasks within your component.

**Dummy Data example that TaskList should show:**
- Task 1: Title: "Learn React", Completed: false
- Task 2: Title: "Learn TypeScript", Completed: false
- Task 3: Title: "Build a Project", Completed: false

3. Pass the `tasks` state as a prop to the `TaskList` component to display the tasks.

## Task 3: Use `useEffect` to Simulate Fetching Tasks from an API

### Objective:
Use the `useEffect` hook to simulate fetching tasks from an API when the component mounts.

### Explanation:
When working with real applications, data is often fetched from a server (API) when a component is first rendered. To help you understand this process, we will simulate fetching data from an API using a `setTimeout` function to create a delay, mimicking a network request.

### Instructions:

**Step-by-Step Guide to Simulate Fetching Tasks:**

1. **Import `useEffect` Hook:**
   At the top of your `page.tsx` file, import the `useEffect` hook from React.

2. **Initialize an Empty State:**
   Start with an empty array for the `tasks` state to simulate an initial loading state before data is fetched.

3. **Use `useEffect` to Simulate API Call:**
   Inside your `Home` component, use the `useEffect` hook to simulate an API call. The `useEffect` hook allows you to perform side effects, such as fetching data, in a function component.

   - **Step 1: Define the `useEffect` Hook:**
     Place the `useEffect` hook inside the `Home` component.

   - **Step 2: Simulate the API Call:**
     Use the `setTimeout` function inside the `useEffect` hook to simulate an API call. This function will update the `tasks` state after a delay (e.g., 1 second) to mimic fetching data from a server.

   - **Explanation:**
     - `useEffect`: The `useEffect` hook takes two arguments: a function where you perform side effects (e.g., fetching data) and an optional array of dependencies that determine when the side effect should re-run. An empty dependency array ensures that the effect runs only once, after the initial render, similar to `componentDidMount` in class components.
     - `setTimeout`: The `setTimeout` function is used to create a delay, simulating the time it takes to fetch data from an API.
     - `setTasks`: After the delay, the `setTasks` function updates the `tasks` state with the new data.

4. **Render the `TaskList` Component:**
   Pass the `tasks` state as a prop to the `TaskList` component to display the tasks.


## Task 4: Use useContext to Handle Task Input and Add New Tasks
### Objective:
Use the useContext hook to handle task input and add new tasks to the list.

### Instructions:

#### Create a Context and Provider:
1. Create a new file `TaskContext.tsx` in the `src/context` folder.
2. Define a TaskContext and TaskProvider to manage the task state and provide it to the component tree:
   - In TaskContext.tsx, define a context named TaskContext.
   - Create a TaskProvider component that will manage the task state and provide it to the component tree.
   - This will help you understand how to share state across multiple components using context.

#### Update page.tsx to Use the Context:

1. Use the `useContext` hook:
   - Import the useContext hook from React at the top of your file.
   - Use the useContext hook to access the task state and the function to add new tasks.
2. Add an input field and a button:
   - Add an input field and a button to your page component.
   - Use the input field to enter new task titles.
3. Implement the `addTask` function:
   - Implement the `addTask` function to add a new task to the task list.
   - When the button is clicked, the new task should be added to the state, and the input field should be cleared.
   - This will help you understand how to handle form inputs and update state using context.
   - 

## BONUS Task 5: Implement Task Completion Toggle
### Objective:
Allow users to toggle the completion status of tasks.

### Instructions:

**Update TaskList Component:**
1. Modify the `TaskList` component to include a button or checkbox that allows users to mark tasks as completed or incomplete.
2. Pass a function from the `TaskProvider` to the `TaskList` component that updates the task's completion status.

**Update TaskProvider:**
1. Add a `toggleTaskCompletion` function in the `TaskProvider` that updates the completion status of a task.
2. Ensure this function is passed down through the context.

### Steps:
1. Update `TaskContext.tsx` to include the `toggleTaskCompletion` function.
2. Modify `TaskList.tsx` to call the `toggleTaskCompletion` function when the button or checkbox is clicked.

### Explanation:
This task will help you understand how to handle state updates and user interactions in React components.

## BONUS Task 6: Filter Tasks by Completion Status
### Objective:
Allow users to filter tasks based on their completion status (all, completed, incomplete).

### Instructions:

**Update TaskProvider:**
1. Add state to the `TaskProvider` to manage the current filter (all, completed, incomplete).
2. Add a function to update the filter state.

**Update TaskList Component:**
1. Modify the `TaskList` component to only display tasks that match the current filter.
2. Add buttons or a dropdown in the `page` component to change the current filter.

### Steps:
1. Update `TaskContext.tsx` to include the filter state and function to update the filter.
2. Modify `TaskList.tsx` to filter tasks based on the current filter.
3. Add UI elements in `page.tsx` to allow users to change the filter.

### Explanation:
This task will help you understand how to implement filtering functionality and manage complex state in React components.

## BONUS Task 7: Persist Tasks to Local Storage
### Objective:
Persist the task list to local storage so that tasks are saved across page reloads.

### Instructions:

**Update TaskProvider:**
1. Use the `useEffect` hook to save the tasks to local storage whenever the tasks state changes.
2. When the `TaskProvider` component mounts, initialize the tasks state from local storage if data is available.

### Steps:
1. Update `TaskContext.tsx` to save tasks to local storage whenever they change.
2. Initialize the tasks state from local storage when the component mounts.

### Explanation:
This task will help you understand how to persist data in the browser and initialize state from an external data source.
