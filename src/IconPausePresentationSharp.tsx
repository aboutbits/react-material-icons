import React from 'react'
import { IconProps } from './types'

const IconPausePresentationSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-320h80v-320h-80v320Zm160 0h80v-320h-80v320ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Z" />
  </svg>
)

export { IconPausePresentationSharp as default }
