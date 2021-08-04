import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';

const Task1 = () => {
    const [items, setItems] = useState([]);
    const [modal, setModal] = useState(false);
    // const [count, setCount ] = useState();
    const [data, setData] = useState({
        title: "",
        completed: ""
    });
    
    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => {
          setItems(data);
        });   
    }, []) 

    const handleChange = (e) => {
      const value = e.target.value;
      const newValue =  value === "true" ? true : value === "false" ? false : value;
      
      setData({
        ...data,
        [e.target.name]: newValue,
      });
      console.log(data);
    }
  
    const modalOpen = ()=> {
      setModal(true);
    }
  
    const modalClose = () => {
      setModal(false);
    }

    const handleAdd = () => {
      const newItems = [...items];
      const newData = { 
        userId: 1,
        id: 203,
        title: data.title,
        completed: data.completed
      }
      newItems.push(newData);
      console.log(newItems);
      setItems(newItems);
      modalClose();
      console.log(newData);
    };
    
    const handleDelete = item => {
      const newItems = items.filter(i => i.id !== item.id);
      setItems(newItems);
      console.log(item);
    };

    
    // if (count === 0)
    // return <div className="tatxt">There are no task in the database.</div>;
  
      return (
        <div className="App">
          <NavBar />
          <div className="main">
            <div className="row mb-3">
              {/* <div className="tatxt col-10">Showing {count} items in the database.</div> */}
              <div className="col-2 robtn">
                <button className="btn btn-primary btn-md" onClick={modalOpen}>Add Task</button>
                <Modal show={modal} onHide={modalClose} centered>
                  <Modal.Header closeButton>
                    <Modal.Title>Add Task</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form> 
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="title">Title</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="title"
                          value={data.title}
                          onChange={handleChange}  
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="completed">Completed</Form.Label>
                        <Form.Control 
                          type="boolean" 
                          name="completed"
                          value={data.completed}
                          onChange={handleChange} 
                        />
                      </Form.Group>
                      <Form.Group>
                        <Button variant="primary" className="form-control" onClick={handleAdd}>
                          Submit
                        </Button>
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                </Modal>          
              </div>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Completed</th>
                  <th>button</th>
                </tr>
              </thead>  
              <tbody>
                {items && items.map((item, index) => (
                <tr key={`${item}${index}`}>
                  <td>{item.id}</td>
                  <td>{item?.title}</td>
                  <td>{item?.completed  ? "true" : "false"}</td>
                  <td>
                    <button onClick={() => handleDelete(item)} className="btn btn-danger btn-sm">
                      Delete
                    </button>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }


export default Task1;