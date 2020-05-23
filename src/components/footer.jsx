import React from "react";

const getDate = new Date();
var currentYear = getDate.getFullYear();

function Footer(){
   return <footer>
        <p>Copyright ⓒ {currentYear}</p>
   </footer>
}

export default Footer;