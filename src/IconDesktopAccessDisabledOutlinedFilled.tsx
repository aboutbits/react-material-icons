import React from 'react'
import { IconProps } from './types'

const IconDesktopAccessDisabledOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M127-833v112l-99-99 56-56L876-84l-56 56-212-212h-48v80h80v80H320v-80h80v-80H160q-33 0-56.5-23.5T80-320v-440q0-37 23.5-55l23.5-18Zm701 587L234-840h566q33 0 56.5 23.5T880-760v440q0 26-14.5 46T828-246Z" />
  </svg>
)

export { IconDesktopAccessDisabledOutlinedFilled as default }
