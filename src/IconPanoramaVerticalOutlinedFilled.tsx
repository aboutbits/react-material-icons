import React from 'react'
import { IconProps } from './types'

const IconPanoramaVerticalOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-80q-17 0-28.5-11.5T160-120q0-8 9.5-35.5T190-229q11-46 20.5-108.5T220-480q0-80-9.5-142.5T190-731q-11-46-20.5-73.5T160-840q0-17 11.5-28.5T200-880h560q17 0 28.5 11.5T800-840q0 8-9.5 35.5T770-731q-11 46-20.5 108.5T740-480q0 80 9.5 142.5T770-229q11 46 20.5 73.5T800-120q0 17-11.5 28.5T760-80H200Z" />
  </svg>
)

export { IconPanoramaVerticalOutlinedFilled as default }
