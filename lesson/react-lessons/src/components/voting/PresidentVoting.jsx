import DisplayVoteTotals from "./DisplayVoteTotals";

//  PresidentVoting is the Parent Component
function PresidentVoting() {
    const votes = [
        { name: "Abe Lincoln", count: 139033 },
        { name: "Stephen Douglas", count: 115509 },
      ];
  return (
    <>
          <h1>Hello from President Voting</h1>
          {/* if you have another .jsx file using props */}
      {votes.map((vote, index) => (
        <DisplayVoteTotals key={index} name={vote.name} count={vote.count} />
      ))}
          
          {/* Doing it within the code  */}
           {/* {votes.map((vote, index) => (
        <p key={index}>
          {vote.name} had a total vote count of {vote.count}
        </p>
      ))} */}
        
      {/*       
      <DisplayVoteTotals name={votes[0].name} count={votes[0].count} />
      <DisplayVoteTotals name={votes[1].name} count={votes[1].count} /> */}
    </>
  );
}

export default PresidentVoting;
