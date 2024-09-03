import React from 'react'
import { IconProps } from './types'

const IconNoSimSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m800-273-80-80v-447H434l-80 80-58-56 104-104h400v607Zm20 245L240-608v448h480v-81l80 80v81H160v-560l24-24L28-820l57-56L876-85l-56 57ZM541-533Zm-75 152Z" />
  </svg>
)

export { IconNoSimSharp as default }
