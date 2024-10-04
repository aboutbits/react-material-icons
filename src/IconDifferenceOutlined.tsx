import React from 'react'
import { IconProps } from './types'

const IconDifferenceOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M500-520h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Zm-80 160h240v-80H420v80ZM320-200q-33 0-56.5-23.5T240-280v-560q0-33 23.5-56.5T320-920h280l240 240v400q0 33-23.5 56.5T760-200H320Zm0-80h440v-360L560-840H320v560ZM160-40q-33 0-56.5-23.5T80-120v-560h80v560h440v80H160Zm160-240v-560 560Z" />
  </svg>
)

export { IconDifferenceOutlined as default }
