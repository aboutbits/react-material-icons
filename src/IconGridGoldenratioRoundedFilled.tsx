import React from 'react'
import { IconProps } from './types'

const IconGridGoldenratioRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-360H120q-17 0-28.5-11.5T80-400q0-17 11.5-28.5T120-440h240v-80H120q-17 0-28.5-11.5T80-560q0-17 11.5-28.5T120-600h240v-240q0-17 11.5-28.5T400-880q17 0 28.5 11.5T440-840v240h80v-240q0-17 11.5-28.5T560-880q17 0 28.5 11.5T600-840v240h240q17 0 28.5 11.5T880-560q0 17-11.5 28.5T840-520H600v80h240q17 0 28.5 11.5T880-400q0 17-11.5 28.5T840-360H600v240q0 17-11.5 28.5T560-80q-17 0-28.5-11.5T520-120v-240h-80v240q0 17-11.5 28.5T400-80q-17 0-28.5-11.5T360-120v-240Zm80-80h80v-80h-80v80Z" />
  </svg>
)

export { IconGridGoldenratioRoundedFilled as default }
