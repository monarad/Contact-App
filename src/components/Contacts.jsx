
 import { useState } from "react"
import ContactsList from "./ContactsList";
import styles from "./Contacts.module.css"
import inputs from "../constants/inputs";
import {v4} from "uuid"




function Contacts() {
    const[contacts,setContacts]=useState([])
    const[alert,setAlert]=useState("")

    const[contact,setContact]=useState({
      id:"",
        name:"",
         lastName:"",
         email:"",
         phone:"" 
    })
    const changeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setContact(contact=>({...contact,[name]:value}))
          console.log({name,value})
          
        


    }
    const addHandler=()=>{
           if(!contact.name || !contact.lastName || !contact.email || !contact.phone){
           setAlert("Please Enter Valid data")
            return;
           }
           setAlert("")
           const newContact={...contact,id:v4()}
            setContacts((contacts)=>[...contacts,newContact]);
              console.log(contacts)
              setContact({
                    name:"",
                    lastName:"",
                    email:"",
                    phone:""
              })

            
         }
         const deleteHandler=id=>{
          const newContacts=contacts.filter(contact=>contact.id !== id)
          setContacts(newContacts)
         }
    // const[contact,setContact]=useState({
    //     name:"",
    //     lastName:"",
    //     email:"",
    //     phone:""
    // })
    // const changeHandler=(event)=>{
    //     const name=event.target.name;
    //     const value=event.target.value;
    //     setContact(contact=>({...contact,[name]:value}))
    //     console.log({name,value})
       

    // }
    // const addHandler=()=>{
    //     console.log(contact)
    // }
  return (
    <div className={styles.container}>
        <div className={styles.form}>
          {inputs.map((input,index)=><input key={index} type={input.type} placeholder={input.placeholder} name={input.name} onChange={changeHandler} value={contact[input.name]}/>)}
            {/* <input type="text" placeholder="Name" name="name"  value={contact.name} onChange={changeHandler}/>
            <input type="text" placeholder="lastName" name="lastName"  value={contact.lastName} onChange={changeHandler}/>
            <input type="text" placeholder="Email" name="email"  value={contact.email} onChange={changeHandler}/>
            <input type="text" placeholder="Phone" name="phone"  value={contact.phone} onChange={changeHandler}/> */}
            <button onClick={addHandler}>Add Contact</button>
        </div>
       <div className={styles.alert}>{alert && <p>{alert}</p>}</div> 
       <ContactsList contacts={contacts} deleteHandler={deleteHandler}/>
    </div>
    // <div cla.mapssName={styles.container}>
    //     <div>
    //         <input type="text" name="name" placeholder="Name"  value={contact.name} onChange={changeHandler}/>
    //         <input type="text" name="lastName" placeholder="Last Name"  value={contact.lastName} onChange={changeHandler}/>
    //         <input type="text" name="email" placeholder="Email"  value={contact.email}onChange={changeHandler} />
    //         <input type="text" name="phone" placeholder="Phone" value={contact.phone} onChange={changeHandler} />
    //         <button onClick={addHandler}>Add Contact</button>
    //     </div>    
    // </div>
  )
}

export default Contacts