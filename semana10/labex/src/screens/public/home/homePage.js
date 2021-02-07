import React, { useState } from 'react'
import { HomeContainer, MainContainer, AnimationContainer, Message } from './styled'
import  Header  from '../../../components/Header'
import  Footer  from '../../../components/Footer'
import Lottie from 'react-lottie';
import animationData from '../../../animation/animação.json'





function HomePage(){
    //animação
    const [ animationState, setAnimationState ] = useState({
        isStopped: false, isPaused: false
    })

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    
     
    return (
        <HomeContainer>
           <Header/>
           
           <MainContainer>
                   
                   <AnimationContainer>
                   
                        <Lottie options={defaultOptions}
                        height={250}
                        width={250}
                        isStopped={animationState.isStopped}
                        isPaused={animationState.isPaused}
                        
                    />
                    </AnimationContainer>
                   
                    <Message>Escolhemos ir para<br/> o espaço não porque é facil, 
                        mas porque é dificil! <br/>Venha fazer parte dessa aventura.</Message>
               </MainContainer>
           <Footer />
        </HomeContainer>
    )
}
export default HomePage;