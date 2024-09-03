import React from 'react'
import { IconProps } from './types'

const IconFlyoverOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-513v-83q99-24 198.5-34T480-640q102 0 201.5 10T880-596v83q-20-5-40-9l-40-8v130h-80v-144q-60-8-120-12t-120-4q-60 0-120 3.5T240-545v145h-80v-131q-20 4-40 8.5T80-513Zm160 393 58-351q18-2 41-3.5t41-2.5l-60 357h-80Zm120-720h80l-20 119q-18 1-40.5 2.5T339-715l21-125Zm80 720h80v-160h-80v160Zm0-240h80v-119h-80v119Zm80-480h80l21 125q-18-1-40.5-3t-40.5-3l-20-119Zm120 720-60-357q18 1 41 3t41 4l58 350h-80Z" />
  </svg>
)

export { IconFlyoverOutlined as default }