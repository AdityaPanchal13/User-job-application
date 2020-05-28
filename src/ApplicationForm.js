import React from 'react'
import axios from './config/axios'

class ApplicationForm extends React.Component{
    constructor(){
        super()
            this.state={
                name:'',
                email:'',
                contact:'',
                job:'',
                experience:'',
                skills:''
            }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })

    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name,
            email:this.state.email,
            phone:this.state.contact,
            jobTitle:this.state.job,
            experience:this.state.experience,
            skills:this.state.skills

             
        }
        //console.log(formData)
        axios.post('/users/application-form',formData)

            .then((response)=>{
                console.log('resole',response.data)
                if(response.data.hasOwnProperty('error')){
                    alert(response.data.message)
                }else{
                    alert('Your application has been submitted')
                    this.setState({
                        name:'',
                        email:'',
                        contact:'',
                        job:'',
                        experience:'',
                        skills:''
                    })
                     }
                    })
            .catch((error)=>{
                console.log('reject',error)
                    })  
        }
    render(){
        return(
            <div>
                <h1>Apply for job</h1>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="fullName">Full name</label>
                    <input type="text"
                            id="fullName"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}


                    />
                    <br/>
                    <label htmlFor="email">Email</label>
                    <input type="text"
                            id="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder="example@xample.com"

                    />
                    <br/>
                    <label htmlFor="contact">Contact number</label>
                    <input type="text"
                            id="contact"
                            name="contact"
                            value={this.state.contact}
                            onChange={this.handleChange}
                            placeholder="+91 9988776655"


                    />
                    <br/>
                    <label>Aplying for job</label>
                    <select value={this.state.job} name="job" onChange={this.handleChange}>
                        <option value="">--Select--</option>
                        <option value="Front-End Developer">Front-End Developer</option>
                        <option value="Node.js Developer">Node.js Developer</option>
                        <option value="MEAN Stack Developer">MEAN Stack Developer</option>
                        <option value="FULL Stack Developer">FULL Stack Developer</option>
                    </select>
                    <br/>
                    <label htmlFor="experience">Experience</label>
                    <input type="text"
                            id="experience"
                            name="experience"
                            value={this.state.experience}
                            onChange={this.handleChange}
                            placeholder="experience(2years 3months)"


                    />
                    <br/>
                    <label htmlFor="skills">Technical Skills</label>
                    <textarea
                            id="skills"
                            name="skills"
                            value={this.state.skills}
                            onChange={this.handleChange}
                            placeholder="Technical Skills"


                    ></textarea>
                    <br/>
                    <input type="submit" value="Send Application"/>
                    



                </form>
            </div>
        )

    }
}
export default ApplicationForm