import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
<<<<<<< HEAD
  const apiURL = `https://server-09wr.onrender.com`
=======
  const apiURL = "https://server-09wr.onrender.com"
>>>>>>> d438c7b83d1bfea5709f50a7545d87f05cb8b4fd
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
