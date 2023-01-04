// DisplayVoteTotals is the child of PresidentVoting.jsx
function DisplayVoteTotals(props) {
  return (
    <>
    <p> {props.name} had a total vot count of {props.count}</p>
    </>
  );
}

export default DisplayVoteTotals;
