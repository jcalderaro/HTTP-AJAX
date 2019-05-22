import React from 'react';
import './components.css';

const AddFriend = (props) => {
    console.log('this is <AddFriend/> at /');
    return (
        <form onSubmit={props.addFriend}>
            <input name='friend' placeholder='enter friend name'/>
            <input name='age' placeholder='enter friend age'/>
            <input name='email' placeholder='enter friend email'/>
            <button>Submit</button>
        </form>
    )
}

export default AddFriend;

/* Clear */