function EmployeeInformation(props) {
  return (
    <>
        
          <ul style={{ listStyleType: "none", textAlign: "left" }}>
              <h1>{props.name}</h1>
              <li>{props.city}, {props.state}</li>
              <li>Position: Software Developer</li>
              <li>Favorite Food: Pizza</li>
          </ul>
    </>
  );
}
export default EmployeeInformation;
