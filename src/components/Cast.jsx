import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { ElId } = useParams();
  console.log(ElId);
  return <>My Cast : {ElId}</>;
};
