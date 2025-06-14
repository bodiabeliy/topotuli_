

import { TypeIconProps } from '@/types'

export const IconArrow = (props: TypeIconProps) => {
  const {fill, className} = props
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" fill={fill} /></svg>

  )
}


