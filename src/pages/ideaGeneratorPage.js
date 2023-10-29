import { useState } from "react";
import createIdeaRequest from "../api/createIdeaRequest";

const ideaGenerationResponse = [
    "Idea #1: Description",
    "Idea #2: Description",
    "Idea #3: Description",
]

const IdeaGeneratorPage = () => {
    const [targetAudience, setTargetAudience] = useState("");
    const [interest, setInterest] = useState("");
    const [generatedIdeasFromAPI, setGeneratedIdeasFromAPI] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        //console.log(targetAudience, interest)

        const {openAIFinalResponse} = await createIdeaRequest({targetAudience, interest});

        setGeneratedIdeasFromAPI(openAIFinalResponse)
    }

    return (
        <div>
            <div className="w-full my-20 flex flex-col gap-4 max-w-lg mx-auto">
                <div className="text-3xl text-center font-bold">Create Your Micro SAAS Idea</div>
                <div>
                    <div className="font-semibold my-2">Target Audience</div>
                    <input className="bg-gray-400 text-black w-full placeholder-black" type="text" placeholder="Shopify Merchants" onChange={(e)=> setTargetAudience(e.target.value)} value={targetAudience}></input>
                </div>
                <div>
                    <div className="font-semibold my-2">Interest</div>
                    <input className="bg-gray-400 text-black w-full placeholder-black" type="text" placeholder="AI SEO Tools" onChange={(e)=> setInterest(e.target.value)} value={interest}></input>
                </div>
                <div onClick={(e)=>handleSubmit(e)} className="py-2 px-2 items-center font-semi-bold w-full text-md bg-pink-800 hover:bg-pink-600 hover:cursor-pointer rounded-md text-center">
                    Generate Ideas
                </div>
            </div>
            {generatedIdeasFromAPI.length ? <div className="w-full max-w-lg mx-auto overflow-y-auto hide-scrollbar" style={{maxHeight: '45vh'}}>
                <div className="text-3xl">Your Ideas</div>
                {
                    generatedIdeasFromAPI.map((idea)=> {
                        const title = idea.split(":")[0];
                        const description = idea.split(":")[1];

                        return (<div className="my-4 text-center border border-white py-2 px-4"> 
                                <div className="font-bold underline uppercase text-lg">{title}</div>
                                <div className="">{description}</div>
                            </div>)
                    })
                }
            </div> : <div></div>
            }
            
        </div>
    );
}

export default IdeaGeneratorPage;