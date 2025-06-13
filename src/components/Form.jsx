import React, { useState } from "react";
import { useRef } from "react";

const Form = () =>{

    const[student, setStudent] = useState({
        name:'',
        mobile:'',
        email:'',
        image:''
    })

    const onvalueChange = (e) =>{
        setStudent({...student, [e.target.name] : e.target.value})
        console.log(student)
    }

    const fileData = (e) =>{
        setStudent({...student, image : e.target.files[0]})
    }
    const validName = useRef(null)
    const validMobile = useRef(null)
    const validEmail = useRef(null)
    const validImage = useRef(null)

    const submitData = async(e) =>{
        e.preventDefault()
        // validations
        if(!student.name){
            alert("Enter Your Name !")
            validName.current.focus()
        }else if(!student.mobile){
            alert("Enter Your Mobile No!")
            validMobile.current.focus()
        }else if(student.mobile.length !== 10){
            alert("Enter 10 Digit Mobile No!")
            validMobile.current.focus()
        }else if(!student.email){
            alert("Enter Your Email")
            validEmail.current.focus()
        }else if(!student.image){
            alert("Upload Image")
            validImage.current.focus()
        }else{
            // next class me dekhenge
        }
    }

    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 title p-0 m-0">
                        <h1>Student Registration Form</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-12"></div>
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="form p-3">
                            <h6>Fill Student's Information</h6><hr></hr>
                            <form>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Name <sup><span style={{color:'red'}}>*</span></sup></label>
                                            <input 
                                                type="text" 
                                                name="name"
                                                ref={validName}
                                                onChange={onvalueChange}
                                                class="form-control" 
                                                id="exampleInputEmail1" 
                                                aria-describedby="emailHelp" 
                                                placeholder="Enter Your Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Mobile <sup><span style={{color:'red'}}>*</span></sup></label>
                                            <input 
                                                type="text" 
                                                name="mobile"
                                                ref={validMobile}
                                                onChange={onvalueChange}
                                                class="form-control" 
                                                id="exampleInputEmail1" 
                                                aria-describedby="emailHelp" 
                                                placeholder="Enter Your Mobile"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Email Id <sup><span style={{color:'red'}}>*</span></sup></label>
                                            <input 
                                                type="email" 
                                                name="email"
                                                ref={validEmail}
                                                onChange={onvalueChange}
                                                class="form-control" 
                                                id="exampleInputEmail1" 
                                                aria-describedby="emailHelp" 
                                                placeholder="Enter Your Email"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Image <sup><span style={{color:'red'}}>*</span></sup></label>
                                            <input 
                                                type="file" 
                                                name="image"
                                                ref={validImage}
                                                onChange={fileData}
                                                class="form-control" 
                                                id="exampleInputEmail1" 
                                                aria-describedby="emailHelp" 
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div style={{display:'block', float:'right'}}>
                                            <button className="btn btn-danger" style={{marginRight:'10px'}}>Reset</button>
                                            <button className="btn btn-success" onClick={submitData}>Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form