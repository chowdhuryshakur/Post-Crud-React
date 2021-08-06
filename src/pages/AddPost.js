import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

const PostForm = (props) => {
    const [post, setPost] = useState({});
    const history = useHistory();
    const { title, body } = post;

    async function customFetch(method, body) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
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
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const values = [title, body];

        const allFieldsFilled = values.every((field) => {
            const value = `${field}`.trim();
            return value !== '' && value !== '0';
        });

        if (allFieldsFilled) {
            const post = {
                title,
                body,
            };
            let response = customFetch('post', post);
            if (response != null) { history.push("/"); }
        } else {
            console.log('Please fill out all the fields.');
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'title':
                if (value === '') {
                    setPost((prevState) => ({
                        ...prevState,
                        [name]: value
                    }));
                }
                break;
            case 'body':
                if (value === '') {
                    setPost((prevState) => ({
                        ...prevState,
                        [name]: value
                    }));
                }
                break;
            default:
                setPost((prevState) => ({
                    ...prevState,
                    [name]: value
                }));
        }
    };

    return (
        <section className='section post-add'>
            <form className='post-add-form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='title'>Post Title</label>
                    <input
                        type='text'
                        name='title'
                        id='title'
                        value={title}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='body'>Post Body</label>
                    <textarea
                        type='text'
                        name='body'
                        id='body'
                        value={body}
                        onChange={handleInputChange}
                    />
                </div>
                <button className='btn btn-primary'>
                    Save Post
                </button>
            </form>
        </section>
    );
};

export default PostForm;
