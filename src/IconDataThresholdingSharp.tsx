import React from 'react'
import { IconProps } from './types'

export const IconDataThresholdingSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h720v720H120Zm571-80h69v-69l-69 69Zm-457 0h73l120-120h85L392-200h64l120-120h85L541-200h65l120-120h34v-440H200v509l69-69h85L234-200Zm72-200-56-56 177-177 80 80 147-147 56 56-203 204-80-80-121 120ZM200-200v-560 560Z" />
  </svg>
)
