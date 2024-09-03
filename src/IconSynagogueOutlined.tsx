import React from 'react'
import { IconProps } from './types'

const IconSynagogueOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-120v-560q0-50 35-85t85-35q50 0 85 35t35 85v12l200-172 200 172v-12q0-50 35-85t85-35q50 0 85 35t35 85v560H520v-200q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320v200H40Zm720-520h80v-40q0-17-11.5-28.5T800-720q-17 0-28.5 11.5T760-680v40Zm-640 0h80v-40q0-17-11.5-28.5T160-720q-17 0-28.5 11.5T120-680v40Zm0 440h80v-360h-80v360Zm160 0h80v-120q0-50 35-85t85-35q50 0 85 35t35 85v120h80v-363L480-735 280-563v363Zm480 0h80v-360h-80v360ZM480-500q-25 0-42.5-17.5T420-560q0-25 17.5-42.5T480-620q25 0 42.5 17.5T540-560q0 25-17.5 42.5T480-500Z" />
  </svg>
)

export { IconSynagogueOutlined as default }
