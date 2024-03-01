import React from "react";
import { Accordion, Row } from "react-bootstrap";
import {quastion } from "../data";


const QAL = ({ itemDeleted }) => {

  const dataStorge=localStorage.getItem('items') ?JSON.parse(localStorage.getItem('items')):null;

  const deleteItem = (ID) => {
    if(localStorage.getItem('items') != null){
      const index = quastion.findIndex((item) => {return item.id === ID});
      quastion.splice(index, 1);
      itemDeleted(quastion);
  }};

  return (
    <Row>
      <Accordion defaultActiveKey="0">
        {
        dataStorge != null ? (
          dataStorge.map((item, index) => {
            return (
              <Accordion.Item key={index} eventKey={item.id}>
                <Accordion.Header>
                  <div>{item.q}</div>
                </Accordion.Header>
                <Accordion.Body className="d-flex justify-content-between align-items-center">
                  <div>{item.a}</div>
                  
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="btn-color"
                  >حذف السؤال</button>
                </Accordion.Body>
              </Accordion.Item>
            )
          })
        ) : 
          <h1 className="p-5">لا يوجد اسئلة حاليا</h1>
        }
      </Accordion>
    </Row>
  );
};

export default QAL;
