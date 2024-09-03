import React from 'react'
import { IconProps } from './types'

const IconSlabSerifOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M230-240h206v-70h-87l31-80h194l30 80h-85v70h211v-70h-40L528-720h-95L270-310h-40v70Zm175-215 68-177h7l68 177H405ZM160-80q-33 0-56.5-23.5T80-160v-640q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v640q0 33-23.5 56.5T800-80H160Zm0-80h640v-640H160v640Zm0 0v-640 640Z" />
  </svg>
)

export { IconSlabSerifOutlined as default }
