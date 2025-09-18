import React from 'react'
import { useSearchParams } from 'react-router-dom'

function AboutPage() {
  const [searchParams] = useSearchParams();
  console.log("searchParams", searchParams.get("id"));
  
  return (
    <div>
          AboutPage
    </div>
  )
}

export default AboutPage
