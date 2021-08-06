import React from 'react'
import Loader from 'react-loader-spinner'
import { useParams, Link, useHistory } from 'react-router-dom'

export default function SinglePost() {
    const { id } = useParams();
    const [loading, setLoading] = React.useState(false);
    const [post, setPost] = React.useState(null);
    const history = useHistory();

    async function customFetch(method, api, body) {
        try {
            const response = await fetch(`${api}`, {
                method,
                body: body && JSON.stringify(body),
                headers: {
                    'content-type': 'application/json',
                    accept: 'application/json'
                },
            });
            return await response.json();
        } catch (error) {
            console.error(error);

            this.setState({ error });
        }
    }

    async function deletePost() {
        if (window.confirm(`Are you sure you want to delete "${post ? post.title : ''}"`)) {
            await customFetch('delete', `https://jsonplaceholder.typicode.com/posts/${id}`);
            history.push("/");
        }
    }
    React.useEffect(() => {
        setLoading(true)
        async function getPost() {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/posts/${id}`
                )
                const data = await response.json()
                if (data) {
                    const {
                        userId: userId,
                        id: id,
                        title: title,
                        body: body,
                    } = data
                    const newPost = {
                        userId,
                        id,
                        title,
                        body
                    }
                    setPost(newPost)
                } else {
                    setPost(null)
                }
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        getPost();
    }, [id])
    if (loading) {
        return <Loader className='loader'
            type="Puff"
            color="#FFD767"
            height={150}
            width={150}
        />
    }
    if (!post) {
        return <h2 className='section-title'>no post to display</h2>
    } else {
        const {
            userId,
            id,
            title,
            body
        } = post
        return (
            <section className='section post-section' id="yourAppElement">
                <Link to='/' className='btn btn-primary'>
                    back home
                </Link>
                <h2 className='section-title'>{title}</h2>
                <div className='single-post'>
                    <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="thumb"></img>
                    <div className='post-info'>
                        <p>
                            {body}
                        </p>
                        <button class="btn btn-danger" onClick={() => deletePost()}>
                            Delete Post
                        </button>
                        .
                    </div>
                </div>
            </section>
        )
    }
}