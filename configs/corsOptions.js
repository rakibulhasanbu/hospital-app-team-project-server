import * as dotenv from "dotenv";
import { allowedOrigins } from "./allowedOrigin.js";
dotenv.config();

const corsOption = {
  origin: (requestOrigin, callBack) => {
    if (!requestOrigin) {
      callBack(null, true);
    } else {
      if (allowedOrigins.indexOf(requestOrigin) !== -1) {
        callBack(null, true);
      } else {
        callBack(new Error("Not allowed by CORS!"));
      }
    }
  },
  credential: true,
  optionsSuccessStatus: 200,
};

export default corsOption;
