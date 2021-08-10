import React, { useState, useEffect } from 'react';
// import
import './LiveReport.css';
import Headings from '../../../static/Headings/Headings';
import Decrease from '../../../../images/Map/Pagination/decrease.png';
import Increase from '../../../../images/Map/Pagination/increase.png';
// Images

import USA from '../../../../images/Map/Pagination/usa.png';
import China from '../../../../images/Map/Pagination/China.png';
import Germany from '../../../../images/Map/Pagination/Germany.png';
import Iran from '../../../../images/Map/Pagination/Iran.png';
import Italy from '../../../../images/Map/Pagination/Italy.png';
import Spain from '../../../../images/Map/Pagination/Spain.png';

import UP from '../../../../images/Map/Pagination/up.png';
import DOWN from '../../../../images/Map/Pagination/down.png';

const countries = [
  { icon: USA, name: 'USA', percentage: '100,392', flow: UP },
  { icon: Italy, name: 'Italy', percentage: '86,498', flow: UP },
  { icon: China, name: 'China', percentage: '81,340', flow: DOWN },
  { icon: Spain, name: 'Spain', percentage: '64,059', flow: UP },
  { icon: Germany, name: 'Germany', percentage: '50,871', flow: UP },
  { icon: Iran, name: 'Iran', percentage: '32,332', flow: UP },
  { icon: USA, name: 'USA', percentage: '100,92', flow: UP },
  { icon: Italy, name: 'Italy', percentage: '86,48', flow: UP },
  { icon: China, name: 'China', percentage: '89,340', flow: DOWN },
  { icon: Spain, name: 'Spain', percentage: '64,59', flow: UP },
  { icon: Germany, name: 'Germany', percentage: '50,8791', flow: UP },
  { icon: Iran, name: 'Iran', percentage: '32,3932', flow: UP },
];

const LiveReport = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    setLoading(true);
    setPosts(countries);
    setLoading(false);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = number => {
    if (number >= 1 && number <= posts.length / 6) {
      console.log(number);
      setCurrentPage(number);
    } else if (number >= posts.length / 6) {
      setCurrentPage(posts.length / 6);
    } else {
      console.log(number);
      setCurrentPage(1);
    }
  };

  return (
    <div className='lr_container'>
      <div className='lr_heading'>
        <div style={{ width: '28vh' }}>
          <Headings heading='Live Reports' Left small normal />
        </div>
        <div className='pagination_button'>
          <button
            className='decrease'
            onClick={() => paginate(currentPage - 1)}
          >
            <img src={Decrease} width='20%' />
          </button>
          <div className='page_line' />
          <button
            className='increase'
            onClick={() => paginate(currentPage + 1)}
          >
            <img src={Increase} width='20%' />
          </button>
        </div>
      </div>
      <div className='report_lists'>
        <table className='table_list'>
          {loading && <h3>Loading..</h3>}
          {!loading &&
            currentPosts.map(data => (
              <tr
                key={`${data.percentage}`}
                data-aos='fade-up'
                data-aos-easing='linear'
                data-aos-delay='300'
              >
                <td className='table_img'>
                  <img src={data.icon} width='90%' />
                </td>
                <td className='table_title'>{data.name}</td>
                <td className='table_percentage'>{data.percentage}</td>
                <td className='table_flow'>
                  <img src={data.flow} width='70%' />
                </td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
};

export default LiveReport;
