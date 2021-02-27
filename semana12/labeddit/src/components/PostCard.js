import React from "react"
import { useHistory } from "react-router-dom"
import {goToPost} from "../router/cordinator"
import styled from "styled-components"
import {votePost} from "../services/votes"
import InteractiveCard from "../components/interactiveCard"



const CardContainer = styled.div`
    display:flex;
    flex-direction:column;
    background-color:#9edbce;
    width:50vw;
    margin:20px;
    padding:20px;
    div{
    background-color:white;
    margin:0px;
    }
`
const CardName = styled.div`
    display:flex;
    flex-direction:column;
    border-radius: 10px;
    h5{
        color:#e7413e;
    }
    
`
const CardText = styled.div`
    display:flex;
    flex-direction:column;
    h3{
        color:#1f4863;
    }
`

const InteractiveStyled = styled.div`
    display:flex;
    justify-content:space-between;
    
`
const CardTotal = styled.div`

`
const PostCard = (props) => {

    const history = useHistory()

    const handleVote = (vote)=>{
        const body={
            direction:vote
        }
        console.log(props.getPost)
        votePost(body,props.id,props.getVote)

       
    }


    return (
        <div>
            <CardTotal>
        <CardContainer >   
            <div onClick={() => goToPost(history, props.id)}>
                <CardName>
                    <h5>{props.name}</h5>
                </CardName>
                <CardText>
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                </CardText>
            </div>
            
            
            <InteractiveStyled>
                <InteractiveCard
                    voteDirection={props.voteDirection}
                    voteCount={props.voteCount}
                    handleVote={handleVote}
                />
           
                <div>
                    <p>comentários: {props.commentsCount}</p>
                </div>  
            </InteractiveStyled>

        </CardContainer>
        </CardTotal>
        </div>
    );
}

export default PostCard