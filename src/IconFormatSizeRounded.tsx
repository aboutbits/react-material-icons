import React from 'react'
import { IconProps } from './types'

export const IconFormatSizeRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-680H420q-25 0-42.5-17.5T360-740q0-25 17.5-42.5T420-800h400q25 0 42.5 17.5T880-740q0 25-17.5 42.5T820-680H680v460q0 25-17.5 42.5T620-160q-25 0-42.5-17.5T560-220v-460ZM200-480h-60q-25 0-42.5-17.5T80-540q0-25 17.5-42.5T140-600h240q25 0 42.5 17.5T440-540q0 25-17.5 42.5T380-480h-60v260q0 25-17.5 42.5T260-160q-25 0-42.5-17.5T200-220v-260Z" />
  </svg>
)
