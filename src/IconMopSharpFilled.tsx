import React from 'react'
import { IconProps } from './types'

const IconMopSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M142-120h98v-120h80v120h120v-120h80v120h120v-120h80v120h98l-40-160H182l-40 160ZM40-40l80-320v-160h240v-280q0-50 35-85t85-35q50 0 85 35t35 85v280h240v160l80 320H40Z" />
  </svg>
)

export { IconMopSharpFilled as default }
