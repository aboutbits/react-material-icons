import React from 'react'
import { IconProps } from './types'

const IconProductivityRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-320v-112q0-34 17.5-62.5T144-538q62-31 126-46.5T400-600q45 0 89 7t88 22q-17 14-31 30.5T521-505q-30-8-60-11.5t-61-3.5q-56 0-111 13.5T180-466q-9 5-14.5 14t-5.5 20v32h323q-2 20-2 40t2 40H80Zm320-80Zm0-240q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T480-800q0-33-23.5-56.5T400-880q-33 0-56.5 23.5T320-800q0 33 23.5 56.5T400-720Zm0-80Zm400 0q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T584-952q14-5 28-6.5t28-1.5q66 0 113 47t47 113Zm-40 640q-83 0-141.5-58.5T560-360q0-84 58.5-142T760-560q84 0 142 58t58 142q0 83-58 141.5T760-160Zm-28-110 141-142-28-28-113 113-57-57-28 29 85 85Z" />
  </svg>
)

export { IconProductivityRounded as default }
