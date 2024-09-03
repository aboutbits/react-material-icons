import React from 'react'
import { IconProps } from './types'

const IconNestClockFarsightAnalogRounded: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m520-473 90 90q11 11 11 27.5T610-327q-12 12-28.5 12T553-327L452-428q-6-6-9-13.5t-3-15.5v-143q0-17 11.5-28.5T480-640q17 0 28.5 11.5T520-600v127Zm-40-247q-17 0-28.5-11.5T440-760v-40h80v40q0 17-11.5 28.5T480-720Zm240 240q0-17 11.5-28.5T760-520h40v80h-40q-17 0-28.5-11.5T720-480ZM480-240q17 0 28.5 11.5T520-200v40h-80v-40q0-17 11.5-28.5T480-240ZM240-480q0 17-11.5 28.5T200-440h-40v-80h40q17 0 28.5 11.5T240-480ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm320-400q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93q134 0 227-93t93-227Zm-320 0Z" />
  </svg>
)

export { IconNestClockFarsightAnalogRounded as default }