// write a function that export a single h6 element with a copyright type in the current year. copyright 2023
// make sure you export it and import on the App.jsx file - mount it below the at the bottom.

// BONUS: See i fyou can make that year dynamic so it not hard coded. 

function Footer() {
    const year= new Date().getFullYear();
    return (
    <footer>
            <h6>Copywright {year}</h6>
    </footer>
  );
}

export default Footer;