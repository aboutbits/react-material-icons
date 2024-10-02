import React from 'react'
import { IconProps } from './types'

export const IconFlightLandRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200h640q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120H160Zm582-202L178-482q-26-8-42-29t-16-48v-177q0-20 16-32t36-7l23 6q10 3 17.5 9.5T223-743l41 119 138 39-28-271q-3-26 17.5-42.5T437-907l21 6q11 3 19.5 11.5T490-870l120 345 172 49q25 8 41.5 29t16.5 48q0 35-28.5 61.5T742-322Z" />
  </svg>
)
