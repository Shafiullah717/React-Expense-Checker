import styled from "styled-components"
import OverviewComponet from "./OverviewComponent"
import TransectionComponent from "./TransectionComponent"
import { useEffect, useState } from "react"
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
    const [expense , setexpense] = useState(0)
    const [income, setincome] = useState(0)

    const addTransections = (payload) =>{
        const transectionsArray=[...transections];
        transectionsArray.push(payload)
        setTransections(transectionsArray)

    }
    const CalculateBalance =()=>{
        let exp = 0;
        let inc = 0;
        transections.map((payload) =>{
            payload.type === "EXPENSE"
              ? (exp = exp + payload.amout)
              : (inc = inc + payload.amout);
        })
        setexpense(exp);
        setincome(inc)
    }
    useEffect(() => CalculateBalance(),[transections]);

    return(
        <Container>
            <OverviewComponet 
            addTransections={addTransections} 
            expense = {expense}
            income = {income}
            />
            <TransectionComponent  transections={transections}/>
        </Container>
    )

}
export default HomeComponent