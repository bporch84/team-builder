import React from "react"
import styled from "styled-components"

const StyledMembers = styled.div`
display: flex;
flex-direction: row;
align-items: center;
text-align: center;
justify-content: space-around;
border: 1px black solid;
margin-top: 10px;
`

const Team = props => {
    return (
        <div className="team-list">
            {props.team.map((member, index) => (
                <div className="team" key={[index]}>
                    <StyledMembers className="member">
                    <h2>{member.name}</h2>
                    <p>"{member.role}"</p>
                    <p>{member.email}</p>
                    </StyledMembers>
                </div>
            ))}
        </div>
    );
};

export default Team