# Object State in React

This project demonstrates how to manage and update objects using the `useState` hook in React.

## Concepts Covered

- Creating an object state
- Updating a single property
- Using the spread operator (`...`)
- Updating nested objects
- Toggling boolean values
- Preserving existing state while updating specific properties

## Example State

```javascript
const [employee, setEmployee] = useState({
  name: "John Doe",
  department: "HR",
  isActive: true,
  hobbies: {
    sports: "Cricket",
    extra: "Reading",
  },
});
```

## Operations Implemented

-  Update Employee Name
-  Update Department
-  Toggle Active Status
-  Update Nested Object (`hobbies.extra`)


## Run the Project


### Clone the repository

```bash
git clone https://github.com/anuj-tiwari-iphtech/react-practice.git
```

### Navigate to the project folder

```bash
cd object-in-state
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```