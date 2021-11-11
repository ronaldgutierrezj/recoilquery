import {atom, useRecoilState} from "recoil"

// declare and atom
export const counterState = atom({
    // key, used to internally track the state
    key: "counterState",
    // default value
    default: 0
})

// custom hook to simplify
export const useCounterState = () => {
    return useRecoilState(counterState)
}