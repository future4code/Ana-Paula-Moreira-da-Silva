import styled from 'styled-components'
import {mainGray, mainDarkOrange, mainLightBlue, mainDarkGray } from '../../../functional/color'



// Styled AdmListTripsPage //
export const TripsTitle = styled.h2`
  color: black;
  text-align: center;
  margin-top: 5%;
`

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 2em;
  justify-items: center;
  margin: 4% 1%;
`

export const TripsContainer = styled.div`
  overflow: auto;
  text-align: center;
  background-color: black;
  border-radius: 10px;
  width: 22vw;
  height: 65vh;
`

export const NameTrip = styled.h3`
  color: #DAA520;
  padding: 1% 4%;
`

export const InfoTrip = styled.p`
  color: 	#FFD700;
  font-size: 14px;
  text-align: center;
  padding: 1%;
`