import React from 'react'
import { IconProps } from './types'

const IconLabelOffSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m757-317-57-57 80-106-180-240H354l-80-80h366l240 320-123 163Zm-597 77h448L160-688v448ZM820-28 688-160H80v-608l-52-52 56-56L876-84l-56 56ZM567-547Zm-183 83Z" />
  </svg>
)

export { IconLabelOffSharp as default }
