import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { DetailsContainer, DetailsTrip, Candidates, AcceptedCandidates, TitlePage } from './styled'
import { ButtonAcceptedCandidate, ButtonDeleteCandidate } from '../../../functional/buttons'
import { useProtecd } from '../../../Use/useProtecd'
import axios from 'axios'



function AdmTripDetails() {
    const [trip, setTrip] = useState({})
    const [candidates, setCandidates] = useState([])
    const pathParams = useParams()
    const id = pathParams.id

    useProtecd()

    useEffect(() => {
        getTripDetails()
    }, [])


    // Ir para os detalhes da viagem selecionada
    const getTripDetails = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Ana-epps/trip/${id}`,
        {
            headers: {
                auth: localStorage.getItem('token')
            }
        }).then((response) => {
            setTrip(response.data.trip)
            setCandidates(response.data.trip.candidates)
        }).catch((error) => {
                console.log(error)
        })
    }
    
    // Aceitar candidato
    const aceptApplication = (candidateId, approve) => {
        const body = {
            approve: approve
        }
        axios
            .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Ana-epps/trips/${id}/candidates/${candidateId}/decide`,
            body, {
                headers: {
                    auth: localStorage.getItem('token')
                }
            })
            .then(() => {
                alert("Candidato aprovado!")
                getTripDetails()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    //rejeitar candidato
    const rejectApplication = (candidateId, approve) => {
        const body = {
            approve: approve
        }
        axios
            .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Ana-epps/trips/${id}/candidates/${candidateId}/decide`,
            body,  {
                headers: {
                    auth: localStorage.getItem('token')
                }
            })
            .then(() => {
                alert("Candidato reprovado!")
                getTripDetails()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <DetailsContainer>
            <TitlePage>Detalhes da Viagem:</TitlePage>
            <DetailsTrip>
            <br/>
            <Candidates>
                <h4>Candidaturas:</h4>
                {trip.candidates && trip.candidates.map(candidate => {
                    return (
                        <div key={candidate.id}>
                           <p>Nome: {candidate.name} </p>
                           <p>Idade: {candidate.age} </p>
                           <p>Profissão: {candidate.profession} </p>
                           <p>País: {candidate.country} </p>
                           <p>Motivo: 
                           <br/>
                               {candidate.applicationText}
                               </p>
                           <ButtonAcceptedCandidate onClick={() => aceptApplication(candidate.id, true)}>
                               ACEITAR
                            </ButtonAcceptedCandidate>
                            <ButtonDeleteCandidate onClick={() => rejectApplication(candidate.id, false)}>
                               RECUSAR
                            </ButtonDeleteCandidate>
                        </div>
                    )})}
            </Candidates>
            <AcceptedCandidates>
                <h4>Candidatos Aprovados:</h4>
                    {trip.approved && trip.approved.map(candidate => {
                        return (
                            <div key={candidate.id}>
                                <p>Nome: {candidate.name}</p>
                                <p>Idade: {candidate.age}</p>
                                <p>Profissão: {candidate.profession}</p>
                                <p>País: {candidate.country}</p>
                                <p>Motivo: {candidate.applicationText}</p>
                            </div>
                        )
                    })}
            </AcceptedCandidates>
            </DetailsTrip>
        </DetailsContainer>
    )
}
export default AdmTripDetails;