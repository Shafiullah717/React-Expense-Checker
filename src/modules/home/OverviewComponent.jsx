import { useState } from "react";
import styled from "styled-components";
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    font-family: Montserrat;
    width: 100%;
`
const BalanceBox = styled.div`
    font-size: 18px;
    font-weight: bold;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const AddTransection = styled.div`
    background-color: black;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    font-weight: bold;
    font-size: 15px;
    
`
const AddtransectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #e6e8e9;
    gap: 10px;
    padding: 10px 20px;
    margin: 20px;
    width: 100%;
    & input{
        outline: none;
        padding: 10px 12px;
        border-radius: 4px;
        border: 1px solid #e6e8e9;
    }
`
const RadioBtn = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
`
const ExpenseContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    margin: 20px;
`
const ExpenseBox = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    border: 1px solid #e6e8e9;
    padding: 15px 20px;
    width: 135px;
    font-size: 14px;
    & Span{
        font-weight: bold;
        font-size: 20px;
        color: ${(props) => (props.isIncome ? "green" : "red")};
    }

`
const AddtransectionView = (props) =>{
    const [amout, setAmout] = useState();
    const [desc, setDesc] = useState();
    const [type, setType] = useState("EXPENSE");

    const addTransection = () =>{
        props.addTransections({amout:Number(amout), desc, type, id: Date.now()})
        props.toggleAddTxn()
    };
    return(
        <AddtransectionContainer>
            <input placeholder="Amount" value={amout} type="number" onChange={(e) => setAmout(e.target.value)}
            />
            <input placeholder="Description" value={desc} onChange={(e) =>setDesc(e.target.value)} 
            />
            <RadioBtn>
                <input type="radio" id="expense" name="type" value="EXPENSE" checked={type === "EXPENSE"} 
                onChange={(e) => setType(e.target.value)}
                />
                <label htmlFor="expense">Expense</label>
                <input type="radio" id="income" name="type" value="INCOME" checked={type === "INCOME"}
                onChange={(e) => setType(e.target.value)}
                />
                <label htmlFor="income">Income</label>

            </RadioBtn>
            <AddTransection onClick={addTransection}>
                Add Transaction
            </AddTransection>

        </AddtransectionContainer>
    )

}

const OverviewComponet = (props) =>{
    const [isAddTxnVisible, toggleAddTxn] = useState(false)
    return(
        <Container>
            <BalanceBox>
                Balance: {props.income - props.expense}
                <AddTransection onClick={() => toggleAddTxn(!isAddTxnVisible)}>{isAddTxnVisible ? "Cancel" : "Add"}</AddTransection>
            </BalanceBox>
            {isAddTxnVisible && <AddtransectionView toggleAddTxn ={toggleAddTxn} addTransections={props.addTransections}/>}
            <ExpenseContainer>
                <ExpenseBox isIncome ={false}>
                    Expense<span>{props.expense}</span>
                </ExpenseBox>
                <ExpenseBox isIncome ={true}>
                    Income<span>{props.income}</span>
                </ExpenseBox>

            </ExpenseContainer>
        </Container>
    )
}

export default OverviewComponet;