import { Link } from 'react-router-dom';

export const Movies = () => {
  return (
    <>
      {['el-1', 'el-2', 'el-3', 'el-4', 'el-5'].map(el => {
        return (
          <Link key={el} to={`${el}`}>
            {el}
          </Link>
        );
      })}
    </>
  );
};
