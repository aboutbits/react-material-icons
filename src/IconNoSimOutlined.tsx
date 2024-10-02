import React from 'react'
import { IconProps } from './types'

export const IconNoSimOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m800-273-80-80v-447H434l-80 80-58-56 104-104h320q33 0 56.5 23.5T800-800v527Zm20 245L240-608v448h480v-81l80 80v1q0 33-23.5 56.5T720-80H240q-33 0-56.5-23.5T160-160v-480l24-24L28-820l57-56L876-85l-56 57ZM541-533Zm-75 152Z" />
  </svg>
)
