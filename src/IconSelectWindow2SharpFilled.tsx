import React from 'react'
import { IconProps } from './types'

export const IconSelectWindow2SharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M800-360v-320H240v-200h640v520h-80ZM80-80v-520h640v520H80Z" />
  </svg>
)
