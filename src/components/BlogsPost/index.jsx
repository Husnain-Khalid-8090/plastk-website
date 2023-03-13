/* eslint-disable no-unused-vars */
// import Link from 'gatsby';
import { Link } from 'gatsby';
import { cx } from 'linaria';
import * as React from 'react';

import AvatarPlaceholder from '../../images/avatar-placeholder.png';
import { article } from './BlogsPost.styles';

function BlogsPost({
  slug,
  featuredImage,
  featuredImageAltText,
  htmlTitle,
  avatar,
  displayName,
  name,
  publishedDate,
  blog_id,
}) {
  return (
    <article className={cx(article)}>
      <Link to={`/post/${slug}`} className="article-card">
        <div className="img-holder">
          <img loading="eager" src={featuredImage} className="card-img-top" alt={featuredImageAltText} />
        </div>
        <div className="article-body">
          <span className="article-title">{htmlTitle}</span>
          <div className="article-footer">
            <div className="d-flex">
              <div className="author-img">
                {avatar ? (
                  <img src={avatar} alt={displayName} />
                ) : (
                  <img src={AvatarPlaceholder} alt="avatar placeholder" />
                )}
              </div>
              {name && blog_id !== '64261222479' && <span className="author-name">Plastk #CTT</span>}
              {blog_id === '64261222479' && <span className="author-name">Plastk #CFEL</span>}
            </div>
            <time dateTime={publishedDate}>{publishedDate}</time>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default BlogsPost;
