import React from 'react'
import { IconProps } from './types'

const IconRightPanelCloseRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M300-368q0 14 12 19t22-5l98-98q12-12 12-28t-12-28l-98-98q-10-10-22-5t-12 19v224ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm360-80v-560H200v560h360Z" />
  </svg>
)

export { IconRightPanelCloseRoundedFilled as default }
