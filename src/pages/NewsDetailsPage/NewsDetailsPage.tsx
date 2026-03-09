import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Icon,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";

import { Link, useSearchParams } from "react-router";

import { useNewsDetailQuery } from "@/api/hooks";

export default function NewsDetailPage() {
  const [searchParams] = useSearchParams();
  const url = searchParams.get("url") || "";

  const { data, isLoading, isError } = useNewsDetailQuery(url);

  const image = data?.multimedia?.[0]?.url;

  if (!url) {
    return (
      <Container sx={{ py: 6 }}>
        <Typography>No article url provided</Typography>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container sx={{ py: 6 }}>
        <Typography>Something went wrong</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Stack spacing={3}>
        <Button
          component={Link}
          to="/"
          startIcon={<Icon>arrow_back</Icon>}
          sx={{ alignSelf: "flex-start" }}
        >
          Back
        </Button>

        <Card>
          {isLoading ? (
            <>
              <Skeleton variant="rectangular" height={320} />
              <CardContent>
                <Skeleton width="70%" height={40} />
                <Skeleton width="40%" />
                <Skeleton width="100%" />
                <Skeleton width="90%" />
              </CardContent>
            </>
          ) : (
            <>
              {image && (
                <Box
                  component="img"
                  src={image}
                  alt={data.title}
                  loading="lazy"
                  sx={{
                    width: "100%",
                    height: 360,
                    objectFit: "cover",
                  }}
                />
              )}

              <CardContent>
                <Stack spacing={2}>
                  <Typography variant="h4" component="h1">
                    {data?.title}
                  </Typography>

                  {data?.byline && (
                    <Typography color="text.secondary">
                      {data.byline}
                    </Typography>
                  )}

                  <Typography variant="body1">{data?.abstract}</Typography>
                </Stack>
              </CardContent>
            </>
          )}
        </Card>
      </Stack>
    </Container>
  );
}
