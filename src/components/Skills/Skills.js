 import classes from './Skills.module.css';
 import PageHeader from '../Pageheader/PageHeader';
 import learningroad from './../../img/learningroad.svg';

const listTitleStyle = {fontWeight: 900, color: 'grey', marginBottom: '4px'}

 const backendSkills= 
 <ul>
     <li style={ listTitleStyle }>BACKEND SKILLS </li>
     <li> Express - JavaScript - SQL</li>
    <li> NoSQL - API - Node </li>
 </ul>

 const frontendSkills = 
 <ul>
     <li style={ listTitleStyle }>FRONT END </li>
     <li>ReactJs - HTML - CSS - </li>
    
 </ul>


const otherSkills = 
<ul>
    <li style={ listTitleStyle }>Other Skills </li>
    <li>Skill 1 - Skill 2 - Skill 3</li>
    <li>Skill 4 - Skill 5 - Skill 6</li>
    
</ul>


const totalSkills = [backendSkills,frontendSkills,otherSkills]



 

 const Skills = () => ( 
         <div className= {classes.Skills} id="skills" >
            <PageHeader title = {'What about these skills'}/>
            <p className={classes.skillsTitle}>
                Here is a list of my skills as of right now:
            </p>
            <div className={classes.midSection}>
          {totalSkills.map(skills => (
                   <div className={classes.List}>
                       {skills}
                    </div>
               ))}
          <div className={classes.Container}>
              <img className={classes.image} src={learningroad} alt="Learning Road" />
          </div>
          </div>
         </div>
      )
  
 export default Skills;