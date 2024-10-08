import React from 'react'
import { IconProps } from './types'

const IconAlignJustifySpaceBetweenRounded: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M840-80q-17 0-28.5-11.5T800-120v-160h-80q-17 0-28.5-11.5T680-320v-320q0-17 11.5-28.5T720-680h80v-160q0-17 11.5-28.5T840-880q17 0 28.5 11.5T880-840v720q0 17-11.5 28.5T840-80Zm-720 0q-17 0-28.5-11.5T80-120v-720q0-17 11.5-28.5T120-880q17 0 28.5 11.5T160-840v160h80q17 0 28.5 11.5T280-640v320q0 17-11.5 28.5T240-280h-80v160q0 17-11.5 28.5T120-80Z" />
  </svg>
)

export { IconAlignJustifySpaceBetweenRounded as default }
