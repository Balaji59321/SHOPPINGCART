import {
  Button,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Box,
} from "@mui/material";
import Card from "@mui/material/Card";
import { yellow } from "@mui/material/colors";
import StarIcon from "@mui/icons-material/Star";
import style from "./Cards.css";
import { red } from "@mui/material/colors";

const Cards = (props) => {
  return (
    <Card
      sx={{
        textAlign: "center",
        position: "relative",
        fontSize: {
          xs: 20,
          md: 22,
          lg: 23,
          xl: 25,
        },
      }}
    >
      {props.sale ? (
        <Typography
          px={1}
          sx={{
            color: "white",
            display: "inline-block",
            bgcolor: "text.primary",
            fontWeight: "bold",
            fontSize: {
              xs: 10,
              sm: 11,
              md: 15,
              lg: 17,
            },
            position: "absolute",
            top: 8,
            right: 8,
          }}
        >
          Sale
        </Typography>
      ) : (
        ""
      )}
      <CardMedia
        component="img"
        alt="green iguana"
        image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        // sx={{ objectFit: "contain" }}
      />
      <CardContent
        sx={{ lineHeight: 1.6, height: { xs: 115, sm: 115, md: 105 } }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          my={0}
          sx={{ fontSize: "inherit", fontWeight: "bold" }}
        >
          {props.name}
        </Typography>
        {props.star ? (
          <Typography gutterBottom variant="h5" component="div" my={0}>
            <StarIcon
              style={{
                color: yellow[600],
                fontSize: "large",
              }}
            />
            <StarIcon style={{ color: yellow[600], fontSize: "large" }} />
            <StarIcon style={{ color: yellow[600], fontSize: "large" }} />
            <StarIcon style={{ color: yellow[600], fontSize: "large" }} />
            <StarIcon style={{ color: yellow[600], fontSize: "large" }} />
          </Typography>
        ) : (
          ""
        )}
        <Typography
          variant="body2"
          color="text.secondary"
          mt={props.star ? 0 : 1}
          sx={{
            fontWeight: "bold",
            fontSize: {
              xs: 12,
              sm: 14,
            },
          }}
        >
          {props.strike ? (
            <div>
              <Box
                sx={{ textDecoration: "line-through", display: "inline-block" }}
              >
                {props.price.split(" ")[0]}
              </Box>
              {" " + props.price.split(" ")[1]}
            </div>
          ) : (
            props.price
          )}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          variant="outlined"
          sx={{
            color: "text.primary",
            textTransform: "capitalize ",
          }}
        >
          {props.btnName}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
