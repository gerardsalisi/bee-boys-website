import React from 'react';
import { 
    useRouteMatch,
    NavLink,
    Switch,
    Route,
    useParams,
} from 'react-router-dom'

import './Blog.css';
import summary from '../blogs/summary.json';

function BlogLanding(props) {
    let { path, url } = useRouteMatch();

    return (
        <div className="container">
            <Switch>
                <Route exact path={path}>
                <section className="blog-list-container">
                    <h1 className="header-title">keep up to date with our progress</h1>
                    {
                        summary.blogs.map((b, index) => {
                            return (
                                <div className="blog-summary" key={index}>
                                    <h2 className="summary-blog-title">{b.title}</h2>
                                    <h3 className="summary-subheader">{b.date}</h3>
                                    <NavLink to={`${url}/${index}`} className="read-more">read more</NavLink>
                                </div>
                            );
                        })
                    }
                
                </section>
                </Route>
                <Route path={`${path}/:index`}>
                    <Blog />
                </Route>
            </Switch>
        </div>

        
    );
}

function Blog(props) {
    let { index } = useParams();
    
    let blog = { ...summary.blogs[index] };
    blog.content = blog.content.split('\\n');

    return (
        <section className="blog-container">
            <h3 className="blog-date">{blog.date}</h3>
            <h1 className="blog-title">{blog.title}</h1>
                {
                    blog.content.map(c => {
                        return <p className="content">{c}</p>;
                    })
                }
        </section>
    )
}

export default BlogLanding;
