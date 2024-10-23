import Groq from "groq-sdk";
import { GROQ_CLOUD } from "./constants";

const groq = new Groq({
    apiKey: GROQ_CLOUD,
    dangerouslyAllowBrowser: true,
  });

  export default groq