import { getBlogPosts } from '../../notion';

const Home1 = ({ posts }) => {
    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

Home.getInitialProps = async () => {
    const posts = await getBlogPosts();
    return { posts };
};

export default Home1;

