import React from 'react'
import { IconProps } from './types'

export const IconSpatialAudioOffSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m750-410 56-56q-40-40-62.5-91.5T721-666q0-57 22.5-108t62.5-91l-56-58q-51 51-80 118t-29 139q0 72 29 138.5T750-410Zm112-114 56-56q-17-17-27-39t-10-47q0-25 10-47t27-39l-56-57q-29 29-45 65t-16 77q0 41 16 78t45 65Zm-462 84q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-120v-112q0-33 17-62t47-44q51-26 115-44t141-18q77 0 141 18t115 44q30 15 47 44t17 62v112H80Zm80-80h480v-32q0-11-5.5-20T620-266q-36-18-92.5-36T400-320q-71 0-127.5 18T180-266q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T480-600q0-33-23.5-56.5T400-680q-33 0-56.5 23.5T320-600q0 33 23.5 56.5T400-520Zm0-80Zm0 400Z" />
  </svg>
)
