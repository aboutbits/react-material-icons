import React from 'react'
import { IconProps } from './types'

export const IconNearbyOffSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m752-320-72-72 88-88-288-288-88 88-72-72 160-160 432 432-160 160ZM479-49 49-479l159-160L56-792l56-56 736 736-55 55-151-151L479-49Zm1-143 90-88-57-57-33 33-175-175 33-33-56-56-89 89 287 287Zm144-256L448-624l32-32 176 176-32 32Z" />
  </svg>
)
