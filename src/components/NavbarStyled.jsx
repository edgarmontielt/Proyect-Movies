import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
     background-color: #223240;
     color: white;
     padding: 10px;
`

export default function NavbarStyled() {
     return (
          <Nav>
               <Link to={"/login"}>login</Link>
          </Nav>
     )
}
