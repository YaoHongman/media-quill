import { NotVoid } from "lodash";

interface InitParams {
  height?: string;
  width?: string;
}
export const videoInit: (args?: InitParams) => NotVoid;
  
interface PlayerParams extends InitParams {
  id: string;
}
export const videoPlayer: (args: PlayerParams) => void;
  
export default {
  videoInit,
  videoPlayer
};
