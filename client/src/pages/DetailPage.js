import React from 'react'
import {useParams} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from '../hooks/http.hook'
import Loader from '../components/Loader'
import LinkCard from '../components/LinkCard'

function DetailPage() {
  const {token} = React.useContext(AuthContext)
  const {request, isLoading} = useHttp()
  const [link, setLink] = React.useState(null)
  const linkId = useParams().id

  const getLink = React.useCallback( async () => {
    try {
      const fetched = await request(`/api/link/${linkId}`, 'GET', null, {
        Authorization: `Bearer ${token}`
      })

      setLink(fetched)
    } catch (error) {}
  }, [token, linkId, request])

  React.useEffect(() => {
    getLink()
  }, [getLink])

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      {!isLoading && link && <LinkCard link={link} />}
    </>
  )
}

export default DetailPage
