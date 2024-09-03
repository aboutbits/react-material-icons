import React from 'react'
import { IconProps } from './types'

const IconFileCopyOffOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m840-234-80-80v-326H560v-200H320v86l-80-80v-6q0-33 23.5-56.5T320-920h280l240 240v446Zm-520-46h248L320-528v248ZM820-28 648-200H320q-33 0-56.5-23.5T240-280v-328L28-820l56-56L876-84l-56 56ZM540-577Zm-96 173ZM160-40q-33 0-56.5-23.5T80-120v-520h80v520h480v80H160Z" />
  </svg>
)

export { IconFileCopyOffOutlined as default }