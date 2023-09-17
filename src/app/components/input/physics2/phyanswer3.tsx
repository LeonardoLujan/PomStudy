import {useState} from 'react';



export default function PhyAnswer3() {
    const [attempts, setAttempts] = useState<number>(0);

    function handleClick() {
        setAttempts(attempts + 1);
    }

    function increment() {
        setAttempts(attempts + 1);
    }
    
    return(
    <div className="w-full max-w-x py-4" >
        <div className="justify-center flex">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={increment} autoComplete="off">
                <div className=" mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        You have {3 - attempts} attempts left
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder=""/>
                </div>
            
            <div className="flex justify-center">
                <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleClick} >
                    Submit
                </button>
                
            </div>
            </form>
        </div>

        {attempts > 2 && 
            <div className="justify-center flex text-4xl">
                <div className="border-4 border-red-500 rounded-full p-3 justify-center">
                a) 3.7 x 10&#8311; m/s 
                </div>
            
            </div>
        
        }
    
    </div>)
}