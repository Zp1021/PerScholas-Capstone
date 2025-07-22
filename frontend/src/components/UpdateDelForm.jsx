export default function UpdateDelForm() {
    return (
        <>
            <form className="score-form" >
                <label >
                    Name:
                    <input className="name-text"
                        name="Name"
                        type="text"
                    // onChange={handleChange}
                    // value={form.name}
                    />
                </label>

                <label>
                    Score:
                    <input className="score-text"
                        name="Score"
                        type="number"
                    // onChange={handleChange}
                    // value={form.score}
                    />
                </label>

                <button >Update</button>
                <button >Delete</button>
            </form>
        </>
    )
}