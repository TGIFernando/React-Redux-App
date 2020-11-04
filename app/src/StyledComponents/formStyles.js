import styled from 'styled-components'

export const FlexyDiv = styled.div`
flex-wrap:wrap;
`

export const FlexyForm = styled.form`
border: 1rem solid #C880B7;
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
margin: 1rem auto;
width: 75%;
background-color: #C880B7;
box-shadow: 5px 5px 10px #B6549F;
`

export const Label = styled.label`
font-size: 2rem;
font-family: 'Playfair Display', serif;
`

export const Input = styled.input`
border-radius: 10px;
border: none;
&:focus{
    outline:none;
}
`

export const Button = styled.button`
font-family: 'Assistant', sans-serif;
margin: .5rem auto;
border-radius: 10px;
border:none;
&:focus{
    outline:none;
}
&:hover{
    cursor: pointer;
}
`