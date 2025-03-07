import React, { useEffect, useState } from 'react'
import { useGetAllBlogsMutation } from '../../../redux/services/blog'

const Blog:React.FC = () => {
    const [blogPosts, setBlogPosts] = useState([]);

    const [allBlogs] = useGetAllBlogsMutation()

    const getAllBlogPost = async()=>{
        try {
            const response = await allBlogs({})
            console.log('allposts: ', response.data.blogs)
            if(response){
                setBlogPosts(response?.data?.blogs)
            }
        } catch (error) {
            console.log('get blog post: ', error)
        }
    }

    useEffect(()=>{
        getAllBlogPost();
    },[])
  return (
    <div>
      {blogPosts?.map((post)=>{
        return(
            <p>{post.title}</p>
        )
      })}
    </div>
  )
}

export default Blog
