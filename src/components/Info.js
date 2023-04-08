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
     <div className="flex flex-col justify-center">
       <div className="flex flex-col items-center ">
         <h1
           className="my-2 text-center"
           style={{
             fontSize: "2.5rem",
             fontWeight: "bold",
             textTransform: "uppercase",
           }}
         >
           {name}
         </h1>
         <img
           className="rounded-lg w-11/12"
           src={background_image}
           alt="game cover"
         />
         <p className="mx-4 my-2 lg:mx-10">{description_raw}</p>
       </div>
       <div className="flex justify-start my-3 flex-col self-center">
         <div className="flex items-center">
           <p>Available on:</p>
           <div className="flex ml-2">
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
         <p>Metacritic: {metacritic}</p>
         <div className="flex items-center">
           <p>Developed by </p>
           <ul className="ml-2">
             {developers.map((developer) => (
               <li key={developer.id}>{developer.name}</li>
             ))}
           </ul>
         </div>
       </div>
     </div>
   )
}

export default Info
