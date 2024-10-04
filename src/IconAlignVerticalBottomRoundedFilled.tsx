import React from 'react'
import { IconProps } from './types.js'

export const IconAlignVerticalBottomRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-80q-17 0-28.5-11.5T80-120q0-17 11.5-28.5T120-160h720q17 0 28.5 11.5T880-120q0 17-11.5 28.5T840-80H120Zm220-160q-25 0-42.5-17.5T280-300v-520q0-25 17.5-42.5T340-880q25 0 42.5 17.5T400-820v520q0 25-17.5 42.5T340-240Zm280 0q-25 0-42.5-17.5T560-300v-280q0-25 17.5-42.5T620-640q25 0 42.5 17.5T680-580v280q0 25-17.5 42.5T620-240Z" />
  </svg>
)
