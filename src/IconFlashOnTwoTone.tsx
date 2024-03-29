import React from 'react'
import { IconProps } from './types'

const IconFlashOnTwoTone: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M17 10h-4l3-8H7v11h3v9z" />
  </svg>
)

export { IconFlashOnTwoTone as default }
