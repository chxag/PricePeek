import React from 'react'
import Header from '@/components/Header'
//comment
const HomePage = () => {
  return (
    <>
        <div className="h-screen bg-off_white-100">
            <Header />
        </div>

    </>
  )
}

export default HomePage

/**
 * version: 1
 * frontend:
  phases:
    # IMPORTANT - Please verify your build commands
    build:
      commands: []
  artifacts:
    # IMPORTANT - Please verify your build output directory
    baseDirectory: .next
    files:
      cache:
      paths: [] */ 
