import React from 'react'
import { IconProps } from './types.js'

export const IconMilitaryTechRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m480-174-74 56q-12 9-24 .5t-7-22.5l29-92-73-52q-12-8-7-22t19-14h89l28-92-142-84q-18-11-28-29t-10-41v-234q0-33 23.5-56.5T360-880h240q33 0 56.5 23.5T680-800v234q0 23-10 41t-28 29l-142 84 28 92h89q14 0 19 14t-7 22l-73 52 29 92q5 14-7 22.5t-24-.5l-74-56Zm-40-626v282l40 24 40-24v-282h-80Z" />
  </svg>
)