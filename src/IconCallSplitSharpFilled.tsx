import React from 'react'
import { IconProps } from './types'

const IconCallSplitSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-160v-304L240-664v104h-80v-240h240v80H296l224 224v336h-80Zm154-376-58-58 128-126H560v-80h240v240h-80v-104L594-536Z" />
  </svg>
)

export { IconCallSplitSharpFilled as default }
