import React from 'react'
import styled from "styled-components"
import coracaoDown from "../img/coracaoDown.png"
import coracaoUp from "../img/coracaoUp.png"
import coracaoUpGreen from "../img/coracaoUpGreen.png"
import coracaoDownRed from "../img/coracaoDownRed.png"


const CardButtons = styled.div`
    display:flex;
    img{
        width:40px;
        height:35px;
    }
`



function InteractiveCard(props) {






function colorButtonAndVotes(){
    if(props.voteDirection===0){
      return(
        <CardButtons>
        <img src={props.voteDirection===1? coracaoUpGreen : coracaoUp} alt= "coração" onClick={()=>props.handleVote(1)}/>
        <p>{props.voteCount}</p>
        <img src={coracaoDown} alt= "coração" onClick={()=>props.handleVote(-1)}/>
        </CardButtons> 
      )
    }else{
      return(
        <CardButtons>
        <img src={props.voteDirection===1? coracaoUpGreen : coracaoUp} alt= "coração" onClick={()=>props.handleVote(0)}/>
        <p>{props.voteCount}</p>
        <img src={props.voteDirection===-1? coracaoDownRed : coracaoDown} alt= "coração" onClick={()=>props.handleVote(0)}/>
        </CardButtons> 
      )
    }
}




  return (
    <div>
      {colorButtonAndVotes()} 
    </div>
    
  );
}

export default InteractiveCard