import { Card, CardContent, Skeleton } from "@mui/material";

export default function NewsCardSkeleton() {
  return (
    <Card>
      <Skeleton variant="rectangular" width={370} height={220} />
      <CardContent>
        <Skeleton variant="text" height={32} width="80%" />
        <Skeleton variant="text" height={24} width="60%" />
        <Skeleton variant="text" height={20} width="40%" />
      </CardContent>
    </Card>
  );
}
