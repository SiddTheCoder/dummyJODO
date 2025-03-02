import { useState, useEffect } from "react";

const usePassword = () => {
    const [dummyDetails] = useState({
        d1 : 'git',
        d2 : '_',
        d3 : 'hub',
        d4 : '#',
        d5 : 'The',
        d6 : '400',
        d7 : 'sidd',
        d8 : 'coder',
        d9 : 'is',
        d10 : 'a',
        d11 : 'good',
        d12 : 'boy',
        d13 : 'and',
        d14 : 'he',
        d15 : 'is',
        d16 : 'a',
        d17 : 'good',
        d18 : 'boy',
        d19 : 'and',
        d20 : 'he',
        d21 : 'is',
        d22 : 'a',
        
    })
    const fakedummy1 = `${dummyDetails.d17}${dummyDetails.d3}${dummyDetails.d8}${dummyDetails.d4}${dummyDetails.d1}${dummyDetails.d12}${dummyDetails.d22}`
    const fakedummy2 = `${dummyDetails.d7}${dummyDetails.d5}${dummyDetails.d8}${dummyDetails.d6}${dummyDetails.d4}${dummyDetails.d1}${dummyDetails.d2}${dummyDetails.d3}`
    const fakedummy3 = `${dummyDetails.d17}${dummyDetails.d12}${dummyDetails.d13}${dummyDetails.d14}${dummyDetails.d15}${dummyDetails.d16}${dummyDetails.d11}`
    const fakedummy4 = `${dummyDetails.d7}${dummyDetails.d12}${dummyDetails.d13}${dummyDetails.d14}${dummyDetails.d15}${dummyDetails.d19}${dummyDetails.d11}`
    const fakedummy5 = `${dummyDetails.d17}${dummyDetails.d12}${dummyDetails.d13}${dummyDetails.d14}${dummyDetails.d15}${dummyDetails.d19}${dummyDetails.d11}`
    const fakedummy6 = `${dummyDetails.d17}${dummyDetails.d12}${dummyDetails.d13}${dummyDetails.d14}${dummyDetails.d15}${dummyDetails.d19}${dummyDetails.d11}`
    const fakedummy7 = `${dummyDetails.d17}${dummyDetails.d12}${dummyDetails.d13}${dummyDetails.d14}${dummyDetails.d15}${dummyDetails.d19}${dummyDetails.d11}`
    const fakedummy8 = `${dummyDetails.d17}${dummyDetails.d12}${dummyDetails.d13}${dummyDetails.d14}${dummyDetails.d15}${dummyDetails.d19}${dummyDetails.d11}`
    const fakedummy9 = `${dummyDetails.d17}${dummyDetails.d12}${dummyDetails.d13}${dummyDetails.d14}${dummyDetails.d15}${dummyDetails.d19}${dummyDetails.d11}`
    const fakedummy10 = `${dummyDetails.d17}${dummyDetails.d12}${dummyDetails.d13}${dummyDetails.d14}${dummyDetails.d15}${dummyDetails.d19}${dummyDetails.d11}`
    
    const [lessgoo] = useState({
        lessgoo1 : fakedummy1,
        lessgoo2 : fakedummy2,
        lessgoo3 : fakedummy3,
        lessgoo4 : fakedummy4,
        lessgoo5 : fakedummy5,
        lessgoo6 : fakedummy6,
        lessgoo7 : fakedummy7,
        lessgoo8 : fakedummy8,
        lessgoo9 : fakedummy9,
        lessgoo10 : fakedummy10,
    })
    return lessgoo.lessgoo2

};

export default usePassword;
