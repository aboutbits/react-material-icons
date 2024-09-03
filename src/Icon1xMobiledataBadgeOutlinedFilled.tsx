import React from 'react'
import { IconProps } from './types'

const Icon1xMobiledataBadgeOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120q-33 0-56.5-23.5T40-200v-560q0-33 23.5-56.5T120-840h720q33 0 56.5 23.5T920-760v560q0 33-23.5 56.5T840-120H120Zm160-160h80v-400H200v80h80v320Zm180 0h80l70-127 70 127h80L650-480l110-200h-80l-70 127-70-127h-80l110 200-110 200Z" />
  </svg>
)

export { Icon1xMobiledataBadgeOutlinedFilled as default }
