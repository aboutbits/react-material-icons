import React from 'react'
import { IconProps } from './types'

const IconCarTagOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120q-17 0-28.5-11.5T80-160v-320l84-240q6-18 21.5-29t34.5-11h140v55q0 6 .5 12.5T362-680H234l-42 120h255l134 134q-10 8-15.5 20t-5.5 26q0 25 17.5 42.5T620-320q20 0 36-12t21-31q11 2 21.5 3t21.5-1q22-2 42.5-11t37.5-25v237q0 17-11.5 28.5T760-120h-40q-17 0-28.5-11.5T680-160v-40H200v40q0 17-11.5 28.5T160-120h-40Zm140-200q25 0 42.5-17.5T320-380q0-25-17.5-42.5T260-440q-25 0-42.5 17.5T200-380q0 25 17.5 42.5T260-320Zm402-138L458-662q-8-8-13-19.5t-5-23.5v-155q0-25 17.5-42.5T500-920h155q12 0 23.5 5t19.5 13l204 204q17 17 17 42.5T902-613L747-458q-17 17-42.5 17T662-458Zm-62-262q17 0 28.5-11.5T640-760q0-17-11.5-28.5T600-800q-17 0-28.5 11.5T560-760q0 17 11.5 28.5T600-720Z" />
  </svg>
)

export { IconCarTagOutlinedFilled as default }
