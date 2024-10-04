import React from 'react'
import { IconProps } from './types.js'

export const IconEscalatorWarningRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M260-720q-33 0-56.5-23.5T180-800q0-33 23.5-56.5T260-880q33 0 56.5 23.5T340-800q0 33-23.5 56.5T260-720Zm420 200q-25 0-42.5-17.5T620-580q0-25 17.5-42.5T680-640q25 0 42.5 17.5T740-580q0 25-17.5 42.5T680-520ZM180-120v-240h-20q-17 0-28.5-11.5T120-400v-200q0-33 23.5-56.5T200-680h120q22 0 40 10.5t29 29.5l143 247 41-61q8-12 21.5-19t28.5-7h117q25 0 42.5 17.5T800-420v100q0 16-14.5 22.5T760-280v160q0 17-11.5 28.5T720-80h-80q-17 0-28.5-11.5T600-120v-244l-20 28q-5 8-13.5 12t-17.5 4h-46q-11 0-19.5-5T470-339l-90-157v376q0 17-11.5 28.5T340-80H220q-17 0-28.5-11.5T180-120Z" />
  </svg>
)