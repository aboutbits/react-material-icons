import React from 'react'
import { IconProps } from './types'

const IconLineStartDiamondRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m360-313 167-167-167-167-167 167 167 167Zm-28 85L108-452q-12-12-12-28t12-28l224-224q12-12 28-12t28 12l212 212h240q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H600L388-228q-12 12-28 12t-28-12Zm28-252Z" />
  </svg>
)

export { IconLineStartDiamondRounded as default }
