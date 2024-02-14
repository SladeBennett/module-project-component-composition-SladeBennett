import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Card from './PInfo'

const dataURL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

function App() {
  const [apod, setApod] = useState()
  useEffect(() => {
    function fetchPhoto() {
      Axios.get(dataURL)
        .then(res => {
          console.log(res.data)
          setApod(res.data)
        })
        .catch(err => console.log(err.message))
    }
    //fetchPhoto()
    setApod({
      "copyright": "\nAntoni Zegarski\n",
      "date": "2024-02-13",
      "explanation": "Did you see the full moon last month? During every month, on average, a full moon occurs in the skies over planet Earth. This is because the Moon takes a month to complete another orbit around our home planet, goes through all of its phases, and once again has its entire Earth-facing half lit by reflected sunlight.  Many indigenous cultures give each full moon a name, and this past full moon's names include the Ice Moon, the Stay at Home Moon, and the Quiet Moon. Occurring in January on the mode...",
      "hdurl": "https://apod.nasa.gov/apod/image/2402/WolfMoon_Zegarski_3648.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "A January Wolf Moon",
      "url": "https://apod.nasa.gov/apod/image/2402/WolfMoon_Zegarski_960.jpg"
    })
  }, [])

  if (!apod) return 'Fetching Astronological Data...'
  return (
    <section>
      <Card
        title={apod.title}
        text={apod.explanation}
        imageURL={apod.url}
        date={apod.date}
      />
    </section>
  )
}

export default App
