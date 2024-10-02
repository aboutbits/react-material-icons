import React from 'react'
import { IconProps } from './types'

export const IconRespiratoryRateOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M500-40q-25 0-42.5-17.5T440-100v-147l53-141q9-23 29.5-37.5T568-440h32v102l-54 54 28 28 66-67v-197h80v197l66 67 28-28-54-55v-101h32q25 0 45.5 14.5T867-388l53 141v147q0 25-17.5 42.5T860-40h-80q-25 0-42.5-17.5T720-100v-110l-40-40-40 40v110q0 25-17.5 42.5T580-40h-80ZM280-409l-45-89q-5-10-14.5-16t-20.5-6H80v-200q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v220H780v-80H580v80l-25 1-79-159q-5-10-15-15t-21-5q-11 0-21 5t-15 15L280-409ZM160-160q-33 0-56.5-23.5T80-240v-200h95l69 138q5 11 14.5 16.5T280-280q11 0 20.5-5.5T315-302l125-248 40 81q-14 12-25.5 27T436-409l-56 151v98H160Z" />
  </svg>
)
