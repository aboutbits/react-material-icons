import React from 'react'
import { IconProps } from './types.js'

export const IconEventUpcomingRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M760-80H640q-17 0-28.5-11.5T600-120q0-17 11.5-28.5T640-160h120v-400H200v120q0 17-11.5 28.5T160-400q-17 0-28.5-11.5T120-440v-280q0-33 23.5-56.5T200-800h40v-40q0-17 11.5-28.5T280-880q17 0 28.5 11.5T320-840v40h320v-40q0-17 11.5-28.5T680-880q17 0 28.5 11.5T720-840v40h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80Zm-393-80H80q-17 0-28.5-11.5T40-200q0-17 11.5-28.5T80-240h287l-75-76q-11-11-11.5-27.5T292-372q11-11 28-11t28 11l144 144q12 12 12 28t-12 28L348-28q-11 11-27.5 11.5T292-28q-11-11-11-28t11-28l75-76Z" />
  </svg>
)