import React from 'react'
import { IconProps } from './types.js'

export const IconLocalDrinkSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m208-80-88-800h720L752-80H208Zm18-560h508l16-160H210l16 160Zm254 440q48 0 81-33t33-81q0-41-26.5-89T480-520q-61 69-87.5 117T366-314q0 48 33 81t81 33Z" />
  </svg>
)
