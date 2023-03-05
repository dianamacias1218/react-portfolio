import classes from './About.module.css';
import PageHeader from './../Pageheader/PageHeader';
import me from './../../img/me.jpg';

const About = () => {
    return ( 
        <div className = {classes.About} id="about">
            <PageHeader title = {'About'}/>
            <div className = {classes.Container}>
                <div className= {classes.Text}>
                    <h2> Hello! im Diana!</h2>
                    <p>
                        I am currently enrolled in the UT Austin Coding Bootcamp! I am working towards becoming a Full Stack Web Developer.
                        I enjoy spending time alone, reading, going out for drives, walks, and spending time taking naps and playing with my dogs.
                    </p>
                </div>
                <div className={classes.Photo}>
                    <img className={classes.Me} src={me} alt="me"></img>
                </div>
            </div>
        </div>
     );
}
 
export default About;