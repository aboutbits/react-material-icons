import React from 'react'
import { IconProps } from './types'

export const IconFileCopyOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-40q-33 0-56.5-23.5T80-120v-560h80v560h440v80H160Zm160-160q-33 0-56.5-23.5T240-280v-560q0-33 23.5-56.5T320-920h280l240 240v400q0 33-23.5 56.5T760-200H320Zm240-440h200L560-840v200Z" />
  </svg>
)
