
const employees = [
  {
    "id": 1,
    "firstName": "Arjun",
    "email": "employee1@example.com",
    "password": "123",
    "taskCounts": { "active": 2, "newTask": 1, "completed": 1, "failed": 0 },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Update UI",
        "taskDescription": "Fix the alignment on the login page.",
        "taskDate": "2026-01-30",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Client Meeting",
        "taskDescription": "Discuss project requirements with the stakeholder.",
        "taskDate": "2026-01-28",
        "category": "Meeting"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Database Backup",
        "taskDescription": "Perform a manual backup of the production database.",
        "taskDate": "2026-01-31",
        "category": "Dev"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Sneha",
    "email": "employee2@example.com",
    "password": "123",
    "taskCounts": { "active": 1, "newTask": 1, "completed": 0, "failed": 1 },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Auth Setup",
        "taskDescription": "Implement JWT authentication in the backend.",
        "taskDate": "2026-02-01",
        "category": "Dev"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Bug Fix",
        "taskDescription": "Resolve the issue with the sidebar navigation.",
        "taskDate": "2026-01-25",
        "category": "Design"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Rohan",
    "email": "employee3@example.com",
    "password": "123",
    "taskCounts": { "active": 2, "newTask": 1, "completed": 1, "failed": 0 },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Logo Design",
        "taskDescription": "Create three variants of the company logo.",
        "taskDate": "2026-02-05",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "API Integration",
        "taskDescription": "Integrate the weather API into the dashboard.",
        "taskDate": "2026-02-02",
        "category": "Dev"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Documentation",
        "taskDescription": "Write the README file for the repository.",
        "taskDate": "2026-01-20",
        "category": "Dev"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Priya",
    "email": "employee4@example.com",
    "password": "123",
    "taskCounts": { "active": 2, "newTask": 1, "completed": 0, "failed": 0 },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Performance Audit",
        "taskDescription": "Check the website loading speed and optimize images.",
        "taskDate": "2026-02-10",
        "category": "Dev"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Social Media Assets",
        "taskDescription": "Create banners for the upcoming product launch.",
        "taskDate": "2026-02-12",
        "category": "Design"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Karan",
    "email": "employee5@example.com",
    "password": "123",
    "taskCounts": { "active": 1, "newTask": 1, "completed": 1, "failed": 0 },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Unit Testing",
        "taskDescription": "Write test cases for the login component.",
        "taskDate": "2026-02-15",
        "category": "Dev"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Market Research",
        "taskDescription": "Research competitor pricing strategies.",
        "taskDate": "2026-01-15",
        "category": "Management"
      }
    ]
  }
];

const admin = [{
  "id": 1,
  "firstName": "Admin",
  "email": "admin@me.com",
  "password": "123"
}];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    console.log(employees, admin)
    return {employees, admin}
}