import { presidentsArray } from "./presidents.constant";
import PresidentTable from "./PresidentTable";

/* 
1- Pass down to the President Table a "TITLE" display the title in the President's table. Pass down "Living Presidents"
2 - Pass down to the Presidents Table "presidentsData" and pass it the livingPresidents
3- Create a new variable to store the dead presidents and filter the data from the presidentsArray
*/

const Presidents = (props) => {
  const livingPresidents = presidentsArray.filter(
    (president) => president.passed === undefined
  );
  console.log(livingPresidents);
   const deadPresidents = presidentsArray.filter(
    (president) => president.passed !== undefined
  );
  return (
    <>
          <h2>Hello from Presidents</h2>
      <PresidentTable presidentsData={livingPresidents} title="Living Presidents" />

      <PresidentTable title="Deceased Presidents" presidentsData={deadPresidents} />
    </>
  );
};

export default Presidents;
