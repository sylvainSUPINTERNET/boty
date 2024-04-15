"use client";
import { Suspense, useEffect } from 'react'
import Compo from '../components/Compo'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'
import CompoError from '../components/CompoError'
import Board from '../components/board/Board';

export default function Builder () {
  return (
    <div className="mx-auto container h-screen">
      
      <Board></Board>
      {/* <div className="mx-auto container h-screen">
        <p>okk</p>
        <div className='absolute bg-red-600'>
          Menu
        </div> */}

          {/* <ErrorBoundary> is automatically managed by error.tsx on the segment ( builder ). Here we use custom component for error ..*/}
          {/* {
              Array.from({length: 52}).map((_, i) => (
                <ErrorBoundary key={i} errorComponent={CompoError}>
                  <Suspense fallback={<p>Loading component ...</p>}>
                    <Compo></Compo>
                  </Suspense>
                </ErrorBoundary>
              ))
          } */}
      {/* </div> */}

    </div>
  )
}