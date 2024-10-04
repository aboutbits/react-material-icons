import React from 'react'
import { IconProps } from './types.js'

export const IconScreenshotMonitorRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M700-380h-70q-13 0-21.5 8.5T600-350q0 13 8.5 21.5T630-320h90q17 0 28.5-11.5T760-360v-90q0-13-8.5-21.5T730-480q-13 0-21.5 8.5T700-450v70ZM260-660h70q13 0 21.5-8.5T360-690q0-13-8.5-21.5T330-720h-90q-17 0-28.5 11.5T200-680v90q0 13 8.5 21.5T230-560q13 0 21.5-8.5T260-590v-70ZM160-200q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v480q0 33-23.5 56.5T800-200H640v40q0 17-11.5 28.5T600-120H360q-17 0-28.5-11.5T320-160v-40H160Z" />
  </svg>
)