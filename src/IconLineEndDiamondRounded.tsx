import React from 'react'
import { IconProps } from './types'

const IconLineEndDiamondRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m600-313 167-167-167-167-167 167 167 167Zm-28 85L360-440H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h240l212-212q12-12 28-12t28 12l224 224q12 12 12 28t-12 28L628-228q-12 12-28 12t-28-12Zm28-252Z" />
  </svg>
)

export { IconLineEndDiamondRounded as default }
