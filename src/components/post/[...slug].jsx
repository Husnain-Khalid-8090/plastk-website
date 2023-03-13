import * as React from 'react';
import axios from 'axios';
import { navigate } from 'gatsby';
import { Helmet } from 'react-helmet';
import PostDetail from '../../components/PostDetail';

function BlogsPage({ params }) {
  // eslint-disable-next-line dot-notation, prefer-destructuring
  const slug = params['slug'];
  const [blogData, setBlogData] = React.useState({});
  // eslint-disable-next-line no-unused-vars
  const [isError, setIsError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const fetchData = async () => {
    try {
      await axios
        .post(`${process.env.GATSBY_API_BASE_URL}/application/get-blogs`, {
          // await axios
          // .post(`${process.env.GATSBY_API_BASE_URL}/application/blogs`, {
          slug,
          // url: `https://api.hubapi.com/content/api/v2/blog-posts?hapikey=3beb074d-16ff-4e94-872e-03b8d2c10f21&slug=${slug}`,
        })
        .then(res => {
          const hubspotData = res.data;
          if (hubspotData?.records?.items?.length === 0) {
            navigate('/404');
          } else {
            setBlogData(hubspotData?.records?.items[0]);
          }
          setIsLoading(false);
        });
    } catch (error) {
      setIsError(true);
    }
  };
  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Helmet>
        <title>{blogData.name}</title>
        <meta name="description" content={blogData.metaDescription} />
      </Helmet>
      <PostDetail blogData={blogData} isLoading={isLoading} />
    </>
  );
}

export default BlogsPage;
