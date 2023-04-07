import React from "react"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { getSingleGame } from "../utils/requests"
import LoadingSpinner from "./Loading"

const Info = () => {


  const platformIcons = {
    "playstation-store": "https://cdn-icons-png.flaticon.com/512/1/1443.png",
    "xbox-store": "https://cdn-icons-png.flaticon.com/512/1/1321.png",
    "steam": "https://www.freeiconspng.com/thumbs/steam-icon/steam-icon-19.png",
    "nintendo": "https://cdn-icons-png.flaticon.com/512/871/871380.png",
  }

  const { slug } = useParams()

  const { isLoading, data } = useQuery(
    ["game", slug],
    () => getSingleGame(slug)
  )

  if (isLoading) {
     return <LoadingSpinner />
  }

  console.log(data)

   const {
     name,
     background_image,
     description_raw,
     metacritic,
     stores,
     developers,
   } = data

    const platforms = stores.map((o) => o.store.slug)

   return (
     <div>
       <h1>{name}</h1>
       <img src={background_image} alt={name} />
       <p>{description_raw}</p>
       <p>Metacritic: {metacritic}</p>
       <p>Developed by</p>
       <ul>
         {developers.map((developer) => (
           <li key={developer.id}>{developer.name}</li>
         ))}
       </ul>
       <div className="platforms flex justify-center flex-wrap mt-3 mb-3">
        <p>Available on: </p>
         {platforms.map((platform, index) =>
           platformIcons[platform] ? (
             <img
               key={index}
               src={platformIcons[platform]}
               alt={platform.name}
               className="w-6 h-6 mr-5"
             />
           ) : null
         )}
       </div>
     </div>
   )
}

export default Info
