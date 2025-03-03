import { useState } from 'react'
import course from './data/course.json'

function App() {
  const [vid, setVid] = useState('YrxBCBibVo0')
  const [sidebar, setSidebar] = useState({ active: true })

  function toggleSidebar() {
    setSidebar((pre) => {
      return {
        active: !pre.active,
      }
    })
  }
  function playVid(videoId) {
    setVid(() => videoId)
  }

  return (
    <div className='container-fluid'>
      <div className='row no-gutters'>
        {sidebar.active ? (
          <div className='col-lg-3 col-md-4 sidebar col-md-push-4'>
            <div className='wrapper'>
              {course.data.chapters.map((chapter) => {
                return (
                  <div key={chapter.title}>
                    <h2 className='ctitle'>{chapter.title}</h2>
                    <ul className='episodes'>
                      {chapter.episodes.map((episode) => {
                        return (
                          <li
                            onClick={() => playVid(episode.vid)}
                            key={episode.vid}
                          >
                            <h3 className='etitle'>{episode.title}</h3>
                            <span className='eduration'>
                              {' '}
                              {episode.length}{' '}
                            </span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        ) : null}
        <div
          className={
            sidebar.active
              ? 'col-lg-9 col-md-8 player col-md-pull-8'
              : 'col-lg-10 col-md-10 player offset-md-1'
          }
        >
          <div className='wrapper'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-md-12 col-lg-4'>
                  <ul class='plactions'>
                    <li onClick={toggleSidebar}>
                      {sidebar.active ? (
                        <span>Close Sidebar</span>
                      ) : (
                        <span>Open Sidebar</span>
                      )}
                    </li>
                  </ul>
                </div>
                <div className='col-md-12 col-lg-4'>
                  <h1 className='coursetitle'>{course.data.title}</h1>
                </div>
              </div>
            </div>
            <div className='course-player'>
              <iframe
                src={`https://www.youtube.com/embed/${vid}`}
                frameborder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                title={vid}
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
