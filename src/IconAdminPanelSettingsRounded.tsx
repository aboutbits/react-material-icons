import React from 'react'
import { IconProps } from './types'

const IconAdminPanelSettingsRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-874q8 0 14.5 1t13.5 4l240 90q23 9 37.5 29t14.5 45v125q0 17-11.5 28.5T760-540q-17 0-28.5-11.5T720-580v-124l-240-90-240 90v188q0 50 14.5 100t40 95q25.5 45 62 81t79.5 59q15 8 21.5 23t.5 30q-7 16-22.5 22t-30.5-2q-113-56-179-169t-66-239v-189q0-25 14.5-45t37.5-29l240-90q7-3 14-4t14-1ZM680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80ZM480-494Zm200 214q25 0 42.5-17.5T740-340q0-25-17.5-42.5T680-400q-25 0-42.5 17.5T620-340q0 25 17.5 42.5T680-280Zm0 120q25 0 47-9.5t39-27.5q5-6 4-13.5t-9-11.5q-19-9-39.5-13.5T680-240q-21 0-41.5 4.5T599-222q-8 4-9 11.5t4 13.5q17 18 39 27.5t47 9.5Z" />
  </svg>
)

export { IconAdminPanelSettingsRounded as default }
