import React from 'react'
import { IconProps } from './types.js'

export const IconFormatLetterSpacingRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m313-200 36 36q11 11 11 27.5T348-108q-11 11-28 11t-28-11L188-212q-12-12-12-28t12-28l104-104q11-11 27.5-11t28.5 11q12 12 12 28.5T348-315l-35 35h334l-36-36q-11-11-11-27.5t12-28.5q11-11 28-11t28 11l104 104q12 12 12 28t-12 28L668-108q-11 11-27.5 11T612-108q-12-12-12-28.5t12-28.5l35-35H313Zm-73-280q-17 0-28.5-11.5T200-520v-320q0-17 11.5-28.5T240-880q17 0 28.5 11.5T280-840v320q0 17-11.5 28.5T240-480Zm240 0q-17 0-28.5-11.5T440-520v-320q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v320q0 17-11.5 28.5T480-480Zm240 0q-17 0-28.5-11.5T680-520v-320q0-17 11.5-28.5T720-880q17 0 28.5 11.5T760-840v320q0 17-11.5 28.5T720-480Z" />
  </svg>
)