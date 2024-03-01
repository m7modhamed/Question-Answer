import { Col, Container, Row } from "react-bootstrap";
import FormInput from "./componants/FormInput";
import QAL from "./componants/QAL";
import { quastion } from "./data";
import {useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  
  const [data,setData]=useState(quastion);
  const notify = (str,type) => {
    // eslint-disable-next-line default-case
    switch(type){
      case'success':
      toast.success(str);
      break;
      case'info':
      toast.info(str);
      break;
      case'error':
      toast.error(str);
      break;
      default:
        toast(str);
        break;
    }
  };

  const addItem=()=>{
    localStorage.setItem('items',JSON.stringify([...quastion]));
    setData([...quastion]);
    notify("تم الاضافة بنجاح",'success');
  }

  const deleteAll=()=>{
    localStorage.removeItem('items');
    quastion.splice(0,quastion.length);
    setData([]);
    notify("تم حذف الكل بنجاح",'info');
  }

  const itemDeleted=(items)=>{
    localStorage.setItem('items',JSON.stringify([...items]));
    setData([...items]);
    if(items.length <= 0){
      deleteAll();
    }
    notify("تم الحذف بنجاح",'error');
  }

  return (
    <div className="font color-body text-center">
    <Container className="p-5">
      <Row className="justify-content-center">
        <Col sm='4'>
          <div className="fs-3 text-center py-2">اسئلة واجوبة شائعة</div>
        </Col>

        <Col sm='8'>
          <FormInput addItem={addItem} notify={notify}/>

          <QAL data={data} itemDeleted={itemDeleted}/>

          {data.length ? (
                      <button onClick={deleteAll} className="btn-color w-100 my-2 py-2">حذف الكل</button>

          ):null}

        </Col>
      </Row>
    </Container>
    <ToastContainer/>
    </div>
  );
}

export default App;
