# 👥 HR Employee Selector (React)

This project is a simple HR interface built with React that allows users to view and select employees from a table. Selected employees are displayed in a slide-out panel for easy review and management.

## Screenshots
<img src="https://github.com/user-attachments/assets/bb399eda-db7d-4da1-8968-8533b186ddb5" alt="Alt Text" width="800" height="600">
<img src="https://github.com/user-attachments/assets/f9a5eb25-af91-4ab7-8643-da990a13f52e" alt="Alt Text" width="800" height="600">

## 🚀 Features

- 🧾 **Employee Table:**  
  Displays a list of employees in a structured table format.

- 🎯 **Row Interaction:**  
  - Rows are clickable.  
  - Clicking a row changes its background color to indicate selection.  
  - The selected employee is added to the “Selected Employees” list.

- 🧃 **Selected Employees Panel:**  
  - A floating selection icon is fixed at the bottom right corner.  
  - Clicking the icon opens a **drawer panel** from the right.  
  - Panel Title: `Selected Employees`  
  - Displays each employee’s name, title, and department.  
  - Allows removing individual employees or clearing the entire list.  
  - Selected rows in the table are visually highlighted.  
  - Removing an employee from the panel also removes their highlight in the table.

## 📱 Technologies Used

- **React**
- **React Context** state management
- **Shadcn** UI library
- **Tailwind CSS** for rapid UI styling
- **TypeScript** for type safety


## 🚀 Getting Started

### 1. Clone the project
   
```bash
   git clone https://github.com/tekmez/hr-template.git
   ```

### 2. Go to the project directory

```bash
  cd hr-template
   ```
### 3. Install necessary packages
```bash
   npm install
   ```

### 4. Start the app

```bash
    npm run dev
   ```
