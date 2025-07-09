 import React ,{useEffect}from 'react'
import { Container,Postform } from '../components/files'
import appWriteService from '../appwrite/crud'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [post, setsosts] = useState( null)
    const {slug} = useParams()
    const navigate  = useNavigate()

    useEffect(()=>{
        if(slug){
            appWriteService.getPost(slug).then((post)=>{
                if(post){
                    setPosts(post)
                }
            })
        }
        else {
            navigate('/')
        }
    },[slug,navigate])
  return (
    post ? ( <div className='py-8'>
        <Container>
            <Postform post={post}/>
        </Container>

    </div>) :null
   )
}

export default EditPost