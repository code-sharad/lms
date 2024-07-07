import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UploadVideo from '../UploadVideo/UploadVideo';

function TeacherRoutes() {
  return (
    <div>
      <Routes>
      <Route path="/upload" element={<UploadVideo/>} />
      </Routes>
    </div>
  )
}

export default TeacherRoutes
