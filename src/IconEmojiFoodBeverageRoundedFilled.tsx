import React from 'react'
import { IconProps } from './types'

export const IconEmojiFoodBeverageRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-17 0-28.5-11.5T160-160q0-17 11.5-28.5T200-200h560q17 0 28.5 11.5T800-160q0 17-11.5 28.5T760-120H200Zm520-520h80v-120h-80v120ZM320-280q-66 0-113-47t-47-113v-311q0-37 26-63t63-26h111v96l-72 58q-2 2-8 16v170q0 8 6 14t14 6h160q8 0 14-6t6-14v-170q0-2-8-16l-72-58v-96h400q33 0 56.5 23.5T880-760v120q0 33-23.5 56.5T800-560h-80v120q0 66-47 113t-113 47H320Z" />
  </svg>
)
