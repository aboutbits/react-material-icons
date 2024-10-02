import React from 'react'
import { IconProps } from './types'

export const IconBrowseGalleryOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m472-312 56-56-128-128v-184h-80v216l152 152Zm248 172v-88q74-35 117-103t43-149q0-81-43-149T720-732v-88q109 38 174.5 131.5T960-480q0 115-65.5 208.5T720-140Zm-360 20q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T0-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T360-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T720-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T360-120Zm0-80q117 0 198.5-81.5T640-480q0-117-81.5-198.5T360-760q-117 0-198.5 81.5T80-480q0 117 81.5 198.5T360-200Zm0-280Z" />
  </svg>
)
