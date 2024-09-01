import { ClipLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="flex justify-center items-center absolute w-full h-screen">
      <ClipLoader color={'#F97272'} size={150} />
    </div>
  );
};

export default Loading;
