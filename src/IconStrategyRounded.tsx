import React from 'react'
import { IconProps } from './types.js'

export const IconStrategyRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m200-531-100-57q-9-5-14.5-14.5T80-623v-114q0-11 5.5-20.5T100-772l100-57q9-5 20-5t20 5l100 57q9 5 14.5 14.5T360-737v114q0 11-5.5 20.5T340-588l-100 57q-9 5-20 5t-20-5Zm20-81 60-34v-68l-60-34-60 34v68l60 34Zm440 123v-93l100 59q19 11 29.5 29.5T800-454v188q0 21-10.5 39.5T760-197l-160 93q-19 11-40 11t-40-11l-160-93q-19-11-29.5-29.5T320-266v-188q0-21 10.5-39.5T360-523l100-59v93l-60 35v188l160 93 160-93v-188l-60-35Zm-60-151v200q0 17-11.5 28.5T560-400q-17 0-28.5-11.5T520-440v-400q0-17 11.5-28.5T560-880h245q24 0 36 21t-2 41l-24 36q-7 10-7 22t7 22l24 36q14 20 2 41t-36 21H600Zm-40 309ZM220-680Z" />
  </svg>
)
