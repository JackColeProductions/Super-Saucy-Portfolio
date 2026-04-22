import { AuroraGlow } from "./AuroraGlow";
import { MouseRipple } from "./MouseRipple";
import { SparkleField } from "./SparkleField";
import { StarfieldBackground } from "./StarfieldBackground";

export function BackgroundLayer() {
  return (
    <>
      <AuroraGlow />
      <StarfieldBackground />
      <SparkleField />
      <MouseRipple />
    </>
  );
}
