

function PresidentRow(props) {
    // function displayIsLiving() {
  //   return <td>{props.presidentData.passed === undefined ? "Yes" : "No"}</td>;
  // }
     let currentYear= new Date().getFullYear();
  return (
    <>
      
      <tr>
        <td> {props.presidentData.first}</td>
        <td>{props.presidentData.last}</td>
        <td>{props.presidentData.year}</td>
        <td>{props.presidentData.passed === undefined ? "Yes" : "No"}</td>
        <td>{props.presidentData.passed === undefined? currentYear - props.presidentData.year : props.presidentData.passed - props.presidentData.year}</td>
        {/* another way to do it */}
        {/* {displayIsLiving()} */}
       
      </tr>
         
          </>
  )
}

export default PresidentRow