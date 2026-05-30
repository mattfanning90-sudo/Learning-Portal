import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Dashboard from './components/Dashboard.jsx'
import TrackPage from './components/TrackPage.jsx'
import Glossary from './components/Glossary.jsx'
import LessonPage from './components/lesson/LessonPage.jsx'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/track/:trackId" element={<TrackPage />} />
        <Route path="/lesson/:lessonId" element={<LessonPage />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </div>
  )
}
