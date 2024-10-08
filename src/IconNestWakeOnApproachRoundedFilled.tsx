import React from 'react'
import { IconProps } from './types'

const IconNestWakeOnApproachRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M820-480q-25 0-42.5-17.5T760-540v-240q0-25 17.5-42.5T820-840q25 0 42.5 17.5T880-780v240q0 25-17.5 42.5T820-480Zm-420 0q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-160v-112q0-34 17-62.5t47-43.5q60-30 124.5-46T400-440q67 0 131.5 16T656-378q30 15 47 43.5t17 62.5v112H80Z" />
  </svg>
)

export { IconNestWakeOnApproachRoundedFilled as default }
