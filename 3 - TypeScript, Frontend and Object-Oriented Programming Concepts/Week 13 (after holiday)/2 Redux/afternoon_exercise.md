# React Components with Redux

## Full-Stack Media Tech Program
### Week 12, Exercise Materials

## Introduction
In this task, you will use TypeScript, Redux, and Next.js to manage students. You'll define actions to add and delete students, implement a reducer to handle these actions, and integrate it into a basic Next.js application.

---

## Step 1: Setup TypeScript Next.js App

### Initialize a New Next.js App:
   - Open the terminal application on your computer.
   - Command: `npx create-next-app@latest your-app-name --typescript`
   - Command: `cd your-app-name`

### Run the Development Server:
   - Command: `npm run dev`

---

## Step 2: Define Student Interface and Actions

### Define Student Interface (IStudent):

1. **Create the `interfaces.ts` File:**
   - In the `app` folder of your project, create a new file named `interfaces.ts`.

2. **Define the `IStudent` Interface:**
   - Inside the `interfaces.ts` file, define an interface named `IStudent` with properties for `id`, `name`, and `hobby`.

### Create Redux Actions (addStudent and deleteStudent):

3. **Create `app/store` folder, create a new file named `actions.ts`.**
  
    >  **Explanation**: The Redux store is the central repository for all the state in a Redux application. It holds the entire state tree of the application. The store provides methods for:
    > - Getting the State: You can retrieve the current state of the application.
    > - Dispatching Actions: You can dispatch actions to update the state.
    > - Subscribing to Changes: You can subscribe to state changes, allowing you to react to state updates.
    > 
    > The Redux store is created using the createStore function, which takes a reducer as an argument. The reducer specifies how the state changes in response to actions.

4. **Define Actions to Add and Delete Students:**
   > - **What are Action Objects?:** Action objects are plain JavaScript objects that represent an intention to change the state. Each action must have a `type` property, and it can also include other properties that provide additional information necessary to perform the action.
   > - **What are Action Creator Functions?:** Action creators are functions that create and return action objects. These actions are dispatched to the Redux store to update the state.
   > - **Why Use Them?:** Action creators help standardize the creation of actions and make the code more maintainable.

   - **Step-by-Step:**
     - **Import the IStudent Interface:**
       - At the top of the `actions.ts` file, import the `IStudent` interface from the `interfaces.ts` file.
     - **Create the AddStudentAction Interface:**
       - Define an interface for the action to add a student. This interface should have a `type` property with the value `'ADD_STUDENT'` and a `student` property with the type `IStudent`.
     - **Create the DeleteStudentAction Interface:**
       - Define an interface for the action to delete a student. This interface should have a `type` property with the value `'DELETE_STUDENT'` and an `id` property with the type `number`.
     - **Combine the Actions:**
       - Create a type alias `StudentAction` that combines both action interfaces using a union type.
     - **Define the addStudent Action Creator Function:**
       - Implement a function `addStudent` that takes a student object as an argument and returns an action with the type `'ADD_STUDENT'` and the student object.
     - **Define the deleteStudent Action Creator Function:**
       - Implement a function `deleteStudent` that takes an ID as an argument and returns an action with the type `'DELETE_STUDENT'` and the ID.

---

## Step 3: Implement Redux Reducer (reducer.ts)

### Create Redux Reducer (reducer.ts):

1. **Create the `reducer.ts` File:**
   - In the `app/store` folder, create a new file named `reducer.ts`.

2. **Implement the Reducer Function:**
   > - **What is a Reducer?:** A reducer is a function that takes the current state and an action as arguments and returns a new state. It specifies how the state should change in response to an action.
   > - **Why Use It?:** Reducers help manage the state in a predictable way by defining how actions transform the state.

   - **Step-by-Step:**
     - **Import the StudentAction and IStudent Interfaces:**
       - At the top of the `reducer.ts` file, import the `StudentAction` type and `IStudent` interface.
     - **Define the Initial State:**
       - Create an object `initialState` with a property `students` that is an array of student objects. Each student object should have an `id`, `name`, and `hobby`.
     - **Create the Reducer Function:**
       - Define a function `reducer` that takes the current state and an action as arguments. Initialize the state with the `initialState`.
     - **Handle the ADD_STUDENT Action:**
       - Inside the reducer function, add a case for the `'ADD_STUDENT'` action type. Create a new student object with a unique ID and add it to the list of students.
     - **Handle the DELETE_STUDENT Action:**
       - Add a case for the `'DELETE_STUDENT'` action type. Filter out the student with the matching ID from the list of students.
     - **Return the New State:**
       - In each case, return the new state with the updated list of students.

