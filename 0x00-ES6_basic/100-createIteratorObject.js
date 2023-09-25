export default function createIteratorObject(report) {
  const departments = Object.values(report);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (currentDepartmentIndex >= departments.length) {
        return { done: true };
      }

      const currentDepartment = departments[currentDepartmentIndex];
      const employees = Object.values(currentDepartment);
      const currentEmployee = employees[currentEmployeeIndex];

      if (currentEmployeeIndex >= employees.length - 1) {
        currentDepartmentIndex++;
        currentEmployeeIndex = 0;
      } else {
        currentEmployeeIndex++;
      }

      return { value: currentEmployee, done: false };
    },
  };
}
