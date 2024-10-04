import React from 'react'
import { IconProps } from './types'

const IconRemoveModeratorSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m754-318-60-62q12-32 19-66.5t7-69.5v-189l-240-90-146 55-62-62 208-78 320 120v244q0 51-11.5 101T754-318Zm38 262L662-186q-38 39-84.5 65.5T480-80q-139-35-229.5-159.5T160-516v-172L56-792l56-56 736 736-56 56ZM423-425Zm91-135Zm-34 396q35-11 67-31t59-47L240-608v92q0 121 68 220t172 132Z" />
  </svg>
)

export { IconRemoveModeratorSharp as default }
