import React from 'react'
import { IconProps } from './types'

const IconSdSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h800v640H80Zm160-200h200v-140H300v-40h80v20h60v-80H240v140h140v40h-80v-20h-60v80Zm280 0h170l30-30v-180l-30-30H520v240Zm60-60v-120h80v120h-80Z" />
  </svg>
)

export { IconSdSharpFilled as default }
