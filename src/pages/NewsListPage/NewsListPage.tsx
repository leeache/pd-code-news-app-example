import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useSearchParams } from "react-router";
import { useTopStoriesQuery } from "@/api/hooks";
import { NewsCard, NewsPageSkeleton } from "@/components";

const sections = ["automobiles", "sports", "movies", "health", "business"];

const formatSection = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);

export default function NewsListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const section = searchParams.get("section") || "automobiles";

  const { data, isLoading, isError } = useTopStoriesQuery(section);

  const handleChangeSection = (nextSection: string) => {
    setSearchParams({ section: nextSection });
  };

  const items = data?.results ?? [];
  const hasData = items.length > 0;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
        flexWrap="wrap"
        gap={2}
      >
        <Typography variant="h4">{formatSection(section)}</Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {sections.map((item) => (
            <Button
              key={item}
              variant={item === section ? "contained" : "outlined"}
              size="small"
              onClick={() => handleChangeSection(item)}
            >
              {formatSection(item)}
            </Button>
          ))}
        </Stack>
      </Stack>

      {isLoading && !hasData && <NewsPageSkeleton />}

      {isError && <Typography>Failed to load news.</Typography>}

      {!isLoading && !isError && !hasData && (
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            minHeight: 240,
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 3,
            textAlign: "center",
            px: 3,
          }}
        >
          <Typography variant="h6" gutterBottom>
            No news found
          </Typography>
          <Typography color="text.secondary">Try another section.</Typography>
        </Stack>
      )}

      {hasData && (
        <Grid container spacing={3}>
          {items.map((item) => (
            <Grid
              key={`${section}-${item.url}`}
              size={{ xs: 12, sm: 6, md: 4 }}
            >
              <NewsCard
                title={item.title}
                abstract={item.abstract}
                url={item.url}
                image={item.multimedia?.[0]?.url}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
