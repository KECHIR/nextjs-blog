import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head'


export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <br />
            {postData.id}
            <br />
            {postData.date}
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}




