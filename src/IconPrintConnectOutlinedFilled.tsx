import React from 'react'
import { IconProps } from './types.js'

export const IconPrintConnectOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-120v-160H80v-240q0-51 35-85.5t85-34.5h560q51 0 85.5 34.5T880-520v30q-27-14-56.5-22t-60.5-8q-78 0-141.5 44T530-360H320v160h204q7 22 17 42t24 38H240Zm0-560v-160h480v160H240Zm478 527L604-266l57-56 57 56 141-141 57 56-198 198Z" />
  </svg>
)
