import { useState } from "react"

export const useField = (type) => {
  const [value, setValue] = useState("")

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const reset = () => {
    setValue("")
  }

  return {
    type,
    value,
    onChange,
    reset,
  }
}

export const useSearch = (type) => {
  const [search, setSearch] = useState("")

  const onChange = (event) => {
    setSearch(event.target.value)
  }

  return {
    type,
    search,
    onChange,
  }
}
