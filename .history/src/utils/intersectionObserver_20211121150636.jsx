import React, { useCallback, useRef } from 'react'

export default function intersectionObserver({ increaseLimit}) {
  const observer = useRef();
  const lastElementRef = useCallback(node => {
    if(observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting ){increaseLimit()}
    })
    if(node) observer.current.observe(node)
  })
  return (
    <div>
      
    </div>
  )
}
