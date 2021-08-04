import React from 'react';

const Info = (props) => {
    const cars = [
        {
          data: "MG Motor India is likely to launch the Gloster SUV as the third product from the brand in the country. Produced by SAIC Motor’s sub-brand Gloster is a full size SUV that will rival the likes of the Toyota Fortuner, Mahindra Alturas G4 and the Ford Endeavour. In China, the Gloster is powered by a 2.0-litre turbocharged petrol engine that is capable of producing 221bhp and 360Nm of torque. This engine is offered with a six-speed manual transmission and a six-speed automatic transmission. The China-spec MG Gloster is equipped with features such as a 12.3-inch touchscreen infotainment system, panoramic sunroof, 360-degree camera, three-zone climate control and an eight-inch fully digital instrument console.",
          value: "mggloster",
          price: "30 Lakh"
        },
        { 
          data: "The MG Hector facelift has been launched in India, with prices starting at Rs 12.90 lakh (ex-showroom, all India). Launched in India in June 2019, this is the first comprehensive update for the Hector SUV. The model is offered in four variants that include Style, Super, Smart, and Sharp. Engine options on the 2021 MG Hector facelift include the same 1.5-litre petrol motor, 1.5-litre petrol-hybrid motor, and the 2.0-litre diesel motor. A six-speed manual transmission is standard while a DCT and CVT unit is offered exclusively with the petrol mill.", 
          value: "mghector",
          price: "13 Lakh"
        },
        { 
          data: "MG Motor has launched the 2021 ZS EV from Rs 20.99 lakh to Rs 24.18 lakh, with a premium of up to Rs 60,000 over the previous model. The major updates include increased range, raised ground clearance, and a larger tyre aspect ratio.", 
          value: "mgzsev",
          price: "21 Lakh"
        }
      ];

    const { items } = props;

    const data = cars.filter((temp) =>{
      return temp.value === items
    })


  return(
    <div className="drop-data">
        {data[0]?.data}
        {data[0]?.price}    
    </div>
  );
};
export default Info;