import PhotoAlbum from "react-photo-album";
import NavBar from "./navbar";
import Header from "./header";

const photos = [
    {
        src: "main.png",
        width: 800,
        height: 600,
        images: [
            { src: "main.png", width: 400, height: 300 },
            { src: "main.png", width: 200, height: 150 }
        ]
    },
    {
        src: "main.png",
        width: 1600,
        height: 900,
        images: [
            { src: "main.png", width: 800, height: 450 },
            { src: "main.png", width: 400, height: 225 }
        ]
    },
    {
        src: "main.png",
        width: 1600,
        height: 900,
        images: [
            { src: "main.png", width: 800, height: 450 },
            { src: "main.png", width: 400, height: 225 }
        ]
    },
    {
        src: "main.png",
        width: 1600,
        height: 900,
        images: [
            { src: "main.png", width: 800, height: 450 },
            { src: "main.png", width: 400, height: 225 }
        ]
    },
    {
        src: "main.png",
        width: 1600,
        height: 900,
        images: [
            { src: "main.png", width: 800, height: 450 },
            { src: "main.png", width: 400, height: 225 }
        ]
    },
    {
        src: "main.png",
        width: 1600,
        height: 900,
        images: [
            { src: "main.png", width: 800, height: 450 },
            { src: "main.png", width: 400, height: 225 }
        ]
    }
];

export default function Gallery() {
    return (<>
    <Header/>
    <NavBar/>
    <PhotoAlbum layout="rows" photos={photos} />
    </>);
}