import { useEffect, useState } from 'react'

export const getStorageValue = (key: string, defaultValue: any) => {
  return JSON.parse(localStorage.getItem(key) as string) || defaultValue
}

export const useLocalStorage = (key: string, defaultValue: any) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue)
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
