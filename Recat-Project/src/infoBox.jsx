import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const COLD_URL =
    "https://plus.unsplash.com/premium_photo-1664301524345-90a694774519?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HOT_URL =
    "https://images.unsplash.com/photo-1530020964433-10340ed08440?q=80&w=2014&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL =
    "https://plus.unsplash.com/premium_photo-1670002220813-2e11cc57cbc1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="infoBox">
      <div className="card">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 250 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 26
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>
                Temperatureb <b>{info.temp}&deg;C</b>
              </p>
              <p>
                Humidity <b> {info.humidity}</b>
              </p>
              <p>
                Min Temp <b>{info.tempMin}&deg;C</b>
              </p>
              <p>
                Max Temp <b>{info.tempMax}&deg;C</b>
              </p>
              <p>
                The weather can described as{" "}
                <b>
                  <i>{info.weather}</i>
                </b>{" "}
                and feels like &nbsp;
                <b>{info.feelsLike}&deg;C</b>
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
