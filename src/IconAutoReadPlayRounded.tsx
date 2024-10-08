import React from 'react'
import { IconProps } from './types'

const IconAutoReadPlayRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m447-431 156-104q14-9 14-25t-14-25L447-689q-15-10-31-1.5T400-664v208q0 18 16 26.5t31-1.5ZM240-240l-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240Zm-34-80h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
  </svg>
)

export { IconAutoReadPlayRounded as default }
