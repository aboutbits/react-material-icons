import React from 'react'
import { IconProps } from './types'

export const IconKidStarSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m305-704 175-227 175 227 274 92-173 245 7 273-283-79-283 79 7-274L32-612l273-92Zm49 69-194 64 124 179-4 191 200-55 200 56-4-192 124-177-194-66-126-165-126 165Zm126 135Z" />
  </svg>
)
