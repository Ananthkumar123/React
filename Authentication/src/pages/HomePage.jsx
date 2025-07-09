import React, { useEffect,useState } from 'react'
import { Container, Postcard } from '../components/files'
import appWriteService from '../appwrite/crud'
import { useNavigate, useParams } from 'react-router-dom'


function HomePage() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appWriteService.getsPosts().then((data) => {
            if (data) {
                setPosts(data.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center bg-orange-400">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-green-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <Postcard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
    return (
        <div>HomePage</div>
    )
}


export default HomePage