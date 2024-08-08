import StoreWrapper from '../../store/store';
import StudentList from './components/StudentList';

const Page: React.FC = () => {
  return (
    <StoreWrapper>
      <StudentList />
    </StoreWrapper>
  );
};

export default Page;
