import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { useAppSelector } from "../hooks";
import { selectName } from "../features/ui/uiSlice";

import Layout from "../components/screens/Layout";
import Register from "../components/screens/Register";
import Game from "../components/screens/Game";

const IndexPage: React.FC<PageProps> = () => {
  const name = useAppSelector(selectName);
  return (
    <Layout>
      <div className="w-full">{name === "" ? <Register /> : <Game />}</div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Memory Game</title>;
