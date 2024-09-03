import React from 'react'
import { IconProps } from './types'

const IconTypeSpecimenSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M392-380h64l32-92h146l32 92h62L592-740h-64L392-380Zm114-144 52-150h4l52 150H506ZM240-240v-640h640v640H240ZM80-80v-640h80v560h560v80H80Z" />
  </svg>
)

export { IconTypeSpecimenSharpFilled as default }
