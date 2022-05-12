import { useEffect } from 'react'

export default function useTitleCount(count) {
useEffect(() => {
if(count>1) {
  console.log("Custom Hook calling..")
  document.title = `CustomHook (${count})`;
} else document.title = `ReactApp`;
}, [count])
}
