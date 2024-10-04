import React from 'react'
import { IconProps } from './types.js'

export const IconConnectingAirportsRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M294-400q-20 0-30.5-16.5T260-451l57-149H200l-43 66q-5 7-12 10.5t-15 3.5h-7q-16 0-26-12.5T92-561l28-99-30-105q-4-14 4.5-24.5T117-800h15q7 0 13 3.5t10 9.5l45 67h117l-60-155q-6-17 4-31t27-14h15q8 0 15 3.5t12 10.5l128 186h122q25 0 42.5 17.5T640-660q0 25-17.5 42.5T580-600H458L331-416q-5 8-13.5 12t-17.5 4h-6ZM657-40q-8 0-15-3.5T630-54L502-240H380q-25 0-42.5-17.5T320-300q0-25 17.5-42.5T380-360h122l128-186q5-7 12-10.5t15-3.5h15q17 0 27 14t4 31l-60 155h117l45-67q4-6 10-9.5t13-3.5h15q14 0 22.5 10.5T870-405l-30 105 30 105q4 14-4.5 24.5T843-160h-15q-7 0-13-3.5t-10-9.5l-45-67H643l60 155q6 17-4 31t-27 14h-15Z" />
  </svg>
)