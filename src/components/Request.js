import {useJsonPlaceholder} from "../queryHooks"

function Request(){
    //make our query

    const {refetch, isLoading, isError, data} = useJsonPlaceholder()


    if (isLoading){
        return <h1>Loading</h1>
    }

    if (isError){
        return <h1>There is an error</h1>
    }

    return <h1>{data.title}</h1>

}

export default Request