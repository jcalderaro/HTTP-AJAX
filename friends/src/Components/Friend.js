import React from 'react';
import faker from 'faker';
import './components.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimesCircle} from '@fortawesome/free-regular-svg-icons';

const Friend = (props) => {
    let id = (props.id - 1);
    let avatar = props.avatars.map( avatar => Object.values(avatar));

    return (
            <address>
                <FontAwesomeIcon onClick={() => props.deleteFriend(props.id)}icon={faTimesCircle} size='2x' />
                <div>Name: {props.friend.name} </div>
                <div>Age:  {props.friend.age}   </div>
                <div>email:  {props.friend.email} </div>
                { avatar[id] ? <img src={avatar[id]}/> : <img src={faker.image.avatar()}/> }
            </address>
    )
}

export default Friend;

/* Clear */