
# Week 12: React Hooks - UseState, UseEffect, and UseContext

## Today's plan
You can work on [yesterdays exercises](https://github.com/StartSteps-Digital-Education-GmbH/Module-3-TypeScript-Frontend-and-Object-Oriented-Programming-Concepts/blob/main/3%20-%20TypeScript%2C%20Frontend%20and%20Object-Oriented%20Programming%20Concepts/Week%2012/3%20React%20Components%20with%20TypeScript/Afternoon/Components_exercise.md) if you haven't finished them already, read up on today's topic, or do today's exercises. :D
Marzia will join our call at 17:30 to wish us all a nice holiday!

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

## Task 3: Use useEffect to Simulate Fetching Tasks from an API
### Objective:
Use the `useEffect` hook to simulate fetching tasks from an API when the component mounts.

### Instructions:

**Simulate Fetching Tasks:**
1. Update the `page` component to use the `useEffect` hook.
   - Import the useEffect hook from React at the top of your file.
   - Use the useEffect hook inside your component to simulate fetching tasks from an API.
2. Simulate an API call that fetches tasks and updates the state after a delay:
   - Use the setTimeout function within useEffect to simulate an API call.
   - After a delay, update the tasks state with a new array of tasks.
   - This will help you understand how to handle side effects and asynchronous operations in your components.


### Explanation:
- `useEffect`: The useEffect hook allows you to perform side effects in your component. In this case, it will simulate an API call to fetch tasks.
- `setTimeout`: The setTimeout function is used to simulate a delay, mimicking the behavior of an asynchronous fetch operation.

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
