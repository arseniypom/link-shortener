import React from 'react'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from '../hooks/http.hook'
import Loader from '../components/Loader'
import LinksList from '../components/LinksList'

function LinksPage() {
  const [links, setlinks] = React.useState([])
  const {request, isLoading} = useHttp()
  const {token} = React.useContext(AuthContext)

  const fetchLinks = React.useCallback(async () => {
    try {
      const fetched = await request('/api/link', 'GET', null, {
        Authorization: `Bearer ${token}`
      })
      setlinks(fetched)
    } catch (error) {}
  }, [token, request])

  React.useEffect(() => {
    fetchLinks()
  }, [fetchLinks])

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      {!isLoading && <LinksList links={links} />}
    </>
  )
}

export default LinksPage
