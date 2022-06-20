import Layout from '../../components/layout'
import {Blog} from '../../lib/api'
import { GetStaticProps } from 'next'
import {getAllContent} from '../../lib/api'
import BlogComponent from '../../components/blog'
import { format } from 'date-fns'
import Link from 'next/link'


export default function Writing({ blog }: { blog: Blog[] }) {
  return (
  
    <>
    <Layout>
          <header className="thisheader">
              <h1>Simplicity Blog</h1>
              <h2>A simple template for creating personal websites.</h2>
              </header>
            <hr className="ruler" />
  
            <BlogComponent>
              {blog.map((post) => (
                <>
                <div className="post-list">
                <p className="date"> {format(new Date(post.date), 'MMM do, y')}</p>
                <h3 className="title">{post.title}</h3>
                <p className="description">{post.description}</p>
                <b>3 min read</b>
                &nbsp;
                <Link href="/blog/[slug]" as={`/blog/${post.slug}`} passHref>
                <a className="hover-underline-animation read">Read More</a>
                </Link>
              </div>
              <hr className="ruler" />
              </>
              ))}
              

        
            </BlogComponent>
          </Layout>
          
      
      </> 

  )
}

export const getStaticProps: GetStaticProps = async () => {
  const blog = getAllContent('blog', ['title', 'date', 'slug', 'description'])

  return {
    props: {
      blog,
    },
  }
}
