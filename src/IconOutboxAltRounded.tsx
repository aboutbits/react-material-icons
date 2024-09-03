import React from 'react'
import { IconProps } from './types'

const IconOutboxAltRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M648-444q22-11 22-36t-22-36L298-691q-20-10-39 1.5T240-655v350q0 23 19 34.5t39 1.5l350-175Zm-328 84v-80l120-40-120-40v-80l260 120-260 120ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
  </svg>
)

export { IconOutboxAltRounded as default }
