import "../../setPublic/addNewOffertPannel.scss"

const AddNewOffertPannel = () => {
    return (<>
    <div className="addNewPannel">
        <div className="pannel">
            <div className="pannelTop">
                <div className="left">
                    <input type="text" className="title" placeholder="Title" />
                    <textarea type="text" className="desc" placeholder="Description" />
                    <input type="number" className="price" placeholder="Price" />
                </div>
                <div className="right">Add Photo +</div>
            </div>
            <div className="pannelBottom">
                <div className="createButton red">Cancel</div>
                <div className="createButton">Finish</div>
            </div>
        </div>
    </div>
    </>)
}

export default AddNewOffertPannel