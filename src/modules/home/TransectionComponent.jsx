import { useEffect, useState } from "react"
import styled from "styled-components"
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 22px;
    font-size: 18px;
    width: 100%;
    gap: 10px;
    font-weight: bold;
    & input{
        padding: 10px 12px;
        border-radius: 12px;
        background-color: #e6e8e9;
        border: 1px solid #e6e8e9;
        outline: none;
        width: 100%;
}
`
const Cell = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px 15px;
    font-size: 14px;
    border-radius: 2px;
    align-items: center;
    font-weight: normal;
    width: 100%;
    justify-content: space-between;
    border : 1px solid #e6e8e9;
    border-right: 4px solid ${(props) => (props.isExpense ? "red" : "green")};
    
`
const TransectionCell =(props) =>{

    return(
        <Cell isExpense={props.payload?.type === "EXPENSE"}>
            <span>{props.payload.desc}</span>
            <span>${props.payload.amout}</span>

        </Cell>
    )

}
const TransectionComponent = (props) =>{
    const [searchText, updateSearchText] = useState("")
    const [filteredTransaction, updateTxn] = useState(props.transections)
    const filterdata = (searchText) =>{
        if(!searchText || !searchText.trim().length){
            updateTxn(props.transections);
            return
        }
        let txn = [...props.transections];
        txn = txn.filter((payload) =>payload.desc.toLowerCase().includes(searchText.toLowerCase().trim()));
        updateTxn(txn)
    }
    useEffect(() =>filterdata(searchText), [props.transections])
    return(
        <Container>
            Transection
            <input placeholder="Serach" 
            value={searchText} 
            onChange={(e) => {updateSearchText(e.target.value)
            filterdata(e.target.value)    
            }}/>
            {filteredTransaction?.length
            ? filteredTransaction.map((payload) =>(
              <TransectionCell payload={payload}/>
              ))
            : ""}

        </Container>
    )
}
export default TransectionComponent