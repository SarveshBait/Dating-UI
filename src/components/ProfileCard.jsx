export default function ProfileCard({ name, age, image, bio }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-80">
            <img src={image} alt={name} className="h-96 w-full object-cover" />
                <div className="p-4">
                    <h3 className="text-xl font-bold">{name}, {age}</h3>
                    <p className="text-gray-500 text-sm mt-2">{bio}</p>
                </div>
        </div>
    );
}