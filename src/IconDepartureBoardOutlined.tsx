import React from 'react'
import { IconProps } from './types'

export const IconDepartureBoardOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m746-584 30-30-76-74v-112h-40v128l86 88ZM178-720h234-234Zm62 280h-80 480-400ZM160-80q-17 0-28.5-11.5T120-120v-82q-20-21-30-46.5T80-300v-380q0-89 82.5-124.5T451-840q-13 18-22.5 38T412-761q-102 2-157.5 12T178-720h225q-3 20-3 40t3 40H160v120h291q17 24 38 44.5t47 35.5H160v120q0 33 23.5 56.5T240-240h320q33 0 56.5-23.5T640-320v-83q20 3 40 3t40-3v103q0 26-10 51.5T680-202v82q0 17-11.5 28.5T640-80h-40q-17 0-28.5-11.5T560-120v-40H240v40q0 17-11.5 28.5T200-80h-40Zm520-400q-83 0-141.5-58.5T480-680q0-82 58-141t142-59q83 0 141.5 58.5T880-680q0 83-58.5 141.5T680-480ZM260-280q25 0 42.5-17.5T320-340q0-25-17.5-42.5T260-400q-25 0-42.5 17.5T200-340q0 25 17.5 42.5T260-280Zm280 0q25 0 42.5-17.5T600-340q0-25-17.5-42.5T540-400q-25 0-42.5 17.5T480-340q0 25 17.5 42.5T540-280Z" />
  </svg>
)
