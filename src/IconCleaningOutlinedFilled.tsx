import React from 'react'
import { IconProps } from './types.js'

export const IconCleaningOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m360-680 40-80v-40h-40v-80h240q17 0 28.5 11.5T640-840v40l-40 80H480v-40l-80 80h-40ZM320-80v-274q0-11 3.5-23.5T332-400l148-280h120q14 14 27 37.5t13 42.5v520H320Z" />
  </svg>
)
