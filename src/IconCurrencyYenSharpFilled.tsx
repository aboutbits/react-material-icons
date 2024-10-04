import React from 'react'
import { IconProps } from './types.js'

export const IconCurrencyYenSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-120v-160H240v-80h200v-80H240v-80h163L200-840h95l185 292 185-292h95L557-520h163v80H520v80h200v80H520v160h-80Z" />
  </svg>
)