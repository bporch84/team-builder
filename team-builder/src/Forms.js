import React, { useState } from "react"
import styled from "styled-components"

const StyledForm = styled.form`
padding-bottom: 50px;

label {
    font-size: 20px;
    color: darkblue;
}

input,select {
    background-color: dodgerblue;
}

button {
    margin-top: 25px;
    padding: 10px 20px;
    font-size: 20px;
    background-color: maroon;

    &:hover {
        background-color: green;
    }
}
`


const TeamForm = props => {
    const defaultState = {name: "", email: "", role: ""}

    const [newTeam, setNewTeam] = useState(defaultState);

    const handleChange = event => {
        setNewTeam({
            ...newTeam,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        setNewTeam(defaultState)
        props.setTeam([...props.team, newTeam]);
    }

    return (
<StyledForm onSubmit={handleSubmit}>
    <label>Name</label><br/>
    <input
        name="name"
        type="text"
        onChange={handleChange}
        value={newTeam.name}
    /><br/>
    
    {/* <label>Role</label><br/>
    <input
        name="role"
        type="text"
        onChange={handleChange}
        value={newTeam.role}
    /><br/> */}

    <label>Role</label><br/>
    <select name="role" onChange={handleChange} value={newTeam.role}>
        <option value="">--Please choose an option--</option>
        <option value="The Brain">The Brain</option>
        <option value="The Criminal">The Criminal</option>
        <option value="The Princess">The Princess</option>
        <option value="The Athlete">The Athlete</option>
        <option value="The Basket Case">The Basket Case</option>
    </select><br/>

<label>Email</label><br/>
    <input
        name="email"
        type="email"
        onChange={handleChange}
        value={newTeam.email}
    /><br/>

    <button type="submit">Join The Breakfast Club</button>
</StyledForm>
    );
};

export default TeamForm