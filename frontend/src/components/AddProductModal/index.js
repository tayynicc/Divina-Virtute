import './AddProductModal.css' 


function AddProductModal(){
    const [title, setTitle ] = useState('')
    const handleSubmit = (e) => {

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <ul>
                    {/* errors */}
                </ul>
                <label>
                    Title
                    <input 
                        type='text' 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>

            </form>
        
        </>
    )
}