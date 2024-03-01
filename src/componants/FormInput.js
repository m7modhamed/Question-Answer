import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { quastion } from '../data';
const FormInput = ({addItem,notify}) => {

    const [quast,setQuastion]=useState();
    const [answer,setAnswer]=useState();

    let items=localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')):null;
    let i=1;
    
    if(items != null && items.length){
      i=items[items.length-1].id;
      i++;
    }
    const addData= ()=>{
      if(quast === "" || answer === ""){
        notify('من فضلك اكمل البيانات','error');
        return;
      }
      quastion.push({id:i,q:quast,a:answer});
      setAnswer('');
      setQuastion('');
      addItem();
    }

  return (
    <Row  className='my-2'>
      <Col sm='5'>
        <Form.Control value={quast} onChange={(e)=>{setQuastion(e.target.value)}} type="text" placeholder="ادخل السؤال" />
      </Col>

      <Col sm='5'>
        <Form.Control value={answer} onChange={(e)=>{setAnswer(e.target.value)}} type="text" placeholder="ادخل الجواب" />
      </Col>

      <Col sm='2'>
        <button onClick={addData} className="btn-color w-100"  type="submit">
            اضافة
        </button>
      </Col>

    </Row>
  )
}

export default FormInput
