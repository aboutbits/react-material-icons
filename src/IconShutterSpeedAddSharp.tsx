import React from 'react'
import { IconProps } from './types'

const IconShutterSpeedAddSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M720-40v-120H600v-80h120v-120h80v120h120v80H800v120h-80ZM360-840v-80h240v80H360ZM480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-800q64 0 121 21t104 58l57-57 56 56-56 58q39 49 59.5 109T840-427q-14-4-31-9t-49-5q0-10-.5-19.5T757-480H596L416-167q16 4 31.5 5.5T480-160q11 0 21-.5t21-2.5q3 20 9.5 40T548-86q-17 3-34 4.5T480-80Zm0-440h268q-18-62-61.5-109T584-700L480-520Zm-70 40 134-232q-16-4-32.5-6t-33.5-2q-45 0-89 14.5T306-660l104 180Zm-206 80h206L276-632q-42 47-62.5 106.5T204-400Zm172 220 104-180H212q18 62 61.5 109T376-180Zm104-260Zm42 277Zm238-278Z" />
  </svg>
)

export { IconShutterSpeedAddSharp as default }