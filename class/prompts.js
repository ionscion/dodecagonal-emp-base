 const viewEmployeeByDepPrompt = [
    {
      type: "input",
      name: "department_id",
      message: "Enter Department ID to view current list of employees",
    },
  ];

  const viewEmployeeByMgrPrompt = [
    {
      type: "input",
      name: "manager_id",
      message: "Enter Manager ID to view current list of employees",
    },
  ];

  module.exports = {viewEmployeeByMgrPrompt};
  