/* eslint-disable react/no-danger */
import { navigate } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { cx } from 'linaria';
import moment from 'moment';
import React from 'react';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share-rc-18';

import { container } from '../../styles/common';
import Loader from '../Loader';
import { containerBlog, postDetail } from './PostDetail.styles';

function PostDetail({ blogData, isLoading }) {
  // const shareUrl = `${process.env.REACT_APP_BASE_URL}${history?.location?.pathname}`;
  const shareUrl = `${process.env.REACT_APP_BASE_URL}`;
  const publishedDate = moment(blogData.publishDate).format('MMM DD, YYYY');
  const style = {
    gap: '10px',
  };
  return !isLoading ? (
    <article className={cx(postDetail)}>
      <div className={cx(container, containerBlog)}>
        <div className="position-relative">
          <button type="button" className="go-back-btn" onClick={() => navigate(-1)}>
            <i className="material-icons-outlined">chevron_left</i> Go Back
          </button>
          <div className="image-holder">
            <img src={blogData.featuredImage} className=" img-fluid w-100" alt={blogData.featuredImageAltText} />
          </div>
        </div>
        <div className="blog-post-body">
          <div className="post-content ">
            <h3 className="no-border">{blogData.htmlTitle}</h3>
            <div className="meta-data-holder">
              <ul className="meta-data">
                {blogData.authorName && blogData.blogAuthorId !== '64261222479' && <li>Plastk #CTT</li>}
                {blogData.blogAuthorId === '64261222479' && <li>Plastk #CFEL</li>}
                <li>
                  <time dateTime={publishedDate}>{publishedDate}</time>
                </li>
              </ul>
              <ul
                className="blog-share-list list-unstyled m-0 d-flex flex-wrap pl-0 pl-md-3 mt-3 mt-md-0"
                style={style}>
                <li>
                  <FacebookShareButton url={shareUrl} quote={blogData.htmlTitle}>
                    <FacebookIcon size={30} round />
                  </FacebookShareButton>
                </li>
                <li>
                  <TwitterShareButton url={shareUrl} title={blogData.htmlTitle}>
                    <TwitterIcon size={30} round />
                  </TwitterShareButton>
                </li>
                <li>
                  <TelegramShareButton url={shareUrl} title={blogData.htmlTitle}>
                    <TelegramIcon size={30} round />
                  </TelegramShareButton>
                </li>
                <li>
                  <WhatsappShareButton url={shareUrl} title={blogData.htmlTitle} separator=":: ">
                    <WhatsappIcon size={30} round />
                  </WhatsappShareButton>
                </li>
                <li>
                  <LinkedinShareButton url={shareUrl}>
                    <LinkedinIcon size={30} round />
                  </LinkedinShareButton>
                </li>
                <li>
                  <RedditShareButton url={shareUrl} title={blogData.htmlTitle} windowWidth={660} windowHeight={460}>
                    <RedditIcon size={30} round />
                  </RedditShareButton>
                </li>
                <li>
                  <EmailShareButton url={shareUrl} subject={blogData.htmlTitle} body="body">
                    <EmailIcon size={30} round />
                  </EmailShareButton>
                </li>
              </ul>
            </div>
            <div dangerouslySetInnerHTML={{ __html: blogData.postBody }} />
          </div>
          <hr />
          {blogData?.blog_author?.avatar && blogData?.blog_author?.bio && (
            <div className="author-info-holder">
              <div className="author-img">
                <img src={blogData.blog_author.avatar} alt={blogData.blog_author.display_name} />
              </div>
              <div className="author-info">
                <div className="title-holder">
                  <span className="author-name">About {blogData.blog_author.display_name}</span>
                  <ul className="social-network">
                    {blogData.blog_author.facebook && (
                      <li className="fb">
                        <a href={blogData.blog_author.facebook}>
                          <StaticImage
                            loading="eager"
                            src="../../images/facebook-blue.png"
                            alt="facebook"
                            width={20}
                            height={20}
                            layout="fixed"
                          />
                        </a>
                      </li>
                    )}
                    {blogData.blog_author.linkedin && (
                      <li className="twitter">
                        <a href={blogData.blog_author.linkedin}>
                          <StaticImage
                            loading="eager"
                            src="../../images/linkedin-blue.png"
                            alt="linkedin"
                            width={20}
                            height={20}
                            layout="fixed"
                          />
                        </a>
                      </li>
                    )}
                    {blogData.blog_author.twitter && (
                      <li className="in">
                        <a href={blogData.blog_author.twitter}>
                          <StaticImage
                            loading="eager"
                            src="../../images/twitter-blue.png"
                            alt="twitter"
                            width={20}
                            height={20}
                            layout="fixed"
                          />
                        </a>
                      </li>
                    )}
                  </ul>
                </div>

                <div className="author-bio">
                  <p>{blogData.blog_author.bio}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  ) : (
    <Loader className="blog-list-loader" />
  );
}

export default PostDetail;
