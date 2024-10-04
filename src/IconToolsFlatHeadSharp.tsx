import React from 'react'
import { IconProps } from './types'

const IconToolsFlatHeadSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-120v-80h320v80H320Zm0-120-40-280 80-320h240l80 320-40 280H320Zm69-80h182l22-160H366l23 160Zm-17-240h216l-50-200H422l-50 200Zm199 240H389h182Z" />
  </svg>
)

export { IconToolsFlatHeadSharp as default }
