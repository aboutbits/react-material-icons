import React from 'react'
import { IconProps } from './types.js'

export const IconConveyorBeltSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-50 0-85-35t-35-85q0-50 35-85t85-35h560q50 0 85 35t35 85q0 50-35 85t-85 35H200Zm0-80h560q17 0 28.5-11.5T800-240q0-17-11.5-28.5T760-280H200q-17 0-28.5 11.5T160-240q0 17 11.5 28.5T200-200Zm160-240v-400h400v400H360ZM80-522v-77h197v77H80Zm400-118h160v-79H480v79Zm-320 0h117v-79H160v79Z" />
  </svg>
)
