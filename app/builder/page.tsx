"use client";
import { Suspense, useEffect } from 'react'
import Compo from '../components/Compo'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'
import CompoError from '../components/CompoError'

export default function Builder () {
  return (
    <div className="mx-auto container h-screen bg-red-600">
      
      <div className="rounded-3xl p-px"></div>
      <div className="rounded-3xl p-px bg-gradient-to-b from-gray-200 to-transparent"></div>


      <div className="bg-purple-600 p-6">
        <h1 className='text-xl'>Bot MyBot</h1>
        <div className='ring-2 ring-green-500 rounded-xl'>
          <div className='bg-blue-500 p-4 mt-4 rounded-xl'>
            <p>ok</p>
          </div>
        </div>
      </div>
      
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