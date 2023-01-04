
import PresidentRow from './PresidentRow'

function PresidentTable({title, presidentsData}) {
    return (
      <>
        <h2>{title}</h2>
        <table>
          <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
              <th>Birth Year</th>
              <th>Currently Living</th>
              <th>Age</th>
          </tr>
          </thead>
          <tbody>
               {presidentsData.map((presidentData, index) => (
          <PresidentRow
                   key={index}
                   presidentData={presidentData}
                  //  can destructure here or on next page
          //           first={presidentData.first}
          // last={presidentData.last}
          // year={presidentData.year}
        />
      ))}
            </tbody>
        </table>
            </>

  )
}

export default PresidentTable