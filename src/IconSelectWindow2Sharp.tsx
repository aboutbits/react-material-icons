import React from 'react'
import { IconProps } from './types'

export const IconSelectWindow2Sharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160h480v-360H160v360Zm560-200v-80h80v-360H320v200h-80v-280h640v520H720ZM80-80v-520h640v520H80Zm480-603ZM400-340Z" />
  </svg>
)
