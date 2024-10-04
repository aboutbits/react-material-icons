import React from 'react'
import { IconProps } from './types'

const IconTurnSharpRightOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-120v-240q0-33 23.5-56.5T320-440h320v-248l-64 64-56-56 160-160 160 160-56 56-64-64v248q0 33-23.5 56.5T640-360H320v240h-80Z" />
  </svg>
)

export { IconTurnSharpRightOutlinedFilled as default }
