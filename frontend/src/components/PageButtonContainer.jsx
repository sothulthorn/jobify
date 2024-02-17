import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import Wrapper from '../assets/wrappers/PageBtnContainer';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useAllJobsContext } from '../pages/AllJobs';

const PageButtonContainer = () => {
  const {
    data: { numOfPages, currentPage },
  } = useAllJobsContext();

  console.log(numOfPages, currentPage);
  return <div>PageButtonContainer</div>;
};

export default PageButtonContainer;
