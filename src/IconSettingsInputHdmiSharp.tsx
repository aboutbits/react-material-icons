import React from 'react'
import { IconProps } from './types'

const IconSettingsInputHdmiSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-80v-120L200-440v-240h40v-200h480v200h40v240L640-200v120H320Zm0-600h80v-80h40v80h80v-80h40v80h80v-120H320v120Zm80 520h160v-60l120-240v-140H280v140l120 240v60Zm80-300Z" />
  </svg>
)

export { IconSettingsInputHdmiSharp as default }
