import React from 'react'
import { IconProps } from './types'

export const IconAddDiamondOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-320h80v-120h120v-80H520v-120h-80v120H320v80h120v120Zm40 240q-16 0-30.5-5.5T424-103L105-423q-11-12-18-26.5T80-480q0-16 7-30.5t18-25.5l319-320q12-12 26-18t30-6q16 0 31 6t26 18l318 320q11 12 18 26t7 30q0 16-6.5 30.5T855-423L537-103q-11 11-26 17t-31 6Zm0-80 319-320-319-320-319 320 319 320Zm0-320Z" />
  </svg>
)
