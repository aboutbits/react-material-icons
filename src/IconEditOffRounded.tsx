import React from 'react'
import { IconProps } from './types'

const IconEditOffRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M817-647 650-481q-11 11-27.5 11.5T594-481q-11-11-11-28t11-28l54-54-57-57-54 54q-11 11-28 11t-28-11q-11-11-11-28t11-28l167-167q12-12 26.5-17.5T705-840q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647ZM200-200h57l195-195-28-29-29-28-195 195v57ZM764-84 509-338 313-143q-11 11-25.5 17t-30.5 6h-97q-17 0-28.5-11.5T120-160v-96q0-16 6-30.5t17-25.5l196-196L84-764q-12-12-11.5-28T85-820q12-12 28.5-12t28.5 12l679 679q12 12 11.5 28.5T820-84q-12 12-28 12t-28-12Zm-4-620-56-56 56 56Zm-169 56 57 57-57-57ZM424-424l-29-28 57 57-28-29Z" />
  </svg>
)

export { IconEditOffRounded as default }
