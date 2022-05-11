import { useEffect, useRef, useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import useAppContext from '@hooks/useAppContext'
import Loading from '@component/editor/Loading'
import { editorFonts } from '@constants/fonts'
import { useAppDispatch } from '@store/store'
import { getTemplates } from '@store/slices/templates/actions'
import { getUploads } from '@store/slices/uploads/actions'
import { getCreations } from '@store/slices/creations/actions'

function Container({ children }) {
  const containerRef = useRef<HTMLDivElement>()
  const { isMobile, setIsMobile } = useAppContext()
  const [loaded, setLoaded] = useState(false)
  const dispatch = useAppDispatch()
  const updateMediaQuery = (value: number) => {
    if (!isMobile && value >= 800) {
      setIsMobile(false)
    } else if (!isMobile && value < 800) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }
  useEffect(() => {
    const containerElement = containerRef.current
    const containerWidth = containerElement.clientWidth
    updateMediaQuery(containerWidth)
    const resizeObserver = new ResizeObserver(entries => {
      const { width = containerWidth } = (entries[0] && entries[0].contentRect) || {}
      updateMediaQuery(width)
    })
    resizeObserver.observe(containerElement)
    return () => {
      if (containerElement) {
        resizeObserver.unobserve(containerElement)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    loadFonts()
    setTimeout(() => {
      setLoaded(true)
    }, 1000)
  }, [])

  const loadFonts = () => {
    const promisesList = editorFonts.map(font => {
      // @ts-ignore
      return new FontFace(font.name, `url(${font.url})`, font.options).load().catch(err => err)
    })
    Promise.all(promisesList)
      .then(res => {
        res.forEach(uniqueFont => {
          if (uniqueFont && uniqueFont.family) {
            document.fonts.add(uniqueFont)
          }
        })
      })
      .catch(err => console.log({ err }))
  }

  useEffect(() => {
    dispatch(getTemplates())
    dispatch(getUploads())
    dispatch(getCreations())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        flex: 1,
        display: 'flex',
        height: '100vh',
        width: '100vw',
      }}
    >
      {loaded ? <>{children} </> : <Loading />}
    </div>
  )
}

export default Container
