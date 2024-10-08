import React from 'react'
import { IconProps } from './types'

const IconTransitEnterexitRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M446-360h134q25 0 42.5 17.5T640-300q0 25-17.5 42.5T580-240H280q-17 0-28.5-11.5T240-280v-300q0-25 17.5-42.5T300-640q25 0 42.5 17.5T360-580v130l228-228q18-18 44-18t44 18q18 18 18 44t-18 44L446-360Z" />
  </svg>
)

export { IconTransitEnterexitRoundedFilled as default }
