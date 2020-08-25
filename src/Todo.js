import React from 'react'

export default function Todo(props) {
    
  return ( 
    <div className="col-md-3 col-sm-6 mt-3">
    <div className="card">
      <div className="card-body d-flex align-items-center">
        <h5 className="card-title mb-0">{props.list}</h5>
        
      </div>
    </div>
  </div>   
     
  )
}
