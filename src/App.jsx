import { useState } from "react";
import Text from "./components/Text";

import "./App.css";

function App() {
  let array = [
    ["https://coinbase-ui-clone.netlify.app/", "Coinbase UI Clone"],
    ["https://abdullahshafiq-20.github.io/Noon-clone/", "Noon Clone"],
    ["https://abdullahshafiq-20.github.io/olx-clone/", "OLX Clone"],
    ["https://hma.netlify.app/", "HMA"],
    ["https://mhq.digital/", "MHQ"],
    ["https://prtfl-8.netlify.app/", "Global Portfolio"],

  ];
  return (
    <Text
      title="Sorry, I am working bio link page, this may take a while"
      subtitle="I hope the links you are looking for, down there might help you!"
      links={array}
    />
  );
}

export default App;
