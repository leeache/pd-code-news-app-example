import { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Skeleton,
  Typography,
} from "@mui/material";
import { Link } from "react-router";

type NewsCardProps = {
  title: string;
  abstract: string;
  image?: string;
  url: string;
  animationDelay?: number;
};

export default function NewsCard({
  title,
  abstract,
  image,
  url,
  animationDelay = 0,
}: NewsCardProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsCardVisible(true);
    }, animationDelay);

    return () => window.clearTimeout(timer);
  }, [animationDelay]);

  return (
    <Card
      sx={{
        height: "100%",
        overflow: "hidden",
        opacity: 1,
      }}
    >
      <CardActionArea
        component={Link}
        to={`/news?url=${encodeURIComponent(url)}`}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        {image && (
          <Box sx={{ position: "relative", width: "100%", height: 220 }}>
            {!isImageLoaded && (
              <Skeleton
                variant="rectangular"
                animation="wave"
                width="100%"
                height="100%"
                sx={{ position: "absolute", inset: 0 }}
              />
            )}

            <Box
              component="img"
              src={image}
              alt={title}
              onLoad={() => setIsImageLoaded(true)}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                opacity: isImageLoaded ? 1 : 0,
                transform: isImageLoaded ? "scale(1)" : "scale(1.03)",
                transition: "opacity 450ms ease, transform 450ms ease",
              }}
            />
          </Box>
        )}

        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              opacity: isCardVisible ? 1 : 0,
              transform: isCardVisible ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 450ms ease, transform 450ms ease",
              transitionDelay: `${animationDelay + 80}ms`,
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              opacity: isCardVisible ? 1 : 0,
              transform: isCardVisible ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 500ms ease, transform 500ms ease",
              transitionDelay: `${animationDelay + 140}ms`,
            }}
          >
            {abstract}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
