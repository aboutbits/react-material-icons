import React from 'react'
import { IconProps } from './types'

const IconPrivacyOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M394-679q2 0 3-.5t3-.5q33 0 56.5 23.5T480-600v7l-86-86Zm486 419L720-420v67l-80-80v-287H353l-80-80h367q33 0 56.5 23.5T720-720v180l160-160v440ZM640-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800l80 80h-80v480h212v-42q-75-11-123.5-67T200-480h57q0 60 41.5 101.5T400-337q33 0 62.5-14.5T512-392l41 41q-24 29-56 46.5T428-282v42h212v-80l80 80q0 33-23.5 56.5T640-160Zm238 78-56 56-385-385q-9 5-18 8t-19 3q-33 0-56.5-23.5T320-480v-48L26-822l56-56L878-82ZM384-464Zm113-113ZM372-240h56-56Z" />
  </svg>
)

export { IconPrivacyOutlined as default }
