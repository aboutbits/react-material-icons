import React from 'react'
import { IconProps } from './types.js'

export const IconSpaRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M474-83q-174-26-276-134.5T82-513q-1-11 2.5-19.5T94-547q6-6 14.5-9t18.5-1q183 25 282 141t110 290q1 9-2.5 17.5T506-94q-6 6-14.5 9.5T474-83Zm6-372q-14-22-64.5-64.5T330-576q8-50 40.5-126.5T448-841q6-8 14.5-12t17.5-4q9 0 17 4t14 13q45 63 78.5 138T630-576q-39 18-87 58.5T480-455Zm118 343q-2-61-18.5-138.5T528-384q43-66 127.5-114T834-557q10-2 18 1.5t14 9.5q6 6 9.5 14t2.5 18q-8 161-87.5 261.5T598-112Z" />
  </svg>
)
