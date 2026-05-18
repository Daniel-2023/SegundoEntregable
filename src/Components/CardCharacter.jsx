import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

import "./CardCharacter.css";

const CardCharacter = (props) => {

  const { image, name, species, status, gender } = props;

  return (

    <Card className="card">
      <CardActionArea>
        <div className="container">
          <CardMedia
            component="img"
            image={image}
            alt={name}
            className="image"
          />

        </div>
        <CardContent>
          <Typography className="name">
            {name}
          </Typography>

          <Typography className="info">
            Species: {species}
          </Typography>

          <Typography className="info">
            Status: {status}
          </Typography>

          <Typography className="info">
            Gender: {gender}
          </Typography>

        </CardContent>

      </CardActionArea>

    </Card>

  );
};

export default CardCharacter;