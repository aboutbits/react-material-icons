import React from 'react'
import { IconProps } from './types.js'

export const IconTextFormatRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-200q-17 0-28.5-11.5T200-240q0-17 11.5-28.5T240-280h480q17 0 28.5 11.5T760-240q0 17-11.5 28.5T720-200H240Zm54-208 137-368q4-11 13.5-17.5T466-800h28q12 0 21.5 6.5T529-776l137 369q6 17-4 32t-28 15q-11 0-20.5-6.5T600-384l-30-88H392l-32 89q-4 11-13 17t-20 6q-19 0-29.5-15.5T294-408Zm120-128h132l-64-182h-4l-64 182Z" />
  </svg>
)