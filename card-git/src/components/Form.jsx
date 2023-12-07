export default function Form({ setUser }) {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            setUser(e.target.elements.user.value);
            e.target.user.value = "";
        }}
        className="flex flex-row gap-4 items-center justify-between bg-white shadow-2xl rounded-lg p-2"
        >
                <div className="flex grow gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <input
                        type="text"
                        name="user"
                        className="w-full bg-white"
                        placeholder="Search Github username..."
                        onFocus={(e) => (e.target.value = "")}
                    />
                </div>
                <button type="submit" className="bg-blue-600 rounded-lg p-2 text-white">Search</button>
    
        </form>
    )
}