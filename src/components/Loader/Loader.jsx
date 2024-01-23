import BackDrop from 'components/Backdrop/Backdrop';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <BackDrop>
      <InfinitySpin width="200" color="#b23d" />
    </BackDrop>
  );
};

export default Loader;
