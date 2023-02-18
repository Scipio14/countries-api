import { FC, useEffect, useState } from "react";
import { countries } from "../../api/countries";
import { useNavigate, Navigate, useParams } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { TypeCountry } from "../../types/country.interface";
import UN from "../../assets/un.svg";
import { HomePage } from "../Home/HomePage";

export const CountryPage: FC = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [country, setCountry] = useState<TypeCountry | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    countries
      .getById({ id })
      .then((r) => {
        setCountry(r.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [countries]);
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Container maxWidth="xl">
          {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
              <CircularProgress />
            </Box>
          ) : (
            <Grid sx={{ mt: 2 }} container columnSpacing={2}>
              <Grid item xs={6}>
                <Typography variant="h2">{country!.name_official}</Typography>
                <Divider />
                <Typography variant="h6">
                  {" "}
                  Capital: {country?.capital}
                </Typography>
                <Box sx={{ mt: 2 }} display="flex" alignItems="center">
                  <Typography variant="h6" sx={{ mr: 2 }}>
                    UN member:{" "}
                  </Typography>
                  {country!.un_member ? (
                    <img style={{ width: "100px" }} src={UN} />
                  ) : (
                    "Not a  UN member"
                  )}
                </Box>
                <Typography variant="body1">
                  Anthem: "{country?.anthem?.title}"
                </Typography>
                {country?.anthem ? (
                  <ReactAudioPlayer src={country?.anthem?.music} controls />
                ) : null}
                <Typography variant="body1">
                  {country?.anthem?.lyrics && (
                    <p
                      dangerouslySetInnerHTML={{
                        __html: country?.anthem?.lyrics,
                      }}
                    ></p>
                  )}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <img
                  src={country!.flag}
                  alt={country?.name_common}
                  style={{
                    width: "100%",
                    borderRadius: "0.5em",
                    border: "solid thin black",
                  }}
                />
                <Typography sx={{ mt: 3.5 }} variant="h3">
                  Coat of Arms
                </Typography>
                <img src={country!.coat_arms} style={{ width: "100%" }} />
              </Grid>
            </Grid>
          )}
        </Container>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
        >
          Home
        </Button>
      </Box>
    </>
  );
};
