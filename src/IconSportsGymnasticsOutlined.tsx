import React from 'react'
import { IconProps } from './types'

const IconSportsGymnasticsOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m480-80-20-400-140-40H40v-80h240l280-200 52 61-166 119h114l312-180 48 56-340 264-20 400h-80ZM240-640q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Z" />
  </svg>
)

export { IconSportsGymnasticsOutlined as default }
