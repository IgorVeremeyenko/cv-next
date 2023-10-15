import { Skeleton,SkeletonCircle,SkeletonText,Box,Grid,GridItem } from '@chakra-ui/react'
export default function LoadSkeleton() {
  return (
    <Grid templateColumns='repeat(4, 2fr)' gap={16}>
        <GridItem w='100%' h='100%'>
          <SkeletonCircle size='36' startColor="#463436" endColor="#59494A" />
        </GridItem>
        <GridItem w='100%' h='10'  >
          <SkeletonCircle size=' 36' startColor="#463436" endColor="#59494A" />
        </GridItem><GridItem w='100%' h='10'  >
          <SkeletonCircle size=' 36' startColor="#463436" endColor="#59494A" />
        </GridItem><GridItem w='100%' h='10'  >
          <SkeletonCircle size=' 36' startColor="#463436" endColor="#59494A" />
        </GridItem>
        <GridItem w='100%' h='10'  >
          <SkeletonCircle size=' 36' startColor="#463436" endColor="#59494A" />
        </GridItem>
        <GridItem w='100%' h='10'  >
          <SkeletonCircle size=' 36' startColor="#463436" endColor="#59494A" />
        </GridItem>
        <GridItem w='100%' h='10'  >
          <SkeletonCircle size=' 36' startColor="#463436" endColor="#59494A" />
        </GridItem>
        <GridItem w='100%' h='10'  >
          <SkeletonCircle size=' 36' startColor="#463436" endColor="#59494A" />
        </GridItem>
      </Grid>
  )


}