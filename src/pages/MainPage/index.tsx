import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { Header, Footer, Card } from "@components";
import { Container, ContentBox } from "./style";
import axios from "axios";
import { Beer } from "@types";

const URL: string = "https://api.punkapi.com/v2/beers?page=2&per_page=30";

const MainPage: FunctionComponent = () => {
  const [beer, setBeer] = useState([]);
  const getBeer = useCallback(async () => {
    const { data } = await axios.get(URL);
    const result = data.map(
      (item: { name: string; image_url: string; tagline: string }) => ({
        title: item.name,
        img: item.image_url,
        description: item.tagline
      })
    );
    setBeer(result);
  }, [setBeer]);

  useEffect(() => getBeer(), []);

  return (
    <Container>
      <Header />
      <ContentBox>
        {beer.map(({ img, description, title }: Beer) => (
          <dt key={title}>
            <Card img={img} title={title} description={description} />
          </dt>
        ))}
      </ContentBox>
      <Footer />
    </Container>
  );
};

export default MainPage;
