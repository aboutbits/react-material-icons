import React from 'react'
import { IconProps } from './types'

const IconAlignJustifyFlexStartRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-80q-17 0-28.5-11.5T80-120v-720q0-17 11.5-28.5T120-880q17 0 28.5 11.5T160-840v720q0 17-11.5 28.5T120-80Zm440-200q-17 0-28.5-11.5T520-320v-320q0-17 11.5-28.5T560-680h40q17 0 28.5 11.5T640-640v320q0 17-11.5 28.5T600-280h-40Zm-240 0q-17 0-28.5-11.5T280-320v-320q0-17 11.5-28.5T320-680h40q17 0 28.5 11.5T400-640v320q0 17-11.5 28.5T360-280h-40Z" />
  </svg>
)

export { IconAlignJustifyFlexStartRoundedFilled as default }
