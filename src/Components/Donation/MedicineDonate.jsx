import React, { useState, useEffect } from "react";
import Navbar from '../Utility/Navbar';

const MedicineDonate = () => {
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        email: "",
        address: "",
        medicineName: "",
        manufacturer: "",
        expirationDate: "",
        dosageForm: "",
        quantity: "",
        reason: "",
        unopened: "",
        expired: "",
        storageInstructions: "",
    });

    // State to store multiple image files and their previews
    const [images, setImages] = useState([]);
    const [imagePreviews, setImagePreviews] = useState([]);

    // State to store previously uploaded images
    const [uploadedImages, setUploadedImages] = useState([]);

    // Simulate fetching previously uploaded images from a server
    useEffect(() => {
        // Example: fetching images from a server (replace this with actual API call)
        const existingImages = [
            "https://via.placeholder.com/150?text=Uploaded+Image+1",
            "https://via.placeholder.com/150?text=Uploaded+Image+2",
        ];
        setUploadedImages(existingImages);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Function to handle multiple image selection
    const handleImageChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setImages(selectedFiles);

        // Generate and set previews for each selected image
        const previews = selectedFiles.map((file) => URL.createObjectURL(file));
        setImagePreviews(previews);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData, images); // Logs the form data and the selected images
        // Add form data and multiple image submission logic (e.g., via API)
    };

    return (
        <>
            <div className="sticky top-0 z-10 backdrop-blur-[20px]">
                <Navbar />
            </div>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
                    <h1 className="text-2xl font-bold mb-6 text-center">Medicine Donation Form</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Donor Information */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                                placeholder="Your full name"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium">Contact Number</label>
                            <input
                                type="text"
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                                placeholder="Your contact number"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                                placeholder="Your email address"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium">Address</label>
                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                                placeholder="Your address"
                                required
                            />
                        </div>

                        {/* Medicine Information */}
                        <h2 className="text-xl font-semibold mt-8">Medicine Information</h2>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium">Medicine Name</label>
                            <input
                                type="text"
                                name="medicineName"
                                value={formData.medicineName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                                placeholder="Medicine name"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium">Manufacturer</label>
                            <input
                                type="text"
                                name="manufacturer"
                                value={formData.manufacturer}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                                placeholder="Manufacturer"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium">Expiration Date</label>
                            <input
                                type="date"
                                name="expirationDate"
                                value={formData.expirationDate}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium">Dosage Form</label>
                            <select
                                name="dosageForm"
                                value={formData.dosageForm}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                                required
                            >
                                <option value="">Select Dosage Form</option>
                                <option value="Capsule">Capsule</option>
                                <option value="Tablet">Tablet</option>
                                <option value="Liquid">Liquid</option>
                                <option value="Cream/Ointment">Cream/Ointment</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium">Quantity</label>
                            <input
                                type="number"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                                placeholder="Quantity of medicine"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium">Reason for Donation</label>
                            <textarea
                                name="reason"
                                value={formData.reason}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                                placeholder="Reason for donation"
                                required
                            />
                        </div>

                        {/* Medicine Condition */}
                        <h2 className="text-xl font-semibold mt-8">Medicine Condition</h2>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium">Is the medicine unopened?</label>
                            <select
                                name="unopened"
                                value={formData.unopened}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                                required
                            >
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium">Has the medicine expired?</label>
                            <select
                                name="expired"
                                value={formData.expired}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                                required
                            >
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium">Storage Instructions</label>
                            <textarea
                                name="storageInstructions"
                                value={formData.storageInstructions}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                                placeholder="Storage instructions"
                            />
                        </div>

                        {/* Image Upload Section */}
                        <div className="space-y-2 mt-8">
                            <label className="block text-sm font-medium">Upload Images</label>
                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={handleImageChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                            />
                        </div>

                        {/* Displaying previously uploaded images */}
                        <div className="mt-4">
                            <h2 className="text-lg font-semibold">Previously Uploaded Images</h2>
                            <div className="grid grid-cols-2 gap-2 mt-2">
                                {uploadedImages.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Uploaded ${index + 1}`}
                                        className="w-full h-32 object-cover rounded-md border"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Displaying newly selected images */}
                        <div className="mt-4">
                            <h2 className="text-lg font-semibold">Selected Images</h2>
                            <div className="grid grid-cols-2 gap-2 mt-2">
                                {imagePreviews.map((preview, index) => (
                                    <img
                                        key={index}
                                        src={preview}
                                        alt={`Preview ${index + 1}`}
                                        className="w-full h-32 object-cover rounded-md border"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
                        >
                            Submit Donation
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default MedicineDonate;
