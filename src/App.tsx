import { useState } from "react";
import Card from "./compoments/Card";
import Explore from "./compoments/Explore";
import Header from "./compoments/Header";

import DATA, { DATA_EXPLORE } from "./data/data.ts";
import type { DataType } from "./data/data.ts";

function App() {
  const [data] = useState<DataType[]>(DATA);
  const [dataExpore, setDataExplore] = useState<DataType>(DATA_EXPLORE);

  return (
    <div className="container">
      <Header />
      <h2 className="my-7.5! text-gray-50 font-semibold text-3xl">Explore</h2>
      <h2 className="text-[#868686] font-normal mb-7.5!">
        What are you gonna watch today ?
      </h2>

      <Explore dataExpore={dataExpore} />

      <div className="mt-7.5!">
        <h2></h2>
        <h2 className="text-gray-50 font-semibold text-3xl mb-6!">
          New Release
        </h2>
        <div className="grid grid-cols-6 gap-7.5">
          {data.map((item: DataType) => (
            <div key={item.id} onClick={() => setDataExplore(item)}>
              <Card
                // key={item.id}
                imgae={item.image}
                movieName={item.movieName}
                episode={item.episode}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
