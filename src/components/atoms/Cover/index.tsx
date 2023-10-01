import { Skeleton } from '@mui/material';
import CoverImage from './Cover.Styles';

const Cover = ({ url }: { url: string | undefined }) => {
  return (
    <>
      {url ? (
        <CoverImage coverUrl={url} />
      ) : (
        <Skeleton
          sx={{
            height: '55vh',
            transform: 'scale(1)',
            width: '100%',
          }}
        />
      )}
    </>
  );
};

export default Cover;
