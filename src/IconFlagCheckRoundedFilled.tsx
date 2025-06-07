import React from 'react'
import { IconProps } from './types.js'

export const IconFlagCheckRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-120q-17 0-28.5-11.5T200-160v-600q0-17 11.5-28.5T240-800h165q17 0 28 14t9 31q-1 9-1.5 17.5T440-720q2 115 83.5 194.5T720-446q9 0 18-.5t17-1.5q18-2 31.5 9t13.5 28v51q0 17-11.5 28.5T760-320H553q-14 0-25-9t-14-23l-10-48H280v240q0 17-11.5 28.5T240-120Zm480-806q83 0 141.5 58.5T920-726q0 83-58.5 141.5T720-526q-83 0-141.5-58.5T520-726q0-83 58.5-141.5T720-926Zm-29 205-18-18q-9-9-21-8.5t-21 9.5q-9 9-9 21t9 21l32 32q12 12 28 12t28-12l90-89q9-9 9-21.5t-9-21.5q-9-9-21-8.5t-21 8.5l-76 75Z" />
  </svg>
)
