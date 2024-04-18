import { Config } from "./contexts/ConfigurationContext";

const VECTARA_CUSTOMER_ID = process.env.REACT_APP_VECTARA_CUSTOMER_ID as string;
const VECTARA_CORPUS_ID = "4";
const VECTARA_API_KEY = process.env.REACT_APP_VECTARA_API_KEY as string;

export const configuration: Config = {
  customerId: VECTARA_CUSTOMER_ID,
  corpusId: VECTARA_CORPUS_ID,
  apiKey: VECTARA_API_KEY,
  endpoint: "api.vectara.io"
};