---

## Step 4: Configure Redux Store and Provider

> - **Store Wrapper Component**: This component is responsible for wrapping your application (or part of it) with the Redux store. By using a wrapper component, you ensure that all child components have access to the Redux store and can interact with it.
> - **Provider**: The `Provider` component is a special component provided by `react-redux`. It makes the Redux store available to any nested components that need to access the Redux store. The `Provider` component takes a store prop, which is the Redux store created using `configureStore` (or `createStore` in a traditional setup).
> - _Why Use It_ : Using the `Provider` ensures that your components can connect to the Redux store using the connect function or `useSelector` and `useDispatch` hooks. Without the `Provider`, your components would not have access to the Redux store.


1. **Install Redux and React-Redux:**
   - Run the command to install Redux and React-Redux.
   - Command: `npm install @reduxjs/toolkit react-redux`

2. **Create the `store.ts` File:**
   - In the `src/store` folder, create a new file named `store.ts`.

3. **Configure the Redux Store:**
   > - **What is a Store?:** The store holds the state of the application and provides methods to access and update the state.
   > - **Why Use It?:** The store centralizes the state, making it easier to manage and debug.

   - **Step-by-Step:** (Look at nextjs-typescript-redux example in week 13 from the morning)
     - **Create the Store:**
       - Inside the `store.ts` file, create the Redux store using Redux Toolkit's `configureStore` function. 
     - **Wrap the App Component:**
       - Define a `StoreWrapper` component that takes `children` as props and wraps them with the Redux `Provider`.
       - Pass the configured store to the `Provider` component to make the Redux store available to all nested components.
     - **Export the Store:**
       - Export the configured store for use in the Next.js app.

---

## Step 5: Connect Redux to Next.js Components

### Create Component (StudentList.tsx):

1. **Create the `StudentList.tsx` File:**
   - Create the `app/components` folder, create a new file named `StudentList.tsx`.

2. **Implement the `StudentList` Component:**
   > - **What is a Component?:** A component is a reusable piece of the UI that can have its own state and logic.
   > - **Why Use It?:** Components help break down the UI into smaller, manageable pieces.

   - **Step-by-Step:**
     - **Define the Component:**
       - Inside the `StudentList.tsx` file, define a functional component named `StudentList` that accepts props for the list of students and the delete action.
     - **Display the List of Students:**
       - Inside the component, map over the list of students and display each student's name and hobby. Include a button to delete the student.
     - **Handle the Delete Action:**
       - When the delete button is clicked, call the delete action with the student's ID.

3. **Connect the Component to Redux:**
   - **What is the connect Function?:** The `connect` function connects a React component to the Redux store. It allows the component to access the state and dispatch actions.
   - **Why Use It?:** The `connect` function helps integrate Redux with React, enabling the component to access and modify the state.

   - **Step-by-Step:**
     - **Map State to Props:**
       - Define a function `mapStateToProps` that maps the list of students from the Redux state to the component's props.
     - **Map Dispatch to Props:**
       - Define an object `mapDispatchToProps` that maps the delete action to the component's props.
     - **Export the Connected Component:**
       - Use the `connect` function to connect the `StudentList` component to the Redux store and export the connected component.

---

## Step 6: Set up the Main Page

### Modify `app/page.tsx` to implement the `home` Component:
> - **What is a Main Page Component?**: The main page component is the entry point for your application, typically the home page where you display the primary content.
> - _Why Use It?_: This component serves as the central place to render your UI, integrating all parts of the application.

1. **Import and Use the Connected `StudentList` Component:**
   - In your `pages/index.tsx` file, import the `StudentList` component.
   - Define a functional component `Home` and render the StudentList component in there.

2. **Verify Everything is Working:**
   - Run the development server using `npm run dev`.
   - Open your browser and navigate to `http://localhost:3000`.
   - Verify that you can see the list of students and that you can add and delete students using the Redux store.
   
---
