import React from 'react'
import { IconProps } from './types'

const IconPerson2OutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M391-480q-36 0-60-27t-19-63l13-98q8-57 52-94.5T480-800q59 0 103 37.5t52 94.5l13 98q5 36-19 63t-60 27H391ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z" />
  </svg>
)

export { IconPerson2OutlinedFilled as default }
