import Layout from '../../components/layout'
import {Blog} from '../../lib/api'
import { GetStaticProps } from 'next'
import {getAllContent} from '../../lib/api'
import BlogComponent from '../../components/blog'
import { format } from 'date-fns'
import Link from 'next/link'



function Writing({ blog }: { blog: Blog[] }) {
  return (
  
    <>
          <header className="thisheader">
              <h1>Simplicity Blog</h1>
              <h2>A simple template for creating personal websites.</h2>
              </header>
  
            <BlogComponent>
              {blog.map((post) => (
                <>
                <hr className="ruler" />
                <div className="post-list">
                <p className="date"> {format(new Date(post.date), 'MMM do, y')}</p>
                <h3 className="title font-bold py-5	">{post.title}</h3>
                <p className="description pb-5	">{post.description}</p>
                <b>Tags: {post.tags}</b>
                <br /><br />
                <Link href="/blog/[slug]" as={`/blog/${post.slug}`} passHref>
                <a className="read py-2 hover-underline-animation">Read More</a>
                </Link>
              </div>
              
              </>
              ))}
              

        
            </BlogComponent>
          
      
      </> 

  )
}

export default Layout(Writing);

export const getStaticProps: GetStaticProps = async () => {
  const blog = getAllContent('blog', ['title', 'date', 'slug', 'description','tags'])
  return {
    props: {
      blog,
    },
  }
}
