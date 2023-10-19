const FetchData = async(url)=>{
    const responce = await fetch(url)
    const responseJson = await responce.json()
    return responseJson
}

export default FetchData;