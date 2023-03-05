import { FaGithub, FaLinkedin, } from "react-icons/fa"; 
import classes from './Contact.module.css';

const handleUrl = (url) => {
    return () => window.open(url, "_blank")
}

const Contact = () => {
    return (  
        <div className={classes.Contact} id="contact">
            <div className={classes.ContactIcon}>
         <FaGithub color="grey" size="40px" style={{padding: "1%"}}
         onClick={handleUrl("https://github.com/dianamacias1218")}/>
         <FaLinkedin color="grey" size="40px" style={{padding: "1%"}}
         onClick={handleUrl("https://www.linkedin.com/in/diana-mac%C3%ADas-castillo-15588b1a8/")}/>
   
        </div>
        </div>
    );
}
 
export default Contact;




