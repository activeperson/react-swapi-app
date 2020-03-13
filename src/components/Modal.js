import React, { Fragment, useState } from 'react';



let Modal = () => {

    
    
    const [state, setState] = useState(true);
    const [inputValue, setValue] = useState(false);

    const styles = {
        div:  {
            display: 'block',
            backgroundColor: 'rgba(0,0,0,0.3)'
        }
    }

    let saveToLocalStorage = () => {
        localStorage.setItem('name', inputValue);
        setState(false);
    }

    let inputOnChange = (e) => {
        setValue(e.target.value);
    }

    let closeModal = () => {
        setState(false);
    }

    return (
        
        <Fragment>
            {state && !localStorage.getItem('name') ? (
                <div className="modal" style={styles.div}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">What is your name?</h5>
                            <button type="button" className="close" onClick={closeModal}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Name:</span>
                            </div>
                            <input type="text" className="form-control" onChange={inputOnChange} />
                        </div>
                        </div>
                        <div className="modal-footer">
                            <button onClick={saveToLocalStorage} type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>

            </div>
            ) : ''}
            
        </Fragment>
    );
}
export default Modal;