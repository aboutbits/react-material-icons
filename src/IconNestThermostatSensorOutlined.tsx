import React from 'react'
import { IconProps } from './types.js'

export const IconNestThermostatSensorOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-160q21 0 41.5-3t40.5-8q-20-28-31-61t-11-68q0-19 3.5-36.5T532-371q-26-14-40-42.5T478-480q0-51 25.5-85.5T574-600q38 0 62.5 25.5T668-508q17-6 35-9t37-3q15 0 29.5 1.5T798-512q-6-61-33.5-113.5t-70-91.5Q652-756 597-778t-117-22q-66 0-124.5 25t-102 68.5Q210-663 185-604.5T160-480q0 66 25 124.5t68.5 102Q297-210 355.5-185T480-160Zm69-249q14-24 33.5-44.5T626-488q-2-23-13-47t-39-24q-30 0-41 27.5T522-480q0 23 6.5 42t20.5 29ZM740-80q-29 0-57-7.5T630-110q-36 15-74 22.5T480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q84 0 158 32.5t128.5 88Q821-704 851.5-629T880-470q38 32 59 76t21 94q0 92-64 156T740-80Zm0-80q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41ZM339-360l-37-20 96-171-2-3H292v-41h155v44L339-360Z" />
  </svg>
)
