import React from 'react'
import { IconProps } from './types'

const IconAodWatchRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M390-500q-13 0-21.5-8.5T360-530q0-13 8.5-21.5T390-560h180q13 0 21.5 8.5T600-530q0 13-8.5 21.5T570-500H390Zm40 120q-13 0-21.5-8.5T400-410q0-13 8.5-21.5T430-440h100q13 0 21.5 8.5T560-410q0 13-8.5 21.5T530-380H430ZM420-80q-26 0-47.5-15.5T343-137l-23-77q-6-20-18.5-40.5T269-297q-34-37-51.5-84T200-480q0-51 17.5-98t51.5-85q20-23 32.5-43t18.5-40l23-77q8-26 29.5-41.5T420-880h120q26 0 47.5 15.5T617-823l23 77q6 20 18.5 40.5T691-663q34 37 51.5 84t17.5 99q0 51-17.5 98T691-297q-20 23-32.5 43T640-214l-23 77q-8 26-29.5 41.5T540-80H420Zm60-200q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Z" />
  </svg>
)

export { IconAodWatchRoundedFilled as default }
