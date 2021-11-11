import {useQuery} from "react-query"


export const useJsonPlaceholder = () => {
    return useQuery("myQuery", async () => {
        const r = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        return r.json()
    })
}