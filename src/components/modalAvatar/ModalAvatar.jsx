import { useState } from 'react'

function ModalAvatar() {
    const [avatar, setAvatar] = useState(null);

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        setAvatar(file);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label className='mb-2'>
                    <p className='font-sans font-normal mb-2 mt-2'>
                        Выберите аватар:
                    </p>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarChange}
                        className='hidden'
                    />
                    <div className='flex gap-6'>
                    <p className='w-fit p-2 font-sans text-black border  border rounded-2xl mb-3'>
                        Choise Avatar now
                    </p>
                    <p className='w-fit p-2 font-sans '>
                        cancel
                    </p>
                    </div>
                </label>

                <button type="submit">Загрузить</button>
            </form>

            {avatar && (
                <div>
                    <p className='mb-3'>Выбранная аватарка:</p>
                    <img
                        src={URL.createObjectURL(avatar)}
                        alt="Выбранная аватарка"
                        style={{ maxWidth: '150px', maxHeight: '150px', borderRadius: '30px'}}
                    />
                </div>
            )}
        </div>
    )
}

export default ModalAvatar