import { useForm } from 'react-hook-form';
import './style.css'
// import { useState } from 'react';

export default function Form() {
  const {
    register,
    formState: {
      errors,
      isValid,
    },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur"
  });
  //Если бы не использовали useForm, то данные из инпута пулучали бы 
  //след. образом (код в комментариях):
  // const [inputValue, setInputValue] = useState("");
  const onSubmit = (data) => {
    fetch('/api', {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)

    })
    reset();
    console.log(data)
  }

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <div className='inputs'>
          <label className='label'>The cone height:</label>
          <input
            // value={inputValue} 
            className='input' placeholder="100 mm"
            // onChange={e => setInputValue(e.target.value)}
            {...register('coneHeight', {
              required: true,

              maxLength: {
                value: 3,
                message: 'Three numbers max'
              }
            })} />
          {/* <p>{inputValue}</p> */}
          <div className='errors'>{errors.coneHeight && <p>{errors.coneHeight.message || "Please put the cone height"}</p>}</div>
          <label className='label'>The cone radius:</label>
          <input className='input' placeholder="100 mm" {...register('radius', {
            required: true,
            maxLength: {
              value: 3,
              message: 'Three numbers max'
            }
          })} />

          <div className='errors'>{errors.radius && <p>{errors.radius.message || "Please put the cone radius"}</p>}</div>
          <label className='label'>Segment numbers:</label>
          <input className='input' placeholder="3 pcs"{...register('segmentNumbers', {
            required: true,
            maxLength: {
              value: 2,
              message: 'Two numbers max'
            }
          })} />
          <div className='errors'>{errors.segmentNumbers && <p>{errors.segmentNumbers.message || "Please put the segment numbers"}</p>}</div>
        </div>
        <button className='submit' type="submit" disabled={!isValid}>Send to the node server</button>
      </form>
    </div>
  )
}