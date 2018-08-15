import React from 'react';
import styled from 'styled-components';

export const Items = (props) => {
    return (
        <Select>
            <form onSubmit={props.handleAdd}>
                <Header>
                    <Input value={props.value} onChange={props.handleChange} placeholder="What needs to be rolled" />
                    <Button onClick={props.handleAdd}> Add </Button>
                </Header>
                <List>{props.choice.map(item => <Item key={item.id}><Value>{item.value}</Value><Button onClick={props.handleRemove(item.id)}>-</Button></Item>)}</List>
            </form>
        </Select>
    )
}
const Header = styled.div`
    margin-top: 20px;`;

export const Button = styled.button`
    background-color:#6F3662;
    -moz-border-radius:10px;
    -webkit-border-radius:10px;
    border-radius:10px;
    border:none;
    cursor:pointer;
    color:#ffffff;
    font-family:Arial;
    font-size:18px;
    padding:8px 20px;
    text-decoration:none;
    text-shadow:0px 1px 0px #2f6627;
    :hover{
        background-color:#90487F;
    }
    :active{
        position:relative;
        top:1px;
    }`
const Input = styled.input`
    border: 1px solid #6F3662;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -khtml-border-radius: 3px;
    background: #F8F8F2 !important;
    outline: none;
    height: 25px;
    width: 400px; 
    color: #cccccc;
    font-size: 15pt;
    font-family: Tahoma;
    &:focus{
        color: #000000;
        border: 1px solid #000000
    }`;
const Select = styled.div`
    margin: 30px;
    border-radius: 12px;
    min-width: 200px;
    max-width: 550px;
 `;
const List = styled.ul`
    display: block;`;
const Item = styled.li`
    list-style-type:none;
    padding: 10px 15px;
    display: inline-block;`;
const Value = styled.p``;