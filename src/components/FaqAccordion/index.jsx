/* eslint-disable react/no-danger */

/* eslint-disable react/jsx-no-bind */
import axios from 'axios';
import { Link } from 'gatsby';
import { cx } from 'linaria';
import * as React from 'react';

import { container, containerSm } from '../../styles/common';
import Button from '../Button';
import Pagination from '../Pagination';
import {
  accordion,
  accordionItem,
  accordionToggle,
  answerHolder,
  faqSection,
  innerAccordionHolder,
  innerAccordionToggle,
  loadingEllipsis,
  paginationHolder,
  questionHolder,
  searchBtn,
  searchField,
  searchForm,
} from './FaqAccordion.styles';

function Accordion() {
  const [isActive, setIsActive] = React.useState(false);
  const [isActiveInnerAccordion, setIsActiveInnerAccordion] = React.useState(false);

  const [loader, setLoader] = React.useState(false);
  const [categories, setCategories] = React.useState([]);
  const [categoryFaqs, setCategoryFaqs] = React.useState(undefined);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');
  const [searchResult, setSearchResult] = React.useState(undefined);
  const [totalRows, setTotalRows] = React.useState(0);
  // eslint-disable-next-line no-unused-vars
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const [faq, setFaq] = React.useState('');
  const toggle = index => {
    if (isActive === index) {
      // if clicked question is already active, then close it
      return setIsActive(null);
    }

    setIsActive(index);

    return '';
  };

  const toggleInnerAccordion = index => {
    if (isActiveInnerAccordion === index) {
      // if clicked question is already active, then close it
      return setIsActiveInnerAccordion(null);
    }

    setIsActiveInnerAccordion(index);

    return '';
  };

  const handleClick = async (value, p) => {
    setLoader(true);

    try {
      await axios
        .get(
          `${process.env.GATSBY_API_BASE_URL_FAQ}/faq/search-category?category=${encodeURIComponent(
            value,
          )}&page=${p}&itemsPerPage=${rowsPerPage}`,
        )

        .then(res => {
          setLoader(false);
          setCategoryFaqs(res.data.result);
          setTotalRows(res.data.result[0].faqs.totalItems);
        });
    } catch (err) {
      setError(true);
      setLoader(false);
    }
  };

  const fetchData = async () => {
    setLoader(true);
    try {
      await axios.get(`${process.env.GATSBY_API_BASE_URL_FAQ}/faq/search-category`).then(res => {
        setCategories(res.data.result);
        setLoader(false);
      });
    } catch (err) {
      setLoader(false);
      setError(true);
    }
  };

  const onSearchText = async e => {
    if (e === '') {
      setSearchResult(undefined);
      setTotalRows(0);
      setPage(1);
      setLoader(true);
      setSearchText('');
      fetchData();
    } else {
      await axios
        .get(`${process.env.GATSBY_API_BASE_URL_FAQ}/faq/search-faq?text=${e}&page=${page}&itemsPerPage=${rowsPerPage}`)
        .then(res => {
          if (searchText !== '') {
            setSearchResult(res.data.data.items.length > 0 ? res.data.data.items : undefined);
            setTotalRows(res.data.data.totalItems);
            setPage(res.data.data.currentPage);
            setLoader(false);
            setCategories([]);
          }
        })
        .catch(() => {
          setLoader(false);
        });
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className={cx(faqSection)}>
      <div className={cx(container, containerSm)}>
        <h3>You Asked, We Answered:</h3>
        <form className={cx(searchForm)}>
          <input
            type="text"
            placeholder="Looking for Something?"
            className={cx(searchField)}
            id="search-box"
            maxLength="150"
            value={searchText}
            onChange={e => {
              setSearchText(e.target.value);
              setPage(1);
              setTotalRows(0);
              setTimeout(() => {
                onSearchText(e.target.value);
              }, 50);
            }}
          />
          <button type="button" disabled className={cx(searchBtn)}>
            <span className="material-icons-outlined">search</span>
          </button>
        </form>
        <ul className={cx(accordion)}>
          {categories &&
            categories.map((user, index) => (
              <li className={cx(accordionItem)} key={index}>
                <button
                  type="button"
                  className={cx(accordionToggle)}
                  onClick={() => {
                    toggle(index);
                    setFaq(user.category);
                    setTotalRows(0);
                    setPage(1);
                    setTimeout(() => {
                      handleClick(user.category, page);
                    }, 50);
                  }}>
                  {user.category}
                  <span className="material-icons-outlined">{isActive === index ? 'remove' : 'add'}</span>
                </button>
                {isActive === index && (
                  <div className={cx(innerAccordionHolder)}>
                    {!loader && categoryFaqs ? (
                      categoryFaqs[0]?.faqs?.items.map((faqItem, faqIndex) => (
                        <div className={cx(questionHolder)} key={faqIndex}>
                          <button
                            type="button"
                            className={cx(innerAccordionToggle)}
                            onClick={() => toggleInnerAccordion(faqIndex)}>
                            {faqItem.question}
                            <span className="material-icons-outlined">
                              {isActiveInnerAccordion === faqIndex ? 'expand_less' : 'expand_more'}
                            </span>
                          </button>

                          {isActiveInnerAccordion === faqIndex && (
                            <div className={cx(answerHolder)}>
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: faqItem?.answer,
                                }}
                              />
                              <Button type="primary" sm as={Link} width={140} to="/sign-up">
                                Get Approved
                              </Button>
                            </div>
                          )}
                        </div>
                      ))
                    ) : (
                      <div className={cx(loadingEllipsis)}>
                        <div />
                        <div />
                        <div />
                        <div />
                      </div>
                    )}
                    <div className={cx(paginationHolder)}>
                      <Pagination
                        currentPage={page}
                        totalCount={totalRows ?? 1}
                        pageSize={rowsPerPage}
                        onPageChange={newPage => {
                          setPage(newPage);
                          handleClick(faq, newPage);
                        }}
                      />
                    </div>
                  </div>
                )}
              </li>
            ))}

          {typeof searchResult === 'object' ? (
            <li className={cx(innerAccordionHolder)}>
              {searchResult.map((user, userIndex) => (
                <div className={cx(questionHolder)} key={userIndex}>
                  <button
                    type="button"
                    className={cx(innerAccordionToggle)}
                    onClick={() => toggleInnerAccordion(userIndex)}>
                    {user.question}
                    <span className="material-icons-outlined">
                      {isActiveInnerAccordion === userIndex ? 'expand_less' : 'expand_more'}
                    </span>
                  </button>

                  {isActiveInnerAccordion === userIndex && (
                    <div className={cx(answerHolder)}>
                      <p dangerouslySetInnerHTML={{ __html: user?.answer }} />
                      <Button type="primary" sm as={Link} width={140} to="/sign-up">
                        Get Approved
                      </Button>
                    </div>
                  )}
                </div>
              ))}
              <div className={cx(paginationHolder)}>
                <Pagination
                  currentPage={page}
                  totalCount={totalRows ?? 1}
                  pageSize={rowsPerPage}
                  onPageChange={newPage => {
                    setPage(newPage);
                    handleClick(faq, newPage);
                  }}
                />
              </div>
            </li>
          ) : (
            categories.length === 0 && <span>No Records Found </span>
          )}
        </ul>
      </div>
    </section>
  );
}

export default Accordion;
