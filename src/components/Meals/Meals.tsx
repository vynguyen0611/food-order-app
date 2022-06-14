import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
    Card, CardActions, CardContent, CardMedia, Container, Grid, IconButton, Paper, Typography
} from '@mui/material';

const data = [
  {
    title: "Crispy Spring Rolls (2 Rolls)",
    image: "chagio.png",
    content:
      "Shrimp, ground chicken, taro and vegetables. Served with fish sauce.",
  },
  {
    title: "Summer Rolls (2 Rolls)",
    image: "cuon.png",
    content: "Served with fresh lettuce, noodle, mint and bean sprout",
  },
  {
    title: "Shrimp Fried Rice",
    image: "fried-rice-1.png",
    content:
      "Shrimp, ground chicken, taro and vegetables. Served with fish sauce.",
  },
  {
    title: "Mango Salad",
    image: "mango-salad.png",
    content: "Fresh mango, onion, bell pepper, coriander and cashew nuts",
  },
  {
    title: "Pho Tai",
    image: "pho.png",
    content: "Rare beef with rice noodle soup",
  },
  {
    title: "Tom Yum Soup 🌶️",
    image: "tomyum.png",
    content:
      "Lemongrass, kaffir lime, mushrooms and tomatoes in a spicy chili broth.",
  },
];

export default function Meals() {
  return (
    <>
      <Container sx={{ py: 16 }}>
        <Typography variant="h6" fontWeight={700} color="white">
          MENU
        </Typography>
        <Grid container spacing={6} mt={1}>
          {data.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.title}>
              <Paper elevation={0}>
                <Card
                  sx={{
                    height: 400,
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    backgroundColor: "#dfdfdf",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="360"
                    image={`/images/meals/${item.image}`}
                    alt="Paella dish"
                    sx={{ borderBottomRightRadius: "150px" }}
                  />
                  <CardContent sx={{ flex: 1 }}>
                    <Typography variant="h6" color="#1e2022" height={50}>
                      {item.title}
                    </Typography>
                    <Typography variant="body1" color="#677788">
                      {item.content}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <AddCircleOutlineIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Card></Card>
    </>
  );
}
