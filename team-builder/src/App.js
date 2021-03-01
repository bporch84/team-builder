import React, { useState } from "react"
import './App.css';
import Team from "./Team"
import TeamForm from "./Forms"
import styled from "styled-components"

const StyledTitle = styled.div`
height: 100vh;
text-align: center;

h1 {
font-size: 50px;
color: maroon;
}
`

const members = [
  {
    name: "Brian Johnson",
    role: "The Brain",
    email: "bjohnson@lamps.com",
  }
]

function App() {
  const [team, setTeam] = useState(members)

  return (
    <StyledTitle className="container">
      <h1>The Breakfast Club</h1>
      <div>
      <TeamForm team={team} setTeam={setTeam} />
      <Team team={team} />
      </div>
    </StyledTitle>
  )
}

export default App;
