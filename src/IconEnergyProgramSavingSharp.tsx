import React from 'react'
import { IconProps } from './types'

const IconEnergyProgramSavingSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M460-280q75 0 127.5-52.5T640-460v-180H460q-75 0-127.5 52.5T280-460q0 26 7 50t21 46l-16 16q-11 11-11 28t11 28q11 11 28 11t28-11l16-16q22 14 46 21t50 7Zm0-80q-9 0-18-2t-18-5l84-85q11-11 11-28t-11-28q-11-11-28-11t-28 11l-85 84q-3-9-5-18t-2-18q0-42 29-71t71-29h100v100q0 42-29 71t-71 29Zm20 320L342-148l-173-21-21-173L40-480l108-138 21-173 173-21 138-108 138 108 173 21 21 173 108 138-108 138-21 173-173 21L480-40Zm0-102 106-82 134-17 16-133 82-106-82-106-17-133-133-17-106-82-106 82-134 17-16 133-82 106 82 106 17 134 133 16 106 82Zm0-338Zm0 0Z" />
  </svg>
)

export { IconEnergyProgramSavingSharp as default }