import { Grid } from "@mui/material";
import NewsCardSkeleton from "./NewsCardSkeleton";

export default function NewsPageSkeleton() {
  return (
    <Grid container spacing={3}>
      {Array.from({ length: 12 }).map((_, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
          <NewsCardSkeleton />
        </Grid>
      ))}
    </Grid>
  );
}
