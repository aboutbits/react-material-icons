import React from 'react'
import { IconProps } from './types'

export const IconCarpenterRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M619-108q-11 11-25.5 17T563-85q-16 0-31-6t-26-17l-56-56q-11-11-16.5-24.5T427-216q-1-14 3.5-28t13.5-26l6-8-326-466 156-156 509 509q11 11 17 25.5t6 30.5q0 16-6 31t-17 26L619-108ZM507-335l113-112-340-340-52 52 279 400Zm56 170 169-169-56-57-170 170 57 56Zm-56-170 113-112-113 112Z" />
  </svg>
)
