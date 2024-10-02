import React from 'react'
import { IconProps } from './types'

export const IconSwitchRightOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-200 120-480l280-280v560Zm160 0v-560l280 280-280 280Zm60-145 135-135-135-135v270Z" />
  </svg>
)
