import React from 'react'
import { IconProps } from './types.js'

export const IconNestCamOutdoorRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M576-189q-22 26-54.5 29.5T463-178L294-319q-26-21-45-48t-31-58q-11 12-26 18.5t-32 6.5H80v-320h80q29 0 51.5 18t27.5 47q38-58 98-91.5T466-780q45 0 85.5 16t74.5 45l170 141q26 21 28.5 53.5T806-466L576-189Z" />
  </svg>
)