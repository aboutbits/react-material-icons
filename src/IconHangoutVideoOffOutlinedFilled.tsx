import React from 'react'
import { IconProps } from './types'

const IconHangoutVideoOffOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M820-28 686-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800l24 24v112L28-820l56-56L876-84l-56 56Zm50-176L720-354v-286L560-514v-124H436L274-800h526q33 0 56.5 23.5T880-720v480q0 9-2.5 18t-7.5 18ZM240-320h286L240-606v286Z" />
  </svg>
)

export { IconHangoutVideoOffOutlinedFilled as default }
