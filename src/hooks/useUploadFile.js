

const handleUpload = async () => {
    if (!file) {
        alert("Please select a file first!");
        return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
        setLoading(true);
        const response = await axios.post("http://localhost:5000/api/files/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        setFileUrl(response.data.fileUrl);
        setLoading(false);
    } catch (error) {
        console.error("File upload failed", error);
        setLoading(false);
    }
}