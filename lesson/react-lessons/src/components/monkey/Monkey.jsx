import React, { useState } from "react";

const Monkey = (props) => {
    const [monkeyCount, setMonkeyCount] = useState(10);
    function handleClick() {
            setMonkeyCount(monkeyCount - 1)
    
}
    return ( 
        <>
            {monkeyCount > 0 ? (
                <p> {monkeyCount} little monkeys are jumping on the bed 1 fell off and bumped his head</p>
            ) : ( <p> There are not more monkeys left </p>) }
                    
            <button onClick={handleClick}> Fall! </button> 
        </>
     );
}
 
export default Monkey;