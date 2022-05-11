import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { grey } from "@mui/material/colors";

const LinearProg = (props) => {
  return (
    <Box sx={{ color: [props.color] }}>
      <Box
        mt={2}
        mb={1}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: grey[600],
          fontWeight: 600,
        }}
      >
        <div>{props.title}</div>
        <div>{props.per}</div>
      </Box>
      <LinearProgress
        variant="determinate"
        value={props.value}
        color={"inherit"}
        sx={{
          height: "15px",
          borderRadius: "5px",
        }}
      />
    </Box>
  );
};

export default LinearProg;
