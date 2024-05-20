import React from 'react'
export default function Alert(props) {
    const Capitalize=(word)=>{
        const lower=word.toLowerCase();
        return word.charAt(0).toUpperCase()+word.slice(1);
    }
    if(props.alert!=null)
  return (
             <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{Capitalize(props.alert.type)}</strong>:{props.alert.msg}
    </div>
  )
}
