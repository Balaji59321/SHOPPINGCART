import {
  Button,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Box,
  Rating,
} from "@mui/material";
import Card from "@mui/material/Card";
import { useContext, useState } from "react";
import Context from "./Context";

// provides card view to the section
const Cards = (props) => {
  const ctx = useContext(Context);
  const [rate, setRate] = useState(0);
  const [btn, setBtn] = useState("Add to Cart");
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
          <Rating
            name="no-value"
            value={rate}
            onChange={(eve, newVal) => setRate(newVal)}
          />
        ) : (
          <></>
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
          onClick={(e) => {
            if (e.target.textContent === "Add to Cart") {
              props.click(
                "add",
                props.name,
                props.strike ? props.price.split(" ")[1] : props.price,
                props.id
              );
              setBtn("Remove from Cart");
            } else {
              props.click(
                "remove",
                props.name,
                props.strike ? props.price.split(" ")[1] : props.price,
                props.id
              );
              setBtn("Add to Cart");
            }
          }}
        >
          {ctx.items.filter((ele) => ele.name === props.name).length > 0
            ? "Remove from Cart"
            : "Add to Cart"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
