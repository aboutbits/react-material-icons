import React from 'react'
import { IconProps } from './types'

const IconGlassCupOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M279-80q-31 0-53.5-20T200-151l-80-729h720l-80 729q-3 31-25.5 51T681-80H279Zm-8-160 9 80h400l9-80H271Zm-8-80h435l52-480H210l53 480Zm8 160h418-418Z" />
  </svg>
)

export { IconGlassCupOutlined as default }