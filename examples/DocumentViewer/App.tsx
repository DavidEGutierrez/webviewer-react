import React from 'react'
import { DocumentViewer } from '../../lib'
import { DocumentViewerProvider } from '../../lib'
import '../_css/App.css'

const App = () => {
  // if using a class, equivalent of componentDidMount
  const docUrl = 'http://127.0.0.1:8000/files/PDFTRON_about.pdf'
  const UID = Date.now().toString(16)

  return (
    <DocumentViewerProvider>
      <div className='App'>
        <div className='header'>React sample</div>
        <DocumentViewer docUrl={docUrl} UID={UID} />
      </div>
    </DocumentViewerProvider>
  )
}

export default App
