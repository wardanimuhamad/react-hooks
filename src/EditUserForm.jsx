import React, { useState, useEffect } from 'react'

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  useEffect(() => {
    setUser(props.currentUser)
  }, [props])
  
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <div className="mb-2">
        <label>Name</label>
        <input className="form-control" type="text" name="name" value={user.name} onChange={handleInputChange}
        />
      </div>
      <div className="mb-2">
        <label>Username</label>
        <input className="form-control" type="text" name="username" value={user.username} onChange={handleInputChange}
      />
      </div>
      <div className="mb-2">
      <button className="btn btn-primary">Update user</button>&nbsp;
      <button className="btn btn-primary" onClick={() => props.setEditing(false)}
      >
        Cancel
      </button>
      </div>      
    </form>
  )
}

export default EditUserForm