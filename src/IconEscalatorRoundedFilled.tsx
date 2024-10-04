import React from 'react'
import { IconProps } from './types.js'

export const IconEscalatorRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-240h132l200-360h68q25 0 42.5-17.5T740-660q0-25-17.5-42.5T680-720H548L348-360h-68q-25 0-42.5 17.5T220-300q0 25 17.5 42.5T280-240Zm-80 120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z" />
  </svg>
)