import React from 'react'
import { IconProps } from './types'

const IconEditOffOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M622-453 453-622l195-195q12-12 26.5-17.5T705-840q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L622-453ZM792-56 509-338 290-120H120v-169l219-219L56-792l57-57 736 736-57 57Zm-88-592 56-56-56-56-56 56 56 56Z" />
  </svg>
)

export { IconEditOffOutlinedFilled as default }
