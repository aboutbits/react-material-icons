import React from 'react'
import { IconProps } from './types'

export const IconSportsMmaSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-120v-160h400v160H280Zm-40-200-40-202v-318h480v160h80v158l-40 202H240Zm80-240h240v-120H320v120Z" />
  </svg>
)
