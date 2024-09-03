import React from 'react'
import { IconProps } from './types'

const IconAirlineSeatLegroomNormalOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-120v-280H320q-33 0-56.5-23.5T240-480v-360h240v240h200q33 0 56.5 23.5T760-520v280h60q26 0 43 17t17 43q0 26-17 43t-43 17H640Zm-80-160H200q-33 0-56.5-23.5T120-360v-480h80v480h360v80Z" />
  </svg>
)

export { IconAirlineSeatLegroomNormalOutlined as default }
