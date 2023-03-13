/* eslint-disable no-unused-vars */
import axios from 'axios';
import { css, cx } from 'linaria';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useMediaPredicate } from 'react-media-hook';

import { moengage } from '../../utils/moengageEvents';
import BlogsPost from '../components/BlogsPost';
import DownloadAppCta from '../components/DownloadAppCta';
import Loader from '../components/Loader';
import Pagination from '../components/Pagination';
import Seo from '../components/Seo';
import { container } from '../styles/common';

const blogSection = css`
  width: 100%;
  padding-top: 60px;
  padding-bottom: 50px;

  h2 {
    color: var(--dark-black);
    margin: 0 0 25px;
  }
`;

const articleRow = css`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  margin-bottom: 50px;
  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 768px) {
    gap: 30px;
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const paginatoinHolder = css`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 20px;

  .total-number {
    margin: 0 15px 2px 0;
  }
`;

function BlogsPage() {
  const biggerThan992 = useMediaPredicate('(min-width: 992px)');
  const [blogData, setBlogData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [page, setPage] = useState(1);
  const [tuesdayBlogs, setTuesdayBlogs] = useState(true);

  const PER_PAGE = biggerThan992 ? 9 : 8;

  const btnWrap = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    borderRadius: '5px',
    padding: '8px',
    maxWidth: '350px',
    margin: '0 auto 10px',
    background: '#ddd',
  };

  const btnStyle = {
    width: '50%',
    borderRadius: '5px',
    fontSize: '15px',
    lineHeight: '18px',
    padding: '10px',
    color: '#000',
    border: '2px solid #fff',
    transition: '0.3s linear',
    background: '#4950573b',

    '&:hover': {
      color: '#fff',
      background: '#aae15d',
    },
  };

  const btnActive = {
    width: '50%',
    borderRadius: '5px',
    fontSize: '15px',
    lineHeight: '18px',
    padding: '10px',
    border: '2px solid #fff',
    transition: '0.3s linear',
    color: '#fff',
    background: '#aae15d',
  };

  const fetchData = async selectedPage => {
    if (tuesdayBlogs) {
      try {
        const response = await axios.post(`${process.env.GATSBY_API_BASE_URL}/application/get-blogs`, {
          limit: PER_PAGE,
          after: selectedPage ?? page,
          type: 'Credit Tip Tuesday',
        });
        // url: `https://api.hubapi.com/content/api/v2/blog-posts?hapikey=3beb074d-16ff-4e94-872e-03b8d2c10f21&limit=${PER_PAGE}&offset=${
        // selectedPage > 0 ? PER_PAGE * selectedPage - 9 : PER_PAGE * selectedPage
        // }&state=PUBLISHED&name__icontains=${encodeURI('Credit Tip Tuesday')}`,
        // const response = await axios.post(`${process.env.GATSBY_API_BASE_URL}/application/blogs`, {
        //   url: `https://api.hubapi.com/content/api/v2/blog-posts?hapikey=3beb074d-16ff-4e94-872e-03b8d2c10f21&limit=${PER_PAGE}&offset=${
        //     selectedPage > 0 ? PER_PAGE * selectedPage - 9 : PER_PAGE * selectedPage
        //   }&state=PUBLISHED&name__icontains=${encodeURI('Credit Tip Tuesday')}`,
        // });

        if (response?.data) {
          setBlogData(response?.data?.records?.items);
          setTotalBlogs(response?.data?.records?.totalItems);
          setIsLoading(false);
        }
      } catch (error) {
        setIsError(true);
      }
    } else {
      try {
        const response = await axios.post(`${process.env.GATSBY_API_BASE_URL}/application/get-blogs`, {
          limit: PER_PAGE,
          after: selectedPage ?? page,
          blog_author_id: 64261222479,
        });

        // const response = await axios.post(`${process.env.GATSBY_API_BASE_URL}/application/blogs`, {
        //   url: `https://api.hubapi.com/content/api/v2/blog-posts?hapikey=3beb074d-16ff-4e94-872e-03b8d2c10f21&limit=${PER_PAGE}&offset=${
        //     selectedPage > 0 ? PER_PAGE * selectedPage - 9 : PER_PAGE * selectedPage
        //   }&state=PUBLISHED&blog_author_id=64261222479`,
        // });
        if (response?.data) {
          setBlogData(response?.data?.records?.items);
          setTotalBlogs(response?.data?.records?.totalItems);
          setIsLoading(false);
        }
      } catch (error) {
        setIsError(true);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [tuesdayBlogs]);

  return (
    <>
      <section className={blogSection}>
        <div className={cx(container)}>
          <h2 className="center">Blogs & Podcast</h2>

          <div style={btnWrap}>
            <button
              type="button"
              style={tuesdayBlogs ? btnActive : btnStyle}
              onClick={() => {
                setPage(1);
                setTuesdayBlogs(true);
                setIsLoading(true);
                moengage.blogCTT();
              }}>
              Credit Tip Tuesday
            </button>
            <button
              type="button"
              style={!tuesdayBlogs ? btnActive : btnStyle}
              onClick={() => {
                setPage(1);
                setTuesdayBlogs(false);
                setIsLoading(true);
                moengage.blogFLT();
              }}>
              Financial Literacy
            </button>
          </div>

          {isLoading ? (
            <Loader className="blog-list-loader" />
          ) : (
            <div className={cx(articleRow)}>
              {
                // blogData.objects &&
                blogData?.map((item, i) => {
                  // console.log('%cblog.jsx line:188 item', 'color: #007acc;', item);
                  const publishedDate = moment(item.publishDate).format('MMM DD, YYYY');
                  return (
                    <BlogsPost
                      key={i}
                      slug={item.slug}
                      featuredImage={item.featuredImage}
                      featuredImageAltText={item.featuredImageAltText}
                      htmlTitle={item.htmlTitle}
                      avatar="avatar"
                      displayName="sdf"
                      name={item.name}
                      publishedDate={publishedDate}
                      blog_id={item.blogAuthorId}
                    />
                  );
                })
              }
            </div>
          )}

          <div className={cx(paginatoinHolder)}>
            <Pagination
              currentPage={page}
              totalCount={totalBlogs ?? 1}
              pageSize={PER_PAGE}
              onPageChange={newPage => {
                setPage(newPage);
                setIsLoading(true);
                fetchData(newPage);
              }}
            />
          </div>
        </div>
      </section>
      <DownloadAppCta />
    </>
  );
}

export default BlogsPage;

export function Head() {
  return (
    <Seo
      title="Blog & Podcast | Credit Tips to Build Strong Credit Profile"
      metaDescription="Get credit tips to create a strong credit profile, a good credit history, and a variety of other tips that can help them protect themselves against this safe credit card."
    />
  );
}
