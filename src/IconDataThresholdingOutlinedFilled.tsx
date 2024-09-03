import React from 'react'
import { IconProps } from './types'

const IconDataThresholdingOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm406-80h85l69-69v-51h-34L606-200ZM306-400l121-120 80 80 203-204-56-56-147 147-80-80-177 177 56 56ZM200-200h34l120-120h-85l-69 69v51Zm341 0 120-120h-85L456-200h85Zm-149 0 120-120h-85L307-200h85Z" />
  </svg>
)

export { IconDataThresholdingOutlinedFilled as default }
