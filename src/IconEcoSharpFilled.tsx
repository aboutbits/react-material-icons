import React from 'react'
import { IconProps } from './types'

const IconEcoSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M450-80q-33 0-66.5-7.5T315-109q12-121 70-226t149-185q-110 56-190.5 148T231-162q-4-3-7.5-6.5L216-176q-47-47-71.5-105T120-402q0-68 27-130t75-110q81-81 210-105.5t362-4.5q18 239-6 364.5T684-182q-49 49-109.5 75.5T450-80Z" />
  </svg>
)

export { IconEcoSharpFilled as default }
