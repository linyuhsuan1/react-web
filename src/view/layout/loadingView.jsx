
import React from 'react';

const LoadingView= () => {

    return(
        <div className="w-full max-w-sm p-4 mx-auto border border-blue-300 rounded-md shadow">
            this is loading
        <div className="flex space-x-4 animate-pulse">
          <div className="w-12 h-12 bg-blue-400 rounded-full"></div>
          <div className="flex-1 py-1 space-y-4">
            <div className="w-3/4 h-4 bg-blue-400 rounded"></div>
            <div className="space-y-2">
              <div className="h-4 bg-blue-400 rounded"></div>
              <div className="w-5/6 h-4 bg-blue-400 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default LoadingView;
