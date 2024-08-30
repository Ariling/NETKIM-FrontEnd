import paperplane from '@assets/img/PaperPlane.png';
import { Button } from '../common/Button';
import { useNavigate } from 'react-router-dom';
import { useEditStore } from '@/store/useEditStore';
import { sendPressReleaseApi } from '@/apis/pressapi';

const EditSendCompo = ({ id }: { id: number }) => {
  const navigate = useNavigate();
  const handleEmailClick = () => {
    const recipients = 'ariettys2@naver.com, findurwind@gmail.com';
    const subject = encodeURIComponent('보도자료 작성');
    const fileLink = 'https://example.com/path/to/your/file.pdf'; // 실제 파일 링크로 교체하세요
    const body = encodeURIComponent(`
안녕하세요,
보도자료와 관련된 파일을 다음 링크에서 확인해주세요:
${fileLink}
감사합니다.`);

    const mailtoLink = `mailto:${recipients}?subject=${subject}&body=${body}`;

    window.open(mailtoLink, '_blank');
  };
  const sendApi = async (pressReleaseId: number, type: string) => {
    const result = await sendPressReleaseApi(pressReleaseId);
    if (result?.status === 200) {
      alert('기자 메일로 전송되었습니다.');
      if (type === 'edit') {
        navigate('/');
      }
    } else {
      alert('에러 발생');
    }
  };
  const downloadFile = () => {
    alert('일단은 되는지 나중에 확인...');
    //    fetch('서버 URL', { method: 'GET' })
    //      .then((res) => res.blob())
    //      .then((response) => {
    //        const downloadUrl = window.URL.createObjectURL(new Blob([response]));
    //        const link = document.createElement('a');
    //        link.href = downloadUrl;
    //        link.setAttribute('download', '성공.pdf');
    //        document.body.appendChild(link);
    //        link.click();
    //        link.remove();
    //      })
    //      .catch((error) => {
    //        console.error('Error while downloading the PDF:', error);
    //      });
  };
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-6">
      <div className="relative w-[300px] h-[300px] rounded-full bg-white">
        <img
          src={paperplane}
          alt="종이비행기"
          className="absolute top-1/2 left-1/3 -translate-x-1/3 -translate-y-1/2"
        />
      </div>
      <div className="mt-11">보도자료가 작성되었습니다</div>
      <div className="mb-11">작성된 보도자료는 마이페이지에서 확인할 수 있습니다.</div>
      <div className="flex items-center gap-[18px]">
        <Button
          name="마이페이지"
          className=" w-60 h-[50px] rounded-lg font-bold text-lg"
          onClick={() => {
            navigate('/mypage');
            localStorage.setItem('activeButton', '보도자료');
          }}
        ></Button>
        <Button
          name="기자발송"
          className=" w-60 h-[50px] rounded-lg font-bold text-lg"
          onClick={() => {
            sendApi(id, 'edit');
          }}
        ></Button>
      </div>
    </div>
  );
};

export default EditSendCompo;
