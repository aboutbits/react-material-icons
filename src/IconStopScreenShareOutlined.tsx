import React from 'react'
import { IconProps } from './types'

export const IconStopScreenShareOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M577-497 474-600h46v-80l120 120-63 63Zm251 251-74-74h46v-440H314l-80-80h566q33 0 56.5 23.5T880-760v440q0 26-14.5 45.5T828-246Zm-8 218-92-92H40v-80h607l-40-40H160q-33 0-56.5-23.5T80-320v-446l-52-54 56-56L876-84l-56 56ZM400-446v46h-80v-80q0-11 1-21t6-19L160-687v367h366L400-446Zm134-94Zm-191 36Z" />
  </svg>
)
