import React from 'react'
import { IconProps } from './types'

export const IconStylusSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m338-156-230 48 48-230 182 182Zm65-49L205-403l470-470 198 198-470 470Z" />
  </svg>
)
