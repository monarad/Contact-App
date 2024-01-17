import React from 'react';
import styles from "./ContactItem.module.css"


function ContactItem({contact:{id,name,lastName,email,phone} ,deleteHandler}) {
  
  return (
    
        <li className={styles.item} >
                  <p>{name} {lastName}</p>
                  <p>{email}</p>
                  <p>{phone}</p>
                  <button onClick={()=>deleteHandler(id)}>Delete</button>
                  </li>
    
  )
}

export default ContactItem