import React, { memo } from "react"
import { useSiteMetadata } from "@pitayan/gatsby-theme-pitayan/src/hooks"

const HomeSlogan: React.FC = () => {
  const { siteSlogan } = useSiteMetadata()

  return (
    <div className="max-w-2xl">
    </div>
  )
}

export default memo(HomeSlogan)
