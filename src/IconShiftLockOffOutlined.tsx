import React from 'react'
import { IconProps } from './types'

export const IconShiftLockOffOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80v-80h640v80H160Zm160-160v-200H120l180-221 57 57-68 84h111v200h160v-81l80 80v81H320Zm314-200-80-80h117L480-754l-72 88-57-57 129-157 360 440H634ZM819-28 27-820l57-57L876-85l-57 57ZM481-593Zm-96 131Z" />
  </svg>
)
