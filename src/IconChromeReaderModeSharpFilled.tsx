import React from 'react'
import { IconProps } from './types'

export const IconChromeReaderModeSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h800v640H80Zm440-80h280v-480H520v480Zm40-320h200v-60H560v60Zm0 100h200v-60H560v60Zm0 100h200v-60H560v60Z" />
  </svg>
)
