import React from 'react'
import { IconProps } from './types.js'

export const IconMediaBluetoothOffSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M792-56 632-216l-24 24-34-34 24-24-158-158v128q0 66-47 113t-113 47q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T360-418v-70L56-792l56-56 736 736-56 56Zm56-170L576-496l32-32 110 110v-182h24l138 136-104 104 104 102-32 32Zm-82-192 46-46-46-44v90ZM440-634l-80-80v-126h240v160H440v46Z" />
  </svg>
)