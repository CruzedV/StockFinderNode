import axios from "axios"
import { IBuyInstrument } from "../Interfaces/IBuyInstrument";

export async function getInstrument(url: string) {
    const res = await axios.get(url);
    return res.data.instruments as Array<IBuyInstrument>
}