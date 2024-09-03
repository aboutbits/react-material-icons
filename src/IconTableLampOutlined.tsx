import React from 'react'
import { IconProps } from './types'

const IconTableLampOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-120v-80h320v80H520ZM221-600h139v-160h-69l-70 160Zm419 360v-400q0-17-11.5-28.5T600-680H440v120q0 17-11.5 28.5T400-520H160q-22 0-34-18t-3-38l95-216q10-22 29.5-35t43.5-13h69q33 0 56.5 23.5T440-760h160q50 0 85 35t35 85v400h-80ZM221-600h139-139Z" />
  </svg>
)

export { IconTableLampOutlined as default }