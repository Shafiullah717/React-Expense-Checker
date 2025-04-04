import styled from "styled-components"
import OverviewComponet from "./OverviewComponent"
import TransectionComponent from "./TransectionComponent"
import { useState } from "react"
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 30px 0 10px;
font-family: Montserrat;
width: 350px;
`

const HomeComponent =(props) =>{
    const [transections, setTransections] = useState([])

    const addTransections = (payload) =>{
        const transectionsArray=[...transections];
        transectionsArray.push(payload)
        setTransections(transectionsArray)

    }

    return(
        <Container>HomeComponent
            <OverviewComponet addTransections={addTransections}/>
            <TransectionComponent  transections={transections}/>
        </Container>
    )

}
export default HomeComponent