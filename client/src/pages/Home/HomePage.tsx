import { ChangeEvent, FC, useEffect, useState } from "react";
import { countries } from "../../api/countries";
import { TypeCountry } from "../../types/country.interface";
import {
  Container,
  Grid,
  CircularProgress,
  Box,
  Pagination,
  Typography,
} from "@mui/material";
import { CardComponent } from "../../components";

export const HomePage: FC<{}> = () => {
  const [allCountries, setAllCountries] = useState<TypeCountry[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    setLoading(true);
    countries
      .getAll({ page })
      .then((r) => {
        setCount(r.data.totalPages);
        setAllCountries(r.data.results);
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [page]);

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <div>
            {allCountries?.length !== 0 ? (
              <Grid sx={{ my: 2 }} container spacing={2} direction="row">
                {allCountries?.map((country) => (
                  <Grid item xs={3} key={country.id}>
                    <CardComponent
                      image={country.flag}
                      name={country.name_official}
                      id={country.id}
                    />
                  </Grid>
                ))}
              </Grid>
            ) : (
              "No data"
            )}
          </div>
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Pagination
              count={count}
              variant="outlined"
              color="primary"
              page={page}
              onChange={handleChange}
              sx={{ mb: 3 }}
              size="large"
            />
          </Box>
        </>
      )}
    </Container>
  );
};
