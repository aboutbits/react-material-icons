import React from 'react'
import { IconProps } from './types'

const IconContactlessOffOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M594-266q8-18 14-37t11-39l-68-68q-5 29-12.5 57.5T520-298l74 32Zm-130-54q15-35 22.5-71t9.5-74l-87-87q4 17 5.5 35t1.5 37q0 35-6 67.5T390-350l74 30Zm-128-54q9-24 14.5-50.5T356-480q0-29-5.5-55.5T336-586l-74 30q6 18 10 37t4 39q0 20-4 39t-10 37l74 30ZM819-28 701-146q-48 32-103.5 49T480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-65 19-123.5T153-711h97l565 565H701L27-820l57-57L876-85l-57 57Zm-4-232L635-440q1-10 1-20v-20q0-57-10.5-110.5T594-694l-74 32q14 33 22.5 68t11.5 73l-74-74-6-22q-3-11-8-22l-21 9-185-185q48-31 103.5-48T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 61-17 116.5T815-260Z" />
  </svg>
)

export { IconContactlessOffOutlinedFilled as default }
