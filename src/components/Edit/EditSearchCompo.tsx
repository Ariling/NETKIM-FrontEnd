import React, { useState } from 'react';

const EditSearchCompo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const wayArray = ['보도용', '홍보용', '결과용'];
  // 이거 바꿀거
  const [way, setWay] = useState('보도용');
  //   useEffect(() => {
  //     getResultList(searchTerm);
  //   }, [searchTerm]);
  return (
    <>
      <input type="text" placeholder="검색" value={searchTerm} onChange={handleInputChange} />
      {/* {searchMusic.map((e, index) => {
        if (click === index) {
          return (
            <M.SongSearchList
              className="click"
              onClick={() => {
                onClick(-1);
                resetSong();
              }}
            >
              <img src={e.imageUrl} alt="albumImg" />
              <MusicBoxWrapper>
                <div className="title">{e.title}</div>
                <div className="artist">{e.artistName}</div>
              </MusicBoxWrapper>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12.5L9.667 17L19 8"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </M.SongSearchList>
          );
        } else {
          return (
            <M.SongSearchList
              onClick={() => {
                onClick(index);
                setClickSong((prevModal) => ({
                  ...prevModal,
                  song: {
                    title: e.title,
                    singer: e.artistName,
                    imageUrl: e.imageUrl,
                  },
                }));
              }}
            >
              <img className="albumImg" src={e.imageUrl} alt="albumImg" />
              <MusicBoxWrapper>
                <div className="title">{e.title}</div>
                <div className="artist">{e.artistName}</div>
              </MusicBoxWrapper>
            </M.SongSearchList>
          );
        }
      })} */}
      {wayArray.map((e) => {
        return (
          <>
            <input
              type="radio"
              name="way"
              key={e}
              value={e}
              id={e}
              className="hidden"
              checked={way === e}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setWay(e.target.value);
              }}
            />
            <label htmlFor={e} className="check_btn">
              {e}
            </label>
          </>
        );
      })}
    </>
  );
};

export default EditSearchCompo;
