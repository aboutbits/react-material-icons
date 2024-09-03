import React from 'react'
import { IconProps } from './types'

const IconMimoDisconnectSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M820-28 608-240h72l40 40v80H240v-80l40-40H80v-593h47v112l-99-99 56-56L876-84l-56 56Zm8-218L234-840h646v594h-52Z" />
  </svg>
)

export { IconMimoDisconnectSharpFilled as default }
