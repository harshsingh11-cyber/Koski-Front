import React, { useContext } from 'react';
import { AiFillDelete, AiOutlineEdit } from 'react-icons/ai';
import './User.css';
import { useNavigate } from 'react-router-dom';
import { DataContext } from './DataContext';





function User({d, name, email, phone, update,deleteA, _id }) {

    console.log(d);
    const navigate = useNavigate();
    const { updateInd } = useContext(DataContext); 

    const handleMoreOptions = (el) => {
        console.log(el);
        updateInd(el);
          navigate('/more');
    }
    return (
        <div className="user-card">
            <div className="first">
            <h3 className="user-card__name">{name}</h3>
            <p className="user-card__email">{email}</p>
            <p className="user-card__phone">{phone}</p>
            </div>
            
            <div className="card__actions">
                <button className="user-card__action-button button-24 " onClick={() => deleteA(_id)}>
                    <AiFillDelete />
                </button>
                <button className="user-card__action-button button-3" onClick={() => update(_id)}>
                    <AiOutlineEdit />
                </button>
                <button className="user-card__more-options" onClick={ ()=> handleMoreOptions(d)}>
                    More Options
                </button>
            </div>
        </div>
    );
}

export default User
