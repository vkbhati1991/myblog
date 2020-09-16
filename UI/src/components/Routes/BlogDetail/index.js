import React from 'react';
import BlogDetailBanner from './BlogDetailBanner';
import BlogLeft from './BlogLeft';
import Comment from './Comment';
import RelatedPost from './RelatedPost';
import CommentForm from './CommentForm';
import BlogSearch from './BlogSearch';
import BlogRecent from './BlogRecent';
import TagCloud from './TagCloud';
import Follow from './Follow';

const BlogDetail = (props) => {

    const { pageModel } = props;

    if (!pageModel) return;

    const { blog, blogList, recentPost, tags, comments, session, searchList } = pageModel;

    return (
        <div className="blog-deatil-content">
            <BlogDetailBanner createdAt={blog.createdAt} createdBy={blog.createdBy} title={blog.title} />
            <div className="ui-container pv-40" style={{ maxWidth: 1300 }}>
                <div className="grd-row">
                    <div className="grd-col-8 pa-12">
                        <BlogLeft content={blog.content} />
                        <Comment comments={comments} session={session} />
                        <RelatedPost blogList={blogList} />
                        <CommentForm blog={blog} />
                    </div>
                    <div className="grd-col-4 pa-12">
                        <div className="comment-container f16 lh-copy ba b--light-gray pa-20 br10">
                            <BlogSearch searchList={searchList} />
                            <BlogRecent recentPost={recentPost} />
                            <TagCloud tags={tags} />
                            <Follow />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;