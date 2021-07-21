import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import './AddProductModal.css' 


function AddProductModal(){
    const [title, setTitle ] = useState('')
   
    
    return (
        <div className='add_product-form'>
            <form className='signup__form' onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label className='signup__label'> Email </label>
                
                <input
                className='grow'
                type="text"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            
            <label className='signup__label'> Username </label>
                
                <input
                className='grow'
                type="text"
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                />
            
            <label className='signup__label'> Password </label>
                
                <input
                className='grow'
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            
            <label className='signup__label'> Confirm Password </label>
                
                <input
                className='grow'
                type="password"
                placeholder='The Same Password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                />
            
            <button type="submit" className='signup__button grow'>Sign Up</button>

            </form>
        </div>
    )
    
}
