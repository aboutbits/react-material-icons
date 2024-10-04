import React from 'react'
import { IconProps } from './types.js'

export const IconHttpRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-390v-180q0-13 8.5-21.5T70-600q13 0 21.5 8.5T100-570v50h80v-50q0-13 8.5-21.5T210-600q13 0 21.5 8.5T240-570v180q0 13-8.5 21.5T210-360q-13 0-21.5-8.5T180-390v-70h-80v70q0 13-8.5 21.5T70-360q-13 0-21.5-8.5T40-390Zm300 0v-150h-30q-13 0-21.5-8.5T280-570q0-13 8.5-21.5T310-600h120q13 0 21.5 8.5T460-570q0 13-8.5 21.5T430-540h-30v150q0 13-8.5 21.5T370-360q-13 0-21.5-8.5T340-390Zm220 0v-150h-30q-13 0-21.5-8.5T500-570q0-13 8.5-21.5T530-600h120q13 0 21.5 8.5T680-570q0 13-8.5 21.5T650-540h-30v150q0 13-8.5 21.5T590-360q-13 0-21.5-8.5T560-390Zm160 0v-180q0-13 8.5-21.5T750-600h110q24 0 42 18t18 42v40q0 24-18 42t-42 18h-80v50q0 13-8.5 21.5T750-360q-13 0-21.5-8.5T720-390Zm60-110h80v-40h-80v40Z" />
  </svg>
)
