import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  const apiURL = `https://server-09wr.onrender.com`
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`${apiURL}/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
