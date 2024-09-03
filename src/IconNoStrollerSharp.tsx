import React from 'react'
import { IconProps } from './types'

const IconNoStrollerSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-80q-33 0-56.5-23.5T160-160q0-33 23.5-56.5T240-240q33 0 56.5 23.5T320-160q0 33-23.5 56.5T240-80Zm440-313-80-80v-141l-64 76-57-56 169-199q20-23 45-35t53-12q56 0 95 39t39 95v26h-80v-26q0-23-15.5-38.5T746-760q-10 0-19 4t-16 12l-31 35v316Zm-80 33 80 80H211l164-193L56-791l56-57 736 736-57 56-360-360-47 56h216Zm40 280q-33 0-56.5-23.5T560-160q0-33 23.5-56.5T640-240q33 0 56.5 23.5T720-160q0 33-23.5 56.5T640-80ZM431-416Zm105-122Zm-100-99-57-57 55-64q-8-2-17-2h-17q-20 0-38.5 3t-37.5 8l-63-63q33-14 68-21t71-7q45 0 88.5 11t83.5 33L436-637Zm-57-57Z" />
  </svg>
)

export { IconNoStrollerSharp as default }
