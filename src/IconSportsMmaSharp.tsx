import React from 'react'
import { IconProps } from './types.js'

export const IconSportsMmaSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-120v-160h400v160H280Zm-40-200-40-202v-318h480v160h80v158l-40 202H240Zm66-80h348l26-136v-24h-80v-200H280v224l26 136Zm14-160h240v-120H320v120Zm160-20Z" />
  </svg>
)
