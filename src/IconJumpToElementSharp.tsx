import React from 'react'
import { IconProps } from './types'

export const IconJumpToElementSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-440v-160h80v80h80v80H440Zm280 0v-80h80v-80h80v160H720ZM440-720v-160h160v80h-80v80h-80Zm360 0v-80h-80v-80h160v160h-80ZM136-80l-56-56 224-224H120v-80h320v320h-80v-184L136-80Z" />
  </svg>
)
