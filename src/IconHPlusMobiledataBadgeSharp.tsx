import React from 'react'
import { IconProps } from './types.js'

export const IconHPlusMobiledataBadgeSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M180-280h80v-160h160v160h80v-400h-80v160H260v-160h-80v400Zm440-80h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80ZM40-120v-720h880v720H40Zm80-80h720v-560H120v560Zm0 0v-560 560Z" />
  </svg>
)
