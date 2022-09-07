import React from 'react'
import { IconProps } from './types'

const IconStayCurrentPortraitSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 1.01L5.01 1v22H19V1.01zM17 19H7V5h10v14z" />
  </svg>
)

export { IconStayCurrentPortraitSharp as default }
