/* 
Boiler Plate Code for Functional Components without Props
- Create a function with a return of jsx (single element)
- Export the function using export default and the function name.
*/

function Header() {
    const firstName="julia"
    return (
    <header>
            <h1>Welcome to the header, {firstName}</h1>
      <h2>We Just modified our header component</h2>
    </header>
  );
}

export default Header;
