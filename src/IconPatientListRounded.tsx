import React from 'react'
import { IconProps } from './types'

const IconPatientListRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-400q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM440-160q-17 0-28.5-11.5T400-200v-36q0-21 10-40t28-30q45-27 95.5-40.5T640-360q56 0 106.5 13.5T842-306q18 11 28 30t10 40v36q0 17-11.5 28.5T840-160H440Zm46-80h308q-35-20-74-30t-80-10q-41 0-80 10t-74 30Zm154-240q17 0 28.5-11.5T680-520q0-17-11.5-28.5T640-560q-17 0-28.5 11.5T600-520q0 17 11.5 28.5T640-480Zm0-40Zm0 280ZM400-400H160q-17 0-28.5-11.5T120-440q0-17 11.5-28.5T160-480h240q17 0 28.5 11.5T440-440q0 17-11.5 28.5T400-400Zm160-320H160q-17 0-28.5-11.5T120-760q0-17 11.5-28.5T160-800h400q17 0 28.5 11.5T600-760q0 17-11.5 28.5T560-720ZM444-560H160q-17 0-28.5-11.5T120-600q0-17 11.5-28.5T160-640h320q-14 17-22.5 37T444-560Z" />
  </svg>
)

export { IconPatientListRounded as default }
