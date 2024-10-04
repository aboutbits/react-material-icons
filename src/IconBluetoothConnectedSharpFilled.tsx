import React from 'react'
import { IconProps } from './types.js'

export const IconBluetoothConnectedSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-80v-304L256-200l-56-56 224-224-224-224 56-56 184 184v-304h40l228 228-172 172 172 172L480-80h-40Zm80-496 76-76-76-74v150Zm0 342 76-74-76-76v150ZM200-420q-25 0-42.5-17.5T140-480q0-25 17.5-42.5T200-540q25 0 42.5 17.5T260-480q0 25-17.5 42.5T200-420Zm560 0q-25 0-42.5-17.5T700-480q0-25 17.5-42.5T760-540q25 0 42.5 17.5T820-480q0 25-17.5 42.5T760-420Z" />
  </svg>
)