import React from 'react'
import { IconProps } from './types'

const IconSendTimeExtensionSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-80v-160l160-40-160-40v-160l400 200L520-80Zm-400-40v-232q48 0 84-30.5t36-77.5q0-47-36-77.5T120-568v-232h240q0-42 29-71t71-29q42 0 71 29t29 71h240v370L440-610v372q-40 8-64 37.5T352-120H120Z" />
  </svg>
)

export { IconSendTimeExtensionSharpFilled as default }
