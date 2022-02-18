import type { NextPage } from "next";

import { Page, Logo, Guru, Content } from "components";

const Home: NextPage = () => (
  <Page>
    <Logo />
    <Content />
    <Guru />
  </Page>
);

export default Home;
