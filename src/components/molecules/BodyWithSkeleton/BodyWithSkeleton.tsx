import { Skeleton } from '@mui/material';
import BodyLarge from '../../atoms/BodyLarge';

export enum BodySkeletonSize {
  XS = 32,
  S = 48,
  M = 320,
  L = 640,
}

export const BodyWithSkeleton = ({ text, size }: { text: string | undefined; size: BodySkeletonSize }) => (
  <>
    {text ? (
      <BodyLarge>{text}</BodyLarge>
    ) : (
      <>
        <Skeleton
          height={size}
          sx={{
            transform: 'scale(1)',
            width: size === BodySkeletonSize.XS ? '60%' : '100%',
          }}
        ></Skeleton>
      </>
    )}
  </>
);
