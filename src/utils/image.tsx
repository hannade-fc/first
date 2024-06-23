import sharp from "sharp"
import satori from "satori"
import { join } from "path";
import * as fs from "fs";

const font = fs.readFileSync(
    join(process.cwd(), "src/fonts/RedHatDisplay-Black.ttf")
);

const generatePriceImageSvg = async () : Promise<string> => {


  const words= ["Yes", "No", "Maybe", "Try again", "Luck", "Take a risk", "Stop", "Move forward", "Chance", "Choice"]
  const randomIndex = Math.floor(Math.random() * words.length);
  const phrase = words[randomIndex]

    return await satori(
        <div style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_SITE_URL}/cube.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        alignItems: "center",
        display: "flex",
        width: "100%",
        height: "100%"  
    }}
      >
    <div style ={{
        color: "white",
        fontSize: 28,        
        position: "absolute", 
        transform: "translate(-50%, -50%) rotate(-15deg)",
        top: "50%",
        left: "50%",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"

    }}
    >{phrase}</div>
    </div>,
        {
            height: 600,
            width: 600,
             
            fonts: [
                {
                    name: 'Red Hat Display Black',
                    data: font,
                }],
                embedFont: true
        }
    );
};


export const generateBase64PriceImage = async () => {
    const svg = await generatePriceImageSvg();
    return (await sharp(Buffer.from(svg)).toFormat("png").toBuffer()).toString("base64");
};
