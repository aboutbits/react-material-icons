import React from 'react'
import { IconProps } from './types'

const IconStepsOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M216-580H88q4-14 10.5-26.5T114-631l154-206q17-23 45.5-30.5T368-861l28 14q21 11 32.5 30t11.5 42v84l74-19q30-8 58 7.5t38 44.5l65 196 170 170q20 20 27.5 43t7.5 49q0 37-20 66t-52 43L354-525q-29-27-64-41t-74-14ZM566-80q-30 0-57-11t-50-31L134-417q-19-17-31-38.5T86-500h130q23 0 44.5 8t38.5 25L703-80H566Z" />
  </svg>
)

export { IconStepsOutlinedFilled as default }
