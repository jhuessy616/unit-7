import EmployeeInformation from "./EmployeeInformation";
function Employees() {
  let employeeRecords = [
    {
      name: "Jester Bash",
      city: "Frankfort",
      state: "KY",
    },
    {
      name: "Brinda Holiday",
      city: "South Bend",
      state: "IN",
    },
  ];
  return (
    <>
      <h1>Hello from Employees</h1>
      {employeeRecords.map((employeeRecord, index) => (
          <EmployeeInformation
            //   way for react to track changes, otherwise show an error in dev tools. this way you can just refresh/update one cell. 
              key={index}
          name={employeeRecord.name}
          city={employeeRecord.city}
          state={employeeRecord.state}
        />
      ))}
    </>
  );
}

export default Employees;