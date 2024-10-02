import React from 'react'
import { IconProps } from './types'

export const IconNoSimSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M800-273 296-776l104-104h400v607Zm20 245L608-240l57-56 135 135v81H160v-560l24-24L28-820l57-56L876-85l-56 57Z" />
  </svg>
)
