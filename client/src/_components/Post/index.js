import React from 'react'
import {Container, Row} from "react-bootstrap";
import Breadcrumbs from "../Navigation/Breadcrumbs";
import Articles from './Articles';

const Post = ({match}) => {
    const post = Articles.find(post => post.id === match.params.id);
    return (
        <section className="allNews pt-7">
            <Container fluid="md">
                <Breadcrumbs/>
                <Row>
                    <div className="row justify-content-lg-between">
                        <div className="col-lg-8">
                            <div key={post.id} className="editor-content editor-content_post">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    title={post.id} className="img-fluid post-img"
                                />
                                <p dir="ltr">{post.text}</p>
                            </div>
                        </div>
                        <div className="d-none d-lg-block col-lg-3">
                            <div className="btn-action_wrap">
                                <div className="btn-action_title">Поділитись новиною</div>
                                <div className="btn-action_box">
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    );
}
export default Post
