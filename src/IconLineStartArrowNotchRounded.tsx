import React from 'react'
import { IconProps } from './types'

const IconLineStartArrowNotchRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m383-440 97 170q8 14-3 24.5t-25 2.5L133-446q-19-12-19-34t19-34l319-203q14-8 25 2.5t3 24.5l-97 170h457q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H383Z" />
  </svg>
)

export { IconLineStartArrowNotchRounded as default }
