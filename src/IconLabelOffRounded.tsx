import React from 'react'
import { IconProps } from './types'

const IconLabelOffRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m757-317-57-57 80-106-180-240H354l-80-80h326q19 0 36 8.5t28 23.5l180 240q16 21 16 48t-16 48l-87 115Zm-597 77h448L160-688v448Zm0 80q-33 0-56.5-23.5T80-240v-480q0-11 2.5-20.5T90-758l-34-34q-11-11-11-28t11-28q11-11 28-11t28 11l736 736q11 11 11.5 27.5T848-56q-11 11-28 11t-28-11L661-187q-10 13-24 20t-31 7H160Zm224-304Zm183-83Z" />
  </svg>
)

export { IconLabelOffRounded as default }
