import React, {useState} from 'react'
import SelectUSState from 'react-select-us-states';
function Form() {
  const [state, setState] = useState({})
  const handleChange = (newValue) => {
     console.log(newValue);
  }

  return (
    <div>
      <form>
        <SelectUSState id="myId" className="myClassName" onChange={handleChange}/>     
      </form>
    </div>
  )
}

export default Form;
