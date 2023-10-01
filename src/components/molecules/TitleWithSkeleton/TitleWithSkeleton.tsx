import { Skeleton } from '@mui/material';
import Title from '../../atoms/Title';

export const TitleWithSkeleton = ({ title }: { title: string | undefined }) => (
  <>
    {title ? (
      <Title>{title}</Title>
    ) : (
      <>
        <Skeleton
          height={64}
          sx={{
            width: '100%',
          }}
        ></Skeleton>
      </>
    )}
  </>
);
