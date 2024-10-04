import React from 'react'
import { IconProps } from './types'

const IconHeadsetOffOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M840-234 594-480h166v-40q0-118-82-199t-198-81q-44 0-83.5 12.5T324-752l-58-56q45-35 99.5-53.5T480-880q74 0 139.5 28T734-775q49 49 77.5 114.5T840-520v286ZM480-40v-80h247l-40-40h-87v-87L221-626q-9 24-15 51.5t-6 54.5v40h160v320H200q-33 0-56.5-23.5T120-240v-280q0-45 10.5-87t30.5-80L27-820l57-56L875-84v44H480Z" />
  </svg>
)

export { IconHeadsetOffOutlinedFilled as default }
