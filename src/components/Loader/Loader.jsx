import { Oval } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <Oval
        color="aquamarine"
        secondaryColor="#000000"
        height={100}
        width={110}
      />
    </LoaderWrapper>
  );
};

export default Loader;
