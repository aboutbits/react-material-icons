import React from 'react'
import { IconProps } from './types'

const IconTimer5ShutterRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-200H380q-25 0-42.5-17.5T320-260q0-25 17.5-42.5T380-320h180v-100H380q-25 0-42.5-17.5T320-480v-220q0-25 17.5-42.5T380-760h240q25 0 42.5 17.5T680-700q0 25-17.5 42.5T620-640H440v100h160q33 0 56.5 23.5T680-460v140q0 50-35 85t-85 35Z" />
  </svg>
)

export { IconTimer5ShutterRoundedFilled as default }
