import certificate from '@assets/img/certificate.webp';
import preview from '@assets/img/Preview.webp';

const ImgDiv = ({ type, text }: { type: string; text: string }) => {
  return (
    <>
      {type === 'mypage' ? (
        <>
          <img src={certificate} alt="미리보기 이미지" width={148} height={128} />
          <div className="text-gray-500 font-semibold text-lg">{text}</div>
        </>
      ) : (
        <>
          <img src={preview} alt="미리보기 이미지" width={148} height={128} />
          <div className="text-gray-500 font-semibold text-lg">{text}</div>
        </>
      )}
    </>
  );
};

export default ImgDiv;
