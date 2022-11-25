import {useHttp} from '../hooks/useHttp';

const useTransform = () => {
    const {request} = useHttp()
    const address = 'https://gateway.marvel.com:443/v1/public/characters?limit=100&apikey=827ef5444e9fbf654e8fa51f975d051a'

    const resPostAllCharacter = async () => {
        try{
            const data = await request(address)

            return data.data.results.map(transformDataInServer)
            
        }catch(e){}
    }

    const transformDataInServer = (data) => {
        return {
            img: data.thumbnail.path + "." + data.thumbnail.extension,
            name: data.name
        }
    }

    return{resPostAllCharacter}
}

export default useTransform

