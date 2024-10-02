import React from 'react'
import { IconProps } from './types'

export const IconStrollerOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-80q-33 0-56.5-23.5T560-160q0-33 23.5-56.5T640-240q33 0 56.5 23.5T720-160q0 33-23.5 56.5T640-80Zm-400 0q-33 0-56.5-23.5T160-160q0-33 23.5-56.5T240-240q33 0 56.5 23.5T320-160q0 33-23.5 56.5T240-80Zm57-200q-26 0-36.5-23t6.5-43l381-447q20-23 44.5-35t53.5-12q56 0 95 39t39 95v26h-80v-26q0-23-15.5-38.5T746-760q-11 0-19.5 4T711-744l-31 35v349q0 33-23.5 56.5T600-280H297Zm87-296L189-771q48-34 101-51.5T400-840q45 0 88.5 11t83.5 33L384-576Z" />
  </svg>
)
