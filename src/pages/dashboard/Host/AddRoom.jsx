import { useState } from "react";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import useAuth from "../../../hooks/useAuth";
import { imageUpload } from "../../../api/utils";


const AddRoom = () => {
    const { user } = useAuth()
    const [imagePreview, setImagePreview] = useState()
    const [imageText, setImageTaxt] = useState('Upload image')
    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: null,
        key: 'selection'
    });
    const handleDates = item => {
        setDates(item.selection)
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const form = e.target
        const location = form.location.value
        const category = form.category.value
        const title = form.title.value
        const to = dates.endDate
        const from = dates.startDate
        const price = form.price.value
        const quests = form.total_guest.value
        const bathrooms = form.bathrooms.value
        const description = form.description.value
        const bedrooms = form.badrooms.value
        const image = form.image.files[0]
        const host = {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
        }
        try {
            const image_url = await imageUpload(image)
            const roomData = {
                location, 
                category, 
                title, 
                to, 
                from, 
                price, 
                quests, 
                bathrooms, 
                description, 
                bedrooms, 
                host, 
                image_url
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    const handleImage = image => {
        setImagePreview(URL.createObjectURL(image))
        setImageTaxt(image.name)
    }



    return (

        <AddRoomForm
            dates={dates}
            handleDates={handleDates}
            handleSubmit={handleSubmit}
            setImagePreview={setImagePreview}
            imagePreview={imagePreview}
            handleImage={handleImage}
            imageText={imageText} >
        </AddRoomForm>

    );
};

export default AddRoom;