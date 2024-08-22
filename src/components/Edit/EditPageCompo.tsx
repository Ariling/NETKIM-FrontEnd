import EditTextArea from './EditTextArea';

const EditPageCompo = () => {
  const editArray = ['title', 'casting', 'content', 'day', 'location', 'interview'];
  return (
    <div>
      {editArray.map((e) => {
        return (
          <>
            <div>{e}</div>
            <EditTextArea data={e} />
          </>
        );
      })}
    </div>
  );
};

export default EditPageCompo;
