import React, {useState} from 'react';


function SearchFormCar({searchText,setCarpark}) {
    const [textForSearch, setTextForSearch] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        searchText(textForSearch)
        setCarpark([])

    }


    return (
        <div className="pb-2 text-center">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="where are you going?"
                    className="py-1 px-2 rounded-1-lg mt-2"
                    onChange={(e) => setTextForSearch(e.target.value)}
                />
                <button
                    type="submit"
                    className="highlight my-2 py-1 px-2 text-dark"

                > Search
                </button>
            </form>


        </div>
    );
}

export default SearchFormCar;
