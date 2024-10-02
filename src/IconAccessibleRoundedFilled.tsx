import React from 'react'
import { IconProps } from './types'

export const IconAccessibleRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-80q-83 0-141.5-58.5T200-280q0-51 23-94t61-70q14-10 30-7t26 17q10 14 7.5 30T331-378q-23 17-37 42.5T280-280q0 50 35 85t85 35q30 0 55.5-14t42.5-37q10-14 26-16.5t30 7.5q14 10 17 26t-7 30q-27 38-70 61t-94 23Zm320 0q-17 0-28.5-11.5T680-120v-160H480q-33 0-56.5-23.5T400-360v-240q0-33 23.5-56.5T480-680q24 0 41.5 10.5T559-636q45 54 81.5 79t78.5 33q17 3 29 15t12 29q0 17-12.5 28t-28.5 8q-44-8-85.5-28T560-518v138h120q33 0 56.5 23.5T760-300v180q0 17-11.5 28.5T720-80ZM480-720q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720Z" />
  </svg>
)
