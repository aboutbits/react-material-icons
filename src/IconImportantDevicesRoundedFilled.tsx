import React from 'react'
import { IconProps } from './types.js'

export const IconImportantDevicesRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-120q-17 0-28.5-11.5T640-160v-318q0-17 11.5-28.5T680-518h160q17 0 28.5 11.5T880-478v318q0 17-11.5 28.5T840-120H680Zm0-80h160v-238H680v238ZM372-429l68-51 68 51q6 5 11.5 1t3.5-11l-25-85 70-56q5-5 3-11.5t-9-6.5h-86l-26-82q-2-7-10-7t-10 7l-26 82h-86q-7 0-9 6.5t3 11.5l70 56-25 85q-2 7 3.5 11t11.5-1Zm-12 309q-17 0-28.5-11.5T320-160q0-17 11.5-28.5T360-200h40v-80H160q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h560q33 0 56.5 23.5T800-760v122q0 17-11.5 28.5T760-598h-80q-50 0-85 35t-35 85v158q0 17-11.5 28.5T520-280h-40v80h40q17 0 28.5 11.5T560-160q0 17-11.5 28.5T520-120H360Z" />
  </svg>
)