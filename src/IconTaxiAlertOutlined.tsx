import React from 'react'
import { IconProps } from './types'

const IconTaxiAlertOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-240v-200 200Zm460-40q25 0 42.5-17.5T680-340q0-25-17.5-42.5T620-400q-25 0-42.5 17.5T560-340q0 25 17.5 42.5T620-280Zm-360 0q25 0 42.5-17.5T320-340q0-25-17.5-42.5T260-400q-25 0-42.5 17.5T200-340q0 25 17.5 42.5T260-280Zm420-200q-83 0-141.5-58.5T480-680q0-82 58-141t142-59q83 0 141.5 58.5T880-680q0 83-58.5 141.5T680-480Zm-20-160h40v-160h-40v160Zm20 80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm-277-80H234l-42 120h259q17 24 38 44.5t47 35.5H160v200h560v-163q21-3 41-9t39-15v307q0 17-11.5 28.5T760-80h-40q-17 0-28.5-11.5T680-120v-40H200v40q0 17-11.5 28.5T160-80h-40q-17 0-28.5-11.5T80-120v-320l84-240q6-18 21.5-29t34.5-11h100v-80h107q-13 28-20 58t-7 62q0 11 .5 20.5T403-640Z" />
  </svg>
)

export { IconTaxiAlertOutlined as default }
