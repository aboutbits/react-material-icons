import React from 'react'
import { IconProps } from './types'

const IconHdrOffSelectOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M696-536 376-858q26-12 52-17t52-5q100 0 170 70t70 170q0 26-6 52t-18 52Zm-46 178-66-66q-23 12-50.5 18t-53.5 6q-100 0-170-70t-70-170q0-29 6-55t18-49l-66-66 56-56 452 452-56 56ZM820-80v-80h-80v-60h80v-80h60v80h80v60h-80v80h-60Zm-300 0v-240h140q24 0 42 18t18 42v40q0 23-10.5 35.5T684-164l36 84h-60l-36-80h-44v80h-60Zm60-140h80v-40h-80v40ZM0-80v-240h60v80h80v-80h60v240h-60v-100H60v100H0Zm260 0v-240h140q24 0 42 18t18 42v120q0 24-18 42t-42 18H260Zm60-60h80v-120h-80v120Zm500 60v-80h-80v-60h80v-80h60v80h80v60h-80v80h-60Zm-300 0v-240h140q24 0 42 18t18 42v40q0 23-10.5 35.5T684-164l36 84h-60l-36-80h-44v80h-60Zm60-140h80v-40h-80v40ZM0-80v-240h60v80h80v-80h60v240h-60v-100H60v100H0Zm260 0v-240h140q24 0 42 18t18 42v120q0 24-18 42t-42 18H260Zm60-60h80v-120h-80v120Z" />
  </svg>
)

export { IconHdrOffSelectOutlinedFilled as default }
