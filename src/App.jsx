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
      title="Oopsie daisy! Looks like I'm tinkering with the bio link page. Hang tight, this might take a days!"
      subtitle="Meanwhile, why not enjoy some delightful links down below? They might just tickle your funny bone!"
      links={array}
    />
  );
  
}

export default App;
