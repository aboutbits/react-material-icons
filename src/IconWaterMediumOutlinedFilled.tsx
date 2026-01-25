import React from 'react'
import { IconProps } from './types.js'

export const IconWaterMediumOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M245-474q47-23 97.5-34.5T445-520q30 0 59.5 4t58.5 12q50 14 76.5 19t56.5 5h19l35-320H210l35 326Zm34 394q-31 0-53.5-20T200-151l-80-729h720l-80 729q-3 31-25.5 51T681-80H279Z" />
  </svg>
)
