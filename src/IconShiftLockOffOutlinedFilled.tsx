import React from 'react'
import { IconProps } from './types'

const IconShiftLockOffOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80v-80h640v80H160Zm160-160v-200H120l180-221 340 340v81H320Zm314-200L351-723l129-157 360 440H634ZM819-28 27-820l57-57L876-85l-57 57Z" />
  </svg>
)

export { IconShiftLockOffOutlinedFilled as default }
