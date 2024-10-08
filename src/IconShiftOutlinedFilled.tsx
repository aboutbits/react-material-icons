import React from 'react'
import { IconProps } from './types'

const IconShiftOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-120v-320H120l360-440 360 440H640v320H320Z" />
  </svg>
)

export { IconShiftOutlinedFilled as default }
