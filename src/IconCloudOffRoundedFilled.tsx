import React from 'react'
import { IconProps } from './types.js'

export const IconCloudOffRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M260-160q-92 0-156-64T40-380q0-77 47.5-137T210-594q3-8 6-15.5t6-16.5L84-764q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11.5 27.5T820-84q-11 11-27.5 11.5T764-83l-78-77H260Zm604-50L322-751q35-24 74.5-36.5T480-800q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 39-15 72.5T864-210Z" />
  </svg>
)
