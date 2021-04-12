import { useEffect, useRef } from 'react';
import { DataPointObject } from '../../data/DataPointObjectInterface';
import { WorldMap } from "react-svg-worldmap"
import { DataPoint } from '../../data/DataPoint';


const World = (props: {data: DataPoint[]}) => {
    // TODO: Propagate props.data further
    const data =
    [
      { country: "cn", value: 1389618778 }, // china
      { country: "in", value: 1311559204 }, // india
      { country: "us", value: 331883986 },  // united states
      { country: "id", value: 264935824 },  // indonesia
      { country: "pk", value: 210797836 },  // pakistan
      { country: "br", value: 210301591 },  // brazil
      { country: "ng", value: 208679114 },  // nigeria
      { country: "bd", value: 161062905 },  // bangladesh
      { country: "ru", value: 141944641 },  // russia
      { country: "mx", value: 127318112 }   // mexico
    ]

  return (
    <div className="World" >
       {/* This tests a country can be printed! */}
       { (props.data.length > 0) ? props.data[0].location : null }
       { (props.data.length > 0) ? props.data.map(item => console.log(item.iso_code, getVaccineCount(item))) : null }

       World Component!!!
       <WorldMap
            color="purple"
            title="Top 10 Populous Countries"
            value-suffix="people"
            size="lg"
            data={data}
        />
    </div>
  )
    // return (
    //     <div>
    //         <canvas
    //             id="myChart"
    //             ref={chartRef}
    //         />
    //     </div>
    // );
}

//Escher Campanella:
//This function takes the props.data as input 
//The function output will be a list of arrays that contain the country, and the value that will determine the color
//The value is going to be determined from the amount of people vaccinated in that country or the percentage of people vaccinated (undetermined)

const getVaccineCount = (item: DataPoint) => {
	if (item.total_vaccinations !== 0)
    return item.total_vaccinations;
  if (item.people_vaccinated !== 0)
    return item.people_vaccinated;
  if (item.people_fully_vaccinated !== 0)
    return item.people_fully_vaccinated;
  return 0;
}
// // export default color;

export default World;