import React, { useState } from 'react';

const AddUserForm = (props) => {
    const initialFormState = { id: null, name: '', username: '' }
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = (event) => {
        const { name, value } = event.target
      
        setUser({ ...user, [name]: value })
    }

    return (
        <div>
            <form onSubmit={event => {
                event.preventDefault()
                if (!user.name || !user.username) return
            
                props.addUser(user)
                setUser(initialFormState)
                }}>
                <div className="mb-2">
                    <label>Name</label>
                    <input className="form-control" type="text" name="name" value={user.name} onChange={handleInputChange} />
                </div>
                <div className="mb-2">
                    <label>Username</label>
                    <input className="form-control" type="text" name="username" value={user.username} onChange={handleInputChange} />
                </div>
                <div className="mb-2">
                    <button className="btn btn-primary">Add new user</button>
                </div>                
            </form>
        </div>
    );
}

export default AddUserForm;
