import React from 'react'
import { IconProps } from './types'

const IconConnectingAirportsSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m240-400 77-200H200l-53 80H80l40-140-40-140h67l53 80h117l-77-200h80l138 200h122q25 0 42.5 17.5T640-660q0 25-17.5 42.5T580-600H458L320-400h-80ZM640-40 502-240H380q-25 0-42.5-17.5T320-300q0-25 17.5-42.5T380-360h122l138-200h80l-77 200h117l53-80h67l-40 140 40 140h-67l-53-80H643l77 200h-80Z" />
  </svg>
)

export { IconConnectingAirportsSharp as default }
