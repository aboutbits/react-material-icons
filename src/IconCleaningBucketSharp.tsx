import React from 'react'
import { IconProps } from './types'

const IconCleaningBucketSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m280-40-80-600h560L680-40H280Zm70-80h260l58-440H291l59 440Zm130-200q50 0 85-35t35-85v-80h-80v80q0 17-11.5 28.5T480-400q-17 0-28.5-11.5T440-440v-80h-80v80q0 50 35 85t85 35Zm120-360q-25 0-42.5-17.5T540-740q0-25 17.5-42.5T600-800q25 0 42.5 17.5T660-740q0 25-17.5 42.5T600-680Zm-200-40q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm210 600H350h260Z" />
  </svg>
)

export { IconCleaningBucketSharp as default }